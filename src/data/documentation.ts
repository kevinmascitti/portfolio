export type LocalizedString = {
  en: string
  it: string
  fr: string
}

/**
 * Alcuni contenuti nella documentazione sono solo in inglese (stringhe plain),
 * mentre altri sono localizzati (oggetti con { en, it, fr }).
 */
export type LocalizedValue = LocalizedString | string

export type CoreSystem = {
  title: LocalizedValue
  description: LocalizedValue
}

export type ProjectDocumentation = {
  overview: LocalizedValue
  coreSystems: CoreSystem[]
  architecture: {
    title: LocalizedValue
    description: LocalizedValue
    principles: Array<{ name: LocalizedValue; description: LocalizedValue }>
    structure: LocalizedValue
  }
  stats: Array<{ label: LocalizedValue; value: string | number; description: LocalizedValue }>
  techniques: LocalizedValue[]
  libraries: { chosen: LocalizedValue[]; systems: LocalizedValue[] }
  learning: LocalizedValue[]
  conclusion: LocalizedValue
}

export const documentation: Record<string, ProjectDocumentation> = {
  "project.connecting-nature.documentation": {
    overview: {
      en: "Connecting Nature is a first-person educational VR game where I worked on the farm-management loop, animal interactions, and biome-based learning. I contributed to the gameplay flow that keeps the experience calm, intuitive, and focused on discovery.",
      it: "Connecting Nature è un gioco educativo VR in prima persona in cui ho lavorato sul loop di gestione della fattoria, sulle interazioni con gli animali e sull'apprendimento guidato dai biomi. Ho contribuito al flusso di gameplay che rende l'esperienza rilassante, intuitiva e centrata sulla scoperta.",
      fr: "Connecting Nature est un jeu éducatif VR à la première personne sur lequel j'ai travaillé : gestion de la ferme, interactions avec les animaux et apprentissage guidé par les biomes. J'ai contribué au flux de gameplay pour garder l'expérience calme, intuitive et orientée vers la découverte."
    },
    coreSystems: [
      {
        title: {
          en: "Farm Management & Animal Care",
          it: "Gestione fattoria e cura degli animali",
          fr: "Gestion de la ferme et soin des animaux"
        },
        description: {
          en: "Implemented the core gameplay loop: the player checks the animals, provides needed resources, and the simulation updates their state. I coordinated feedback so actions feel readable and rewarding in VR.",
          it: "Ho implementato il loop di gameplay principale: il giocatore controlla gli animali, fornisce le risorse necessarie e la simulazione aggiorna lo stato. Ho coordinato il feedback per rendere le azioni leggibili e gratificanti in VR.",
          fr: "J'ai mis en place la boucle de gameplay : le joueur vérifie les animaux, fournit les ressources nécessaires et la simulation met à jour leur état. J'ai coordonné le feedback pour rendre les actions lisibles et gratifiantes en VR."
        }
      },
      {
        title: {
          en: "Biome Exploration & Wildlife Learning",
          it: "Esplorazione biomi e apprendimento sulla fauna",
          fr: "Exploration des biomes et apprentissage de la faune"
        },
        description: {
          en: "Built interactions that connect exploration to learning: entering biomes unlocks contextual information and tasks. I worked on the progression so the player always knows what to do next.",
          it: "Ho costruito interazioni che collegano esplorazione e apprendimento: entrando in un bioma si sbloccano informazioni contestuali e task. Ho lavorato sulla progressione per mantenere chiaro cosa fare successivamente.",
          fr: "J'ai créé des interactions qui relient exploration et apprentissage : en entrant dans un biome, le joueur débloque des informations contextuelles et des objectifs. J'ai travaillé sur la progression pour que l'utilisateur sache toujours quoi faire ensuite."
        }
      },
      {
        title: {
          en: "VR Interaction & Feedback",
          it: "Interazioni VR e feedback",
          fr: "Interactions VR et feedback"
        },
        description: {
          en: "Handled VR input and interaction mechanics, including object use and proximity-based guidance. Ensured responsive audiovisual feedback to make interactions feel natural.",
          it: "Gestione di input e meccaniche di interazione VR, incluso l'uso degli oggetti e la guida basata sulla prossimità. Ho garantito feedback audiovisivo reattivo per rendere le interazioni naturali.",
          fr: "Gestion des entrées VR et des mécaniques d'interaction, incluant l'utilisation d'objets et une guidance basée sur la proximité. J'ai assuré un feedback audiovisuel réactif pour des interactions naturelles."
        }
      },
    ],
    architecture: {
      title: {
        en: "Event-driven, Modular VR Architecture",
        it: "Architettura VR modulare basata su eventi",
        fr: "Architecture VR modulaire axée sur les événements"
      },
      description: {
        en: "I structured the game using decoupled modules that communicate through events. This keeps gameplay systems independent while remaining synchronized, making the code easier to test and evolve.",
        it: "Ho strutturato il gioco con moduli disaccoppiati che comunicano tramite eventi. In questo modo i sistemi di gameplay restano indipendenti ma sincronizzati, rendendo il codice più semplice da testare e migliorare.",
        fr: "J'ai structuré le jeu avec des modules découplés qui communiquent via des événements. Les systèmes de gameplay restent indépendants tout en étant synchronisés, ce qui facilite les tests et l'évolution du code."
      },
      principles: [
        {
          name: { en: "Single Responsibility", it: "Responsabilità singola", fr: "Responsabilité unique" },
          description: {
            en: "Each component focuses on one aspect: farm state, animal interactions, learning UI, or progression rules.",
            it: "Ogni componente si concentra su un aspetto: stato della fattoria, interazioni con gli animali, UI di apprendimento o regole di progressione.",
            fr: "Chaque composant se concentre sur un aspect : état de la ferme, interactions avec les animaux, UI d'apprentissage ou règles de progression."
          }
        },
        {
          name: { en: "Open/Closed", it: "Aperto/Chiuso", fr: "Ouvert/Fermé" },
          description: {
            en: "Added new tasks and learning beats without rewriting the core gameplay loop.",
            it: "Aggiunta nuove attività e momenti di apprendimento senza riscrivere il loop di gameplay principale.",
            fr: "Ajout de nouvelles tâches et séquences d'apprentissage sans réécrire la boucle de gameplay."
          }
        },
        {
          name: { en: "Liskov Substitution", it: "Sostituibilità di Liskov", fr: "Substitution de Liskov" },
          description: {
            en: "Interaction patterns remain consistent across objects, so shared logic can be reused safely.",
            it: "Le interazioni seguono pattern coerenti tra oggetti, permettendo il riuso sicuro della logica condivisa.",
            fr: "Les interactions suivent des patterns cohérents entre objets, ce qui permet de réutiliser une logique commune sans risque."
          }
        },
        {
          name: { en: "Interface Segregation", it: "Separazione delle interfacce", fr: "Séparation des interfaces" },
          description: {
            en: "Modules exchange only the events they need, avoiding tight coupling and large dependency graphs.",
            it: "I moduli scambiano solo gli eventi necessari, evitando accoppiamenti eccessivi e dipendenze inutilmente complesse.",
            fr: "Les modules échangent uniquement les événements dont ils ont besoin, évitant ainsi le couplage et les dépendances trop fortes."
          }
        },
        {
          name: { en: "Dependency Inversion", it: "Inversione delle dipendenze", fr: "Inversion des dépendances" },
          description: {
            en: "Gameplay systems depend on abstractions (events), not on specific implementations of other modules.",
            it: "I sistemi di gameplay dipendono da astrazioni (eventi) e non da implementazioni specifiche di altri moduli.",
            fr: "Les systèmes de gameplay dépendent d'abstractions (événements) plutôt que d'implémentations spécifiques."
          }
        },
      ],
      structure: {
        en: "Composition over inheritance: a set of specialized modules (farm, animals, learning panels, progression controller) work together through an event flow.",
        it: "Composizione invece di ereditarietà: moduli specializzati (fattoria, animali, pannelli di apprendimento, controller di progressione) lavorano insieme tramite flusso di eventi.",
        fr: "Composition plutôt qu'héritage : des modules spécialisés (ferme, animaux, panneaux d'apprentissage, contrôleur de progression) travaillent ensemble via un flux d'événements."
      }
    },
    stats: [
      {
        label: { en: "Animal interaction behaviors", it: "Comportamenti di interazione con animali", fr: "Comportements d'interaction avec les animaux" },
        value: "3+",
        description: {
          en: "Feeding/care actions, feedback states, and readable in-world UI cues.",
          it: "Azioni di cura/alimentazione, stati di feedback e cue UI leggibili nel mondo.",
          fr: "Actions de soin/alimentation, états de feedback et signaux UI lisibles."
        }
      },
      {
        label: { en: "Biome-based learning moments", it: "Momenti di apprendimento per biomi", fr: "Moments d'apprentissage par biomes" },
        value: "4+",
        description: {
          en: "Contextual information triggers and progressive objectives.",
          it: "Trigger di informazioni contestuali e obiettivi progressivi.",
          fr: "Déclencheurs d'informations contextuelles et objectifs progressifs."
        }
      },
      {
        label: { en: "VR interaction feedback", it: "Feedback di interazione VR", fr: "Feedback d'interaction VR" },
        value: "10+",
        description: {
          en: "Audiovisual responses and interaction readability improvements.",
          it: "Risposte audiovisive e miglioramenti della leggibilità delle interazioni.",
          fr: "Réponses audiovisuelles et améliorations de la lisibilité."
        }
      }
    ],
    techniques: [
      {
        en: "Event-driven communication",
        it: "Comunicazione basata su eventi",
        fr: "Communication basée sur les événements"
      },
      {
        en: "State machines for progression",
        it: "Macchine a stati per la progressione",
        fr: "Machines à états pour la progression"
      },
      {
        en: "Raycast / proximity checks for interactions",
        it: "Raycast / controlli di prossimità per interazioni",
        fr: "Raycast / contrôles de proximité pour les interactions"
      },
      {
        en: "Responsive UI feedback in VR",
        it: "Feedback UI reattivo in VR",
        fr: "Feedback UI réactif en VR"
      },
      {
        en: "Coroutine-based timed effects",
        it: "Effetti temporizzati con coroutine",
        fr: "Effets temporisés via des coroutines"
      },
      {
        en: "Decoupled panel system for learning",
        it: "Sistema pannelli disaccoppiato per l'apprendimento",
        fr: "Système de panneaux découplé pour l'apprentissage"
      },
    ],
    libraries: {
      chosen: [
        { en: "Unity XR", it: "Unity XR", fr: "Unity XR" },
        { en: "UI Canvas", it: "UI Canvas", fr: "UI Canvas" },
        { en: "Animator", it: "Animator", fr: "Animator" },
      ],
      systems: [
        { en: "Physics.Raycast", it: "Physics.Raycast", fr: "Physics.Raycast" },
        { en: "Event system", it: "Event system", fr: "Système d'événements" },
        { en: "UI event flow", it: "Flusso eventi UI", fr: "Flux d'événements UI" },
        { en: "AudioSource", it: "AudioSource", fr: "AudioSource" },
        { en: "Scriptable data (config)", it: "Dati configurabili (Scriptable)", fr: "Données configurables (Scriptable)" },
      ],
    },
    learning: [
      {
        en: "Designing calm interaction loops with clear feedback",
        it: "Progettare loop di interazione rilassanti con feedback chiaro",
        fr: "Concevoir des boucles d'interaction calmes avec un feedback clair"
      },
      {
        en: "Coordinating gameplay state with educational content",
        it: "Coordinare lo stato di gameplay con contenuti educativi",
        fr: "Coordonner l'état de jeu avec le contenu éducatif"
      },
      {
        en: "Keeping systems modular so new tasks can be added safely",
        it: "Mantenere i sistemi modulari per aggiungere nuove attività in sicurezza",
        fr: "Garder les systèmes modulaires pour ajouter de nouvelles tâches sans risque"
      },
      {
        en: "Improving VR interaction readability through responsive UI cues",
        it: "Migliorare la leggibilità delle interazioni VR con cue UI reattivi",
        fr: "Améliorer la lisibilité des interactions VR grâce à des indices UI réactifs"
      },
      {
        en: "Using event flow to avoid tight coupling between modules",
        it: "Usare flusso di eventi per evitare accoppiamenti stretti",
        fr: "Utiliser un flux d'événements pour éviter le couplage"
      },
      {
        en: "Balancing progression so players always know the next step",
        it: "Bilanciare la progressione per far capire sempre il passo successivo",
        fr: "Équilibrer la progression pour savoir toujours quoi faire ensuite"
      },
    ],
    conclusion: {
      en: "Connecting Nature taught me how to build an educational VR loop that feels smooth and welcoming. By combining event-driven modular gameplay with clear UI feedback, I delivered a farm-and-biomes experience where learning stays intuitive and discovery remains the focus.",
      it: "Connecting Nature mi ha insegnato a costruire un loop VR educativo che risulta fluido e accogliente. Unendo gameplay modulare basato su eventi e feedback UI chiaro, ho realizzato un'esperienza tra fattoria e biomi in cui l'apprendimento rimane intuitivo e la scoperta resta al centro.",
      fr: "Connecting Nature m'a appris à construire une boucle VR éducative, fluide et accueillante. En combinant un gameplay modulaire basé sur les événements et un feedback UI clair, j'ai livré une expérience ferme et biomes où l'apprentissage reste intuitif et la découverte au premier plan."
    }
  },
  "project.arise-of-cosmos.documentation": {
    overview: {
      en: "Arise of Cosmos is an action RPG where I created the combat system, character customization, elemental abilities, and user interface for Cyrus. I implemented combo attack mechanics, directional dodges, modular equipment that changes stats, and elemental abilities like fire and water with cooldowns and dedicated UI.",
      it: "Arise of Cosmos è un action RPG dove ho creato il sistema di combattimento, la personalizzazione del personaggio, le abilità elementali e l'interfaccia utente per Cyrus. Ho implementato meccaniche di attacco combo, schivate direzionali, equipaggiamento modulare che cambia le statistiche, e abilità elementali come fuoco e acqua con cooldown e UI dedicata.",
      fr: "Arise of Cosmos est un RPG d'action où j'ai créé le système de combat, la personnalisation des personnages, les capacités élémentaires et l'interface utilisateur pour Cyrus. J'ai implémenté des mécaniques d'attaque combo, des esquives directionnelles, un équipement modulaire qui change les statistiques, et des capacités élémentaires comme le feu et l'eau avec des cooldowns et une UI dédiée."
    },
    coreSystems: [
      {
        title: {
          en: "Combat and Attacks",
          it: "Combattimento e Attacchi",
          fr: "Combat et Attaques"
        },
        description: {
          en: "Created a combat system with three types of attacks: basic combo attack (up to 2 chained hits), strong attack with cooldown, and dodges in 4 directions. Each attack hits enemies with specific colliders and tracks which enemies have already been hit to avoid multiple damage.",
          it: "Creato un sistema di combattimento con tre tipi di attacchi: attacco combo base (fino a 2 colpi concatenati), attacco forte con cooldown, e schivate in 4 direzioni. Ogni attacco colpisce i nemici con collider specifici e traccia quali nemici sono già stati colpiti per evitare danni multipli.",
          fr: "Créé un système de combat avec trois types d'attaques : attaque combo de base (jusqu'à 2 coups enchaînés), attaque forte avec cooldown, et esquives dans 4 directions. Chaque attaque touche les ennemis avec des colliders spécifiques et suit quels ennemis ont déjà été touchés pour éviter des dommages multiples."
        }
      },
      {
        title: {
          en: "Character Customization",
          it: "Personalizzazione del Personaggio",
          fr: "Personnalisation des Personnages"
        },
        description: {
          en: "Developed a system where the player can choose 6 body parts: head, body, right arm, left arm, legs, weapon. Each part changes visual appearance, stats (attack, defense, health) and sometimes special abilities. The interface shows the element and stats before equipping.",
          it: "Sviluppato un sistema dove il giocatore può scegliere 6 parti del corpo: testa, corpo, braccio destro, braccio sinistro, gambe, arma. Ogni parte cambia aspetto visivo, statistiche (attacco, difesa, salute) e a volte abilità speciali. L'interfaccia mostra l'elemento e le statistiche prima dell'equipaggiamento.",
          fr: "Développé un système où le joueur peut choisir 6 parties du corps : tête, corps, bras droit, bras gauche, jambes, arme. Chaque partie change l'apparence visuelle, les statistiques (attaque, défense, santé) et parfois des capacités spéciales. L'interface montre l'élément et les statistiques avant l'équipement."
        }
      },
      {
        title: {
          en: "Elemental Abilities",
          it: "Abilità Elementali",
          fr: "Capacités Élémentaires"
        },
        description: {
          en: "Implemented elemental abilities for right and left arms: fire to launch fireballs, water for jets, protective shields. Each ability has cooldown, charge bars in UI, dedicated sounds, and integration with the element system. Continuous abilities activate by holding a key.",
          it: "Implementate abilità elementali per braccio destro e sinistro: fuoco per lanciare palle di fuoco, acqua per getti, scudi protettivi. Ogni abilità ha cooldown, barre di carica nell'UI, suoni dedicati, e integrazione con il sistema elementale. Abilità continue si attivano tenendo premuto un tasto.",
          fr: "Implémenté des capacités élémentaires pour les bras droit et gauche : feu pour lancer des boules de feu, eau pour des jets, boucliers protecteurs. Chaque capacité a un cooldown, des barres de charge dans l'UI, des sons dédiés, et une intégration avec le système élémentaire. Les capacités continues s'activent en maintenant une touche."
        }
      },
      {
        title: {
          en: "Player Movement and Input",
          it: "Movimento del Giocatore e Input",
          fr: "Mouvement du Joueur et Entrée"
        },
        description: {
          en: "Managed keyboard and gamepad input with smooth acceleration/deceleration. Fixed issues with dash input priority over combat. Implemented camera following with smooth damping and edge detection for bounds.",
          it: "Gestito input da tastiera e gamepad con accelerazione/decelerazione fluida. Risolti problemi con priorità input dash su combattimento. Implementata camera che segue con smorzamento fluido e rilevamento bordi per limiti.",
          fr: "Géré les entrées clavier et manette avec accélération/décélération fluide. Résolu les problèmes de priorité des entrées de dash sur le combat. Implémenté une caméra qui suit avec amortissement fluide et détection des bords pour les limites."
        }
      },
      {
        title: {
          en: "UI and HUD",
          it: "UI e HUD",
          fr: "UI et HUD"
        },
        description: {
          en: "Created comprehensive UI including HP bar, mana/ability cooldown bars, combo counter, character panel with part selection, inventory display, and damage popup numbers. All UI elements update in real-time with smooth animations.",
          it: "Creato UI completa inclusa barra HP, barre cooldown mana/abilità, contatore combo, pannello personaggio con selezione parti, display inventario, e numeri popup danno. Tutti gli elementi UI si aggiornano in tempo reale con animazioni fluide.",
          fr: "Créé une UI complète incluant la barre HP, les barres de cooldown mana/capacité, le compteur combo, le panneau personnage avec sélection des parties, l'affichage inventaire, et les numéros popup de dégâts. Tous les éléments UI se mettent à jour en temps réel avec des animations fluides."
        }
      },
      {
        title: {
          en: "Animation Controller",
          it: "Controller delle Animazioni",
          fr: "Contrôleur d'Animation"
        },
        description: {
          en: "Set up Animator states and transitions for idle, attack, dodge, hit, death animations. Managed animation parameters (speed, direction) synchronized with game logic. Handled animation events for collision and effect timings.",
          it: "Impostati stati e transizioni Animator per animazioni idle, attacco, schivata, colpo, morte. Gestiti parametri animazione (velocità, direzione) sincronizzati con logica di gioco. Gestiti eventi animazione per tempistiche collisione ed effetti.",
          fr: "Configuré les états et transitions Animator pour les animations idle, attaque, esquive, coup, mort. Géré les paramètres d'animation (vitesse, direction) synchronisés avec la logique de jeu. Géré les événements d'animation pour les timings de collision et d'effets."
        }
      },
      {
        title: {
          en: "Enemy AI and Behavior",
          it: "IA e Comportamento dei Nemici",
          fr: "IA et Comportement des Ennemis"
        },
        description: {
          en: "Implemented enemy patrol, chase, and attack states with navigation mesh pathfinding. Enemies pursue player when visible, stop attacking when too far, and play appropriate animations. Integrated with combo and damage systems.",
          it: "Implementati stati pattuglia, inseguimento e attacco dei nemici con pathfinding mesh di navigazione. I nemici inseguono il giocatore quando visibile, smettono di attaccare quando troppo lontani, e riproducono animazioni appropriate. Integrati con sistemi combo e danno.",
          fr: "Implémenté les états de patrouille, poursuite et attaque des ennemis avec pathfinding mesh de navigation. Les ennemis poursuivent le joueur quand visible, arrêtent d'attaquer quand trop loin, et jouent des animations appropriées. Intégré avec les systèmes combo et dégâts."
        }
      },
      {
        title: {
          en: "Game Events and State Management",
          it: "Eventi di Gioco e Gestione dello Stato",
          fr: "Événements de Jeu et Gestion d'État"
        },
        description: {
          en: "Used C# events to coordinate all systems: when attack lands, notify combo counter; when equipment changes, update stats. This keeps components independent but synchronized. State manager handles game states (menu, playing, paused, game over).",
          it: "Usati eventi C# per coordinare tutti i sistemi: quando un attacco colpisce, notifica contatore combo; quando equipaggiamento cambia, aggiorna statistiche. Questo mantiene componenti indipendenti ma sincronizzati. Gestore stato gestisce stati di gioco (menu, giocando, pausa, game over).",
          fr: "Utilisé des événements C# pour coordonner tous les systèmes : quand une attaque touche, notifie le compteur combo ; quand l'équipement change, met à jour les statistiques. Cela garde les composants indépendants mais synchronisés. Le gestionnaire d'état gère les états de jeu (menu, en jeu, pause, game over)."
        }
      },
    ],
    architecture: {
      title: {
        en: "Event-Driven Architecture",
        it: "Architettura Basata su Eventi",
        fr: "Architecture Axée sur les Événements"
      },
      description: {
        en: "Each system emits events that others subscribe to. This decouples components so they don't directly reference each other, making the code modular and testable.",
        it: "Ogni sistema emette eventi a cui altri si iscrivono. Questo disaccoppia i componenti così non si riferiscono direttamente l'uno all'altro, rendendo il codice modulare e testabile.",
        fr: "Chaque système émet des événements auxquels les autres s'abonnent. Cela découple les composants pour qu'ils ne se référencent pas directement les uns les autres, rendant le code modulaire et testable."
      },
      principles: [
        {
          name: {
            en: "Single Responsibility",
            it: "Singola Responsabilità",
            fr: "Responsabilité Unique"
          },
          description: {
            en: "Each class does one thing: combats handles hits, inventory manages items, animations play states.",
            it: "Ogni classe fa una cosa: combattimenti gestisce colpi, inventario gestisce oggetti, animazioni riproduce stati.",
            fr: "Chaque classe fait une chose : les combats gèrent les coups, l'inventaire gère les objets, les animations jouent les états."
          }
        },
        {
          name: {
            en: "Open/Closed",
            it: "Aperto/Chiuso",
            fr: "Ouvert/Fermé"
          },
          description: {
            en: "Created base classes that can be extended for new abilities or enemies without changing core logic.",
            it: "Create classi base che possono essere estese per nuove abilità o nemici senza cambiare logica core.",
            fr: "Créé des classes de base qui peuvent être étendues pour de nouvelles capacités ou ennemis sans changer la logique core."
          }
        },
        {
          name: {
            en: "Liskov Substitution",
            it: "Sostituzione di Liskov",
            fr: "Substitution de Liskov"
          },
          description: {
            en: "All attack types follow the same interface, so code works uniformly for any attack.",
            it: "Tutti i tipi di attacco seguono la stessa interfaccia, così il codice funziona uniformemente per qualsiasi attacco.",
            fr: "Tous les types d'attaque suivent la même interface, donc le code fonctionne uniformément pour toute attaque."
          }
        },
        {
          name: {
            en: "Interface Segregation",
            it: "Segregazione delle Interfacce",
            fr: "Séparation des Interfaces"
          },
          description: {
            en: "Components exchange only the messages they need, not full object states.",
            it: "I componenti scambiano solo i messaggi di cui hanno bisogno, non stati oggetto completi.",
            fr: "Les composants échangent seulement les messages dont ils ont besoin, pas les états d'objet complets."
          }
        },
        {
          name: {
            en: "Dependency Inversion",
            it: "Inversione delle Dipendenze",
            fr: "Inversion des Dépendances"
          },
          description: {
            en: "Important components depend on abstractions (events), not specific implementations.",
            it: "I componenti importanti dipendono da astrazioni (eventi), non implementazioni specifiche.",
            fr: "Les composants importants dépendent d'abstractions (événements), pas d'implémentations spécifiques."
          }
        },
      ],
      structure: {
        en: "Organized using inheritance hierarchies: Weapon > Attack Type, Ability > Element Type, Equipment > Part Type. Each specialization adds custom behavior while reusing base functionality.",
        it: "Organizzato usando gerarchie di ereditarietà: Arma > Tipo Attacco, Abilità > Tipo Elemento, Equipaggiamento > Tipo Parte. Ogni specializzazione aggiunge comportamento personalizzato riutilizzando funzionalità base.",
        fr: "Organisé en utilisant des hiérarchies d'héritage : Arme > Type d'Attaque, Capacité > Type d'Élément, Équipement > Type de Partie. Chaque spécialisation ajoute un comportement personnalisé tout en réutilisant les fonctionnalités de base."
      }
    },
    stats: [
      {
        label: {
          en: "Combat Attacks Implemented",
          it: "Attacchi di Combattimento Implementati",
          fr: "Attaques de Combat Implémentées"
        },
        value: 3,
        description: {
          en: "Basic combo, strong attack, directional dodges",
          it: "Combo base, attacco forte, schivate direzionali",
          fr: "Combo de base, attaque forte, esquives directionnelles"
        }
      },
      {
        label: {
          en: "Customization Parts",
          it: "Parti di Personalizzazione",
          fr: "Parties de Personnalisation"
        },
        value: 6,
        description: {
          en: "Head, body, arms (x2), legs, weapon",
          it: "Testa, corpo, braccia (x2), gambe, arma",
          fr: "Tête, corps, bras (x2), jambes, arme"
        }
      },
      {
        label: {
          en: "Elemental Abilities",
          it: "Abilità Elementali",
          fr: "Capacités Élémentaires"
        },
        value: "3+",
        description: {
          en: "Fire, water, shield, and special combinations",
          it: "Fuoco, acqua, scudo, e combinazioni speciali",
          fr: "Feu, eau, bouclier, et combinaisons spéciales"
        }
      },
      {
        label: {
          en: "UI Elements",
          it: "Elementi UI",
          fr: "Éléments UI"
        },
        value: "15+",
        description: {
          en: "Bars, panels, popups, character display",
          it: "Barre, pannelli, popup, display personaggio",
          fr: "Barres, panneaux, popups, affichage personnage"
        }
      }
    ],
    techniques: [
      {
        en: "Event systems for loose coupling",
        it: "Sistemi di eventi per accoppiamento lasco",
        fr: "Systèmes d'événements pour couplage lâche"
      },
      {
        en: "Scriptable Objects for configuration",
        it: "Scriptable Objects per configurazione",
        fr: "Scriptable Objects pour configuration"
      },
      {
        en: "Animator state machines",
        it: "Macchine a stati Animator",
        fr: "Machines à états Animator"
      },
      {
        en: "NavMesh for pathfinding",
        it: "NavMesh per pathfinding",
        fr: "NavMesh pour pathfinding"
      },
      {
        en: "Coroutines for timed effects",
        it: "Coroutine per effetti temporizzati",
        fr: "Coroutines pour effets temporisés"
      },
      {
        en: "Lerp for smooth transitions",
        it: "Lerp per transizioni fluide",
        fr: "Lerp pour transitions fluides"
      },
      {
        en: "Collider-based hit detection",
        it: "Rilevamento colpi basato su collider",
        fr: "Détection de coups basée sur collider"
      },
      {
        en: "Dictionary-based pooling",
        it: "Pooling basato su dizionario",
        fr: "Pooling basé sur dictionnaire"
      },
      {
        en: "UI Slider and Fill for bars",
        it: "UI Slider e Fill per barre",
        fr: "UI Slider et Fill pour barres"
      },
    ],
    libraries: {
      chosen: [
        {
          en: "UI Text Rendering",
          it: "Rendering testo UI",
          fr: "Rendu de texte UI"
        },
        {
          en: "Cinemachine",
          it: "Cinemachine",
          fr: "Cinemachine"
        },
        {
          en: "FMOD",
          it: "FMOD",
          fr: "FMOD"
        }
      ],
      systems: [
        {
          en: "Animator Controller",
          it: "Controller delle animazioni",
          fr: "Contrôleur d'animation"
        },
        {
          en: "Physics.Raycast",
          it: "Physics.Raycast",
          fr: "Physics.Raycast"
        },
        {
          en: "UI Canvas",
          it: "UI Canvas",
          fr: "UI Canvas"
        },
        {
          en: "Audio Manager",
          it: "Gestore Audio",
          fr: "Gestionnaire Audio"
        },
        {
          en: "Navigation mesh",
          it: "Mesh di navigazione",
          fr: "Mesh de navigation"
        },
        {
          en: "Event system",
          it: "Sistema di eventi",
          fr: "Système d'événements"
        },
      ],
    },
    learning: [
      {
        en: "Decoupled systems using events instead of direct references",
        it: "Sistemi disaccoppiati usando eventi invece di riferimenti diretti",
        fr: "Systèmes découplés utilisant des événements au lieu de références directes"
      },
      {
        en: "Balanced gameplay with multiple interacting mechanics",
        it: "Gameplay bilanciato con molteplici meccaniche interagenti",
        fr: "Gameplay équilibré avec plusieurs mécaniques interactives"
      },
      {
        en: "Performance optimization with pooling and culling",
        it: "Ottimizzazione prestazioni con pooling e culling",
        fr: "Optimisation des performances avec pooling et culling"
      },
      {
        en: "Responsive controls through input buffering",
        it: "Controlli responsivi attraverso buffering input",
        fr: "Contrôles responsifs via buffering d'entrée"
      },
      {
        en: "Engaging feedback with sound and animation",
        it: "Feedback coinvolgente con suono e animazione",
        fr: "Feedback engageant avec son et animation"
      },
      {
        en: "Scalable architecture that supports new content",
        it: "Architettura scalabile che supporta nuovo contenuto",
        fr: "Architecture évolutive qui supporte le nouveau contenu"
      },
    ],
    conclusion: {
      en: "Arise of Cosmos is a complete action RPG where I contributed core combat, customization, elemental abilities, and UI systems. Using event-driven architecture, I created modular systems that work together seamlessly while remaining independent and testable. This project taught me to design engaging gameplay loops, manage complex state through clean architecture, and deliver a polished player experience.",
      it: "Arise of Cosmos è un action RPG completo dove ho contribuito ai sistemi core di combattimento, personalizzazione, abilità elementali e UI. Usando architettura basata su eventi, ho creato sistemi modulari che lavorano insieme senza problemi rimanendo indipendenti e testabili. Questo progetto mi ha insegnato a progettare loop di gameplay coinvolgenti, gestire stati complessi attraverso architettura pulita, e fornire un'esperienza giocatore raffinata.",
      fr: "Arise of Cosmos est un RPG d'action complet où j'ai contribué aux systèmes core de combat, personnalisation, capacités élémentaires et UI. En utilisant une architecture axée sur les événements, j'ai créé des systèmes modulaires qui fonctionnent ensemble de manière transparente tout en restant indépendants et testables. Ce projet m'a appris à concevoir des boucles de gameplay engageantes, gérer des états complexes via une architecture propre, et livrer une expérience joueur polie."
    }
  },
  "project.televasion.documentation": {
    overview: {
      en: "TelEvasion is a dynamic action game where I created combo system, offensive dash, room progression, and throwable objects that increase combo score. The game has levels with rooms to complete by killing all spawned enemies, with entertainment mechanics and bonus lives.",
      it: "TelEvasion è un gioco d'azione dinamico dove ho creato sistema combo, dash offensivo, progressione stanze, e oggetti lanciabili che aumentano il punteggio combo. Il gioco ha livelli con stanze da completare uccidendo tutti i nemici spawnati, con meccaniche di intrattenimento e vite bonus.",
      fr: "TelEvasion est un jeu d'action dynamique où j'ai créé le système combo, le dash offensif, la progression des salles, et des objets lançables qui augmentent le score combo. Le jeu a des niveaux avec des salles à compléter en tuant tous les ennemis spawnés, avec des mécaniques de divertissement et des vies bonus."
    },
    coreSystems: [
      {
        title: {
          en: "Combo System",
          it: "Sistema Combo",
          fr: "Système Combo"
        },
        description: {
          en: "Implemented a combo counter that tracks consecutive hits within a time limit. Each enemy or thrown object hit increases counter, which resets if too much time passes. Combo increases player stamina and activates visual popups. It's the core engagement mechanic.",
          it: "Implementato un contatore combo che traccia colpi consecutivi entro un limite di tempo. Ogni nemico o oggetto lanciato colpito aumenta il contatore, che si resetta se passa troppo tempo. Il combo aumenta la stamina del giocatore e attiva popup visivi. È la meccanica di coinvolgimento core.",
          fr: "Implémenté un compteur combo qui suit les coups consécutifs dans une limite de temps. Chaque ennemi ou objet lancé touché augmente le compteur, qui se remet à zéro si trop de temps passe. Le combo augmente la stamina du joueur et active des popups visuels. C'est la mécanique d'engagement core."
        }
      },
      {
        title: {
          en: "Dash System",
          it: "Sistema Dash",
          fr: "Système Dash"
        },
        description: {
          en: "Created an offensive dash that lets the player move quickly forward while becoming invincible. Dash checks distance limits to avoid walls, deals damage to hit enemies, and increases combo. Includes random sounds and visual effects.",
          it: "Creato un dash offensivo che permette al giocatore di muoversi velocemente in avanti diventando invincibile. Il dash controlla limiti di distanza per evitare muri, infligge danno ai nemici colpiti, e aumenta combo. Include suoni casuali ed effetti visivi.",
          fr: "Créé un dash offensif qui permet au joueur de se déplacer rapidement en avant tout en devenant invincible. Le dash vérifie les limites de distance pour éviter les murs, inflige des dégâts aux ennemis touchés, et augmente le combo. Inclut des sons aléatoires et des effets visuels."
        }
      },
      {
        title: {
          en: "Room and Level Progression",
          it: "Progressione Stanze e Livelli",
          fr: "Progression des Salles et Niveaux"
        },
        description: {
          en: "Developed room clearing mechanics: player completes rooms by killing all spawned enemies. Each room has ID, spawn point, and connections to previous/next. When room finishes, next unlocks or level completes. Levels have changing backgrounds.",
          it: "Sviluppate meccaniche di pulizia stanze: il giocatore completa stanze uccidendo tutti i nemici spawnati. Ogni stanza ha ID, punto di spawn, e connessioni a precedente/successiva. Quando la stanza finisce, successiva si sblocca o livello completa. I livelli hanno sfondi che cambiano.",
          fr: "Développé des mécaniques de nettoyage de salles : le joueur complète les salles en tuant tous les ennemis spawnés. Chaque salle a un ID, un point de spawn, et des connexions à précédente/suivante. Quand la salle finit, la suivante se débloque ou le niveau se complète. Les niveaux ont des arrière-plans changeants."
        }
      },
      {
        title: {
          en: "Throwable Objects",
          it: "Oggetti Lanciabili",
          fr: "Objets Lançables"
        },
        description: {
          en: "Created collectible and throwable objects that hit enemies and increase combo. Objects have life timers, sound effects, and destruction on use. Some spawn special popups like 'Great' or 'Wow' for visual feedback.",
          it: "Creati oggetti collezionabili e lanciabili che colpiscono nemici e aumentano combo. Gli oggetti hanno timer di vita, effetti sonori, e distruzione all'uso. Alcuni spawnano popup speciali come 'Great' o 'Wow' per feedback visivo.",
          fr: "Créé des objets collectibles et lançables qui touchent les ennemis et augmentent le combo. Les objets ont des timers de vie, des effets sonores, et destruction à l'usage. Certains spawnent des popups spéciaux comme 'Great' ou 'Wow' pour feedback visuel."
        }
      },
      {
        title: {
          en: "Player Character Management",
          it: "Gestione Personaggio Giocatore",
          fr: "Gestion du Personnage Joueur"
        },
        description: {
          en: "Managed player health, stamina, and bonus lives. Character receives damage, becomes temporarily invincible, and shows updated UI bars. Handles nearby object inventory and arm movement for grabbing.",
          it: "Gestita salute, stamina, e vite bonus del giocatore. Il personaggio riceve danno, diventa temporaneamente invincibile, e mostra barre UI aggiornate. Gestisce inventario oggetti vicini e movimento braccio per afferrare.",
          fr: "Géré la santé, la stamina, et les vies bonus du joueur. Le personnage reçoit des dégâts, devient temporairement invincible, et montre des barres UI mises à jour. Gère l'inventaire des objets proches et le mouvement du bras pour saisir."
        }
      },
      {
        title: {
          en: "Camera System",
          it: "Sistema Fotocamera",
          fr: "Système de Caméra"
        },
        description: {
          en: "Created camera following player with smooth movement and dynamic positioning in rooms. Camera adapts to room bounds and transitions between levels.",
          it: "Creata fotocamera che segue giocatore con movimento fluido e posizionamento dinamico nelle stanze. La fotocamera si adatta ai limiti stanza e transizioni tra livelli.",
          fr: "Créé une caméra suivant le joueur avec mouvement fluide et positionnement dynamique dans les salles. La caméra s'adapte aux limites de salle et transitions entre niveaux."
        }
      },
      {
        title: {
          en: "User Interface",
          it: "Interfaccia Utente",
          fr: "Interface Utilisateur"
        },
        description: {
          en: "Developed UI for combo counter, controller buttons, and hit counter with real-time animations and visual feedback for player actions.",
          it: "Sviluppata UI per contatore combo, pulsanti controller, e contatore colpi con animazioni real-time e feedback visivo per azioni giocatore.",
          fr: "Développé l'UI pour compteur combo, boutons contrôleur, et compteur de coups avec animations temps réel et feedback visuel pour actions joueur."
        }
      },
      {
        title: {
          en: "Event Coordination",
          it: "Coordinamento Eventi",
          fr: "Coordination des Événements"
        },
        description: {
          en: "Used events to keep all systems in sync: enemy death updates room count, thrown object increases combo. Each component is independent but coordinated.",
          it: "Usati eventi per mantenere tutti i sistemi sincronizzati: morte nemico aggiorna conteggio stanza, oggetto lanciato aumenta combo. Ogni componente è indipendente ma coordinato.",
          fr: "Utilisé des événements pour garder tous les systèmes synchronisés : mort ennemi met à jour le compte salle, objet lancé augmente combo. Chaque composant est indépendant mais coordonné."
        }
      },
    ],
    architecture: {
      title: {
        en: "Component-Based Design",
        it: "Design Basato su Componenti",
        fr: "Design Basé sur les Composants"
      },
      description: {
        en: "Each system is modular and reusable. Player, enemies, objects use common patterns. Composition over inheritance for flexibility.",
        it: "Ogni sistema è modulare e riutilizzabile. Giocatore, nemici, oggetti usano pattern comuni. Composizione sopra ereditarietà per flessibilità.",
        fr: "Chaque système est modulaire et réutilisable. Joueur, ennemis, objets utilisent des patterns communs. Composition sur héritage pour flexibilité."
      },
      principles: [
        {
          name: {
            en: "Single Responsibility",
            it: "Singola Responsabilità",
            fr: "Responsabilité Unique"
          },
          description: {
            en: "ComboCounter manages combo, Dash handles movement, Room tracks enemies.",
            it: "ComboCounter gestisce combo, Dash gestisce movimento, Room traccia nemici.",
            fr: "ComboCounter gère combo, Dash gère mouvement, Room suit ennemis."
          }
        },
        {
          name: {
            en: "Open/Closed",
            it: "Aperto/Chiuso",
            fr: "Ouvert/Fermé"
          },
          description: {
            en: "Add new enemy types or objects without changing base systems.",
            it: "Aggiungi nuovi tipi nemici o oggetti senza cambiare sistemi base.",
            fr: "Ajoutez de nouveaux types d'ennemis ou objets sans changer les systèmes de base."
          }
        },
        {
          name: {
            en: "Liskov Substitution",
            it: "Sostituzione di Liskov",
            fr: "Substitution de Liskov"
          },
          description: {
            en: "All throwable objects follow same interface.",
            it: "Tutti gli oggetti lanciabili seguono la stessa interfaccia.",
            fr: "Tous les objets lançables suivent la même interface."
          }
        },
        {
          name: {
            en: "Interface Segregation",
            it: "Segregazione delle Interfacce",
            fr: "Séparation des Interfaces"
          },
          description: {
            en: "Systems communicate via specific events, not full state.",
            it: "I sistemi comunicano via eventi specifici, non stato completo.",
            fr: "Les systèmes communiquent via événements spécifiques, pas état complet."
          }
        },
        {
          name: {
            en: "Dependency Inversion",
            it: "Inversione delle Dipendenze",
            fr: "Inversion des Dépendances"
          },
          description: {
            en: "Components depend on events, not direct references.",
            it: "I componenti dipendono da eventi, non riferimenti diretti.",
            fr: "Les composants dépendent d'événements, pas de références directes."
          }
        },
      ],
      structure: {
        en: "Inheritance hierarchy: Base Character > Player, Base Grabbable > Specific Objects, Base Room > Specialized Rooms. Composition for optional features like animation and audio.",
        it: "Gerarchia di ereditarietà: Personaggio Base > Giocatore, Afferrabile Base > Oggetti Specifici, Stanza Base > Stanze Specializzate. Composizione per caratteristiche opzionali come animazione e audio.",
        fr: "Hiérarchie d'héritage : Personnage de Base > Joueur, Saisissable de Base > Objets Spécifiques, Salle de Base > Salles Spécialisées. Composition pour caractéristiques optionnelles comme animation et audio."
      }
    },
    stats: [
      {
        label: {
          en: "Combo Mechanics",
          it: "Meccaniche Combo",
          fr: "Mécaniques Combo"
        },
        value: 3,
        description: {
          en: "Counter, timer, stamina boost",
          it: "Contatore, timer, boost stamina",
          fr: "Compteur, timer, boost stamina"
        }
      },
      {
        label: {
          en: "Throwable Objects",
          it: "Oggetti Lanciabili",
          fr: "Objets Lançables"
        },
        value: 5,
        description: {
          en: "Different types with unique effects",
          it: "Diversi tipi con effetti unici",
          fr: "Différents types avec effets uniques"
        }
      },
      {
        label: {
          en: "Rooms per Level",
          it: "Stanze per Livello",
          fr: "Salles par Niveau"
        },
        value: "3+",
        description: {
          en: "Progressive difficulty and themes",
          it: "Difficoltà progressiva e temi",
          fr: "Difficulté progressive et thèmes"
        }
      },
      {
        label: {
          en: "UI Elements",
          it: "Elementi UI",
          fr: "Éléments UI"
        },
        value: "8+",
        description: {
          en: "Bars, counters, popups",
          it: "Barre, contatori, popup",
          fr: "Barres, compteurs, popups"
        }
      },
      {
        label: {
          en: "Event Systems",
          it: "Sistemi di Eventi",
          fr: "Systèmes d'Événements"
        },
        value: "10+",
        description: {
          en: "Coordinating all game systems",
          it: "Coordinamento di tutti i sistemi di gioco",
          fr: "Coordination de tous les systèmes de jeu"
        }
      },
    ],
    libraries: {
      chosen: [
        { en: "UI Text Rendering", it: "Rendering testo UI", fr: "Rendu de texte UI" },
        { en: "Unity Input System", it: "Unity Input System", fr: "Unity Input System" },
        { en: "DOTween", it: "DOTween", fr: "DOTween" }
      ],
      systems: [
        { en: "Animator", it: "Animator", fr: "Animator" },
        { en: "Physics.Raycast/SphereCast", it: "Physics.Raycast/SphereCast", fr: "Physics.Raycast/SphereCast" },
        { en: "UI Canvas", it: "UI Canvas", fr: "UI Canvas" },
        { en: "AudioSource", it: "AudioSource", fr: "AudioSource" },
        { en: "Resources.Load", it: "Resources.Load", fr: "Resources.Load" },
        { en: "LayerMask", it: "LayerMask", fr: "LayerMask" }
      ]
    },
    techniques: [
      {
        en: "Event-driven communication",
        it: "Comunicazione basata su eventi",
        fr: "Communication axée sur les événements"
      },
      {
        en: "Component composition",
        it: "Composizione di componenti",
        fr: "Composition de composants"
      },
      {
        en: "State machines for progression",
        it: "Macchine a stati per progressione",
        fr: "Machines à états pour progression"
      },
      {
        en: "Pooling for objects",
        it: "Pooling per oggetti",
        fr: "Pooling pour objets"
      },
      {
        en: "Coroutine for timers",
        it: "Coroutine per timer",
        fr: "Coroutine pour timers"
      },
      {
        en: "Lerp for smooth movement",
        it: "Lerp per movimento fluido",
        fr: "Lerp pour mouvement fluide"
      },
      {
        en: "Raycast for grabbing",
        it: "Raycast per afferrare",
        fr: "Raycast pour saisir"
      },
      {
        en: "UI animations",
        it: "Animazioni UI",
        fr: "Animations UI"
      },
    ],
    learning: [
      {
        en: "Decoupled architecture improves code maintainability",
        it: "L'architettura disaccoppiata migliora la manutenibilità del codice",
        fr: "L'architecture découplée améliore la maintenabilité du code"
      },
      {
        en: "Event systems coordinate complex interactions",
        it: "I sistemi di eventi coordinano interazioni complesse",
        fr: "Les systèmes d'événements coordonnent les interactions complexes"
      },
      {
        en: "Frantic gameplay requires smooth controls and feedback",
        it: "Il gameplay frenetico richiede controlli fluidi e feedback",
        fr: "Le gameplay frénétique nécessite des contrôles fluides et du feedback"
      },
      {
        en: "Progressive difficulty keeps players engaged",
        it: "La difficoltà progressiva mantiene i giocatori coinvolti",
        fr: "La difficulté progressive garde les joueurs engagés"
      },
      {
        en: "Combo mechanics reward skill and encourage longer play",
        it: "Le meccaniche combo premiano l'abilità e incoraggiano sessioni più lunghe",
        fr: "Les mécaniques combo récompensent la compétence et encouragent des sessions plus longues"
      },
      {
        en: "Visual and audio feedback makes action feel satisfying",
        it: "Il feedback visivo e audio rende l'azione soddisfacente",
        fr: "Le feedback visuel et audio rend l'action satisfaisante"
      },
    ],
    conclusion: {
      en: "TelEvasion is an action game with core mechanics for combo, dash, room progression, and throwable objects. Using modular design with events, I created engaging action-arcade gameplay that feels fluid and rewarding. This project taught me to balance technical complexity with playable systems, creating fast-paced experiences that maintain player engagement.",
      it: "TelEvasion è un gioco d'azione con meccaniche core per combo, dash, progressione stanze e oggetti lanciabili. Usando design modulare con eventi, ho creato gameplay action-arcade coinvolgente che si sente fluido e gratificante. Questo progetto mi ha insegnato a bilanciare complessità tecnica con sistemi giocabili, creando esperienze frenetiche che mantengono l'impegno del giocatore.",
      fr: "TelEvasion est un jeu d'action avec des mécaniques core pour combo, dash, progression des salles et objets lançables. En utilisant un design modulaire avec des événements, j'ai créé un gameplay action-arcade engageant qui se sent fluide et gratifiant. Ce projet m'a appris à équilibrer la complexité technique avec des systèmes jouables, créant des expériences rapides qui maintiennent l'engagement du joueur."
    }
  },
  "project.outer-words.documentation": {
    overview: {
      en: "Outer Words is a word game where players type letters on keyboard to complete words falling from above before they hit ground. I created 3D letter generation system, keyboard input tutorial, and word management. It's a frantic game requiring typing speed and attention.",
      it: "Outer Words è un gioco di parole dove il giocatore deve scrivere lettere sulla tastiera per completare parole che cadono dall'alto prima che tocchino il suolo. Ho creato sistemi per generare parole composte da lettere 3D, gestire l'input tastiera, e un tutorial iniziale che insegna al giocatore come giocare. È un gioco frenetico che richiede velocità di digitazione e attenzione.",
      fr: "Outer Words est un jeu de mots où les joueurs tapent des lettres sur le clavier pour compléter des mots tombant du haut avant de toucher le sol. J'ai créé un système de génération de lettres 3D, un tutoriel d'entrée clavier et une gestion de mots. C'est un jeu frénétique nécessitant une vitesse de frappe et de l'attention."
    },
    coreSystems: [
      {
        title: {
          en: "Word creation system",
          it: "Sistema di creazione parole",
          fr: "Système de création de mots"
        },
        description: {
          en: "Implemented system that creates words by instantiating 3D letters as children of word object. Each letter is separate prefab (A-Z) dynamically loaded from Resources. Letters auto-position with layout system to form correct word.",
          it: "Ho implementato un sistema che crea parole istanziando lettere 3D come figli di un oggetto parola. Ogni lettera è un prefab separato (A-Z) caricato dinamicamente da Resources. Le lettere vengono posizionate automaticamente con un layout per formare la parola corretta.",
          fr: "J'ai implémenté un système qui crée des mots en instanciant des lettres 3D comme enfants de l'objet mot. Chaque lettre est un préfabriqué distinct (A-Z) chargé dynamiquement via Resources. Les lettres se positionnent automatiquement grâce au système de layout afin de former le bon mot."
        }
      },
      {
        title: {
          en: "Keyboard input tutorial",
          it: "Sistema di input tastiera",
          fr: "Tutoriel de saisie au clavier"
        },
        description: {
          en: "Created tutorial showing player how to use keyboard. Instantiates three words ('usa', 'la', 'tastiera') that fall gradually, teaching game controls through gameplay.",
          it: "Ho creato un sistema per il tutorial che mostra al giocatore come usare la tastiera. Istanzia tre parole (\"usa\", \"la\", \"tastiera\") che cadono gradualmente, insegnando i controlli base del gioco.",
          fr: "J'ai créé un tutoriel qui montre au joueur comment utiliser le clavier. Il instancie trois mots ('usa', 'la', 'tastiera') qui tombent progressivement, tout en enseignant les contrôles du jeu à travers le gameplay."
        }
      },
      {
        title: {
          en: "Word management system",
          it: "Gestione lista parole",
          fr: "Système de gestion des mots"
        },
        description: {
          en: "Modified system to manage spawned words, track active words. When word completed, removes from list and animates upward before destruction.",
          it: "Ho modificato il sistema di gestione delle parole spawnate, aggiungendo una lista che traccia le parole attive. Quando una parola viene completata, viene rimossa dalla lista e animata verso l'alto prima di essere distrutta.",
          fr: "J'ai modifié le système pour gérer les mots instanciés et suivre les mots actifs. Une fois un mot complété, il est retiré de la liste puis animé vers le haut avant d'être détruit."
        }
      },
      {
        title: {
          en: "Alphabet letter prefabs",
          it: "Sistema di lettere prefab",
          fr: "Préfabs de lettres de l'alphabet"
        },
        description: {
          en: "Created and configured prefabs for all 26 letters (A-Z), each with materials and layout. Prefabs used by word creation system to compose text dynamically.",
          it: "Ho creato e configurato i prefab per tutte le lettere dell'alfabeto (A-Z), ciascuno con materiali e layout appropriati. I prefab vengono usati dal sistema di creazione parole per comporre testi 3D.",
          fr: "J'ai créé et configuré des préfabriqués pour les 26 lettres (A-Z), chacun avec des matériaux et une mise en page. Ces préfabriqués sont utilisés par le système de création de mots pour composer du texte dynamiquement."
        }
      },
      {
        title: {
          en: "Material and font system",
          it: "Sistema di materiali e font",
          fr: "Système de matériaux et de polices"
        },
        description: {
          en: "Configured materials for green and red text, updated TextMeshPro fonts for better readability. Managed font fallback for special characters.",
          it: "Ho configurato materiali per testi verdi e rossi, e aggiornato i font TextMeshPro per una migliore leggibilità. Ho anche gestito il fallback dei font per supportare caratteri speciali.",
          fr: "J'ai configuré des matériaux pour les textes verts et rouges, et mis à jour les polices de TextMeshPro pour améliorer la lisibilité. J'ai aussi géré le fallback de police pour les caractères spéciaux."
        }
      },
      {
        title: {
          en: "Main game scene",
          it: "Sistema di scena generale",
          fr: "Scène principale du jeu"
        },
        description: {
          en: "Updated main scene with tutorial mechanics, positioned initial words, configured background movement. Scene integrates all systems for gameplay.",
          it: "Ho aggiornato la scena principale del gioco, aggiungendo elementi del tutorial, posizionando parole iniziali, e configurando il movimento di sfondo. La scena include tutti i sistemi integrati per il gameplay.",
          fr: "J'ai mis à jour la scène principale avec les mécaniques du tutoriel, placé les mots de départ et configuré le mouvement du décor. La scène regroupe tous les systèmes nécessaires au gameplay."
        }
      },
      {
        title: {
          en: "Dynamic resource loading",
          it: "Sistema di caricamento risorse",
          fr: "Chargement dynamique des ressources"
        },
        description: {
          en: "Implemented Resources.Load for dynamic prefab instantiation. No direct references, allowing flexible asset management.",
          it: "Ho implementato il caricamento dinamico di prefab e risorse usando Resources.Load. Questo permette di istanziare lettere e parole senza riferimenti diretti, rendendo il codice più flessibile.",
          fr: "J'ai implémenté l'utilisation de Resources.Load pour instancier des préfabriqués de manière dynamique. Sans références directes, la gestion des assets reste flexible."
        }
      },
      {
        title: {
          en: "Animation and physics system",
          it: "Sistema di animazioni e fisica",
          fr: "Système d'animation et de physique"
        },
        description: {
          en: "Configured physics for tutorial words: gradual gravity enable, Rigidbody constraints for controlled movement. Managed animations for drop timing.",
          it: "Ho configurato la fisica per le parole del tutorial, bloccando posizioni e abilitando gravità gradualmente. Ho anche gestito vincoli Rigidbody per controllare il movimento delle parole.",
          fr: "J'ai configuré la physique des mots du tutoriel : activation progressive de la gravité et contraintes Rigidbody pour un mouvement contrôlé. J'ai également géré les animations pour synchroniser le moment de la chute."
        }
      }
    ],
    architecture: {
      title: {
        en: "Component-Based Composition",
        it: "Sistema basato su Componenti",
        fr: "Composition basée sur des composants"
      },
      description: {
        en: "Words use composition over inheritance. Each word contains letters as children. Modular and reusable for different word types.",
        it: "Come funziona: - Ogni parola è un GameObject con WordObject script - Le lettere sono prefab figli con LayoutElement - Il sistema di input gestisce il tutorial separatamente Vantaggi: - I componenti sono modulari e riutilizzabili - Facile aggiungere nuove parole o lettere - Separazione chiara tra logica e presentazione",
        fr: "Les mots privilégient la composition plutôt que l'héritage. Chaque mot contient les lettres en enfants. Le système est modulaire et réutilisable pour différents types de mots."
      },
      principles: [
        {
          name: {
            en: "Single Responsibility",
            it: "Responsabilità singola",
            fr: "Responsabilité unique"
          },
          description: {
            en: "WordObject creates words, WordsList manages them, UsaLaTastiera runs tutorial.",
            it: "WordObject crea parole, UsaLaTastiera gestisce tutorial",
            fr: "WordObject crée les mots, WordsList les gère et UsaLaTastiera exécute le tutoriel."
          }
        },
        {
          name: {
            en: "Open/Closed",
            it: "Aperto/Chiuso",
            fr: "Ouvert/Fermé"
          },
          description: {
            en: "Add new letters without changing word creation code.",
            it: "Posso aggiungere nuove lettere senza cambiare codice",
            fr: "Ajouter de nouvelles lettres sans modifier le code de création des mots."
          }
        },
        {
          name: {
            en: "Liskov Substitution",
            it: "Sostituibilità",
            fr: "Substitution de Liskov"
          },
          description: {
            en: "All letter prefabs follow same pattern.",
            it: "Tutti i prefab lettere seguono lo stesso schema",
            fr: "Tous les préfabriqués de lettres suivent le même schéma."
          }
        },
        {
          name: {
            en: "Interface Segregation",
            it: "Separazione di interfacce",
            fr: "Séparation des interfaces"
          },
          description: {
            en: "Components interact via specific interfaces.",
            it: "Input e creazione parole sono indipendenti",
            fr: "Les composants interagissent via des interfaces spécifiques."
          }
        },
        {
          name: {
            en: "Dependency Inversion",
            it: "Inversione di dipendenze",
            fr: "Inversion des dépendances"
          },
          description: {
            en: "Use Resources.Load abstract layer instead of direct references.",
            it: "Uso Resources.Load invece di riferimenti diretti",
            fr: "Utiliser la couche abstraite Resources.Load au lieu de références directes."
          }
        }
      ],
      structure: {
        en: "Composition hierarchy: Parent Word > Child Letters, each prefab self-contained with layout element. Manager tracks word instances. Tutorial instantiates special word sets.",
        it: "Uso una struttura di composizione: - Parola → Contiene lettere come figli - Lettera → Prefab con materiale e collider - Lista parole → Gestisce spawn e rimozione - Tutorial → Istanzia parole speciali per insegnare",
        fr: "Hiérarchie de composition : Mot parent > Lettres enfants, chaque préfabriqué étant autonome avec un élément de layout. Le gestionnaire suit les instances de mots. Le tutoriel instancie des ensembles de mots spéciaux."
      }
    },
    stats: [
      {
        label: {
          en: "Alphabet Prefabs Created",
          it: "Prefab lettere creati",
          fr: "Préfabriqués de l'alphabet créés"
        },
        value: 26,
        description: {
          en: "A-Z with materials and layout",
          it: "A-Z con materiali e layout",
          fr: "A-Z avec matériaux et mise en page"
        }
      },
      {
        label: {
          en: "Materials Configured",
          it: "Materiali configurati",
          fr: "Matériaux configurés"
        },
        value: "3+",
        description: {
          en: "TextGreen, TextRed, font settings",
          it: "TextGreen.mat, TextRed.mat, font fallback",
          fr: "TextGreen, TextRed, réglages de police"
        }
      }
    ],
    techniques: [
      {
        en: "Dynamic resource loading with Resources.Load",
        it: "Caricamento dinamico delle risorse con Resources.Load",
        fr: "Chargement dynamique des ressources avec Resources.Load"
      },
      {
        en: "Dictionary for character-to-prefab mapping",
        it: "Dizionario per il mapping carattere→prefab",
        fr: "Dictionnaire pour le mapping caractère→préfabriqué"
      },
      {
        en: "LayoutElement for automatic positioning",
        it: "LayoutElement per il posizionamento automatico",
        fr: "LayoutElement pour le positionnement automatique"
      },
      {
        en: "Rigidbody constraints for physics control",
        it: "Vincoli Rigidbody per il controllo della fisica",
        fr: "Contraintes Rigidbody pour le contrôle de la physique"
      },
      {
        en: "Coroutines for timed sequences",
        it: "Coroutine per sequenze temporizzate",
        fr: "Coroutines pour des séquences temporisées"
      },
      {
        en: "Collider dynamic sizing based on word length",
        it: "Dimensionamento dinamico dei collider in base alla lunghezza della parola",
        fr: "Redimensionnement dynamique des colliders selon la longueur du mot"
      },
      {
        en: "Prefab instantiation at runtime",
        it: "Istanziazione dei prefab a runtime",
        fr: "Instanciation des préfabriqués à l'exécution"
      },
      {
        en: "Material assignment and swapping",
        it: "Assegnazione e scambio dei materiali",
        fr: "Affectation et échange des matériaux"
      },
      {
        en: "Font fallback management",
        it: "Gestione del fallback dei font per i caratteri speciali",
        fr: "Gestion du fallback de police pour les caractères spéciaux"
      }
    ],
    libraries: {
      chosen: [
        {
          en: "TextMeshPro",
          it: "Rendering testo UI",
          fr: "TextMeshPro"
        },
        {
          en: "Unity UI",
          it: "Unity UI",
          fr: "Unity UI"
        },
        {
          en: "Unity Physics",
          it: "Unity Physics",
          fr: "Unity Physics"
        }
      ],
      systems: [
        {
          en: "Resources.Load",
          it: "Resources.Load",
          fr: "Resources.Load"
        },
        {
          en: "Instantiate",
          it: "Instantiate",
          fr: "Instantiate"
        },
        {
          en: "Coroutine",
          it: "Coroutine",
          fr: "Coroutine"
        },
        {
          en: "BoxCollider",
          it: "BoxCollider",
          fr: "BoxCollider"
        },
        {
          en: "Rigidbody",
          it: "Rigidbody",
          fr: "Rigidbody"
        },
        {
          en: "LayoutElement",
          it: "LayoutElement",
          fr: "LayoutElement"
        }
      ]
    },
    learning: [
      {
        en: "Composition over inheritance for flexibility",
        it: "Composizione invece di ereditarietà per maggiore flessibilità",
        fr: "La composition plutôt que l'héritage pour plus de flexibilité"
      },
      {
        en: "Modular resource management through Resources",
        it: "Gestione modulare delle risorse tramite Resources",
        fr: "Gestion modulaire des ressources via Resources"
      },
      {
        en: "Dynamic sizing and layout for generated content",
        it: "Ridimensionamento dinamico e layout per contenuti generati",
        fr: "Redimensionnement dynamique et mise en page pour le contenu généré"
      },
      {
        en: "Physics constraints for controlled movement",
        it: "Vincoli di fisica per movimenti controllati",
        fr: "Contraintes de physique pour un mouvement maîtrisé"
      },
      {
        en: "Tutorial design through gameplay experience",
        it: "Design del tutorial attraverso l'esperienza di gioco",
        fr: "Conception du tutoriel via l'expérience de jeu"
      },
      {
        en: "Prefab-based architecture for scalability",
        it: "Architettura basata su prefab per scalabilità",
        fr: "Architecture basée sur des préfabriqués pour l'évolutivité"
      }
    ],
    conclusion: {
      en: "Outer Words is a word game featuring 3D letter generation, keyboard input tutorial, and dynamic word management. Using composition and modular design, I created a system that generates gameplay through dynamically composed elements. This project taught me to build scalable systems where components can be flexibly assembled, and how to integrate complex systems into a playable game.",
      it: "Outer Words è un gioco di parole dove ho contribuito creando il sistema di generazione parole 3D, il tutorial di input tastiera, e la gestione delle lettere prefab. Ho usato architetture flessibili con caricamento dinamico e coroutine per animazioni fluide, permettendo un gameplay coinvolgente che richiede abilità di digitazione. Questo progetto mi ha insegnato a bilanciare complessità tecnica con accessibilità per giocatori, creando meccaniche che sono sia divertenti che educative.",
      fr: "Outer Words est un jeu de mots où j'ai contribué à la création d'un système de génération de mots 3D, d'un tutoriel d'entrée clavier et d'une gestion de lettres prefab. J'ai utilisé des architectures flexibles avec chargement dynamique et coroutines pour des animations fluides, permettant un gameplay engageant qui nécessite des compétences de frappe. Ce projet m'a appris à équilibrer la complexité technique avec l'accessibilité pour les joueurs, créant des mécaniques qui sont à la fois amusantes et éducatives."
    }
  },
  "project.zurg-attack.documentation": {
    overview: {
      en: "Zurg Attack is a 3D arcade game inspired by Toy Story, programmed in C and C++ with OpenGL API. Player controls spaceship dodging obstacles and collecting coins while shooting lasers at enemies. I contributed to core systems in collaboration with Federico Mafrici for Computer Graphics course at Politecnico di Torino.",
      it: "Zurg Attack è un videogioco arcade 3D ispirato a Toy Story, programmato in C e C++ con l'API OpenGL. Il giocatore controlla un'astronave che deve evitare ostacoli e raccogliere monete mentre spara laser contro nemici. Ho contribuito alla realizzazione del codice principale insieme a Federico Mafrici per il corso di Informatica Grafica al Politecnico di Torino. Tutti i modelli 3D sono stati creati in Blender e importati usando la libreria Assimp.",
      fr: "Zurg Attack est un jeu d'arcade 3D inspiré de Toy Story, programmé en C et C++ avec l'API OpenGL. Le joueur contrôle un vaisseau spatial qui évite les obstacles et récupère des pièces tout en tirant des lasers sur les ennemis. J'ai contribué aux systèmes de base en collaboration avec Federico Mafrici pour le cours de Computer Graphics au Politecnico di Torino."
    },
    coreSystems: [
      {
        title: {
          en: "Scene object management",
          it: "Gestione oggetti scena",
          fr: "Gestion des objets de scène"
        },
        description: {
          en: "Implemented ObjectScene class representing all 3D world objects (spaceship, enemies, coins, lasers). Each object has position, dimensions, collision volume, unique ID. Updated every frame for movement and collisions.",
          it: "Ho implementato una classe ObjectScene per rappresentare tutti gli oggetti nel mondo 3D (astronave, nemici, monete, laser). Ogni oggetto ha posizione X/Y/Z, dimensioni di collisione, e ID univoco. Gli oggetti vengono aggiornati ogni frame per movimento e collisioni.",
          fr: "J'ai implémenté la classe ObjectScene qui représente tous les objets du monde 3D (vaisseau spatial, ennemis, pièces, lasers). Chaque objet possède une position, des dimensions, un volume de collision et un identifiant unique. Le tout est mis à jour à chaque frame pour le déplacement et les collisions."
        }
      },
      {
        title: {
          en: "Power-up system",
          it: "Sistema di power up",
          fr: "Système de power-ups"
        },
        description: {
          en: "Created random power-up collection: temporary invincibility, 2X score multiplier, bomb destroying nearby enemies. Power-ups have limited duration managed with timers and boolean states.",
          it: "Ho creato un sistema di power up casuali che il giocatore può raccogliere: invincibilità temporanea, moltiplicatore punti 2X, e bomba che distrugge nemici vicini. I power up hanno durata limitata e vengono gestiti con timer e stati booleani.",
          fr: "J'ai créé une sélection aléatoire de power-ups : invincibilité temporaire, multiplicateur de score 2X et bombe qui détruit les ennemis à proximité. Les power-ups ont une durée limitée, gérée via des timers et des états booléens."
        }
      },
      {
        title: {
          en: "Collision detection",
          it: "Sistema di collisioni",
          fr: "Détection des collisions"
        },
        description: {
          en: "Implemented bounding box collision detection between objects. Spaceship collects coins, loses health from enemies, activates power-ups. Collisions checked every frame for realistic physics.",
          it: "Ho implementato il rilevamento collisioni tra oggetti usando bounding box. Quando l'astronave collide con monete le raccoglie, con nemici perde vita, con power up li attiva. Le collisioni vengono controllate ogni frame per fisica realistica.",
          fr: "J'ai implémenté la détection de collisions par bounding box. Le vaisseau spatial récupère les pièces, perd de la vie au contact des ennemis et active les power-ups. Les collisions sont vérifiées à chaque frame pour une physique réaliste."
        }
      },
      {
        title: {
          en: "OpenGL rendering",
          it: "Rendering OpenGL",
          fr: "Rendu OpenGL"
        },
        description: {
          en: "Configured OpenGL rendering pipeline with lights, textures, and imported models. Objects drawn with transformations, materials, textures for realistic appearance. Manages camera and perspective.",
          it: "Ho configurato il rendering 3D usando OpenGL con luci, texture e modelli importati da Assimp. Gli oggetti vengono disegnati con trasformazioni, materiali e texture per un aspetto realistico. Il sistema gestisce anche la camera e la prospettiva.",
          fr: "J'ai configuré le pipeline de rendu OpenGL avec des lumières, des textures et des modèles importés. Les objets sont dessinés avec des transformations, des matériaux et des textures afin d'obtenir un rendu réaliste. Le système gère également la caméra et la perspective."
        }
      },
      {
        title: {
          en: "Audio integration",
          it: "Sistema audio",
          fr: "Intégration audio"
        },
        description: {
          en: "Integrated FMOD for sounds and music. Sound effects for shots, collisions, power-ups, and Toy Story-themed music. System allows toggling audio and managing volume separately.",
          it: "Ho integrato suoni e musica usando FMOD. Effetti sonori per spari, collisioni, power up e temi musicali di Toy Story. Il sistema permette di attivare/disattivare audio e gestire volumi separatamente per musica ed effetti.",
          fr: "J'ai intégré FMOD pour les sons et la musique. Effets sonores pour les tirs, les collisions, les power-ups et la musique inspirée de Toy Story. Le système permet d'activer/désactiver l'audio et de gérer le volume séparément pour la musique et les effets."
        }
      },
      {
        title: {
          en: "Game state management",
          it: "Gestione stato gioco",
          fr: "Gestion de l'état du jeu"
        },
        description: {
          en: "Tracked HP, score, level, difficulty. Game has multiple states (menu, playing, pause, game over) with smooth transitions. Records saved and displayed in leaderboard.",
          it: "Ho creato variabili globali per tracciare HP, punteggio, livello, difficoltà. Il gioco ha stati diversi (menu, gioco, pausa, game over) e transizioni fluide. I record vengono salvati e mostrati nella classifica.",
          fr: "J'ai suivi HP, score, niveau et difficulté. Le jeu possède plusieurs états (menu, en jeu, pause, game over) avec des transitions fluides. Les records sont enregistrés et affichés dans le classement."
        }
      },
      {
        title: {
          en: "Level and difficulty progression",
          it: "Sistema di livelli e difficoltà",
          fr: "Progression des niveaux et de la difficulté"
        },
        description: {
          en: "Implemented level progression with increasing difficulty. Each level speeds up enemies and increases spawn frequency. Special boss levels and mode variants with adjustable parameters.",
          it: "Ho implementato progressione di livelli con difficoltà crescente. Ogni livello aumenta velocità nemici e frequenza spawn. Ci sono boss speciali e modalità diverse con parametri regolabili (difficoltà, numero Zurg).",
          fr: "J'ai implémenté une progression de niveaux avec une difficulté croissante. Chaque niveau rend les ennemis plus rapides et augmente la fréquence de spawn. Certains niveaux de boss spéciaux et des variantes de mode proposent des paramètres ajustables."
        }
      },
      {
        title: {
          en: "Input and controls",
          it: "Input e controlli",
          fr: "Saisie et contrôles"
        },
        description: {
          en: "Managed keyboard and mouse input for spaceship movement and laser firing. Mouse controls rotation, WASD controls movement, spacebar pauses. Input processed each frame for responsive controls.",
          it: "Ho gestito input da mouse e tastiera per movimento astronave e spari laser. Il mouse controlla rotazione, i tasti WASD movimento, spazio per pausa. L'input viene processato ogni frame per controlli responsivi.",
          fr: "J'ai géré l'entrée clavier et souris pour le déplacement du vaisseau spatial et le tir des lasers. La souris contrôle la rotation, WASD le mouvement et la barre d'espace met en pause. L'entrée est traitée à chaque frame pour des contrôles réactifs."
        }
      }
    ],
    architecture: {
      title: {
        en: "Monolithic C++ with Modular Functions",
        it: "Programma monolitico in C++",
        fr: "C++ monolithique avec fonctions modulaires"
      },
      description: {
        en: "The game is implemented in a monolithic C++ style: one main file stores the global state and the GLUT callback functions. Even though the code is centralized, responsibilities are kept clear (input handling, update, and rendering), and the whole game loop is driven by GLUT.",
        it: "Il gioco è implementato con uno stile C++ monolitico: un singolo file principale contiene lo stato globale e le funzioni di callback di GLUT. Anche con il codice centralizzato, le responsabilità restano chiare (gestione input, aggiornamento e rendering) e l'intero game loop è guidato da GLUT.",
        fr: "Le jeu est implémenté avec un style C++ monolithique : un seul fichier principal contient l’état global et les callbacks GLUT. Même si le code est centralisé, les responsabilités restent claires (gestion de l’entrée, mise à jour et rendu) et toute la boucle de jeu est pilotée par GLUT."
      },
      principles: [
        {
          name: {
            en: "Single Responsibility",
            it: "Responsabilità singola",
            fr: "Responsabilité unique"
          },
          description: {
            en: "Separate classes for objects (ObjectScene), audio (Sound), independent functions for rendering and logic.",
            it: "Classi separate per oggetti, suoni, rendering",
            fr: "Des classes distinctes pour les objets (ObjectScene) et l'audio (Sound), avec des fonctions indépendantes pour le rendu et la logique."
          }
        },
        {
          name: {
            en: "Open/Closed",
            it: "Aperto/Chiuso",
            fr: "Ouvert/Fermé"
          },
          description: {
            en: "Add new power-ups or object types through switch statements and enums.",
            it: "Posso aggiungere nuovi power up senza cambiare codice base",
            fr: "Ajouter de nouveaux power-ups ou types d'objets via des instructions switch et des enums."
          }
        },
        {
          name: {
            en: "Liskov Substitution",
            it: "Sostituibilità",
            fr: "Substitution de Liskov"
          },
          description: {
            en: "All objects follow ObjectScene interface pattern.",
            it: "Diversi tipi di oggetti seguono stessa interfaccia",
            fr: "Tous les objets suivent le même modèle d'interface, basé sur ObjectScene."
          }
        },
        {
          name: {
            en: "Interface Segregation",
            it: "Separazione di interfacce",
            fr: "Séparation des interfaces"
          },
          description: {
            en: "Rendering separated from logic, audio separated from gameplay.",
            it: "Rendering separato da logica di gioco",
            fr: "Le rendu est séparé de la logique et l'audio du gameplay."
          }
        },
        {
          name: {
            en: "Dependency Inversion",
            it: "Inversione di dipendenze",
            fr: "Inversion des dépendances"
          },
          description: {
            en: "Use GLUT callbacks instead of custom loop.",
            it: "Uso callback GLUT invece di loop personalizzati",
            fr: "Utiliser les callbacks GLUT au lieu d'une boucle personnalisée."
          }
        }
      ],
      structure: {
        en: "Global state variables for game data. Main function initializes GLUT and OpenGL. Display() renders every frame, Update() handles logic. Callback functions for input and timing.",
        it: "Uso una struttura funzionale: - Main → Inizializzazione GLUT e OpenGL - Display → Rendering scena ogni frame - Update → Logica di gioco e fisica - Input → Gestione mouse e tastiera - Classi → ObjectScene per entità, Sound per audio",
        fr: "Variables d'état globales pour les données du jeu. La fonction main initialise GLUT et OpenGL. Display() rend chaque frame et Update() gère la logique. Des callbacks gèrent l'entrée et le timing."
      }
    },
    stats: [
      {
        label: {
          en: "Power-Ups Created",
          it: "Power up creati",
          fr: "Power-ups créés"
        },
        value: 3,
        description: {
          en: "Invincibility, 2X points, Bomb",
          it: "Invincibilità, 2X punti, Bomba",
          fr: "Invincibilité, 2X points, Bombe"
        }
      },
      {
        label: {
          en: "3D Models Imported",
          it: "Modelli 3D importati",
          fr: "Modèles 3D importés"
        },
        value: "10+",
        description: {
          en: "Spaceship, Zurg, coins, lasers...",
          it: "Astronave, Zurg, monete, laser...",
          fr: "Vaisseau spatial, Zurg, pièces, lasers..."
        }
      },
      {
        label: {
          en: "Textures Applied",
          it: "Texture applicate",
          fr: "Textures appliquées"
        },
        value: "15+",
        description: {
          en: "Materials for all objects",
          it: "Materiali per tutti gli oggetti",
          fr: "Matériaux pour tous les objets"
        }
      },
      {
        label: {
          en: "Sounds Integrated",
          it: "Suoni integrati",
          fr: "Sons intégrés"
        },
        value: "5+",
        description: {
          en: "Effects and Toy Story music",
          it: "Effetti e musiche Toy Story",
          fr: "Effets et musique de Toy Story"
        }
      }
    ],
    techniques: [
      {
        en: "Pointer management and memory handling",
        it: "Gestione dei puntatori e della memoria",
        fr: "Gestion des pointeurs et de la mémoire"
      },
      {
        en: "Mathematical algorithms for bounding boxes",
        it: "Algoritmi matematici per i bounding box",
        fr: "Algorithmes mathématiques pour les bounding boxes"
      },
      {
        en: "3D transformations and matrices",
        it: "Trasformazioni 3D e matrici",
        fr: "Transformations 3D et matrices"
      },
      {
        en: "Ray casting for input projection",
        it: "Ray casting per la proiezione dell'input",
        fr: "Ray casting pour la projection de l'entrée"
      },
      {
        en: "Object pooling simulation",
        it: "Simulazione dell'object pooling",
        fr: "Simulation d'object pooling"
      },
      {
        en: "Associate maps for texture management",
        it: "Map associative per la gestione delle texture",
        fr: "Maps associatives pour la gestion des textures"
      },
      {
        en: "State machines via flags",
        it: "State machine tramite flag",
        fr: "Machines à états via des flags"
      },
      {
        en: "Timer-based game logic",
        it: "Logica di gioco basata su timer",
        fr: "Logique de jeu basée sur des timers"
      },
      {
        en: "Global state management",
        it: "Gestione dello stato globale",
        fr: "Gestion de l'état global"
      }
    ],
    libraries: {
      chosen: [
        {
          en: "OpenGL",
          it: "OpenGL",
          fr: "OpenGL"
        },
        {
          en: "GLUT",
          it: "GLUT",
          fr: "GLUT"
        },
        {
          en: "Assimp",
          it: "Assimp",
          fr: "Assimp"
        },
        {
          en: "DevIL",
          it: "DevIL",
          fr: "DevIL"
        },
        {
          en: "FMOD",
          it: "FMOD",
          fr: "FMOD"
        }
      ],
      systems: [
        {
          en: "Win32 API for audio",
          it: "Win32 API per l'audio",
          fr: "Win32 API pour l'audio"
        },
        {
          en: "C++ STL (vector, map, string)",
          it: "C++ STL (vector, map, string)",
          fr: "C++ STL (vector, map, string)"
        },
        {
          en: "Chrono for timing",
          it: "Chrono per il timing",
          fr: "Chrono pour le timing"
        }
      ]
    },
    learning: [
      {
        en: "3D graphics pipeline with OpenGL",
        it: "Pipeline di grafica 3D con OpenGL",
        fr: "Pipeline graphique 3D avec OpenGL"
      },
      {
        en: "Model import and integration with Assimp",
        it: "Import e integrazione dei modelli con Assimp",
        fr: "Import et intégration des modèles avec Assimp"
      },
      {
        en: "State management in game architecture",
        it: "Gestione dello stato nell'architettura di gioco",
        fr: "Gestion de l'état dans l'architecture du jeu"
      },
      {
        en: "Performance optimization for graphics",
        it: "Ottimizzazione delle prestazioni per la grafica",
        fr: "Optimisation des performances pour la partie graphique"
      },
      {
        en: "Real-time audio integration",
        it: "Integrazione audio in tempo reale",
        fr: "Intégration audio en temps réel"
      },
      {
        en: "Complex system coordination",
        it: "Coordinamento di sistemi complessi",
        fr: "Coordination de systèmes complexes"
      },
      {
        en: "Collaborative game development",
        it: "Sviluppo di gioco collaborativo",
        fr: "Développement de jeu en collaboration"
      }
    ],
    conclusion: {
      en: "Zurg Attack is a 3D arcade game built in C++ with OpenGL API, featuring spaceship control, enemy encounters, power-ups, and scoring. Working with Assimp for model loading and FMOD for audio, I contributed to a complete game loop. This project taught me 3D graphics fundamentals, real-time game system integration, and how to build engaging arcade experiences.",
      it: "Zurg Attack è un gioco 3D dove ho contribuito creando sistemi core per oggetti scena, power up, collisioni, rendering OpenGL, audio, stato gioco, livelli e input. Ho usato librerie avanzate come Assimp e FMOD per un'esperienza immersiva, padroneggiando la pipeline grafica OpenGL. Questo progetto mi ha insegnato a sviluppare giochi 3D completi, dall'import modelli alla fisica di gioco, creando un'esperienza arcade coinvolgente ispirata a Toy Story.",
      fr: "Zurg Attack est un jeu d'arcade 3D réalisé en C++ avec l'API OpenGL, avec le pilotage du vaisseau spatial, des rencontres avec des ennemis, des power-ups et un système de score. En travaillant avec Assimp pour charger les modèles et FMOD pour l'audio, j'ai contribué à une boucle de jeu complète. Ce projet m'a appris les bases du rendu graphique 3D, l'intégration de systèmes de jeu en temps réel, et comment créer des expériences d'arcade captivantes."
    }
  },
}
