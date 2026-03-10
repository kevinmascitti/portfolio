import Hero from "./components/Hero"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import CustomCursor from "./components/CustomCursor"
import TopBar from "./components/TopBar"

export default function App() {

  return (

    <>
      <TopBar />

      <main className="w-full px-6 sm:px-10 pt-24">

        <CustomCursor />

        <Hero />

        <Projects />

        <Experience />

        <Contact />

      </main>
    </>

  )
}