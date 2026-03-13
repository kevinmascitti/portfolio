import { motion } from "framer-motion"
import type { Project } from "../data/projects"
import { Link } from "react-router-dom"
import { useI18n } from "../i18n"

type Props = {
  project: Project
  langPrefix: string
}

export default function ProjectCard({ project, langPrefix }: Props) {
  const { t } = useI18n()
  return (
    <Link to={`${langPrefix}/projects/${project.slug}`} className="block">
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.3 }}
        className="relative h-[420px] rounded-xl overflow-hidden cursor-pointer"
      >
        <motion.img
          src={project.image}
          className="absolute w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          alt={t(project.titleKey)}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {t(project.titleKey)}
          </h3>
          <p className="text-sm sm:text-base opacity-80">
            {t(project.categoryKey)} — {project.year}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}