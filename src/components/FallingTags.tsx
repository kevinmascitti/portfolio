import { useEffect, useLayoutEffect, useMemo, useRef } from "react"
import Matter from "matter-js"

export type Tag = {
  id: string
  label: string
  variant?: "pill" | "circle"
}

type Props = {
  tags: Tag[]
  className?: string
}

export default function FallingTags({ tags, className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const elRefs = useRef<(HTMLDivElement | null)[]>([])
  const engineRef = useRef<Matter.Engine | null>(null)
  const bodiesRef = useRef<Matter.Body[]>([])
  const wallsRef = useRef<Matter.Body[]>([])
  const rafRef = useRef<number>(0)
  const roRef = useRef<ResizeObserver | null>(null)

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  }, [])

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    for (let i = 0; i < tags.length; i++) {
      const el = elRefs.current[i]
      if (el) el.style.visibility = "hidden"
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (reducedMotion) return

    const engine = Matter.Engine.create({
      enableSleeping: true,
      gravity: { x: 0, y: 1 },
    })
    engineRef.current = engine

    const buildWorld = () => {
      const rect = container.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      const wall = 200
      const pad = 16

      // Reset composite
      Matter.Composite.clear(engine.world, false)
      bodiesRef.current = []
      wallsRef.current = []

      // Walls
      const walls: Matter.Body[] = [
        Matter.Bodies.rectangle(w / 2, h + wall / 2, w + wall * 2, wall, { isStatic: true }),
        Matter.Bodies.rectangle(-wall / 2, h / 2, wall, h + wall * 2, { isStatic: true }),
        Matter.Bodies.rectangle(w + wall / 2, h / 2, wall, h + wall * 2, { isStatic: true }),
      ]
      wallsRef.current = walls
      Matter.Composite.add(engine.world, walls)

      // Bodies from children sizes
      for (let i = 0; i < tags.length; i++) {
        const el = elRefs.current[i]
        if (!el) continue

        const bw = el.offsetWidth || 120
        const bh = el.offsetHeight || 44

        const x = pad + Math.random() * Math.max(1, w - bw - pad * 2)
        const y = -40 - Math.random() * 140

        const body = Matter.Bodies.rectangle(x + bw / 2, y + bh / 2, bw, bh, {
          restitution: 0.25,
          friction: 0.1,
          frictionAir: 0.02,
        })

        // Small random initial velocity/rotation
        Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 1 })
        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.04)

        bodiesRef.current.push(body)
        Matter.Composite.add(engine.world, body)
      }

      // Drag with mouse/touch
      const mouse = Matter.Mouse.create(container)
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2 },
      })
      Matter.Composite.add(engine.world, mouseConstraint)

      // Allow page scroll (wheel/touch) unless actually dragging a body.
      // matter-js attaches event listeners that may call preventDefault().
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handlers: any = mouseConstraint.mouse
      const el = mouseConstraint.mouse.element

      const remove = (eventName: string, fn: unknown) => {
        if (typeof fn === "function") el.removeEventListener(eventName, fn as EventListener)
      }

      // Remove wheel listeners (trackpad/mouse).
      remove("wheel", handlers.wheel)
      remove("wheel", handlers.mousewheel)
      remove("mousewheel", handlers.mousewheel)
      remove("mousewheel", handlers.wheel)
      remove("DOMMouseScroll", handlers.DOMMouseScroll)

      // Remove touch listeners; we re-add conditional ones below.
      remove("touchstart", handlers.touchstart)
      remove("touchmove", handlers.touchmove)
      remove("touchend", handlers.touchend)

      // matter-js types don't expose these handlers, but they exist at runtime.
      const m = mouseConstraint.mouse as unknown as {
        element: HTMLElement
        mousedown: (e: Event) => void
        mousemove: (e: Event) => void
        mouseup: (e: Event) => void
      }

      m.element.addEventListener("touchstart", m.mousedown, {
        passive: true,
      })
      m.element.addEventListener("touchmove", (e) => {
        if (mouseConstraint.body) m.mousemove(e)
      })
      m.element.addEventListener("touchend", (e) => {
        if (mouseConstraint.body) m.mouseup(e)
      })
      container.addEventListener("mouseleave", (event) => {
        m.mouseup(event)
      })

      // Reveal elements after bodies are created.
      for (let i = 0; i < tags.length; i++) {
        const el = elRefs.current[i]
        if (el) el.style.visibility = "visible"
      }
    }

    buildWorld()

    let last = performance.now()
    const update = (now: number) => {
      const delta = Math.min(33, now - last)
      last = now

      Matter.Engine.update(engine, delta)

      const bodies = bodiesRef.current
      for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i]
        const el = elRefs.current[i]
        if (!el) continue

        const { x, y } = body.position
        el.style.left = `${x}px`
        el.style.top = `${y}px`
        el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`
      }

      rafRef.current = requestAnimationFrame(update)
    }

    rafRef.current = requestAnimationFrame(update)

    roRef.current = new ResizeObserver(() => {
      // Rebuild on resize to keep walls accurate.
      buildWorld()
    })
    roRef.current.observe(container)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      roRef.current?.disconnect()
      roRef.current = null

      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false)
        Matter.Engine.clear(engineRef.current)
      }
      engineRef.current = null
      bodiesRef.current = []
      wallsRef.current = []
    }
  }, [reducedMotion])

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-y-visible max-w-full ${className ?? ""}`}
      style={{ touchAction: "pan-y", overflowY: "visible" }}
    >
      {tags.map((t, i) => {
        const base =
          t.variant === "circle"
            ? "falling-tag-circle h-14 w-14 rounded-full bg-black text-white flex items-center justify-center"
            : "px-6 py-3 rounded-full border border-black/20 bg-white text-black"

        const circleText =
          t.label.length >= 3 ? "text-lg" : t.label.length === 2 ? "text-2xl" : "text-3xl"

        const inner =
          t.variant === "circle" ? (
            <span className={`${circleText} leading-none`}>{t.label}</span>
          ) : (
            <span className="uppercase tracking-wide text-sm whitespace-nowrap">{t.label}</span>
          )

        return (
          <div
            key={t.id}
            ref={(node) => {
              elRefs.current[i] = node
            }}
            className={`absolute left-0 top-0 select-none pointer-events-none ${base} shadow-sm`}
            style={{ transform: "translate3d(-9999px,-9999px,0)", visibility: "hidden" }}
          >
            {inner}
          </div>
        )
      })}
    </div>
  )
}

