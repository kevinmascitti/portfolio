import { useEffect } from "react"
import { useI18n } from "../i18n"

type Props = {
  src: string
  alt?: string
  onClose: () => void
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

export default function ImageLightbox({ src, alt, onClose }: Props) {
  const { t } = useI18n()
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <img
          src={src}
          alt={alt ?? ""}
          className="max-h-full max-w-full object-contain select-none"
          draggable={false}
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
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

