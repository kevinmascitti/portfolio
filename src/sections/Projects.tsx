import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import Reveal from "../components/Reveal"
import { useI18n } from "../i18n"

export default function Projects() {
  const { t } = useI18n()

  return (

    <section id="projects" className="py-32">

      <Reveal>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
          {t("projects.title")}
        </h2>

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