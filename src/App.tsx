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

function RedirectToLang() {
  const stored = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null
  const to = stored === "it" || stored === "fr" ? `/${stored}` : "/en"
  return <Navigate to={to} replace />
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
              <main className="w-full px-6 sm:px-10 pt-24">
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Education />
                <Contact />
              </main>
            </LangSync>
          }
        />
      </Routes>
    </>
  )
}