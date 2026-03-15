import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import HorizontalScrollHint from "../components/HorizontalScrollHint"
import ImageLightbox from "../components/ImageLightbox"
import { projects } from "../data/projects"
import { useI18n } from "../i18n"

function NavArrow({ direction }: { direction: "left" | "right" }) {
  const isLeft = direction === "left"
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={isLeft ? "M14 7l-5 5 5 5" : "M10 7l5 5-5 5"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ProjectDetail() {
  const { t } = useI18n()
  const { lang, slug } = useParams<{ lang: string; slug: string }>()
  const langPrefix = lang ? `/${lang}` : "/en"
  const index = useMemo(() => projects.findIndex((p) => p.slug === slug), [slug])
  const project = index >= 0 ? projects[index] : null
  const previous = index > 0 ? projects[index - 1] : null
  const next = index >= 0 && index < projects.length - 1 ? projects[index + 1] : null

  const [activeSrc, setActiveSrc] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <main className="w-full px-6 sm:px-10 pt-24 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between text-xs sm:text-sm tracking-wide">
            <Link
              to={langPrefix}
              className="project-nav-pill ui-pill rounded-full border backdrop-blur-md px-3 py-2 shadow-sm"
            >
              {t("project.back")}
            </Link>
          </div>

          <h1 className="mt-10 text-3xl sm:text-5xl font-bold tracking-tight">{t("project.notFound")}</h1>
        </div>
      </main>
    )
  }

  const hasVideo = Boolean(project.video)
  const topImages = hasVideo ? [] : [project.images[0] ?? project.image, project.images[1] ?? project.image].filter(Boolean) as string[]
  const rest = hasVideo ? project.images : project.images.slice(2)

  const isVideoUrl = (src: string) => /\.(mp4|mov|webm)(\?|$)/i.test(src)

  return (
    <main className="w-full px-6 sm:px-10 pt-24 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between text-xs sm:text-sm tracking-wide">
          <Link
            to={langPrefix}
            className="project-nav-pill ui-pill rounded-full border backdrop-blur-md px-3 py-2 shadow-sm"
          >
            {t("project.back")}
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            {previous ? (
              <Link
                to={`${langPrefix}/projects/${previous.slug}`}
                className="project-nav-pill ui-pill rounded-full border backdrop-blur-md shadow-sm flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto sm:px-3 sm:py-2"
                aria-label={t("project.prev")}
              >
                <span className="sm:hidden" aria-hidden><NavArrow direction="left" /></span>
                <span className="hidden sm:inline">{t("project.prev")}</span>
              </Link>
            ) : null}

            {next ? (
              <Link
                to={`${langPrefix}/projects/${next.slug}`}
                className="project-nav-pill ui-pill rounded-full border backdrop-blur-md shadow-sm flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto sm:px-3 sm:py-2"
                aria-label={t("project.next")}
              >
                <span className="sm:hidden" aria-hidden><NavArrow direction="right" /></span>
                <span className="hidden sm:inline">{t("project.next")}</span>
              </Link>
            ) : null}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">{t(project.titleKey)}</h1>
          </div>

          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-widest text-black/40">Overview</div>
            <p className="mt-3 text-sm sm:text-base text-black/70 leading-relaxed">
              {t(project.overviewKey)}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-black/40">Year</div>
            <div className="mt-2 text-black/70">{project.year}</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-black/40">Role</div>
            <div className="mt-2 text-black/70">{t(project.roleKey)}</div>
          </div>
          <div className="col-span-2">
            <div className="text-[11px] uppercase tracking-widest text-black/40">{t("project.labelFocus")}</div>
            <div className="mt-2 text-black/70">{t(project.servicesKey)}</div>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {hasVideo ? (
            <div className="lg:col-span-2 w-full overflow-hidden rounded-2xl border border-black/10 bg-black">
              <video
                src={project.video}
                controls
                playsInline
                className="w-full aspect-video object-contain"
                aria-label={`${t(project.titleKey)} video`}
              />
            </div>
          ) : (
            topImages.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => !isVideoUrl(src) && setActiveSrc(src)}
                className="group relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white"
              >
                <div className="aspect-[16/10] w-full">
                  {isVideoUrl(src) ? (
                    <video
                      src={src}
                      controls
                      playsInline
                      className="h-full w-full object-cover"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <img
                      src={src}
                      alt={`${t(project.titleKey)} image ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  )}
                </div>
                {!isVideoUrl(src) && (
                  <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                )}
              </button>
            ))
          )}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("project.about")}</h2>
            <p className="mt-6 text-sm sm:text-base text-black/70 leading-relaxed max-w-prose">
              {t(project.aboutKey)}
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{t("project.goal")}</h2>
            <p className="mt-6 text-sm sm:text-base text-black/70 leading-relaxed max-w-prose">
              {t(project.goalKey)}
            </p>
          </div>
        </div>

        {rest.length ? (
          <div className="mt-24">
            <HorizontalScrollHint className="fade-x-scroll hide-scrollbar flex flex-nowrap gap-6 overflow-x-auto py-2 pl-8 pr-8">
              {rest.map((src, i) =>
                isVideoUrl(src) ? (
                  <div
                    key={`${src}-${i}`}
                    className="shrink-0 w-[320px] sm:w-[420px] rounded-2xl overflow-hidden border border-black/10 bg-black"
                  >
                    <div className="aspect-[16/10] w-full">
                      <video
                        src={src}
                        controls
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    onClick={() => setActiveSrc(src)}
                    className="shrink-0 w-[320px] sm:w-[420px] rounded-2xl overflow-hidden border border-black/10 bg-white"
                  >
                    <div className="aspect-[16/10] w-full">
                      <img
                        src={src}
                        alt={`${t(project.titleKey)} gallery ${i + (hasVideo ? 1 : 3)}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </button>
                )
              )}
            </HorizontalScrollHint>
          </div>
        ) : null}
      </div>

      {activeSrc ? (
        <ImageLightbox
          src={activeSrc}
          alt={`${t(project.titleKey)} fullscreen`}
          onClose={() => setActiveSrc(null)}
          sources={project.images.filter((s) => !isVideoUrl(s))}
          onNavigate={setActiveSrc}
        />
      ) : null}
    </main>
  )
}

