#  GAMEJAM-8MAR - Il Mio Progetto di Gioco di Parole

##  Descrizione Progetto
**GameJam-8Mar** è un gioco di parole dove il giocatore deve scrivere lettere sulla tastiera per completare parole che cadono dall'alto prima che tocchino il suolo. Ho creato sistemi per generare parole composte da lettere 3D, gestire l'input tastiera, e un tutorial iniziale che insegna al giocatore come giocare. È un gioco frenetico che richiede velocità di digitazione e attenzione.

---

##  SISTEMA CORE #1: SISTEMA DI CREAZIONE PAROLE

### Come funziona
Ho implementato un sistema che crea parole istanziando lettere 3D come figli di un oggetto parola. Ogni lettera è un prefab separato (A-Z) caricato dinamicamente da Resources. Le lettere vengono posizionate automaticamente con un layout per formare la parola corretta.

---

##  SISTEMA CORE #2: SISTEMA DI INPUT TASTIERA

### Come funziona
Ho creato un sistema per il tutorial che mostra al giocatore come usare la tastiera. Istanzia tre parole ("usa", "la", "tastiera") che cadono gradualmente, insegnando i controlli base del gioco.

---

##  SISTEMA CORE #3: GESTIONE LISTA PAROLE

### Come funziona
Ho modificato il sistema di gestione delle parole spawnate, aggiungendo una lista che traccia le parole attive. Quando una parola viene completata, viene rimossa dalla lista e animata verso l'alto prima di essere distrutta.

---

##  SISTEMA CORE #4: SISTEMA DI LETTERE PREFAB

### Come funziona
Ho creato e configurato i prefab per tutte le lettere dell'alfabeto (A-Z), ciascuno con materiali e layout appropriati. I prefab vengono usati dal sistema di creazione parole per comporre testi 3D.

---

##  SISTEMA CORE #5: SISTEMA DI MATERIALI E FONT

### Come funziona
Ho configurato materiali per testi verdi e rossi, e aggiornato i font TextMeshPro per una migliore leggibilità. Ho anche gestito il fallback dei font per supportare caratteri speciali.

---

##  SISTEMA CORE #6: SISTEMA DI SCENA GENERALE

### Come funziona
Ho aggiornato la scena principale del gioco, aggiungendo elementi del tutorial, posizionando parole iniziali, e configurando il movimento di sfondo. La scena include tutti i sistemi integrati per il gameplay.

---

##  SISTEMA CORE #7: SISTEMA DI CARICAMENTO RISORSE

### Come funziona
Ho implementato il caricamento dinamico di prefab e risorse usando Resources.Load. Questo permette di istanziare lettere e parole senza riferimenti diretti, rendendo il codice più flessibile.

---

##  SISTEMA CORE #8: SISTEMA DI ANIMAZIONI E FISICA

### Come funziona
Ho configurato la fisica per le parole del tutorial, bloccando posizioni e abilitando gravità gradualmente. Ho anche gestito vincoli Rigidbody per controllare il movimento delle parole.

---

##  COME È STATA COSTRUITTA L'ARCHITETTURA

### Sistema basato su Componenti

**Come funziona:**
- Ogni parola è un GameObject con WordObject script
- Le lettere sono prefab figli con LayoutElement
- Il sistema di input gestisce il tutorial separatamente

**Vantaggi:**
- I componenti sono modulari e riutilizzabili
- Facile aggiungere nuove parole o lettere
- Separazione chiara tra logica e presentazione

### Principi di progettazione

Ho organizzato il codice seguendo principi consolidati:

| Principio | Come l'ho applicato |
|-----------|--------------------| 
| **Responsabilità singola** | WordObject crea parole, UsaLaTastiera gestisce tutorial |
| **Aperto/Chiuso** | Posso aggiungere nuove lettere senza cambiare codice |
| **Sostituibilità** | Tutti i prefab lettere seguono lo stesso schema |
| **Separazione di interfacce** | Input e creazione parole sono indipendenti |
| **Inversione di dipendenze** | Uso Resources.Load invece di riferimenti diretti |

### Come è organizzato il codice

Uso una struttura di composizione:

- **Parola** → Contiene lettere come figli
- **Lettera** → Prefab con materiale e collider
- **Lista parole** → Gestisce spawn e rimozione
- **Tutorial** → Istanzia parole speciali per insegnare

---

##  RIEPILOGO STATISTICHE

| Categoria | Quantità | Descrizione |
|-----------|----------|-------------|
| **Script C# che ho creato/modificato** | 4+ | UsaLaTastiera.cs, WordObject.cs, WordsList.cs, Alphabet.cs |
| **Prefab lettere creati** | 26 | A-Z con materiali e layout |
| **Scene modificate** | 1 | ScenaGenerale.unity con tutorial |
| **Materiali configurati** | 3+ | TextGreen.mat, TextRed.mat, font fallback |
| **Risorse caricate dinamicamente** | 27+ | Tutte le lettere + Word.prefab |
| **Commit effettuati** | 15+ | Modifiche a scene, script, prefab, materiali |

---

##  TECNICHE DI PROGRAMMAZIONE CHE HO USATO

### Lettura di dati e Caricamento Dinamico
- **Caricamento risorse** → **Lettere**: Uso Resources.Load per caricare prefab A-Z dinamicamente
- **Dizionario per mapping** → **Alfabeto**: Mappo caratteri a prefab per creazione veloce
- **Layout automatico** → **Posizionamento**: Uso LayoutElement per allineare lettere

### Eventi e Callback
- **Coroutine per animazioni** → **Tutorial**: Faccio cadere parole gradualmente con WaitForSeconds
- **Callback di rimozione** → **Lista parole**: Rimuovo parole completate con animazione

### Tempisti e Animazioni
- **Coroutine sequenziali** → **Tutorial**: Abilito gravità una parola alla volta
- **Timer per distruzione** → **Rimozione parole**: Aspetto 2 secondi prima di distruggere

### Ereditarietà nel Codice
- **Composizione invece di ereditarietà** → **Parole**: Uso figli invece di classi derivate
- **Script specializzati** → **Tutorial**: UsaLaTastiera estende logica base

### Collezioni e Liste
- **Lista di GameObject** → **Parole spawnate**: Tengo traccia di parole attive
- **Dizionario char-GameObject** → **Alfabeto**: Mappo lettere a prefab

### Manipolazione di Dati
- **Calcolo dimensioni collider** → **Parole**: Adatto collider alla lunghezza della parola
- **Vincoli Rigidbody** → **Tutorial**: Blocco posizioni per controllo movimento

### Sicurezza dei Dati
- **Controlli null** → **Risorse**: Verifico caricamento riuscito
- **ToLower() per lettere** → **Input**: Normalizzo caratteri maiuscoli/minuscoli

---

##  LIBRERIE E STRUMENTI CHE HO USATO

### Librerie che Ho Scelto
- **TextMeshPro**: Per testi e font di alta qualità
- **Unity UI**: Per LayoutElement nei prefab lettere
- **Unity Physics**: Per Rigidbody e collider delle parole

### Sistemi di Unity che Ho Utilizzato
- **Resources.Load**: Per caricamento dinamico di prefab
- **Instantiate**: Per creare lettere e parole a runtime
- **Coroutine**: Per animazioni temporizzate
- **BoxCollider**: Per collisioni delle parole
- **Rigidbody**: Per fisica delle parole cadenti

---

##  COSA HO IMPARATO

Ho usato molte tecniche avanzate di programmazione e design di giochi in questo progetto.

### Architettura e Progettazione
- **Ho imparato a usare composizione** invece di ereditarietà per oggetti complessi come parole
- **Ho creato sistemi modulari** che possono essere riutilizzati per giochi simili
- **Ho separato logica e presentazione** mantenendo script puliti

### Performance e Ottimizzazione
- **Ho ottimizzato caricamento risorse** usando Resources.Load per evitare riferimenti diretti
- **Ho gestito fisica efficiente** bloccando assi non necessari nei Rigidbody
- **Ho usato coroutine** per animazioni non bloccanti

### Qualità del Codice
- **Ho usato dizionari** per mapping efficienti invece di switch lunghi
- **Ho calcolato dimensioni dinamicamente** invece di valori hardcoded
- **Ho gestito risorse** caricandole solo quando necessario

### Sviluppo di Giochi di Parole
- **Ho progettato meccaniche di input** intuitive per giocatori
- **Ho creato feedback visivo** con materiali colorati e animazioni
- **Ho bilanciato difficoltà** con parole che cadono gradualmente
- **Ho integrato tutorial** per insegnare controlli senza frustrazione

---

##  Conclusione

**GameJam-8Mar** è un gioco di parole dove ho contribuito creando il sistema di generazione parole 3D, il tutorial di input tastiera, e la gestione delle lettere prefab. Ho usato architetture flessibili con caricamento dinamico e coroutine per animazioni fluide, permettendo un gameplay coinvolgente che richiede abilità di digitazione. Questo progetto mi ha insegnato a bilanciare complessità tecnica con accessibilità per giocatori, creando meccaniche che sono sia divertenti che educative.