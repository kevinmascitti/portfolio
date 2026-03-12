import HorizontalScrollHint from "../components/HorizontalScrollHint"
import { useI18n } from "../i18n"

export default function Contact() {
  const { t } = useI18n()

  return (

    <section id="contact" className="py-20 border-t mt-20">

      <div className="flex flex-col items-center">

        <p className="text-sm mb-6 sm:text-base tracking-[0.2em] uppercase">
          {t("contact.title")}
        </p>

        {/* Mobile: verticale */}
        <div className="flex w-3/4 flex-col items-stretch gap-3 px-8 sm:hidden">
          <a
            href="mailto:kevinmascitti@gmail.com"
            className="contact-pill ui-pill px-6 py-3 rounded-full border shadow-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            {t("contact.email")}
          </a>

          <a
            href="https://linkedin.com/in/kevinmascitti"
            target="_blank"
            className="contact-pill ui-pill px-6 py-3 rounded-full border shadow-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            {t("contact.linkedin")}
          </a>

          <a
            href="https://github.com/kevinmascitti"
            target="_blank"
            className="contact-pill ui-pill px-6 py-3 rounded-full border shadow-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            {t("contact.github")}
          </a>
        </div>

        {/* Desktop/tablet: orizzontale scrollabile e centrato */}
        <div className="hidden sm:flex w-full justify-center">
          <HorizontalScrollHint className="fade-x-scroll hide-scrollbar flex flex-nowrap gap-4 overflow-x-auto whitespace-nowrap py-1 px-8">
            <a
              href="mailto:kevinmascitti@gmail.com"
              className="contact-pill ui-pill shrink-0 px-6 py-3 rounded-full border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              {t("contact.email")}
            </a>

            <a
              href="https://linkedin.com/in/kevinmascitti"
              target="_blank"
              className="contact-pill ui-pill shrink-0 px-6 py-3 rounded-full border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              {t("contact.linkedin")}
            </a>

            <a
              href="https://github.com/kevinmascitti"
              target="_blank"
              className="contact-pill ui-pill shrink-0 px-6 py-3 rounded-full border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              {t("contact.github")}
            </a>
          </HorizontalScrollHint>
        </div>

      </div>

    </section>

  )
}