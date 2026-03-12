import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [enabled, setEnabled] = useState(false)

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
      return
    }

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })

    window.addEventListener("mousemove", move)
    document.documentElement.classList.add("custom-cursor")

    return () => {
      window.removeEventListener("mousemove", move)
      document.documentElement.classList.remove("custom-cursor")
    }
  }, [enabled])

  if (!enabled || !pos) return null

  return (
    <div
      className="custom-cursor-ring fixed w-6 h-6 border border-black rounded-full pointer-events-none z-50 will-change-transform"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}