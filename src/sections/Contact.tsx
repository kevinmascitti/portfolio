import HorizontalScrollHint from "../components/HorizontalScrollHint"

export default function Contact() {

  return (

    <section id="contact" className="py-20 border-t mt-20">

      <div className="flex flex-col items-center">

        <p className="text-sm mb-6 sm:text-base tracking-[0.2em] uppercase">
          LET'S GET IN TOUCH
        </p>

        <HorizontalScrollHint className="fade-x-scroll hide-scrollbar flex flex-nowrap gap-4 overflow-x-auto whitespace-nowrap py-1 pl-8 pr-8">

            <a
              href="mailto:kevinmascitti@gmail.com"
              className="shrink-0 px-6 py-3 border border-black/30 !text-black visited:!text-black rounded-full hover:bg-black hover:!text-white hover:border-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Email
            </a>

            <a
              href="https://linkedin.com/in/kevinmascitti"
              target="_blank"
              className="shrink-0 px-6 py-3 border border-black/30 !text-black visited:!text-black rounded-full hover:bg-black hover:!text-white hover:border-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/kevinmascitti"
              target="_blank"
              className="shrink-0 px-6 py-3 border border-black/30 !text-black visited:!text-black rounded-full hover:bg-black hover:!text-white hover:border-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              GitHub
            </a>

        </HorizontalScrollHint>

      </div>

    </section>

  )
}