import { useEffect, useState } from "react"

const CLICKABLE_SELECTOR =
  'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function isOverClickable(target: EventTarget | null): boolean {
  if (!target || !(target instanceof Element)) return false
  return !!target.closest(CLICKABLE_SELECTOR)
}

function isOverFallingTag(x: number, y: number): boolean {
  const tags = document.querySelectorAll(".falling-tag")
  for (const el of tags) {
    const rect = el.getBoundingClientRect()
    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) return true
  }
  return false
}

export default function CustomCursor() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [overClickable, setOverClickable] = useState(false)
  const [overFallingTag, setOverFallingTag] = useState(false)
  const hover = overClickable || overFallingTag

  useEffect(() => {
    if (typeof window === "undefined") return

    const mq = window.matchMedia("(pointer: fine)")
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener("change", update)

    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor")
      setPos(null)
      setOverClickable(false)
      setOverFallingTag(false)
      return
    }

    const move = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      setPos({ x, y })
      setOverFallingTag(isOverFallingTag(x, y))
    }
    const over = (e: MouseEvent) => setOverClickable(isOverClickable(e.target))
    const out = (e: MouseEvent) => {
      if (!isOverClickable(e.relatedTarget)) setOverClickable(false)
    }

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseover", over)
    document.addEventListener("mouseout", out)
    document.documentElement.classList.add("custom-cursor")

    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseover", over)
      document.removeEventListener("mouseout", out)
      document.documentElement.classList.remove("custom-cursor")
    }
  }, [enabled])

  if (!enabled || !pos) return null

  return (
    <div
      className={`custom-cursor-ring fixed w-6 h-6 border rounded-full pointer-events-none z-50 will-change-transform ${
        hover ? "custom-cursor-ring--hover" : "border border-black"
      }`}
      style={{
        left: pos.x,
        top: pos.y,
        transform: hover ? "translate(-50%, -50%) scale(1.25)" : "translate(-50%, -50%) scale(1)",
      }}
    />
  )
}