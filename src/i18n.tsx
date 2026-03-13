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
    "topbar.role": "3D developer & software engineer",
    "topbar.location": "Turin, Italy",
    "topbar.lang.en": "English",
    "topbar.lang.it": "Italian",
    "topbar.lang.fr": "French",

    "hero.left":
      "Hi, I'm Kevin, a 3D developer focused on interactive experiences, VR/AR and gamified interfaces.",
    "hero.right":
      "I design and build real-time experiences with Unity, Unreal Engine and modern web technologies, where the user experience is at the center.",

    "about.title": "About me",
    "about.p1":
      "I'm a 3D developer and interaction designer who loves to create visual, playful and immersive experiences.",
    "about.p2":
      "I believe that technology and creativity can intertwine to create unique experiences for the user and I believe that this can have a strong impact on people. I like transforming abstract ideas into something you can actually see and try, interacting with designers and teams until the experience feels intuitive and seamless.",
    "about.p3":
      "During my education and professional experiences, I have gained experience in various projects, from web applications to real-time experiences with Unity and Unreal Engine, passing through the design and development of AR applications on various types of devices and the development of intuitive and fluid interfaces, attentive to accessibility and the needs of the user.",
    
    "projects.title": "Selected Works",
    "experience.title": "Experiences",
    "education.title": "Education",
    "contact.title": "LET'S GET IN TOUCH",

    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    "experience.logistics.period": "Sep 2024 — Now",
    "experience.logistics.role": "Software Engineer",
    "experience.logistics.location": "Turin, IT",
    "experience.logistics.desc":
      "Unity developer at Logistics Reply, focused on building Augmented Reality solutions for logistics on HoloLens 2 and Magic Leap 2. I create demos and proof of concepts with Unity, AR Foundation, ARKit and ARCore, presented to clients within the Area42 innovation lab. I also contribute to the frontend architecture and components of a product based on React and modern web technologies.",
    "experience.levelup.period": "Mar 2024 — Sep 2024",
    "experience.levelup.role": "Tech Director & Game Developer",
    "experience.levelup.location": "Turin, IT",
    "experience.levelup.desc":
      "Technical Director for a team of 7 on a Unity video game project. I supervised Git workflows, coordinated the programming side and actively contributed as a game programmer. The project is \"The Arise of Cosmos\", an action/adventure game available on itch.io. I also tutored students new to game development, supporting them with Unreal Engine 5.",
    "experience.cs.period": "Feb 2023 — Aug 2023",
    "experience.cs.role": "AR Developer — Internship",
    "experience.cs.location": "Toulouse, FR",
    "experience.cs.desc":
      "AR developer on HoloLens 2 applications using Unreal Engine (C++ & Blueprints), working on an emergency management thesis project and features for an enterprise AR platform.",
    "experience.collegio.period": "Sep 2021 — Jul 2022",
    "experience.collegio.role": "IT Assistant",
    "experience.collegio.location": "Turin, IT",
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
    "topbar.role": "Sviluppatore 3D e ingegnere del software",
    "topbar.location": "Torino, Italia",
    "topbar.lang.en": "Inglese",
    "topbar.lang.it": "Italiano",
    "topbar.lang.fr": "Francese",

    "hero.left":
      "Ciao, sono Kevin, uno sviluppatore 3D focalizzato su esperienze interattive, realtà virtuale/aumentata e gamification.",
    "hero.right":
      "Progetto e sviluppo esperienze real‑time con Unity, Unreal e tecnologie web moderne, in cui l'esperienza utente è messa al centro.",

    "about.title": "Chi sono",
    "about.p1":
      "Sono un ingegnere del software e uno sviluppatore 3D; mi piace creare esperienze visive, giocose e immersive.",
    "about.p2":
      "Credo che la tecnologia e la creatività possano intrecciarsi per creare esperienze uniche per l'utente e credo che questo possa avere un forte impatto sulle persone. Mi piace trasformare idee astratte in qualcosa che puoi vedere e provare, interagendo con designer e team finché l'esperienza non risulta intuitiva e fluida.",
    "about.p3":
      "Durante la mia formazione e le mie esperienze professionali, ho maturato esperienza in diversi progetti, da applicazioni web ad esperienze real-time con Unity e Unreal Engine, passando per la progettazione e lo sviluppo di applicazioni AR su diversi tipi di visori e lo sviluppo di interfacce intuitive e fluide, attente all'accessibilità e ai bisogni dell'utente.",
    
    "projects.title": "Selected Works",
    "experience.title": "Esperienze",
    "education.title": "Formazione",
    "contact.title": "LET'S GET IN TOUCH",

    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    "experience.logistics.period": "Set 2024 — Oggi",
    "experience.logistics.role": "Software Engineer",
    "experience.logistics.location": "Torino, IT",
    "experience.logistics.desc":
      "Sviluppatore Unity presso Logistics Reply, focalizzato sullo sviluppo di soluzioni di Realtà Aumentata per la logistica su HoloLens 2 e Magic Leap 2. Realizzo demo e proof of concept con Unity, AR Foundation, ARKit e ARCore, presentate nel laboratorio di innovazione Area42. Contribuisco inoltre allo sviluppo dell'architettura e di componenti frontend per un prodotto basato su React e tecnologie web moderne.",
    "experience.levelup.period": "Mar 2024 — Set 2024",
    "experience.levelup.role": "Tech Director e Game Developer",
    "experience.levelup.location": "Torino, IT",
    "experience.levelup.desc":
      "Technical Director per un team di 7 persone su un videogioco in Unity. Mi sono occupato della gestione dei flussi Git, del coordinamento della parte di programmazione e ho contribuito attivamente come game programmer. Il progetto è \"The Arise of Cosmos\", un action/adventure disponibile su itch.io. Ho inoltre fatto da tutor a studenti alle prime armi con il game development, supportandoli con Unreal Engine 5.",
    "experience.cs.period": "Feb 2023 — Ago 2023",
    "experience.cs.role": "Sviluppatore AR — Tirocinio",
    "experience.cs.location": "Tolosa, FR",
    "experience.cs.desc":
      "Sviluppatore AR su applicazioni HoloLens 2 con Unreal Engine (C++ e Blueprints), per una tesi sulla gestione delle emergenze e funzionalità per una piattaforma AR enterprise.",
    "experience.collegio.period": "Set 2021 — Lug 2022",
    "experience.collegio.role": "Assistente IT",
    "experience.collegio.location": "Torino, IT",
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
    "topbar.role": "Développeur 3D & logiciel",
    "topbar.location": "Turin, Italie",
    "topbar.lang.en": "Anglais",
    "topbar.lang.it": "Italien",
    "topbar.lang.fr": "Français",

    "hero.left":
      "Salut, je suis Kevin, un développeur 3D focalisé sur les expériences interactives, la VR/AR et la gamification.",
    "hero.right":
      "Je conçois et développe des expériences temps réel avec Unity, Unreal Engine et des technologies web modernes, où l'expérience utilisateur est mise au centre.",

    "about.title": "À propos",
    "about.p1":
      "Je suis un développeur 3D et designer d’interaction, passionné par les expériences visuelles, ludiques et immersives.",
    "about.p2":
      "Je crois que la technologie et la créativité peuvent s'entrecroiser pour créer des expériences uniques pour l'utilisateur et je crois que cela peut avoir un fort impact sur les personnes. Je transforme des idées abstraites en quelque chose que l'on peut voir et essayer, en interagissant avec les designers et les équipes jusqu'à ce que l'expérience soit intuitive et fluide.",
    "about.p3":
      "Durant la formation et les expériences professionnelles, j'ai acquis une expérience dans divers projets, des applications web aux expériences temps réel avec Unity et Unreal Engine, passant par la conception et le développement d'applications AR sur divers types de visors et le développement d'interfaces intuitives et fluides, attentif à l'accessibilité et aux besoins de l'utilisateur.",
    
    "projects.title": "Selected Works",
    "experience.title": "Expériences",
    "education.title": "Formation",
    "contact.title": "LET'S GET IN TOUCH",

    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    "experience.logistics.period": "Sept 2024 — Présent",
    "experience.logistics.role": "Ingénieur logiciel",
    "experience.logistics.location": "Turin, Italie",
    "experience.logistics.desc":
      "Développeur Unity chez Logistics Reply, focalisé sur le développement de solutions de Réalité Augmentée pour la logistique sur HoloLens 2 et Magic Leap 2. Je réalise des démos et proof of concept avec Unity, AR Foundation, ARKit et ARCore, présentées aux clients dans le laboratoire d’innovation Area42. Je contribue également à l’architecture frontend et aux composants d’un produit basé sur React et des technologies web modernes.",
    "experience.levelup.period": "Mar 2024 — Sept 2024",
    "experience.levelup.role": "Tech Director et Game Developer",
    "experience.levelup.location": "Turin, Italie",
    "experience.levelup.desc":
      "Technical Director pour une équipe de 7 personnes sur un jeu vidéo en Unity. J’ai supervisé les workflows Git, coordonné la partie programmation et contribué activement en tant que game programmer. Le projet s’appelle \"The Arise of Cosmos\", un action/adventure disponible sur itch.io. J’ai aussi été tuteur pour des étudiants découvrant le game development, en les accompagnant sur Unreal Engine 5.",
    "experience.cs.period": "Fév 2023 — Août 2023",
    "experience.cs.role": "Développeur AR — Stage",
    "experience.cs.location": "Toulouse, France",
    "experience.cs.desc":
      "Développeur AR sur des applications HoloLens 2 avec Unreal Engine (C++ et Blueprints), pour un mémoire sur la gestion des urgences et des fonctionnalités pour une plateforme AR entreprise.",
    "experience.collegio.period": "Sept 2021 — Juil 2022",
    "experience.collegio.role": "Assistant IT",
    "experience.collegio.location": "Turin, Italie",
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
    }
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

