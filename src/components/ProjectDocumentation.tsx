import { documentation } from "../data/documentation"
import { useI18n } from "../i18n"

type Props = {
  documentationKey: string
}

export default function ProjectDocumentation({ documentationKey }: Props) {
  const { t } = useI18n()
  const doc = documentation[documentationKey]

  if (!doc) return null

  return (
    <div className="mt-20 space-y-16">
      {/* Overview */}
      <section>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">{t("documentation.overview")}</h2>
        <p className="text-sm sm:text-base text-black/70 leading-relaxed max-w-prose">{doc.overview[t.lang]}</p>
      </section>

      {/* Core Systems as Cards */}
      <section>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">{t("documentation.coreSystems")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doc.coreSystems.map((system, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-black/10 bg-white/50 hover:bg-white/80 transition-colors"
            >
              <h3 className="text-lg font-semibold tracking-tight mb-3">{system.title[t.lang]}</h3>
              <p className="text-sm text-black/70 leading-relaxed">{system.description[t.lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("documentation.architecture")}</h2>
        <p className="text-sm sm:text-base text-black/70 leading-relaxed max-w-prose">{doc.architecture.description[t.lang]}</p>

        {/* Principles Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{t("documentation.designPrinciples")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doc.architecture.principles.map((principle, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-black/5">
                <h4 className="font-semibold text-sm mb-2">{principle.name[t.lang]}</h4>
                <p className="text-xs sm:text-sm text-black/70">{principle.description[t.lang]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-lg border border-black/10 bg-white/50">
          <p className="text-sm text-black/70 leading-relaxed">
            <span className="font-semibold">{t("documentation.codeStructure")}:</span> {doc.architecture.structure[t.lang]}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("documentation.statistics")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {doc.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-black/10 bg-white/50">
              <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm font-medium mb-1">{stat.label}</div>
              <p className="text-xs text-black/60">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Techniques */}
      <section className="space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("documentation.programmingTechniques")}</h2>
        <div className="flex flex-wrap gap-3">
          {doc.techniques.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-black/10 text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Libraries */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">{t("documentation.librariesFrameworks")}</h3>
          <ul className="space-y-2">
            {doc.libraries.chosen.map((lib, idx) => (
              <li key={idx} className="text-sm text-black/70">
                • {lib}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">{t("documentation.systemsApis")}</h3>
          <ul className="space-y-2">
            {doc.libraries.systems.map((sys, idx) => (
              <li key={idx} className="text-sm text-black/70">
                • {sys}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Learning */}
      <section className="space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("documentation.whatILearned")}</h2>
        <div className="space-y-3">
          {doc.learning.map((point, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-black/40 mt-2 shrink-0" />
              <p className="text-sm sm:text-base text-black/70 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="p-6 rounded-xl border border-black/10 bg-white/50">
        <h2 className="text-2xl font-bold mb-4">{t("documentation.conclusion")}</h2>
        <p className="text-sm sm:text-base text-black/70 leading-relaxed">{doc.conclusion}</p>
      </section>
    </div>
  )
}
