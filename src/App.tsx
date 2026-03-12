import { Route, Routes } from "react-router-dom"
import Hero from "./components/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import CustomCursor from "./components/CustomCursor"
import TopBar from "./components/TopBar"
import ProjectDetail from "./pages/ProjectDetail"

export default function App() {

  return (

    <>
      <TopBar />

      <CustomCursor />

      <Routes>
        <Route
          path="/"
          element={
            <main className="w-full px-6 sm:px-10 pt-24">
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Education />
              <Contact />
            </main>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>

  )
}