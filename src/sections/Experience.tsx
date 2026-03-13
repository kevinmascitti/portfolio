import Reveal from "../components/Reveal"
import HorizontalScrollHint from "../components/HorizontalScrollHint"
import { useI18n } from "../i18n"

export default function Experience() {
  const { t } = useI18n()

  const items = [
    {
      periodKey: "experience.logistics.period",
      roleKey: "experience.logistics.role",
      locationKey: "experience.logistics.location",
      company: "Logistics Reply",
      descKey: "experience.logistics.desc",
    },
    {
      periodKey: "experience.levelup.period",
      roleKey: "experience.levelup.role",
      locationKey: "experience.levelup.location",
      company: "Level Up Lab",
      descKey: "experience.levelup.desc",
    },
    {
      periodKey: "experience.cs.period",
      roleKey: "experience.cs.role",
      locationKey: "experience.cs.location",
      company: "CS Group",
      descKey: "experience.cs.desc",
    },
    {
      periodKey: "experience.collegio.period",
      roleKey: "experience.collegio.role",
      locationKey: "experience.collegio.location",
      company: "Collegio Einaudi",
      descKey: "experience.collegio.desc",
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

          <Reveal key={`${item.periodKey}-${item.company}`} offsetY={0}>

            <div className="shrink-0 w-[320px] sm:w-[380px] lg:w-[380px]">

                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  {t(item.periodKey)}
                </p>

                <p className="text-lg sm:text-xl font-medium">
                  {t(item.roleKey)}
                </p>

                <p className="text-base text-gray-500">
                  {item.company}{" "}
                  <span className="text-gray-400">({t(item.locationKey)})</span>
                </p>

                {item.descKey ? (
                  <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-prose">
                    {t(item.descKey)}
                  </p>
                ) : null}

            </div>

          </Reveal>

        ))}

      </HorizontalScrollHint>

    </section>

  )
}