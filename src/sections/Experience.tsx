import Reveal from "../components/Reveal"
import HorizontalScrollHint from "../components/HorizontalScrollHint"
import { useI18n } from "../i18n"

export default function Experience() {
  const { t } = useI18n()

  const items = [
    {
      period: "Sep 2024 — Now",
      role: "Software Engineer",
      company: "Logistics Reply",
      location: "Torino, IT",
      description: t("experience.logistics.desc"),
    },
    {
      period: "Mar 2024 — Sep 2024",
      role: "Tech Director & Game Developer",
      company: "Level Up Lab",
      location: "Torino, IT",
      description: t("experience.levelup.desc"),
    },
    {
      period: "Feb 2023 — Aug 2023",
      role: "AR Developer — Internship",
      company: "CS Group",
      location: "Toulouse, FR",
      description: t("experience.cs.desc"),
    },
    {
      period: "Sep 2021 — Jul 2022",
      role: "IT assistant",
      company: "Collegio Einaudi",
      location: "Turin, IT",
      description: t("experience.collegio.desc"),
    },
  ]

  return (

    <section id="skills" className="py-32">

      <Reveal>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-20">
          {t("experience.title")}
        </h2>

      </Reveal>

      <HorizontalScrollHint className="fade-x-scroll hide-scrollbar flex flex-nowrap gap-10 lg:gap-14 overflow-x-auto py-2 pl-8 pr-8">

        {items.map((item) => (

          <Reveal key={`${item.period}-${item.company}`} offsetY={0}>

            <div className="shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]">

                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  {item.period}
                </p>

                <p className="text-lg sm:text-xl font-medium">
                  {item.role}
                </p>

                <p className="text-base text-gray-500">
                  {item.company}{" "}
                  <span className="text-gray-400">({item.location})</span>
                </p>

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