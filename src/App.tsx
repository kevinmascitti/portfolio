import { useEffect } from "react"
import { Navigate, Route, Routes, useParams } from "react-router-dom"
import Hero from "./components/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import CustomCursor from "./components/CustomCursor"
import TopBar from "./components/TopBar"
import ProjectDetail from "./pages/ProjectDetail"
import { useI18n, type Lang } from "./i18n"

const LANGS: Lang[] = ["en", "it", "fr"]
const HOME_SCROLL_KEY = "portfolio_home_scroll"

function RedirectToLang() {
  return <Navigate to="/en" replace />
}

function LangSync({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>()
  const { setLang } = useI18n()

  useEffect(() => {
    if (lang && LANGS.includes(lang as Lang)) setLang(lang as Lang)
  }, [lang, setLang])

  if (!lang || !LANGS.includes(lang as Lang)) return <Navigate to="/en" replace />
  return <>{children}</>
}

function HomeScrollRestore({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const raw = sessionStorage.getItem(HOME_SCROLL_KEY)
    if (raw !== null) {
      sessionStorage.removeItem(HOME_SCROLL_KEY)
      const y = parseInt(raw, 10)
      if (!Number.isNaN(y)) requestAnimationFrame(() => window.scrollTo(0, y))
    }
  }, [])
  return <>{children}</>
}

export default function App() {
  return (
    <>
      <TopBar />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<RedirectToLang />} />
        <Route
          path="/:lang/projects/:slug"
          element={
            <LangSync>
              <ProjectDetail />
            </LangSync>
          }
        />
        <Route
          path="/:lang"
          element={
            <LangSync>
              <HomeScrollRestore>
                <main className="w-full px-6 sm:px-10 pt-24">
                  <Hero />
                  <About />
                  <Projects />
                  <Experience />
                  <Education />
                  <Contact />
                </main>
              </HomeScrollRestore>
            </LangSync>
          }
        />
      </Routes>
    </>
  )
}