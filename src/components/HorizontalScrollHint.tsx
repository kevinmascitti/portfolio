import { useEffect, useMemo, useRef, useState } from "react"
import type { ReactNode } from "react"

type Props = {
  className?: string
  children: ReactNode
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  const isLeft = direction === "left"
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={isLeft ? "M14 7l-5 5 5 5" : "M10 7l5 5-5 5"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function HorizontalScrollHint({ className, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [hasOverflow, setHasOverflow] = useState(false)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const scrollByDir = (direction: "left" | "right") => {
    const el = ref.current
    if (!el) return
    const amount = Math.max(220, Math.floor(el.clientWidth * 0.8))
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
  }

  const update = useMemo(
    () => () => {
      const el = ref.current
      if (!el) return

      const overflow = el.scrollWidth > el.clientWidth + 1
      setHasOverflow(overflow)

      if (!overflow) {
        setCanLeft(false)
        setCanRight(false)
        return
      }

      const left = el.scrollLeft > 1
      const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
      setCanLeft(left)
      setCanRight(right)
    },
    []
  )

  useEffect(() => {
    update()

    const el = ref.current
    if (!el) return

    const onScroll = () => update()
    el.addEventListener("scroll", onScroll, { passive: true })

    const ro = new ResizeObserver(() => update())
    ro.observe(el)

    return () => {
      el.removeEventListener("scroll", onScroll)
      ro.disconnect()
    }
  }, [update])

  return (
    <div className="relative max-w-full">
      <div ref={ref} className={className}>
        {children}
      </div>

      {hasOverflow && canLeft ? (
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="button"
            aria-label="Scorri a sinistra"
            onClick={() => scrollByDir("left")}
            className="scroll-arrow ui-icon border backdrop-blur-sm shadow-sm"
            style={{
              borderRadius: 9999,
              width: 44,
              height: 44,
              padding: 0,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Arrow direction="left" />
          </button>
        </div>
      ) : null}

      {hasOverflow && canRight ? (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            type="button"
            aria-label="Scorri a destra"
            onClick={() => scrollByDir("right")}
            className="scroll-arrow ui-icon border backdrop-blur-sm shadow-sm"
            style={{
              borderRadius: 9999,
              width: 44,
              height: 44,
              padding: 0,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Arrow direction="right" />
          </button>
        </div>
      ) : null}
    </div>
  )
}

