import { useI18n } from "../i18n"

export default function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="py-32">
      <div className="max-w-4xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
          {t("about.title")}
        </h2>

        <div className="space-y-5 text-base sm:text-lg text-gray-600">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
      </div>
    </section>
  )
}

