import { useEffect, useRef, useState } from "react"
import { useI18n } from "../i18n"

const IDLE_HIDE_MS = 500

type Props = {
  src: string
  alt?: string
  onClose: () => void
  /** List of image URLs for prev/next navigation (no wrap). Omit for single-image mode. */
  sources?: string[]
  onNavigate?: (newSrc: string) => void
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ScrollArrow({ direction }: { direction: "left" | "right" }) {
  const isLeft = direction === "left"
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

const scrollArrowStyle = {
  borderRadius: 9999,
  width: 44,
  height: 44,
  padding: 0,
  display: "grid" as const,
  placeItems: "center" as const,
}

const isVideoSrc = (s: string) => /\.(mp4|mov|webm)(\?|$)/i.test(s)

export default function ImageLightbox({ src, alt, onClose, sources = [], onNavigate }: Props) {
  const { t } = useI18n()
  const video = isVideoSrc(src)
  const index = sources.length > 0 ? sources.indexOf(src) : -1
  const canPrev = index > 0
  const canNext = index >= 0 && index < sources.length - 1

  const [showClose, setShowClose] = useState(true)
  const idleRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleHide = () => {
    if (idleRef.current) clearTimeout(idleRef.current)
    idleRef.current = setTimeout(() => setShowClose(false), IDLE_HIDE_MS)
  }

  const handleMove = () => {
    setShowClose(true)
    scheduleHide()
  }

  useEffect(() => {
    scheduleHide()
    return () => {
      if (idleRef.current) clearTimeout(idleRef.current)
    }
  }, [])

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (sources.length > 0 && onNavigate) {
        if (e.key === "ArrowLeft" && canPrev) onNavigate(sources[index - 1]!)
        if (e.key === "ArrowRight" && canNext) onNavigate(sources[index + 1]!)
      }
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [onClose, sources, onNavigate, index, canPrev, canNext])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80"
      role="dialog"
      aria-modal="true"
      onMouseMove={handleMove}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        {video ? (
          <video
            src={src}
            controls
            playsInline
            className="max-h-full max-w-full object-contain"
            aria-label={alt ?? ""}
          />
        ) : (
          <img
            src={src}
            alt={alt ?? ""}
            className="max-h-full max-w-full object-contain select-none"
            draggable={false}
          />
        )}
      </div>

      {sources.length > 1 && onNavigate && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="button"
              aria-label={t("lightbox.prev")}
              onClick={() => canPrev && onNavigate(sources[index - 1]!)}
              disabled={!canPrev}
              className="scroll-arrow ui-icon border backdrop-blur-sm shadow-sm disabled:opacity-30 disabled:pointer-events-none"
              style={scrollArrowStyle}
            >
              <ScrollArrow direction="left" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              type="button"
              aria-label={t("lightbox.next")}
              onClick={() => canNext && onNavigate(sources[index + 1]!)}
              disabled={!canNext}
              className="scroll-arrow ui-icon border backdrop-blur-sm shadow-sm disabled:opacity-30 disabled:pointer-events-none"
              style={scrollArrowStyle}
            >
              <ScrollArrow direction="right" />
            </button>
          </div>
        </>
      )}

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-300 ease-out"
        style={{
          opacity: showClose ? 1 : 0,
          transform: showClose ? "translate(-50%, 0)" : "translate(-50%, 8px)",
          pointerEvents: showClose ? "auto" : "none",
        }}
      >
        <button
          type="button"
          aria-label={t("lightbox.close")}
          onClick={onClose}
          className="ui-icon lightbox-close h-12 w-12 rounded-full border backdrop-blur-sm flex items-center justify-center shadow-sm"
          style={{ borderRadius: 9999, padding: 0 }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}

