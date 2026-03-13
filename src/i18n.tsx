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
      "During my education and professional experiences, I have developed skills through various projects, from web applications to real-time experiences with Unity and Unreal Engine, passing through the design and development of AR applications on various types of devices and the development of intuitive and fluid interfaces, attentive to accessibility and the needs of the user.",
    
    "projects.title": "Works",
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
      "Unity developer at Logistics Reply, focused on building Augmented Reality solutions for logistics on HoloLens 2 and Magic Leap 2. I create demos and proof of concepts with Unity, AR Foundation, ARKit and ARCore, presented to clients within the Area42 innovation lab. I also contribute to the frontend architecture and components of LEA, a product based on React and modern web technologies.",
    "experience.levelup.period": "Mar 2024 — Sep 2024",
    "experience.levelup.role": "Tech Director & Game Developer",
    "experience.levelup.location": "Turin, IT",
    "experience.levelup.desc":
      "Technical Director for a team of 7 on a Unity video game project. I supervised Git workflows, coordinated the programming side and actively contributed as a game programmer. The project is \"The Arise of Cosmos\", an action/adventure game available on itch.io. I also tutored students new to game development, supporting them with Unreal Engine 5.",
    "experience.cs.period": "Feb 2023 — Aug 2023",
    "experience.cs.role": "AR Developer — Internship",
    "experience.cs.location": "Toulouse, FR",
    "experience.cs.desc":
      "AR developer on HoloLens 2 applications with Unreal Engine (Blueprint and C++). I wrote my thesis on augmented reality for emergency management in crisis scenarios and contributed to two European projects, RESCUER and INTREPID, developing new features for CARMA, the AR platform of the Crimson product.",
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
    "project.labelFocus": "Focus",
    "project.notFound": "Project not found",

    "project.televasion.title": "TelEvasion",
    "project.televasion.category": "2.5D Action Game",
    "project.televasion.overview": "You're sucked into an evil TV and trapped in a world of countless channels. Fight your way through 2000s-inspired shows and unique enemies to get home—but keep the spectators entertained with the Entertainment Bar or they'll change the channel and you'll lose progress. Unlock Remote abilities by building your Combo.",
    "project.televasion.about": "TelEvasion is a 2.5D action-fighting game where you're a prisoner inside the TV and must fight through a dizzying array of channels to escape. Core mechanics: an Entertainment Bar that drops if you don't keep the audience hooked by smashing enemies fast; a Combo Counter that unlocks Remote Control buttons with devastating abilities; and interactive cartoons and word bubbles you can throw or smash. Each level spans multiple channels with distinct looks and enemy archetypes. The goal is tight action-arcade gameplay with an innovative spectator-driven twist.",
    "project.televasion.goal": "Deliver a punchy 2.5D action-arcade experience with a spectator mechanic that ties progression to the Entertainment Bar and Combo-unlocked Remote abilities.",
    "project.televasion.role": "Lead Gameplay Programmer",
    "project.televasion.services": "Gameplay Programming · Game Design",

    "project.connecting-nature.title": "Connecting Nature",
    "project.connecting-nature.category": "Educational 3D Game",
    "project.connecting-nature.overview": "A relaxing paradise on floating islands where you befriend and take care of animals. Explore biomes, manage your farm and learn facts about wildlife. Developed for the VR course at Politecnico di Torino under professors A. Bottino and F. Strada.",
    "project.connecting-nature.about": "Connecting Nature is a first-person educational game set on connected floating islands. Players manage a small farm, satisfy the needs of creatures from different biomes and complete tasks to learn facts about the animals. The project was developed for the Virtual Reality course at Politecnico di Torino under professors A. Bottino and F. Strada.",
    "project.connecting-nature.goal": "Deliver a relaxing, educational experience that combines exploration, light farming and learning about animals in a low-poly, family-friendly world.",
    "project.connecting-nature.role": "Game Programmer",
    "project.connecting-nature.services": "Game Programming · Game Design",

    "project.outer-words.title": "Outer Words",
    "project.outer-words.category": "2D Word Game",
    "project.outer-words.overview": "A 2D scrolling game where your progress hinges on typing words correctly. Correct entries make you ascend and boost your score; every wrong move brings the alien companion closer to overwhelming anxiety—and a catastrophic explosion. Made during the Press Start Game Jam by LevelUpLab with Dramatic Iceberg.",
    "project.outer-words.about": "Outer Words is a word-based 2D game where progress depends on typing words accurately. Each correct entry lets you ascend and increases your score; every mistake brings the hapless alien companion closer to triggering overwhelming anxiety and an explosion. The game was created during the Press Start Game Jam by LevelUpLab (Politecnico di Torino videogame student team) with Dramatic Iceberg.",
    "project.outer-words.goal": "Deliver a short, tense word-typing experience with a clear consequence for mistakes and a distinctive character—the anxious alien—at the heart of the mechanic.",
    "project.outer-words.role": "Programmer",
    "project.outer-words.services": "Game Programming",

    "project.arise-of-cosmos.title": "Arise of Cosmos",
    "project.arise-of-cosmos.category": "Action-Adventure 3D",
    "project.arise-of-cosmos.overview": "Action/Adventure where the protagonist is a retro action figure that swaps body parts to gain different abilities. Use them to defeat enemies and explore dungeons. Developed by ExHead Studio / LevelUpLab.",
    "project.arise-of-cosmos.about": "Arise of Cosmos is a 3D Action/Adventure game in which the hero is a retro action figure capable of swapping body parts to change its special abilities. These abilities are used both in combat and to explore dungeons. The project was developed by ExHead Studio with Level Up Lab (Politecnico di Torino's videogame student team).",
    "project.arise-of-cosmos.goal": "Deliver an action-adventure with a distinctive body-swap mechanic that drives both combat and exploration in a retro-inspired 3D world.",
    "project.arise-of-cosmos.role": "Tech Director & Game Developer",
    "project.arise-of-cosmos.services": "Game Programming · Technical Direction",

    "project.zurg-attack.title": "Zurg Attack!",
    "project.zurg-attack.category": "3D Arcade (C / OpenGL)",
    "project.zurg-attack.overview": "Arcade 3D game built from scratch in C with OpenGL—a technical dive into graphics and game loop without engines.",
    "project.zurg-attack.about": "Zurg Attack! is a 3D arcade game developed entirely in C using OpenGL for rendering, focusing on low-level graphics programming and a custom game loop without using a commercial engine.",
    "project.zurg-attack.goal": "Build a playable 3D arcade experience from scratch with C and OpenGL, exploring rendering, input and game logic at a low level.",
    "project.zurg-attack.role": "Programmer",
    "project.zurg-attack.services": "Game Programming · Graphics (OpenGL)",

    "project.andys-room.title": "Andy's Room",
    "project.andys-room.category": "3D Scene (Blender)",
    "project.andys-room.overview": "A 3D recreation of Andy's room from the Pixar film, made in Blender. The scene uses Bezier curves, particle systems, cloth and fluid simulation, sculpting, and more. Project for the Computer Graphics course at Politecnico di Torino.",
    "project.andys-room.about": "Andy's Room is a detailed 3D scene that reproduces the bedroom of Andy, the child protagonist of the Pixar film. The project was built in Blender using a wide range of techniques: array modifier and Bézier curves for the Hot Wheels track, particle systems for confetti and carpet, cloth simulation for the t-shirt and bedding, dupliverts for the spiky ball, fire simulation for the candle, liquid and gas simulation for the spilled juice and steaming tea, skinning and UV mapping, soft body for the deflated balloon, metaballs for the play-doh letter, box modeling and procedural textures for the dresser, bump and normal mapping for the parquet and wainscoting, rigid body for the cube pyramid, sculpting for the owl figurine, spin editing for the clock, boolean operators for the door, displacement and weight painting, and lattice for the poster. Developed for the Computer Graphics course at Politecnico di Torino.",
    "project.andys-room.goal": "Create a faithful 3D reproduction of Andy's room from the film using a variety of modeling, simulation and rendering techniques in Blender.",
    "project.andys-room.role": "3D Artist & Technical Artist",
    "project.andys-room.services": "3D Modeling · Blender · Simulations · Rendering",

    "project.rabbids-motorola-adv.title": "Rabbids & Motorola ADV",
    "project.rabbids-motorola-adv.category": "3D Animation (Blender)",
    "project.rabbids-motorola-adv.overview": "Short 3D advertisement made in Blender, featuring the Rabbids and Motorola. The spot uses rigging for character animation, particle systems for effects, and physics simulations for dynamic motion.",
    "project.rabbids-motorola-adv.about": "Rabbids and Motorola ADV is a 3D animated short made entirely in Blender. The project combines character rigging and keyframe animation for the Rabbids, particle systems for environmental or FX elements, and physics-based simulations (such as rigid body or cloth) to add weight and realism to the motion. Lighting and rendering were handled in Blender to achieve a polished, broadcast-ready look.",
    "project.rabbids-motorola-adv.goal": "Deliver a short, punchy 3D ad that showcases the product while keeping the Rabbids' personality and motion fluid and engaging through rigging, particles and physics.",
    "project.rabbids-motorola-adv.role": "3D Animator & Generalist",
    "project.rabbids-motorola-adv.services": "3D Animation · Rigging · Blender · Particle Systems · Physics Simulation",

    "project.inventory-system.title": "Inventory System",
    "project.inventory-system.category": "Gamified 3D tool",
    "project.inventory-system.overview": "A gamified 3D-inspired internal tool to manage inventory with fast flows and a clear spatial hierarchy of information.",
    "project.inventory-system.about": "Instead of a flat table, this concept explores a more visual way to browse items, highlighting states and transitions so that problems stand out at a glance.",
    "project.inventory-system.goal": "Make repetitive operations feel lighter through motion, micro-interactions and feedback, while keeping the interface precise and reliable.",
    "project.inventory-system.role": "3D & UX Designer",
    "project.inventory-system.services": "Interaction Design · UI Animation · Gamification",

    "project.booking-platform.title": "Booking Platform",
    "project.booking-platform.category": "Interactive experience",
    "project.booking-platform.overview": "A booking flow treated almost like a small game, with subtle animations and feedback to guide people through each step.",
    "project.booking-platform.about": "The project focuses on how motion, timing and sound design can reduce the perceived complexity of a multi-step experience, keeping users oriented from start to finish.",
    "project.booking-platform.goal": "Turn a rigid form into a fluid, reassuring journey: fewer dead ends, clearer states and an experience that feels calm rather than stressful.",
    "project.booking-platform.role": "Interaction & Frontend Developer",
    "project.booking-platform.services": "UI Engineering · UX Prototyping · Micro-interactions",

    "project.analytics-dashboard.title": "Analytics Dashboard",
    "project.analytics-dashboard.category": "Data storytelling",
    "project.analytics-dashboard.overview": "A dashboard that treats metrics as a visual narrative, helping people follow trends rather than stare at raw numbers.",
    "project.analytics-dashboard.about": "The interface explores more expressive charts, focused highlights and progressive disclosure so that the most important signals always feel foregrounded.",
    "project.analytics-dashboard.goal": "Balance density and clarity: pack a lot of information in, but keep the experience scannable, smooth and aesthetically coherent.",
    "project.analytics-dashboard.role": "Data Viz & Frontend Developer",
    "project.analytics-dashboard.services": "Data Visualization · Interaction Design",

    "lightbox.close": "Close",
    "lightbox.prev": "Previous image",
    "lightbox.next": "Next image",
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
      "Durante la mia formazione e le mie esperienze professionali, ho sviluppato competenze attraverso diversi progetti, da applicazioni web ad esperienze real-time con Unity e Unreal Engine, passando per la progettazione e lo sviluppo di applicazioni AR su diversi tipi di visori e lo sviluppo di interfacce intuitive e fluide, attente all'accessibilità e ai bisogni dell'utente.",
    
    "projects.title": "Progetti",
    "experience.title": "Esperienze",
    "education.title": "Formazione",
    "contact.title": "CONTATTAMI",

    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    "experience.logistics.period": "Set 2024 — Oggi",
    "experience.logistics.role": "Software Engineer",
    "experience.logistics.location": "Torino, IT",
    "experience.logistics.desc":
      "Sviluppatore Unity presso Logistics Reply, focalizzato sullo sviluppo di soluzioni di Realtà Aumentata per la logistica su HoloLens 2 e Magic Leap 2. Realizzo demo e proof of concept con Unity, AR Foundation, ARKit e ARCore, presentate nel laboratorio di innovazione Area42. Contribuisco inoltre allo sviluppo dell'architettura e di componenti frontend di LEA, prodotto basato su React e tecnologie web moderne.",
    "experience.levelup.period": "Mar 2024 — Set 2024",
    "experience.levelup.role": "Tech Director e Game Developer",
    "experience.levelup.location": "Torino, IT",
    "experience.levelup.desc":
      "Technical Director per un team di 7 persone su un videogioco in Unity. Mi sono occupato della gestione dei flussi Git, del coordinamento della parte di programmazione e ho contribuito attivamente come game programmer. Il progetto è \"The Arise of Cosmos\", un action/adventure disponibile su itch.io. Ho inoltre fatto da tutor a studenti alle prime armi con il game development, supportandoli con Unreal Engine 5.",
    "experience.cs.period": "Feb 2023 — Ago 2023",
    "experience.cs.role": "Sviluppatore AR — Tirocinio",
    "experience.cs.location": "Tolosa, FR",
    "experience.cs.desc":
      "Sviluppatore AR su applicazioni HoloLens 2 con Unreal Engine (Blueprint e C++). Ho scritto la tesi sulla realtà aumentata per la gestione delle emergenze in scenari di crisi e ho contribuito a due progetti europei, RESCUER e INTREPID, sviluppando nuove funzionalità per CARMA, la piattaforma AR del prodotto Crimson.",
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
    "project.labelFocus": "Focus",
    "project.notFound": "Progetto non trovato",

    "project.televasion.title": "TelEvasion",
    "project.televasion.category": "Action game 2.5D",
    "project.televasion.overview": "Sei risucchiato in una TV malefica e intrappolato in un mondo di canali infiniti. Combatti attraverso show ispirati alla TV anni 2000 e nemici unici per tornare a casa—ma tieni gli spettatori interessati con la Entertainment Bar o cambieranno canale e perderai i progressi. Sblocca le abilità del Telecomando aumentando il Combo.",
    "project.televasion.about": "TelEvasion è un action-fighting 2.5D in cui sei prigioniero dentro la TV e devi combattere attraverso una moltitudine di canali per fuggire. Meccaniche chiave: la Entertainment Bar che scende se non intrattieni il pubblico abbattendo i nemici in fretta; il Combo Counter che sblocca i pulsanti del Telecomando con abilità devastanti; e cartoni e balloon interattivi da lanciare o distruggere. Ogni livello attraversa più canali con look e archetipi di nemici distinti. L'obiettivo è un action-arcade incisivo con un twist innovativo legato agli spettatori.",
    "project.televasion.goal": "Offrire un'esperienza action-arcade 2.5D incisiva con una meccanica da spettatore legata alla Entertainment Bar e alle abilità del Telecomando sbloccate dal Combo.",
    "project.televasion.role": "Lead Gameplay Programmer",
    "project.televasion.services": "Gameplay Programming · Game Design",

    "project.connecting-nature.title": "Connecting Nature",
    "project.connecting-nature.category": "Gioco 3D educativo",
    "project.connecting-nature.overview": "Un paradiso rilassante su isole fluttuanti dove puoi fare amicizia con gli animali e prendertene cura. Esplora biomi, gestisci la fattoria e impara curiosità sulla fauna. Sviluppato per il corso di Realtà Virtuale al Politecnico di Torino con i professori A. Bottino e F. Strada.",
    "project.connecting-nature.about": "Connecting Nature è un gioco educativo in prima persona ambientato su isole flottanti collegate. I giocatori gestiscono una piccola fattoria, soddisfano i bisogni delle creature di diversi biomi e completano task per imparare nozioni sugli animali. Il progetto è stato sviluppato per il corso di Realtà Virtuale al Politecnico di Torino con i professori A. Bottino e F. Strada.",
    "project.connecting-nature.goal": "Offrire un'esperienza rilassante ed educativa che unisce esplorazione, farming leggero e apprendimento sugli animali in un mondo low-poly e family-friendly.",
    "project.connecting-nature.role": "Game Programmer",
    "project.connecting-nature.services": "Game Programming · Game Design",

    "project.outer-words.title": "Outer Words",
    "project.outer-words.category": "Gioco di parole 2D",
    "project.outer-words.overview": "Un gioco 2D a scorrimento in cui i progressi dipendono dalla digitazione corretta delle parole. Le risposte giuste ti fanno salire e aumentano il punteggio; ogni errore avvicina l'alieno alla crisi d'ansia—e a un'esplosione catastrofica. Realizzato durante la Press Start Game Jam da LevelUpLab con Dramatic Iceberg.",
    "project.outer-words.about": "Outer Words è un gioco 2D basato sulle parole: i progressi dipendono dalla digitazione corretta. Ogni risposta giusta ti fa salire e aumenta il punteggio; ogni errore avvicina il povero alieno allo stress e all'esplosione. Il gioco è stato creato durante la Press Start Game Jam da LevelUpLab (team di videogiochi del Politecnico di Torino) con Dramatic Iceberg.",
    "project.outer-words.goal": "Offrire un'esperienza breve e tesa di digitazione di parole, con conseguenze chiare per gli errori e un personaggio distintivo—l'alieno ansioso—al centro della meccanica.",
    "project.outer-words.role": "Programmer",
    "project.outer-words.services": "Game Programming",

    "project.arise-of-cosmos.title": "Arise of Cosmos",
    "project.arise-of-cosmos.category": "Action-Adventure 3D",
    "project.arise-of-cosmos.overview": "Action/Adventure in cui il protagonista è una action figure retrò che scambia parti del corpo per ottenere abilità diverse. Usale per sconfiggere i nemici ed esplorare i dungeon. Sviluppato da ExHead Studio / LevelUpLab.",
    "project.arise-of-cosmos.about": "Arise of Cosmos è un Action/Adventure 3D in cui l'eroe è una action figure retrò in grado di scambiare parti del corpo per cambiare le proprie abilità speciali. Le abilità servono sia in combattimento sia per esplorare i dungeon. Il progetto è stato sviluppato da ExHead Studio con Level Up Lab (team di videogiochi del Politecnico di Torino).",
    "project.arise-of-cosmos.goal": "Offrire un action-adventure con una meccanica distintiva di body-swap che guida sia il combattimento sia l'esplorazione in un mondo 3D in stile retrò.",
    "project.arise-of-cosmos.role": "Tech Director & Game Developer",
    "project.arise-of-cosmos.services": "Game Programming · Technical Direction",

    "project.zurg-attack.title": "Zurg Attack!",
    "project.zurg-attack.category": "Arcade 3D (C / OpenGL)",
    "project.zurg-attack.overview": "Gioco arcade 3D realizzato da zero in C con OpenGL—un progetto tecnico su grafica e game loop senza engine.",
    "project.zurg-attack.about": "Zurg Attack! è un gioco arcade 3D sviluppato interamente in C con OpenGL per il rendering, con focus sulla programmazione grafica low-level e su un game loop custom senza engine commerciale.",
    "project.zurg-attack.goal": "Realizzare un’esperienza arcade 3D giocabile da zero con C e OpenGL, esplorando rendering, input e logica di gioco a basso livello.",
    "project.zurg-attack.role": "Programmer",
    "project.zurg-attack.services": "Game Programming · Graphics (OpenGL)",

    "project.andys-room.title": "Stanza di Andy",
    "project.andys-room.category": "Scena 3D (Blender)",
    "project.andys-room.overview": "Una ricostruzione 3D della cameretta di Andy del film Pixar, realizzata in Blender. La scena usa curve di Bézier, sistemi di particelle, simulazioni cloth e fluidi, sculpting e altro. Progetto per il corso di Informatica Grafica al Politecnico di Torino.",
    "project.andys-room.about": "Stanza di Andy è una scena 3D che riproduce la cameretta di Andy, il bambino protagonista del film Pixar. Il progetto è stato realizzato in Blender con molte tecniche: array modifier e curve di Bézier per la pista Hot Wheels, particle system per coriandoli e tappeto, cloth simulation per la t-shirt e la biancheria, dupliverts per la palla con punte, fire simulation per la candela, simulazione liquidi e gas per il succo rovesciato e il tè fumante, skinning e UV mapping, soft body per il palloncino sgonfio, metaball per la A di pongo, box modeling e texture procedurali per il comò, bump e normal mapping per parquet e boiserie, rigid body per la piramide di cubi, sculpting per il gufo, spin editing per l'orologio, operatori booleani per la porta, displacement e weight painting, lattice per il poster. Sviluppato per il corso di Informatica Grafica al Politecnico di Torino.",
    "project.andys-room.goal": "Realizzare una fedele riproduzione 3D della stanza di Andy del film usando tecniche di modellazione, simulazione e rendering in Blender.",
    "project.andys-room.role": "3D Artist & Technical Artist",
    "project.andys-room.services": "3D Modeling · Blender · Simulazioni · Rendering",

    "project.rabbids-motorola-adv.title": "Rabbids & Motorola ADV",
    "project.rabbids-motorola-adv.category": "Animazione 3D (Blender)",
    "project.rabbids-motorola-adv.overview": "Spot 3D realizzato in Blender con i Rabbids e Motorola. Lo spot usa rigging per l'animazione dei personaggi, particle system per gli effetti e simulazioni fisiche per il movimento dinamico.",
    "project.rabbids-motorola-adv.about": "Rabbids and Motorola ADV è un corto animato 3D realizzato interamente in Blender. Il progetto combina rigging e animazione a keyframe per i Rabbids, particle system per elementi ambientali o FX e simulazioni fisiche (rigid body, cloth) per dare peso e realismo al movimento. Illuminazione e rendering sono stati gestiti in Blender per un risultato pulito e adatto alla diffusione.",
    "project.rabbids-motorola-adv.goal": "Realizzare uno spot 3D breve e incisivo che metta in risalto il prodotto mantenendo la personalità e il movimento dei Rabbids fluidi grazie a rigging, particelle e fisica.",
    "project.rabbids-motorola-adv.role": "3D Animator & Generalist",
    "project.rabbids-motorola-adv.services": "Animazione 3D · Rigging · Blender · Particle Systems · Simulazioni fisiche",

    "project.inventory-system.title": "Inventory System",
    "project.inventory-system.category": "Tool 3D gamificato",
    "project.inventory-system.overview": "Tool interno ispirato al 3D e alla gamification per gestire l’inventario con flussi rapidi e una gerarchia spaziale delle informazioni.",
    "project.inventory-system.about": "In alternativa a una tabella piatta, il concept esplora un modo più visivo di sfogliare gli articoli, evidenziando stati e transizioni per mettere in risalto i problemi a colpo d’occhio.",
    "project.inventory-system.goal": "Alleggerire le operazioni ripetitive con motion, micro-interazioni e feedback, mantenendo l’interfaccia precisa e affidabile.",
    "project.inventory-system.role": "3D & UX Designer",
    "project.inventory-system.services": "Interaction Design · UI Animation · Gamification",

    "project.booking-platform.title": "Booking Platform",
    "project.booking-platform.category": "Esperienza interattiva",
    "project.booking-platform.overview": "Un flusso di prenotazione trattato quasi come un piccolo gioco, con animazioni e feedback che guidano l’utente passo dopo passo.",
    "project.booking-platform.about": "Il progetto esplora come motion, timing e sound design possano ridurre la complessità percepita di un’esperienza multi-step e mantenere l’utente orientato.",
    "project.booking-platform.goal": "Trasformare un form rigido in un percorso fluido e rassicurante: meno vicoli ciechi, stati più chiari e un’esperienza calma invece che stressante.",
    "project.booking-platform.role": "Interaction & Frontend Developer",
    "project.booking-platform.services": "UI Engineering · UX Prototyping · Micro-interactions",

    "project.analytics-dashboard.title": "Analytics Dashboard",
    "project.analytics-dashboard.category": "Data storytelling",
    "project.analytics-dashboard.overview": "Una dashboard che tratta le metriche come una narrazione visiva, per seguire i trend invece di fissare numeri grezzi.",
    "project.analytics-dashboard.about": "L’interfaccia esplora grafici più espressivi, evidenze mirate e progressive disclosure così che i segnali importanti restino in primo piano.",
    "project.analytics-dashboard.goal": "Bilanciare densità e chiarezza: tante informazioni ma esperienza scansionabile, fluida e coerente.",
    "project.analytics-dashboard.role": "Data Viz & Frontend Developer",
    "project.analytics-dashboard.services": "Data Visualization · Interaction Design",

    "lightbox.close": "Chiudi",
    "lightbox.prev": "Immagine precedente",
    "lightbox.next": "Immagine successiva",
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
      "Durant la formation et les expériences professionnelles, j'ai acquis compétences grâce à divers projets, des applications web aux expériences temps réel avec Unity et Unreal Engine, passant par la conception et le développement d'applications AR sur divers types de visors et le développement d'interfaces intuitives et fluides, attentif à l'accessibilité et aux besoins de l'utilisateur.",
    
    "projects.title": "Projets",
    "experience.title": "Expériences",
    "education.title": "Formation",
    "contact.title": "CONTACTEZ-MOI",

    "contact.email": "Courriel",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    "experience.logistics.period": "Sept 2024 — Présent",
    "experience.logistics.role": "Ingénieur logiciel",
    "experience.logistics.location": "Turin, Italie",
    "experience.logistics.desc":
      "Développeur Unity chez Logistics Reply, focalisé sur le développement de solutions de Réalité Augmentée pour la logistique sur HoloLens 2 et Magic Leap 2. Je réalise des démos et proof of concept avec Unity, AR Foundation, ARKit et ARCore, présentées aux clients dans le laboratoire d’innovation Area42. Je contribue également à l’architecture frontend et aux composants de LEA, un produit basé sur React et des technologies web modernes.",
    "experience.levelup.period": "Mar 2024 — Sept 2024",
    "experience.levelup.role": "Tech Director et Game Developer",
    "experience.levelup.location": "Turin, Italie",
    "experience.levelup.desc":
      "Technical Director pour une équipe de 7 personnes sur un jeu vidéo en Unity. J’ai supervisé les workflows Git, coordonné la partie programmation et contribué activement en tant que game programmer. Le projet s’appelle \"The Arise of Cosmos\", un action/adventure disponible sur itch.io. J’ai aussi été tuteur pour des étudiants découvrant le game development, en les accompagnant sur Unreal Engine 5.",
    "experience.cs.period": "Fév 2023 — Août 2023",
    "experience.cs.role": "Développeur AR — Stage",
    "experience.cs.location": "Toulouse, France",
    "experience.cs.desc":
      "Développeur AR sur applications HoloLens 2 avec Unreal Engine (Blueprint et C++). J’ai rédigé mon mémoire sur la réalité augmentée pour la gestion des urgences en situations de crise et contribué à deux projets européens, RESCUER et INTREPID, en développant de nouvelles fonctionnalités pour CARMA, la plateforme AR du produit Crimson.",
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
    "project.labelFocus": "Focus",
    "project.notFound": "Projet introuvable",

    "project.televasion.title": "TelEvasion",
    "project.televasion.category": "Action game 2.5D",
    "project.televasion.overview": "Vous êtes aspiré dans une TV maléfique et piégé dans un monde de chaînes sans fin. Battez-vous à travers des émissions inspirées des années 2000 et des ennemis uniques pour rentrer—mais gardez les spectateurs intéressés avec la Entertainment Bar ou ils changeront de chaîne et vous perdrez votre progression. Débloquez les capacités de la Télécommande en montant le Combo.",
    "project.televasion.about": "TelEvasion est un action-fighting 2.5D où vous êtes prisonnier dans la TV et devez vous battre à travers une multitude de chaînes pour vous échapper. Mécaniques clés : la Entertainment Bar qui baisse si vous n'occupez pas le public en éliminant les ennemis vite ; le Combo Counter qui débloque les boutons de la Télécommande avec des capacités dévastatrices ; et des cartoons et bulles interactives à lancer ou casser. Chaque niveau traverse plusieurs chaînes au look et aux archétypes d'ennemis distincts. L'objectif est un action-arcade percutant avec un twist innovant centré sur le spectateur.",
    "project.televasion.goal": "Proposer une expérience action-arcade 2.5D percutante avec une mécanique de spectateur liée à la Entertainment Bar et aux capacités de la Télécommande débloquées par le Combo.",
    "project.televasion.role": "Lead Gameplay Programmer",
    "project.televasion.services": "Gameplay Programming · Game Design",

    "project.connecting-nature.title": "Connecting Nature",
    "project.connecting-nature.category": "Jeu 3D éducatif",
    "project.connecting-nature.overview": "Un paradis relaxant sur des îles flottantes où tu peux te lier d'amitié avec les animaux et prendre soin d'eux. Explore des biomes, gère ta ferme et apprends des faits sur la faune. Développé pour le cours de Réalité Virtuelle au Politecnico de Turin sous la direction des professeurs A. Bottino et F. Strada.",
    "project.connecting-nature.about": "Connecting Nature est un jeu éducatif à la première personne sur des îles flottantes connectées. Les joueurs gèrent une petite ferme, satisfont les besoins des créatures de différents biomes et accomplissent des tâches pour apprendre des faits sur les animaux. Le projet a été développé pour le cours de Réalité Virtuelle au Politecnico de Turin sous la direction des professeurs A. Bottino et F. Strada.",
    "project.connecting-nature.goal": "Proposer une expérience relaxante et éducative qui allie exploration, farming léger et apprentissage sur les animaux dans un monde low-poly et familial.",
    "project.connecting-nature.role": "Game Programmer",
    "project.connecting-nature.services": "Game Programming · Game Design",

    "project.outer-words.title": "Outer Words",
    "project.outer-words.category": "Jeu de mots 2D",
    "project.outer-words.overview": "Un jeu 2D à défilement où ta progression dépend de la saisie correcte des mots. Les bonnes réponses te font monter et augmentent le score ; chaque erreur rapproche l'alien du stress—et d'une explosion catastrophique. Réalisé pendant la Press Start Game Jam par LevelUpLab avec Dramatic Iceberg.",
    "project.outer-words.about": "Outer Words est un jeu 2D basé sur les mots : la progression dépend de la saisie correcte. Chaque bonne réponse te fait monter et augmente le score ; chaque erreur rapproche le pauvre alien du stress et de l'explosion. Le jeu a été créé pendant la Press Start Game Jam par LevelUpLab (équipe de jeux vidéo du Politecnico de Turin) avec Dramatic Iceberg.",
    "project.outer-words.goal": "Proposer une expérience courte et tendue de saisie de mots, avec des conséquences claires aux erreurs et un personnage distinctif—l'alien anxieux—au cœur du gameplay.",
    "project.outer-words.role": "Programmer",
    "project.outer-words.services": "Game Programming",

    "project.arise-of-cosmos.title": "Arise of Cosmos",
    "project.arise-of-cosmos.category": "Action-Adventure 3D",
    "project.arise-of-cosmos.overview": "Action/Adventure où le protagoniste est une figurine rétro qui échange des parties du corps pour gagner des capacités différentes. Utilise-les pour vaincre les ennemis et explorer les donjons. Développé par ExHead Studio / LevelUpLab.",
    "project.arise-of-cosmos.about": "Arise of Cosmos est un Action/Adventure 3D dont le héros est une figurine rétro capable d'échanger des parties du corps pour changer ses capacités spéciales. Ces capacités servent au combat et à l'exploration des donjons. Le projet a été développé par ExHead Studio avec Level Up Lab (équipe de jeux vidéo du Politecnico de Turin).",
    "project.arise-of-cosmos.goal": "Proposer un action-adventure avec une mécanique distinctive de body-swap qui pilote à la fois le combat et l'exploration dans un monde 3D au style rétro.",
    "project.arise-of-cosmos.role": "Tech Director & Game Developer",
    "project.arise-of-cosmos.services": "Game Programming · Technical Direction",

    "project.zurg-attack.title": "Zurg Attack!",
    "project.zurg-attack.category": "Arcade 3D (C / OpenGL)",
    "project.zurg-attack.overview": "Jeu arcade 3D réalisé from scratch en C avec OpenGL—une plongée technique dans le rendu et la game loop sans engine.",
    "project.zurg-attack.about": "Zurg Attack! est un jeu arcade 3D développé entièrement en C avec OpenGL pour le rendu, en se concentrant sur la programmation graphique bas niveau et une game loop custom sans moteur commercial.",
    "project.zurg-attack.goal": "Construire une expérience arcade 3D jouable from scratch avec C et OpenGL, en explorant le rendu, l’input et la logique de jeu à bas niveau.",
    "project.zurg-attack.role": "Programmer",
    "project.zurg-attack.services": "Game Programming · Graphics (OpenGL)",

    "project.andys-room.title": "La chambre d'Andy",
    "project.andys-room.category": "Scène 3D (Blender)",
    "project.andys-room.overview": "Une recréation 3D de la chambre d'Andy du film Pixar, réalisée dans Blender. La scène utilise des courbes de Bézier, des systèmes de particules, des simulations tissu et fluides, du sculpting et plus. Projet pour le cours d'Informatique Graphique au Politecnico de Turin.",
    "project.andys-room.about": "La chambre d'Andy est une scène 3D qui reproduit la chambre d'Andy, l'enfant protagoniste du film Pixar. Le projet a été réalisé dans Blender avec de nombreuses techniques : array modifier et courbes de Bézier pour la piste Hot Wheels, particle system pour les confettis et le tapis, cloth simulation pour le t-shirt et la literie, dupliverts pour la balle à pics, fire simulation pour la bougie, simulation liquides et gaz pour le jus renversé et le thé fumant, skinning et UV mapping, soft body pour le ballon dégonflé, metaball pour la lettre A en pâte à modeler, box modeling et textures procédurales pour la commode, bump et normal mapping pour le parquet et la boiserie, rigid body pour la pyramide de cubes, sculpting pour le hibou, spin editing pour l'horloge, opérateurs booléens pour la porte, displacement et weight painting, lattice pour l'affiche. Développé pour le cours d'Informatique Graphique au Politecnico de Turin.",
    "project.andys-room.goal": "Créer une reproduction 3D fidèle de la chambre d'Andy du film en utilisant des techniques de modélisation, simulation et rendu dans Blender.",
    "project.andys-room.role": "3D Artist & Technical Artist",
    "project.andys-room.services": "3D Modeling · Blender · Simulations · Rendu",

    "project.rabbids-motorola-adv.title": "Rabbids & Motorola ADV",
    "project.rabbids-motorola-adv.category": "Animation 3D (Blender)",
    "project.rabbids-motorola-adv.overview": "Spot 3D réalisé dans Blender avec les Rabbids et Motorola. Le spot utilise le rigging pour l'animation des personnages, les particle systems pour les effets et les simulations physiques pour le mouvement dynamique.",
    "project.rabbids-motorola-adv.about": "Rabbids and Motorola ADV est un court métrage animé 3D réalisé entièrement dans Blender. Le projet combine rigging et animation keyframe pour les Rabbids, particle systems pour les éléments d'ambiance ou FX et simulations physiques (rigid body, cloth) pour donner du poids et du réalisme au mouvement. L'éclairage et le rendu ont été gérés dans Blender pour un rendu propre et diffusable.",
    "project.rabbids-motorola-adv.goal": "Proposer un spot 3D court et percutant qui mette en avant le produit tout en gardant la personnalité et le mouvement des Rabbids fluides grâce au rigging, aux particules et à la physique.",
    "project.rabbids-motorola-adv.role": "3D Animator & Generalist",
    "project.rabbids-motorola-adv.services": "Animation 3D · Rigging · Blender · Particle Systems · Simulation physique",

    "project.inventory-system.title": "Inventory System",
    "project.inventory-system.category": "Outil 3D gamifié",
    "project.inventory-system.overview": "Outil interne inspiré du 3D et de la gamification pour gérer les stocks avec des flux rapides et une hiérarchie spatiale de l’information.",
    "project.inventory-system.about": "Au lieu d’un tableau plat, ce concept explore une navigation plus visuelle des articles, en mettant en avant états et transitions pour faire ressortir les problèmes d’un coup d’œil.",
    "project.inventory-system.goal": "Alléger les opérations répétitives grâce au motion, aux micro-interactions et au feedback, tout en gardant l’interface précise et fiable.",
    "project.inventory-system.role": "3D & UX Designer",
    "project.inventory-system.services": "Interaction Design · UI Animation · Gamification",

    "project.booking-platform.title": "Booking Platform",
    "project.booking-platform.category": "Expérience interactive",
    "project.booking-platform.overview": "Un parcours de réservation traité comme un petit jeu, avec des animations et du feedback pour guider l’utilisateur à chaque étape.",
    "project.booking-platform.about": "Le projet explore comment le motion, le timing et le sound design peuvent réduire la complexité perçue d’une expérience multi-étapes et garder l’utilisateur orienté.",
    "project.booking-platform.goal": "Transformer un formulaire rigide en un parcours fluide et rassurant : moins d’impasses, des états plus clairs et une expérience calme plutôt que stressante.",
    "project.booking-platform.role": "Interaction & Frontend Developer",
    "project.booking-platform.services": "UI Engineering · UX Prototyping · Micro-interactions",

    "project.analytics-dashboard.title": "Analytics Dashboard",
    "project.analytics-dashboard.category": "Data storytelling",
    "project.analytics-dashboard.overview": "Un dashboard qui traite les métriques comme un récit visuel, pour suivre les tendances plutôt que des chiffres bruts.",
    "project.analytics-dashboard.about": "L’interface explore des graphiques plus expressifs, des mises en avant ciblées et la progressive disclosure pour que les signaux importants restent au premier plan.",
    "project.analytics-dashboard.goal": "Équilibrer densité et clarté : beaucoup d’informations tout en gardant l’expérience scannable, fluide et cohérente.",
    "project.analytics-dashboard.role": "Data Viz & Frontend Developer",
    "project.analytics-dashboard.services": "Data Visualization · Interaction Design",

    "lightbox.close": "Fermer",
    "lightbox.prev": "Image précédente",
    "lightbox.next": "Image suivante",
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

