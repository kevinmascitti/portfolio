import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import type { Tag } from "./FallingTags"

type Props = {
  tags: Tag[]
  className?: string
}

const ROWS = 4
const STANDARD_DURATION_SEC = 28
const INERTIA_FRICTION = 0.94
const VELOCITY_THRESHOLD = 0.15

function TagPill({ tag }: { tag: Tag }) {
  const isCircle = tag.variant === "circle"
  const base = isCircle
    ? "falling-tag falling-tag-circle h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black text-white flex items-center justify-center shrink-0"
    : "falling-tag px-4 py-2 rounded-full border border-black/20 bg-white text-black shrink-0"
  const circleText =
    tag.label.length >= 3 ? "text-sm" : tag.label.length === 2 ? "text-lg" : "text-xl"
  const inner = isCircle ? (
    <span className={`${circleText} leading-none`}>{tag.label}</span>
  ) : (
    <span className="uppercase tracking-wide text-xs whitespace-nowrap">{tag.label}</span>
  )
  return <div className={`${base} shadow-sm`}>{inner}</div>
}

type RowState = "auto" | "drag" | "inertia"

function MarqueeRow({
  rowTags,
  direction,
}: {
  rowTags: Tag[]
  direction: 1 | -1
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef(0)
  const modeRef = useRef<RowState>("auto")
  const velocityRef = useRef(0)
  const contentWidthRef = useRef(0)
  const touchStartXRef = useRef(0)
  const touchStartYRef = useRef(0)
  const touchStartPosRef = useRef(0)
  const lastTouchXRef = useRef(0)
  const lastTouchTimeRef = useRef(0)
  const dragIsHorizontalRef = useRef<boolean | null>(null)
  const rafRef = useRef<number>(0)
  const lastTRef = useRef(performance.now())
  const [, setTick] = useState(0)

  const updateTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${positionRef.current}px)`
    }
  }, [])

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return
    contentWidthRef.current = track.scrollWidth / 2
  }, [rowTags])

  useEffect(() => {
    const raf = () => {
      const now = performance.now()
      const dt = Math.min((now - lastTRef.current) / 1000, 0.1)
      lastTRef.current = now

      const cw = contentWidthRef.current
      if (cw <= 0) {
        rafRef.current = requestAnimationFrame(raf)
        return
      }

      const speed = cw / STANDARD_DURATION_SEC

      if (modeRef.current === "auto") {
        positionRef.current -= direction * speed * dt
        if (positionRef.current < -cw) positionRef.current += cw
        if (positionRef.current > 0) positionRef.current -= cw
      } else if (modeRef.current === "inertia") {
        const v = velocityRef.current
        positionRef.current += v * dt
        velocityRef.current = v * INERTIA_FRICTION
        if (Math.abs(velocityRef.current) < VELOCITY_THRESHOLD) {
          modeRef.current = "auto"
          velocityRef.current = 0
        }
        if (positionRef.current < -cw) positionRef.current += cw
        if (positionRef.current > 0) positionRef.current -= cw
      }

      updateTransform()
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)
    return () => cancelAnimationFrame(rafRef.current)
  }, [direction, updateTransform])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    modeRef.current = "drag"
    touchStartXRef.current = e.touches[0].clientX
    touchStartYRef.current = e.touches[0].clientY
    touchStartPosRef.current = positionRef.current
    lastTouchXRef.current = e.touches[0].clientX
    lastTouchTimeRef.current = performance.now()
    dragIsHorizontalRef.current = null
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (modeRef.current !== "drag") return
    const x = e.touches[0].clientX
    const y = e.touches[0].clientY
    const dx = Math.abs(x - touchStartXRef.current)
    const dy = Math.abs(y - touchStartYRef.current)
    if (dragIsHorizontalRef.current === null && (dx > 8 || dy > 8)) {
      dragIsHorizontalRef.current = dx >= dy
    }
    if (dragIsHorizontalRef.current === true) {
      e.preventDefault()
    }
    positionRef.current = touchStartPosRef.current + (x - touchStartXRef.current)
    lastTouchXRef.current = x
    lastTouchTimeRef.current = performance.now()
    updateTransform()
  }, [updateTransform])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (modeRef.current !== "drag") return
    const now = performance.now()
    const dt = (now - lastTouchTimeRef.current) / 1000
    const dx = e.changedTouches[0].clientX - lastTouchXRef.current
    const velocity = dt > 0 ? dx / dt : 0
    velocityRef.current = velocity
    modeRef.current = "inertia"
    setTick((n) => n + 1)
  }, [])

  return (
    <div
      className="marquee-row overflow-hidden touch-pan-y select-none"
      style={{ touchAction: "pan-y" }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <div
        ref={trackRef}
        className="marquee-track marquee-track-js flex gap-2 w-max"
        style={{ willChange: "transform" }}
      >
        {[...rowTags, ...rowTags].map((tag, i) => (
          <TagPill key={`${tag.id}-${i}`} tag={tag} />
        ))}
      </div>
    </div>
  )
}

export default function FallingTagsMarquee({ tags, className }: Props) {
  const byRow: Tag[][] = Array.from({ length: ROWS }, () => [])
  tags.forEach((tag, i) => byRow[i % ROWS].push(tag))

  return (
    <div
      className={`falling-tags-marquee relative w-full h-full flex flex-col justify-center gap-1 py-2 ${className ?? ""}`}
      aria-hidden
    >
      {byRow.map((rowTags, rowIndex) => (
        <MarqueeRow
          key={rowIndex}
          rowTags={rowTags}
          direction={rowIndex % 2 === 1 ? -1 : 1}
        />
      ))}
    </div>
  )
}
