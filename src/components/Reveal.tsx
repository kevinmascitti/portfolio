import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  offsetY?: number
}

export default function Reveal({ children, offsetY = 60 }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0, y: offsetY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}