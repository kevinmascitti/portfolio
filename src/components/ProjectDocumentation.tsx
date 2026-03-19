import { motion } from "framer-motion"
import { documentation } from "../data/documentation"
import { useI18n, type Lang } from "../i18n"

type Props = {
  documentationKey: string
}

function localize(value: unknown, lang: Lang): string {
  if (value == null) return ""
  if (typeof value === "string") return value

  if (typeof value === "object") {
    const record = value as Record<string, unknown>
    const byLang = record[lang]
    if (typeof byLang === "string") return byLang

    const byEn = record.en
    if (typeof byEn === "string") return byEn
  }

  return ""
}

export default function ProjectDocumentation({ documentationKey }: Props) {
  const { t, lang } = useI18n()
  const doc = documentation[documentationKey]

  if (!doc) return null

  const getLocalizedEn = (value: unknown): string => {
    if (typeof value === "string") return value
    if (value && typeof value === "object" && "en" in value) {
      const maybe = (value as Record<string, unknown>).en
      if (typeof maybe === "string") return maybe
    }
    return ""
  }

  const shouldHideStat = (labelValue: unknown): boolean => {
    const en = getLocalizedEn(labelValue)
    // Portfolio-level stats often include engineering bookkeeping
    // (files/classes/commits/prefabs). We hide them to keep the UI focused.
    return (
      /Files Modified/i.test(en) ||
      /Classes Implemented/i.test(en) ||
      /Commits Made/i.test(en) ||
      /Prefabs Created/i.test(en) ||
      /Scripts Created\/Modified/i.test(en) ||
      /Prefab.*Created/i.test(en)
    )
  }

  const statsToShow =
    documentationKey === "project.outer-words.documentation"
      ? []
      : doc.stats.filter((stat) => !shouldHideStat(stat.label))

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
  }

  return (
    <motion.div className="mt-20 space-y-16" initial="hidden" animate="show" variants={containerVariants}>
      {/* Overview */}
      <motion.section variants={sectionVariants}>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">{t("documentation.overview")}</h2>
        <p className="text-sm sm:text-base text-black/70 leading-relaxed max-w-prose">{localize(doc.overview, lang)}</p>
      </motion.section>

      {/* Core Systems as Cards */}
      <motion.section variants={sectionVariants}>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">{t("documentation.coreSystems")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doc.coreSystems.map((system, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-black/10 bg-white/70 hover:bg-white transition-colors"
            >
              <h3 className="text-lg font-semibold tracking-tight mb-3">{localize(system.title, lang)}</h3>
              <p className="text-sm text-black/70 leading-relaxed">{localize(system.description, lang)}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Architecture */}
      <motion.section className="space-y-6" variants={sectionVariants}>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("documentation.architecture")}</h2>
        <p className="text-sm sm:text-base text-black/70 leading-relaxed max-w-prose">{localize(doc.architecture.description, lang)}</p>

        {/* Principles Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{t("documentation.designPrinciples")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doc.architecture.principles.map((principle, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-black/5">
                <h4 className="font-semibold text-sm mb-2">{localize(principle.name, lang)}</h4>
                <p className="text-xs sm:text-sm text-black/70">{localize(principle.description, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      {statsToShow.length > 0 ? (
        <motion.section className="space-y-6" variants={sectionVariants}>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("documentation.statistics")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {statsToShow.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-black/10 bg-white/70">
                <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium mb-1">{localize(stat.label, lang)}</div>
                <p className="text-xs text-black/60">{localize(stat.description, lang)}</p>
              </div>
            ))}
          </div>
        </motion.section>
      ) : null}

      {/* Techniques */}
      <motion.section className="space-y-6" variants={sectionVariants}>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("documentation.programmingTechniques")}</h2>
        <div className="flex flex-wrap gap-3">
          {doc.techniques.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-black/10 text-sm font-medium">
              {localize(tech, lang)}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Libraries */}
      <motion.section className="grid md:grid-cols-2 gap-8" variants={sectionVariants}>
        <div>
          <h3 className="text-xl font-bold mb-4">{t("documentation.librariesFrameworks")}</h3>
          <ul className="space-y-2">
            {doc.libraries.chosen.map((lib, idx) => (
              <li key={idx} className="text-sm text-black/70">• {localize(lib, lang)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">{t("documentation.systemsApis")}</h3>
          <ul className="space-y-2">
            {doc.libraries.systems.map((sys, idx) => (
              <li key={idx} className="text-sm text-black/70">• {localize(sys, lang)}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Learning */}
      <motion.section className="space-y-6" variants={sectionVariants}>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("documentation.whatILearned")}</h2>
        <div className="space-y-3">
          {doc.learning.map((point, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-black/40 mt-2 shrink-0" />
              <p className="text-sm sm:text-base text-black/70 leading-relaxed">{localize(point, lang)}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Conclusion */}
      <motion.section className="p-6 rounded-xl border border-black/10 bg-white/70" variants={sectionVariants}>
        <h2 className="text-2xl font-bold mb-4">{t("documentation.conclusion")}</h2>
        <p className="text-sm sm:text-base text-black/70 leading-relaxed">{localize(doc.conclusion, lang)}</p>
      </motion.section>
    </motion.div>
  )
}
