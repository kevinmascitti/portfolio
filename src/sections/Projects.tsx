import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import Reveal from "../components/Reveal"

export default function Projects() {

  return (

    <section id="projects" className="py-32">

      <Reveal>

        <div className="flex justify-between items-end mb-12">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Selected Works
          </h2>

          <span className="text-sm sm:text-base text-gray-500">
            2021 — 2024
          </span>

        </div>

      </Reveal>

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project) => (

          <Reveal key={project.title}>
            <ProjectCard project={project}/>
          </Reveal>

        ))}

      </div>

    </section>

  )
}