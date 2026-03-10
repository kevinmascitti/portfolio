import { useEffect, useState } from "react"

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-40",
        scrolled ? "bg-white/70 backdrop-blur-md border-b border-black/10" : "bg-transparent",
      ].join(" ")}
    >
      <div className="px-6 sm:px-10 py-6">
        <div className="flex items-center gap-6 text-xs sm:text-sm tracking-wide">
          <a
            href="mailto:kevinmascitti@gmail.com"
            className="text-[color:var(--color-secondary)] visited:text-[color:var(--color-secondary)] hover:text-[color:var(--color-secondary-hover)] transition-colors"
          >
            kevinmascitti@gmail.com
          </a>

          <div className="flex-1" />

          <div className="flex items-start gap-3 text-black">
            <span className="text-black/50">↳</span>
            <div className="leading-tight">
              <div className="uppercase">Frontend and 3d developer</div>
              <div className="uppercase text-black/50">Based in Turin, Italy</div>
            </div>
          </div>

          <div className="flex-1" />

          <button
            type="button"
            aria-label="Toggle"
            className="h-8 w-8 rounded-full border border-black/20 bg-white overflow-hidden"
          >
            <span className="block h-full w-1/2 bg-black" />
          </button>
        </div>
      </div>
    </header>
  )
}

