import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n, type Lang } from "../i18n"

type Theme = "light" | "dark"

function SunIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="block">
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="block">
      <g transform="translate(-1.0 2.0)">
        <path
          d="M21 13.2A7.8 7.8 0 0 1 10.8 3a7.2 7.2 0 1 0 10.2 10.2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { lang, setLang, t } = useI18n()
  const [showLangMenu, setShowLangMenu] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const onScroll = () => {
      const y = window.scrollY
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(() => {
          setScrolled(y > 8)

          const delta = y - lastY
          const goingDown = delta > 4
          const goingUp = delta < -4

          // Always show near top to avoid flicker.
          if (y < 16) {
            setIsVisible(true)
          } else if (goingDown) {
            setIsVisible(false)
          } else if (goingUp) {
            setIsVisible(true)
          }

          lastY = y
          ticking = false
        })
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-40 transition-transform duration-300",
        isMobile ? "translate-y-0" : isVisible ? "translate-y-0" : "-translate-y-full",
        scrolled || isMobile
          ? theme === "dark"
            ? "bg-black/40 backdrop-blur-md border-b border-white/10"
            : "bg-white/70 backdrop-blur-md border-b border-black/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="px-6 sm:px-10 py-6">
        <div className="relative flex items-center gap-6 text-xs sm:text-sm tracking-wide">
          <a
            href="mailto:kevinmascitti@gmail.com"
            className="hidden sm:inline text-[color:var(--color-secondary)] visited:text-[color:var(--color-secondary)] hover:text-[color:var(--color-secondary-hover)] transition-colors"
          >
            kevinmascitti@gmail.com
          </a>

          <div className="flex-1 hidden sm:block" aria-hidden />

          <div className="flex-1 min-w-0 flex items-start gap-3 pr-14 sm:pr-0 sm:flex-initial sm:min-w-0">
            <span className={["shrink-0", theme === "dark" ? "text-white/50" : "text-black/50"].join(" ")}>↳</span>
            <div className="leading-tight uppercase min-w-0">
              <div className={theme === "dark" ? "text-white" : "text-black"}>{t("topbar.role")}</div>
              <div className={theme === "dark" ? "text-white/50" : "text-black/50"}>{t("topbar.location")}</div>
            </div>
          </div>

          <div className="flex-1 hidden sm:block" aria-hidden />

          <div className="flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0">
            <div className="relative">
              <button
                type="button"
                aria-label={
                  lang === "en"
                    ? "Change language"
                    : lang === "it"
                    ? "Cambia lingua"
                    : "Changer de langue"
                }
                onClick={() => setShowLangMenu((open) => !open)}
                className="theme-toggle ui-icon overflow-hidden border border-black/20 bg-white text-black shadow-sm shrink-0"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9999,
                  padding: 0,
                  display: "grid",
                  placeItems: "center",
                  lineHeight: 0,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                {lang.toUpperCase()}
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <div className="pointer-events-none absolute inset-0">
                    {(["en", "it", "fr"] as Lang[])
                      .filter((code) => code !== lang)
                      .map((code, index) => {
                        // Palline sulla circonferenza: centro pallina = centro bottone + (radius * cos/sin)
                        const size = 30
                        const radius = 40
                        const baseAngle = 150
                        const offset = 30
                        const angle = index === 0 ? baseAngle - offset : baseAngle + offset
                        const rad = (angle * Math.PI) / 180
                        const x = Math.cos(rad) * radius - size / 2
                        const y = Math.sin(rad) * radius - size / 2

                        return (
                          <motion.button
                            key={code}
                            type="button"
                            onClick={() => {
                              setLang(code)
                              setShowLangMenu(false)
                            }}
                            className="ui-icon overflow-hidden border border-black/20 bg-white text-black shadow-sm shrink-0 pointer-events-auto"
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: 9999,
                              padding: 0,
                              display: "grid",
                              placeItems: "center",
                              lineHeight: 0,
                              fontSize: 10,
                              fontWeight: 600,
                              letterSpacing: 1,
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                            }}
                            initial={{ opacity: 0, scale: 0.6, x: 0, y: 0 }}
                            animate={{ opacity: 1, scale: 1, x, y }}
                            exit={{ opacity: 0, scale: 0.6, x: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                          >
                            {code.toUpperCase()}
                          </motion.button>
                        )
                      })}
                  </div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              aria-label={theme === "dark" ? "Passa al tema chiaro" : "Passa al tema scuro"}
              onClick={() => setTheme((tMode) => (tMode === "dark" ? "light" : "dark"))}
              className="theme-toggle ui-icon overflow-hidden border border-black/20 bg-white text-black shadow-sm shrink-0"
              style={{
                width: 40,
                height: 40,
                borderRadius: 9999,
                padding: 0,
                display: "grid",
                placeItems: "center",
                lineHeight: 0,
              }}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

