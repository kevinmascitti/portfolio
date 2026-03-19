export type LocalizedString = {
  en: string
  it: string
  fr: string
}

export type CoreSystem = {
  title: LocalizedString
  description: LocalizedString
}

export type ProjectDocumentation = {
  overview: LocalizedString
  coreSystems: CoreSystem[]
  architecture: {
    title: LocalizedString
    description: LocalizedString
    principles: Array<{ name: LocalizedString; description: LocalizedString }>
    structure: LocalizedString
  }
  stats: Array<{ label: LocalizedString; value: string | number; description: LocalizedString }>
  techniques: LocalizedString[]
  libraries: { chosen: LocalizedString[]; systems: LocalizedString[] }
  learning: LocalizedString[]
  conclusion: LocalizedString
}

export const documentation: Record<string, ProjectDocumentation> = {
  "project.arise-of-cosmos.documentation": {
    overview: {
      en: "COSMOS is an action RPG where I created the combat system, character customization, elemental abilities, and user interface for Cyrus. I implemented combo attack mechanics, directional dodges, modular equipment that changes stats, and elemental abilities like fire and water with cooldowns and dedicated UI.",
      it: "COSMOS è un action RPG dove ho creato il sistema di combattimento, la personalizzazione del personaggio, le abilità elementali e l'interfaccia utente per Cyrus. Ho implementato meccaniche di attacco combo, schivate direzionali, equipaggiamento modulare che cambia le statistiche, e abilità elementali come fuoco e acqua con cooldown e UI dedicata.",
      fr: "COSMOS est un RPG d'action où j'ai créé le système de combat, la personnalisation des personnages, les capacités élémentaires et l'interface utilisateur pour Cyrus. J'ai implémenté des mécaniques d'attaque combo, des esquives directionnelles, un équipement modulaire qui change les statistiques, et des capacités élémentaires comme le feu et l'eau avec des cooldowns et une UI dédiée."
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
          en: "C# Scripts Created/Modified",
          it: "Script C# Creati/Modificati",
          fr: "Scripts C# Créés/Modifiés"
        },
        value: "25+",
        description: {
          en: "PlayerCharacter, Weapon, Ability, UI managers, etc.",
          it: "PlayerCharacter, Weapon, Ability, gestori UI, ecc.",
          fr: "PlayerCharacter, Weapon, Ability, gestionnaires UI, etc."
        }
      },
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
        value: 4,
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
      },
      {
        label: {
          en: "Commits with Combat Work",
          it: "Commit con Lavoro di Combattimento",
          fr: "Commits avec Travail de Combat"
        },
        value: "30+",
        description: {
          en: "Sustained development across multiple systems",
          it: "Sviluppo sostenuto attraverso molteplici sistemi",
          fr: "Développement soutenu à travers plusieurs systèmes"
        }
      },
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
          en: "TextMeshPro",
          it: "TextMeshPro",
          fr: "TextMeshPro"
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
          it: "Controller Animator",
          fr: "Contrôleur Animator"
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
      en: "COSMOS is a complete action RPG where I contributed core combat, customization, elemental abilities, and UI systems. Using event-driven architecture, I created modular systems that work together seamlessly while remaining independent and testable. This project taught me to design engaging gameplay loops, manage complex state through clean architecture, and deliver a polished player experience.",
      it: "COSMOS è un action RPG completo dove ho contribuito ai sistemi core di combattimento, personalizzazione, abilità elementali e UI. Usando architettura basata su eventi, ho creato sistemi modulari che lavorano insieme senza problemi rimanendo indipendenti e testabili. Questo progetto mi ha insegnato a progettare loop di gameplay coinvolgenti, gestire stati complessi attraverso architettura pulita, e fornire un'esperienza giocatore raffinata.",
      fr: "COSMOS est un RPG d'action complet où j'ai contribué aux systèmes core de combat, personnalisation, capacités élémentaires et UI. En utilisant une architecture axée sur les événements, j'ai créé des systèmes modulaires qui fonctionnent ensemble de manière transparente tout en restant indépendants et testables. Ce projet m'a appris à concevoir des boucles de gameplay engageantes, gérer des états complexes via une architecture propre, et livrer une expérience joueur polie."
    }
  },
  "project.televasion.documentation": {
    overview: {
      en: "GD-Project is a dynamic action game where I created combo system, offensive dash, room progression, and throwable objects that increase combo score. The game has levels with rooms to complete by killing all spawned enemies, with entertainment mechanics and bonus lives.",
      it: "GD-Project è un gioco d'azione dinamico dove ho creato sistema combo, dash offensivo, progressione stanze, e oggetti lanciabili che aumentano il punteggio combo. Il gioco ha livelli con stanze da completare uccidendo tutti i nemici spawnati, con meccaniche di intrattenimento e vite bonus.",
      fr: "GD-Project est un jeu d'action dynamique où j'ai créé le système combo, le dash offensif, la progression des salles, et des objets lançables qui augmentent le score combo. Le jeu a des niveaux avec des salles à compléter en tuant tous les ennemis spawnés, avec des mécaniques de divertissement et des vies bonus."
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
          en: "C# Scripts Created",
          it: "Script C# Creati",
          fr: "Scripts C# Créés"
        },
        value: "15+",
        description: {
          en: "Player, enemies, rooms, UI components",
          it: "Giocatore, nemici, stanze, componenti UI",
          fr: "Joueur, ennemis, salles, composants UI"
        }
      },
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
        value: "10+",
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
      {
        label: "Prefabs Modified",
        value: "15+",
        description: "Player, enemies, throwables, UI elements",
      },
      {
        label: "Animations Created",
        value: "5+",
        description: "Dash, arm movements, transitions",
      },
      {
        label: "Game Events",
        value: "15+",
        description: "Combo increased, room complete, object thrown, etc.",
      },
      { label: "Popup Types", value: "4+", description: "Great, Wow, other feedback" },
    ],
    techniques: [
      "Event systems for loose coupling",
      "Coroutines for timed actions",
      "Raycast for environment checks",
      "SphereCast for area damage",
      "Lerp for smooth movement",
      "Rigidbody constraints",
      "Dictionary for configuration",
      "List management for tracking",
      "Timer-based reset logic",
    ],
    libraries: {
      chosen: ["TextMeshPro", "Unity Input System", "DOTween"],
      systems: [
        "Animator",
        "Physics.Raycast/SphereCast",
        "UI Canvas",
        "AudioSource",
        "Resources.Load",
        "LayerMask",
      ],
    },
    learning: [
      "Decoupled architecture improves code maintainability",
      "Event systems coordinate complex interactions",
      "Frantic gameplay requires smooth controls and feedback",
      "Progressive difficulty keeps players engaged",
      "Combo mechanics reward skill and encourage longer play",
      "Visual and audio feedback makes action feel satisfying",
    ],
    conclusion: {
      en: "GD-Project is an action game with core mechanics for combo, dash, room progression, and throwable objects. Using modular design with events, I created engaging action-arcade gameplay that feels fluid and rewarding. This project taught me to balance technical complexity with playable systems, creating fast-paced experiences that maintain player engagement.",
      it: "GD-Project è un gioco d'azione con meccaniche core per combo, dash, progressione stanze e oggetti lanciabili. Usando design modulare con eventi, ho creato gameplay action-arcade coinvolgente che si sente fluido e gratificante. Questo progetto mi ha insegnato a bilanciare complessità tecnica con sistemi giocabili, creando esperienze frenetiche che mantengono l'impegno del giocatore.",
      fr: "GD-Project est un jeu d'action avec des mécaniques core pour combo, dash, progression des salles et objets lançables. En utilisant un design modulaire avec des événements, j'ai créé un gameplay action-arcade engageant qui se sent fluide et gratifiant. Ce projet m'a appris à équilibrer la complexité technique avec des systèmes jouables, créant des expériences rapides qui maintiennent l'engagement du joueur."
    }
  },
  "project.outer-words.documentation": {
    overview:
      "GameJam-8Mar is a word game where players type letters on keyboard to complete words falling from above before they hit ground. I created 3D letter generation system, keyboard input tutorial, and word management. It's a frantic game requiring typing speed and attention.",
    coreSystems: [
      {
        title: "Word Creation System",
        description:
          "Implemented system that creates words by instantiating 3D letters as children of word object. Each letter is separate prefab (A-Z) dynamically loaded from Resources. Letters auto-position with layout system to form correct word.",
      },
      {
        title: "Keyboard Input Tutorial",
        description:
          "Created tutorial showing player how to use keyboard. Instantiates three words ('usa', 'la', 'tastiera') that fall gradually, teaching game controls through gameplay.",
      },
      {
        title: "Word Management System",
        description:
          "Modified system to manage spawned words, track active words. When word completed, removes from list and animates upward before destruction.",
      },
      {
        title: "Alphabet Letter Prefabs",
        description:
          "Created and configured prefabs for all 26 letters (A-Z), each with materials and layout. Prefabs used by word creation system to compose text dynamically.",
      },
      {
        title: "Material and Font System",
        description:
          "Configured materials for green and red text, updated TextMeshPro fonts for better readability. Managed font fallback for special characters.",
      },
      {
        title: "Main Game Scene",
        description:
          "Updated main scene with tutorial mechanics, positioned initial words, configured background movement. Scene integrates all systems for gameplay.",
      },
      {
        title: "Dynamic Resource Loading",
        description:
          "Implemented Resources.Load for dynamic prefab instantiation. No direct references, allowing flexible asset management.",
      },
      {
        title: "Animation and Physics System",
        description:
          "Configured physics for tutorial words: gradual gravity enable, Rigidbody constraints for controlled movement. Managed animations for drop timing.",
      },
    ],
    architecture: {
      title: "Component-Based Composition",
      description:
        "Words use composition over inheritance. Each word contains letters as children. Modular and reusable for different word types.",
      principles: [
        {
          name: "Single Responsibility",
          description: "WordObject creates words, WordsList manages them, UsaLaTastiera runs tutorial.",
        },
        {
          name: "Open/Closed",
          description: "Add new letters without changing word creation code.",
        },
        {
          name: "Liskov Substitution",
          description: "All letter prefabs follow same pattern.",
        },
        {
          name: "Interface Segregation",
          description: "Components interact via specific interfaces.",
        },
        {
          name: "Dependency Inversion",
          description: "Use Resources.Load abstract layer instead of direct references.",
        },
      ],
      structure:
        "Composition hierarchy: Parent Word > Child Letters, each prefab self-contained with layout element. Manager tracks word instances. Tutorial instantiates special word sets.",
    },
    stats: [
      { label: "C# Scripts Created/Modified", value: "4+", description: "UsaLaTastiera, WordObject, etc." },
      { label: "Alphabet Prefabs Created", value: 26, description: "A-Z with materials and layout" },
      { label: "Scene Files Modified", value: 1, description: "ScenaGenerale.unity with integrated systems" },
      { label: "Materials Configured", value: "3+", description: "TextGreen, TextRed, font settings" },
      { label: "Dynamic Resources Loaded", value: "27+", description: "All 26 letters + Word prefab" },
      { label: "Commits Made", value: "15+", description: "Changes to scenes, scripts, prefabs, materials" },
    ],
    techniques: [
      "Dynamic resource loading with Resources.Load",
      "Dictionary for character-to-prefab mapping",
      "LayoutElement for automatic positioning",
      "Rigidbody constraints for physics control",
      "Coroutines for timed sequences",
      "Collider dynamic sizing based on word length",
      "Prefab instantiation at runtime",
      "Material assignment and swapping",
      "Font fallback management",
    ],
    libraries: {
      chosen: ["TextMeshPro", "Unity UI", "Unity Physics"],
      systems: ["Resources.Load", "Instantiate", "Coroutine", "BoxCollider", "Rigidbody", "LayoutElement"],
    },
    learning: [
      "Composition over inheritance for flexibility",
      "Modular resource management through Resources",
      "Dynamic sizing and layout for generated content",
      "Physics constraints for controlled movement",
      "Tutorial design through gameplay experience",
      "Prefab-based architecture for scalability",
    ],
    conclusion:
      "GameJam-8Mar is a word game featuring 3D letter generation, keyboard input tutorial, and dynamic word management. Using composition and modular design, I created a system that generates gameplay through dynamically composed elements. This project taught me to build scalable systems where components can be flexibly assembled, and how to integrate complex systems into a playable game.",
  },
  "project.zurg-attack.documentation": {
    overview:
      "Zurg Attack is a 3D arcade game inspired by Toy Story, programmed in C and C++ with OpenGL API. Player controls spaceship dodging obstacles and collecting coins while shooting lasers at enemies. I contributed to core systems in collaboration with Federico Mafrici for Computer Graphics course at Politecnico di Torino.",
    coreSystems: [
      {
        title: "Scene Object Management",
        description:
          "Implemented ObjectScene class representing all 3D world objects (spaceship, enemies, coins, lasers). Each object has position, dimensions, collision volume, unique ID. Updated every frame for movement and collisions.",
      },
      {
        title: "Power-Up System",
        description:
          "Created random power-up collection: temporary invincibility, 2X score multiplier, bomb destroying nearby enemies. Power-ups have limited duration managed with timers and boolean states.",
      },
      {
        title: "Collision Detection",
        description:
          "Implemented bounding box collision detection between objects. Spaceship collects coins, loses health from enemies, activates power-ups. Collisions checked every frame for realistic physics.",
      },
      {
        title: "OpenGL Rendering",
        description:
          "Configured OpenGL rendering pipeline with lights, textures, and imported models. Objects drawn with transformations, materials, textures for realistic appearance. Manages camera and perspective.",
      },
      {
        title: "Audio Integration",
        description:
          "Integrated FMOD for sounds and music. Sound effects for shots, collisions, power-ups, and Toy Story-themed music. System allows toggling audio and managing volume separately.",
      },
      {
        title: "Game State Management",
        description:
          "Tracked HP, score, level, difficulty. Game has multiple states (menu, playing, pause, game over) with smooth transitions. Records saved and displayed in leaderboard.",
      },
      {
        title: "Level and Difficulty Progression",
        description:
          "Implemented level progression with increasing difficulty. Each level speeds up enemies and increases spawn frequency. Special boss levels and mode variants with adjustable parameters.",
      },
      {
        title: "Input and Controls",
        description:
          "Managed keyboard and mouse input for spaceship movement and laser firing. Mouse controls rotation, WASD controls movement, spacebar pauses. Input processed each frame for responsive controls.",
      },
    ],
    architecture: {
      title: "Monolithic C++ with Modular Functions",
      description:
        "Single main file with global state and GLUT callback functions. Organized functionally despite monolithic nature. Manages game loop through GLUT.",
      principles: [
        {
          name: "Single Responsibility",
          description: "Separate classes for objects (ObjectScene), audio (Sound), independent functions for rendering and logic.",
        },
        {
          name: "Open/Closed",
          description: "Add new power-ups or object types through switch statements and enums.",
        },
        {
          name: "Liskov Substitution",
          description: "All objects follow ObjectScene interface pattern.",
        },
        {
          name: "Interface Segregation",
          description: "Rendering separated from logic, audio separated from gameplay.",
        },
        {
          name: "Dependency Inversion",
          description: "Use GLUT callbacks instead of custom loop.",
        },
      ],
      structure:
        "Global state variables for game data. Main function initializes GLUT and OpenGL. Display() renders every frame, Update() handles logic. Callback functions for input and timing.",
    },
    stats: [
      { label: "C++ Files Modified", value: "2+", description: "SimpleOpenGL_Loader.cpp, Sound.cpp/h" },
      { label: "Classes Implemented", value: 2, description: "ObjectScene for entities, Sound for audio" },
      { label: "Power-Ups Created", value: 3, description: "Invincibility, 2X points, Bomb" },
      { label: "3D Models Imported", value: "10+", description: "Spaceship, Zurg, coins, lasers" },
      { label: "Textures Applied", value: "15+", description: "Materials for all objects" },
      { label: "Sounds Integrated", value: "5+", description: "Effects and Toy Story music" },
      { label: "Commits Made", value: 2, description: "README updates documenting project" },
    ],
    techniques: [
      "Pointer management and memory handling",
      "Mathematical algorithms for bounding boxes",
      "3D transformations and matrices",
      "Ray casting for input projection",
      "Object pooling simulation",
      "Associate maps for texture management",
      "State machines via flags",
      "Timer-based game logic",
      "Global state management",
    ],
    libraries: {
      chosen: ["OpenGL", "GLUT", "Assimp", "DevIL", "FMOD"],
      systems: ["Win32 API for audio", "C++ STL (vector, map, string)", "Chrono for timing"],
    },
    learning: [
      "3D graphics pipeline with OpenGL",
      "Model import and integration with Assimp",
      "State management in game architecture",
      "Performance optimization for graphics",
      "Real-time audio integration",
      "Complex system coordination",
      "Collaborative game development",
    ],
    conclusion:
      "Zurg Attack is a 3D arcade game built in C++ with OpenGL API, featuring spaceship control, enemy encounters, power-ups, and scoring. Working with Assimp for model loading and FMOD for audio, I contributed to a complete game loop. This project taught me 3D graphics fundamentals, real-time game system integration, and how to build engaging arcade experiences.",
  },
}
