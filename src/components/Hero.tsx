import { motion } from "framer-motion"
import FallingTags, { type Tag } from "./FallingTags"

export default function Hero() {
  const tags: Tag[] = [
    { id: "tag-software", label: "Software Engineer" },
    { id: "tag-3d", label: "3D Developer" },
    { id: "tag-ux", label: "UX Design" },
    { id: "tag-ui", label: "UI Design" },
    { id: "tag-frontend", label: "Frontend Architecture" },
    { id: "tag-react", label: "React" },
    { id: "tag-typescript", label: "TypeScript" },
    { id: "tag-js", label: "JavaScript" },
    { id: "tag-html", label: "HTML" },
    { id: "tag-css", label: "CSS" },
    { id: "tag-unity", label: "Unity" },
    { id: "tag-unreal", label: "Unreal Engine" },
    { id: "tag-xr", label: "XR Experiences" },
    { id: "tag-ar", label: "AR" },
    { id: "tag-vr", label: "VR" },
    { id: "tag-game-design", label: "Game Design" },
    { id: "tag-git", label: "Git Workflows" },
		{ id: "tag-agile", label: "Agile Methodologies" },
		{ id: "tag-scrum", label: "Scrum" },
		
    { id: "tag-circle-code", label: "</>", variant: "circle" },
    { id: "tag-circle-braces", label: "{}", variant: "circle" },
    { id: "tag-circle-cube", label: "□", variant: "circle" },
    { id: "tag-circle-down", label: "↓", variant: "circle" },
		{ id: "tag-cross", label: "✕", variant: "circle" },
		{ id: "tag-circle", label: "○", variant: "circle" },
		{ id: "tag-triangle", label: "△", variant: "circle" },
  ]

  return (

    <section className="pt-32 pb-24 relative">
      <FallingTags
        tags={tags}
        className="absolute left-0 right-0 top-0 h-[420px] sm:h-[480px] md:h-[560px] lg:h-[300px] z-20 pointer-events-auto"
      />

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]"
      >
        KEVIN
        <br />
        MASCITTI
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 grid grid-cols-2 mt-16 gap-20"
      >

        <p className="text-lg sm:text-xl max-w-md">
          Hi, I'm Kevin, a software engineer
          that loves to build modern apps.
        </p>

        <p className="text-lg sm:text-xl text-gray-600 max-w-md">
          I create scalable web applications
          using React, TypeScript and modern
          cloud technologies.
        </p>

      </motion.div>

    </section>

  )
}