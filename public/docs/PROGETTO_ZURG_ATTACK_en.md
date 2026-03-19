#  ZURG-ATTACK-GAME-C-OPENGL - Il Mio Progetto di Gioco 3D

##  Descrizione Progetto
**Zurg Attack** è un videogioco arcade 3D ispirato a Toy Story, programmato in C e C++ con l'API OpenGL. Il giocatore controlla un'astronave che deve evitare ostacoli e raccogliere monete mentre spara laser contro nemici. Ho contribuito alla realizzazione del codice principale insieme a Federico Mafrici per il corso di Informatica Grafica al Politecnico di Torino. Tutti i modelli 3D sono stati creati in Blender e importati usando la libreria Assimp.

---

##  SISTEMA CORE #1: GESTIONE OGGETTI SCENA

### Come funziona
Ho implementato una classe ObjectScene per rappresentare tutti gli oggetti nel mondo 3D (astronave, nemici, monete, laser). Ogni oggetto ha posizione X/Y/Z, dimensioni di collisione, e ID univoco. Gli oggetti vengono aggiornati ogni frame per movimento e collisioni.

---

##  SISTEMA CORE #2: SISTEMA DI POWER UP

### Come funziona
Ho creato un sistema di power up casuali che il giocatore può raccogliere: invincibilità temporanea, moltiplicatore punti 2X, e bomba che distrugge nemici vicini. I power up hanno durata limitata e vengono gestiti con timer e stati booleani.

---

##  SISTEMA CORE #3: SISTEMA DI COLLISIONI

### Come funziona
Ho implementato il rilevamento collisioni tra oggetti usando bounding box. Quando l'astronave collide con monete le raccoglie, con nemici perde vita, con power up li attiva. Le collisioni vengono controllate ogni frame per fisica realistica.

---

##  SISTEMA CORE #4: RENDERING OPENGL

### Come funziona
Ho configurato il rendering 3D usando OpenGL con luci, texture e modelli importati da Assimp. Gli oggetti vengono disegnati con trasformazioni, materiali e texture per un aspetto realistico. Il sistema gestisce anche la camera e la prospettiva.

---

##  SISTEMA CORE #5: SISTEMA AUDIO

### Come funziona
Ho integrato suoni e musica usando FMOD. Effetti sonori per spari, collisioni, power up e temi musicali di Toy Story. Il sistema permette di attivare/disattivare audio e gestire volumi separatamente per musica ed effetti.

---

##  SISTEMA CORE #6: GESTIONE STATO GIOCO

### Come funziona
Ho creato variabili globali per tracciare HP, punteggio, livello, difficoltà. Il gioco ha stati diversi (menu, gioco, pausa, game over) e transizioni fluide. I record vengono salvati e mostrati nella classifica.

---

##  SISTEMA CORE #7: SISTEMA DI LIVELLI E DIFFICOLTÀ

### Come funziona
Ho implementato progressione di livelli con difficoltà crescente. Ogni livello aumenta velocità nemici e frequenza spawn. Ci sono boss speciali e modalità diverse con parametri regolabili (difficoltà, numero Zurg).

---

##  SISTEMA CORE #8: INPUT E CONTROLLI

### Come funziona
Ho gestito input da mouse e tastiera per movimento astronave e spari laser. Il mouse controlla rotazione, i tasti WASD movimento, spazio per pausa. L'input viene processato ogni frame per controlli responsivi.

---

##  COME È STATA COSTRUITTA L'ARCHITETTURA

### Programma monolitico in C++

**Come funziona:**
- Un file principale contiene tutto il codice
- Variabili globali per stato condiviso
- Funzioni GLUT per loop di gioco

**Vantaggi:**
- Semplice per progetto accademico
- Facile debug con variabili globali
- Buon controllo sul loop di rendering

### Principi di progettazione

Ho organizzato il codice seguendo approcci consolidati per grafica 3D:

| Principio | Come l'ho applicato |
|-----------|--------------------| 
| **Responsabilità singola** | Classi separate per oggetti, suoni, rendering |
| **Aperto/Chiuso** | Posso aggiungere nuovi power up senza cambiare codice base |
| **Sostituibilità** | Diversi tipi di oggetti seguono stessa interfaccia |
| **Separazione di interfacce** | Rendering separato da logica di gioco |
| **Inversione di dipendenze** | Uso callback GLUT invece di loop personalizzati |

### Come è organizzato il codice

Uso una struttura funzionale:

- **Main** → Inizializzazione GLUT e OpenGL
- **Display** → Rendering scena ogni frame
- **Update** → Logica di gioco e fisica
- **Input** → Gestione mouse e tastiera
- **Classi** → ObjectScene per entità, Sound per audio

---

##  RIEPILOGO STATISTICHE

| Categoria | Quantità | Descrizione |
|-----------|----------|-------------|
| **File C++ modificati** | 2+ | SimpleOpenGL_Loader.cpp, Sound.cpp/h |
| **Classi implementate** | 2 | ObjectScene, Sound |
| **Power up creati** | 3 | Invincibilità, 2X punti, Bomba |
| **Modelli 3D importati** | 10+ | Astronave, Zurg, monete, laser |
| **Texture applicate** | 15+ | Materiali per tutti gli oggetti |
| **Suoni integrati** | 5+ | Effetti e musiche Toy Story |
| **Commit effettuati** | 2 | Aggiornamenti README |

---

##  TECNICHE DI PROGRAMMAZIONE CHE HO USATO

### Gestione Memoria e Puntatori
- **Array di oggetti** → **Scena**: Vettore oggetti[3000] per entità dinamiche
- **Mappe associative** → **Texture**: std::map per filename-textureId
- **Puntatori a texture** → **OpenGL**: GLuint* per ID texture

### Algoritmi Matematici
- **Calcolo bounding box** → **Collisioni**: Min/max per volumi di collisione
- **Trasformazioni 3D** → **Rendering**: Matrici per posizione, rotazione, scala
- **Ray casting** → **Input**: Proiezione mouse su piano 3D

### Programmazione Orientata agli Oggetti
- **Classi con costruttori** → **ObjectScene**: Inizializzazione sicura
- **Metodi pubblici** → **Incapsulamento**: Accesso controllato a dati
- **Ereditarietà implicita** → **Polimorfismo**: Trattamento uniforme oggetti

### Gestione Stato e Transizioni
- **Macchine a stati** → **Gioco**: Stati menu/gioco/pausa con flag
- **Timer e contatori** → **Power up**: Durata con clock system
- **Variabili globali** → **Stato condiviso**: HP, punteggio accessibili ovunque

### Ottimizzazioni Grafiche
- **LOD e culling** → **Performance**: Nascondi oggetti lontani
- **Batch rendering** → **Efficienza**: Disegna multipli insieme
- **Texture mapping** → **Aspetto**: UV coordinates per materiali

### Gestione Risorse
- **Caricamento Assimp** → **Modelli**: Import da Blender
- **Texture DevIL** → **Immagini**: Load e bind texture
- **Audio FMOD** → **Suoni**: Stream e play effetti

---

##  LIBRERIE E STRUMENTI CHE HO USATO

### Librerie che Ho Scelto
- **OpenGL**: Per rendering 3D e grafica
- **GLUT**: Per window management e input
- **Assimp**: Per import modelli 3D da Blender
- **DevIL**: Per caricamento e gestione texture
- **FMOD**: Per audio e suoni

### API e Framework
- **Win32 API**: Per device audio e volume
- **C++ STL**: Per contenitori (vector, map, string)
- **Chrono**: Per timer e misurazioni tempo

---

##  COSA HO IMPARATO

Ho usato tecniche avanzate di programmazione grafica e game development in questo progetto.

### Grafica 3D e OpenGL
- **Ho imparato pipeline OpenGL** per rendering efficiente
- **Ho padroneggiato trasformazioni 3D** con matrici e vettori
- **Ho integrato modelli esterni** con Assimp per workflow artistici

### Architettura Software
- **Ho creato sistemi modulari** anche in C monolitico
- **Ho gestito stato complesso** con variabili globali ben organizzate
- **Ho implementato fisica semplice** per collisioni e movimento

### Ottimizzazione Performance
- **Ho ottimizzato rendering** con culling e batching
- **Ho gestito memoria GPU** per texture e modelli
- **Ho bilanciato frame rate** con logica di gioco

### Game Design
- **Ho progettato meccaniche arcade** bilanciate e divertenti
- **Ho creato progressione difficoltà** per engagement
- **Ho integrato tema narrativo** con suoni e modelli Toy Story

### Collaborazione
- **Ho lavorato in team** dividendo compiti con Federico
- **Ho integrato codice altrui** mantenendo consistenza
- **Ho documentato progetto** con README chiari

---

##  Conclusione

**Zurg Attack** è un gioco 3D dove ho contribuito creando sistemi core per oggetti scena, power up, collisioni, rendering OpenGL, audio, stato gioco, livelli e input. Ho usato librerie avanzate come Assimp e FMOD per un'esperienza immersiva, padroneggiando la pipeline grafica OpenGL. Questo progetto mi ha insegnato a sviluppare giochi 3D completi, dall'import modelli alla fisica di gioco, creando un'esperienza arcade coinvolgente ispirata a Toy Story.