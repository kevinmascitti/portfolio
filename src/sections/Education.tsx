import Reveal from "../components/Reveal"
import HorizontalScrollHint from "../components/HorizontalScrollHint"
import { useI18n } from "../i18n"

export default function Education() {
  const { t } = useI18n()
  const items = [
    {
      period: "Sep 2021 — Jul 2024",
      institution: "Politecnico di Torino (IT)",
      title: "MSc in Computer Engineering",
      grade: "110/110",
      description: t("education.msc.desc"),
    },
    {
      period: "Sep 2022 — Sep 2023",
      institution: "INP Grenoble – ENSIMAG (FR)",
      title: "Master in Computer Science",
      grade: "GPA: 3.4/4.0",
      description: t("education.master.desc"),
    },
    {
      period: "Sep 2018 — Sep 2021",
      institution: "Politecnico di Torino (IT)",
      title: "Bachelor in Computer Science",
      grade: "107/110",
      description: t("education.bsc.desc"),
    },
  ]

  return (
    <section id="education" className="py-32">
      <Reveal>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-20">
          {t("education.title")}
        </h2>
      </Reveal>

      <HorizontalScrollHint className="fade-x-scroll hide-scrollbar flex flex-nowrap gap-10 lg:gap-14 overflow-x-auto py-2 pl-8 pr-8">
        {items.map((item) => (
          <Reveal key={`${item.period}-${item.institution}`} offsetY={0}>
            <div className="shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]">
              <p className="text-sm sm:text-base text-gray-400 mb-1">
                {item.period}
              </p>

              <p className="mt-3 text-lg sm:text-xl font-medium">
                {item.title}
              </p>

              <p className="mt-1 text-sm sm:text-base text-gray-500">
                {item.institution}
              </p>

              {item.grade ? (
                <p className="mt-1 text-sm sm:text-base text-gray-500">
                  {item.grade}
                </p>
              ) : null}

              {item.description ? (
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-prose">
                  {item.description}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </HorizontalScrollHint>
    </section>
  )
}

