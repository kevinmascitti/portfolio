import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

export type Lang = "en" | "it" | "fr"

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "topbar.role": "Frontend and 3D developer",
    "topbar.location": "Based in Turin, Italy",
    "topbar.lang.en": "English",
    "topbar.lang.it": "Italian",
    "topbar.lang.fr": "French",

    "hero.left":
      "Hi, I'm Kevin, a software engineer that loves to build modern apps.",
    "hero.right":
      "I create scalable web applications using React, TypeScript and modern cloud technologies.",

    "about.title": "About me",
    "about.p1":
      "I'm Kevin, a software engineer focused on building clean, dependable interfaces that feel fast and intuitive.",
    "about.p2":
      "My work sits between frontend engineering, 3D and interactive experiences, turning ideas into interfaces that are simple to use and solid inside.",
    "about.p3":
      "I like collaborating with designers and developers, keeping communication clear and iterating quickly to ship thoughtful products.",

    "projects.title": "Selected Works",
    "experience.title": "Experiences",
    "education.title": "Education",
    "contact.title": "LET'S GET IN TOUCH",

    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    "experience.logistics.desc":
      "Frontend developer in an R&D team focused on product development, building interfaces with React, JavaScript, HTML and CSS, with strong attention to UX and frontend architecture.",
    "experience.levelup.desc":
      "Tech director and game developer on a Unity project, coordinating programming activities and Git workflows, mentoring teammates and taking care of gameplay and tools.",
    "experience.cs.desc":
      "AR developer on HoloLens 2 applications using Unreal Engine (C++ & Blueprints), working on an emergency management thesis project and features for an enterprise AR platform.",
    "experience.collegio.desc":
      "Network and IT assistant in a student residence: managing the residents database and accounts, configuring new users and handling devices and network access.",

    "education.msc.desc":
      "Specialized in computer graphics, animation, interactive real-time systems, and multimedia processing.",
    "education.master.desc":
      "Focused on user-centered interactive systems and HCI, creating intuitive interfaces and studying usability and interactive experiences.",
    "education.bsc.desc":
      "Engineering foundation with emphasis on software/hardware systems, programming and computer networks.",

    "project.back": "← Back to home",
    "project.prev": "← Previous project",
    "project.next": "Next project →",
    "project.about": "About the project",
    "project.goal": "Goal",
    "project.notFound": "Project not found",

    "lightbox.close": "Close",
  },
  it: {
    "topbar.role": "Frontend e sviluppatore 3D",
    "topbar.location": "Con base a Torino, Italia",
    "topbar.lang.en": "Inglese",
    "topbar.lang.it": "Italiano",
    "topbar.lang.fr": "Francese",

    "hero.left":
      "Ciao, sono Kevin, uno sviluppatore software che ama creare applicazioni moderne.",
    "hero.right":
      "Progetto interfacce web scalabili usando React, TypeScript e tecnologie cloud moderne.",

    "about.title": "Chi sono",
    "about.p1":
      "Sono Kevin, un software engineer focalizzato su interfacce pulite e affidabili, che risultino veloci e intuitive da usare.",
    "about.p2":
      "Il mio lavoro vive tra frontend, 3D e esperienze interattive: trasformo idee in interfacce semplici in superficie ma solide all'interno.",
    "about.p3":
      "Mi piace collaborare con designer e sviluppatori, comunicare in modo chiaro e iterare velocemente per arrivare a prodotti curati.",

    "projects.title": "Selected Works",
    "experience.title": "Esperienze",
    "education.title": "Formazione",
    "contact.title": "LET'S GET IN TOUCH",

    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    "experience.logistics.desc":
      "Sviluppatore frontend in un team R&D orientato al prodotto, costruendo interfacce con React, JavaScript, HTML e CSS con forte attenzione a UX e architettura frontend.",
    "experience.levelup.desc":
      "Tech director e game developer su un progetto Unity, coordinando attività di programmazione e flussi Git, supportando il team e curando gameplay e tool.",
    "experience.cs.desc":
      "Sviluppatore AR su applicazioni HoloLens 2 con Unreal Engine (C++ e Blueprints), per una tesi sulla gestione delle emergenze e funzionalità per una piattaforma AR enterprise.",
    "experience.collegio.desc":
      "Assistente di rete e IT in collegio: gestione del database dei collegiali e degli account, creazione di nuovi utenti e gestione dei dispositivi e dell’accesso alla rete.",

    "education.msc.desc":
      "Specializzazione in computer grafica, animazione, sistemi interattivi real‑time e multimedia.",
    "education.master.desc":
      "Focus su sistemi interattivi user‑centered e HCI, progettando interfacce intuitive e studiando usabilità e user experience.",
    "education.bsc.desc":
      "Fondamenta di ingegneria con enfasi su sistemi software/hardware, programmazione e reti di calcolatori.",

    "project.back": "← Torna alla home",
    "project.prev": "← Progetto precedente",
    "project.next": "Prossimo progetto →",
    "project.about": "Informazioni sul progetto",
    "project.goal": "Obiettivo",
    "project.notFound": "Progetto non trovato",

    "lightbox.close": "Chiudi",
  },
  fr: {
    "topbar.role": "Développeur frontend et 3D",
    "topbar.location": "Basé à Turin, Italie",
    "topbar.lang.en": "Anglais",
    "topbar.lang.it": "Italien",
    "topbar.lang.fr": "Français",

    "hero.left":
      "Salut, je suis Kevin, un ingénieur logiciel qui aime créer des applications modernes.",
    "hero.right":
      "Je conçois des applications web évolutives avec React, TypeScript et des technologies cloud modernes.",

    "about.title": "À propos",
    "about.p1":
      "Je suis Kevin, un ingénieur logiciel concentré sur des interfaces propres et fiables, rapides et intuitives à utiliser.",
    "about.p2":
      "Mon travail se situe entre frontend, 3D et expériences interactives : je transforme des idées en interfaces simples à utiliser et solides côté technique.",
    "about.p3":
      "J’aime collaborer avec designers et développeurs, communiquer clairement et itérer rapidement pour livrer des produits soignés.",

    "projects.title": "Selected Works",
    "experience.title": "Expériences",
    "education.title": "Formation",
    "contact.title": "LET'S GET IN TOUCH",

    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    "experience.logistics.desc":
      "Développeur frontend dans une équipe R&D orientée produit, construisant des interfaces avec React, JavaScript, HTML et CSS, avec une forte attention portée à l’UX et à l’architecture frontend.",
    "experience.levelup.desc":
      "Tech director et game developer sur un projet Unity, coordination de l’équipe de programmation et des workflows Git, mentorat et travail sur le gameplay et les outils.",
    "experience.cs.desc":
      "Développeur AR sur des applications HoloLens 2 avec Unreal Engine (C++ et Blueprints), pour un mémoire sur la gestion des urgences et des fonctionnalités pour une plateforme AR entreprise.",
    "experience.collegio.desc":
      "Assistant réseau et IT dans une résidence étudiante : gestion de la base de données des résidents et des comptes, création de nouveaux utilisateurs et gestion des appareils et de l’accès réseau.",

    "education.msc.desc":
      "Spécialisation en graphisme, animation, systèmes interactifs temps réel et traitement multimédia.",
    "education.master.desc":
      "Axé sur les systèmes interactifs centrés utilisateur et l’HCI, création d’interfaces intuitives et études d’utilisabilité.",
    "education.bsc.desc":
      "Bases d’ingénierie avec accent sur les systèmes logiciels/matériels, la programmation et les réseaux informatiques.",

    "project.back": "← Retour à l’accueil",
    "project.prev": "← Projet précédent",
    "project.next": "Projet suivant →",
    "project.about": "À propos du projet",
    "project.goal": "Objectif",
    "project.notFound": "Projet introuvable",

    "lightbox.close": "Fermer",
  },
}

function resolve(lang: Lang, key: string): string {
  const dict = translations[lang]
  return dict[key] ?? translations.en[key] ?? key
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem("lang")
    if (stored === "en" || stored === "it" || stored === "fr") {
      setLangState(stored)
      return
    }
    const nav = navigator.language.slice(0, 2)
    if (nav === "it" || nav === "fr") setLangState(nav)
  }, [])

  const setLang = (value: Lang) => {
    setLangState(value)
    window.localStorage.setItem("lang", value)
  }

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      t: (key: string) => resolve(lang, key),
    }),
    [lang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return ctx
}

