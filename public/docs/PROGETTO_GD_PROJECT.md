#  GD-PROJECT - Il Mio Progetto di Gioco d'Azione

##  Descrizione Progetto
**GD-Project** è un gioco d'azione dinamico dove il giocatore controlla un personaggio cowboy che combatte nemici in stanze consecutive. Ho creato sistemi per combo di danni, dash offensivo, progressione attraverso stanze, e oggetti lanciabili che aumentano il punteggio combo. Il gioco ha livelli con stanze da completare uccidendo tutti i nemici, con meccaniche di intrattenimento e vita extra.

---

##  SISTEMA CORE #1: SISTEMA DI COMBO

### Come funziona
Ho implementato un sistema di combo che conta i colpi consecutivi entro un tempo limite. Ogni nemico colpito o oggetto lanciato aumenta il contatore, che si azzera se passa troppo tempo. Il combo aumenta la stamina del giocatore e attiva popup visivi. È il cuore del gameplay offensivo.

---

##  SISTEMA CORE #2: SISTEMA DI DASH

### Come funziona
Ho creato un dash offensivo che permette al giocatore di muoversi velocemente in avanti, diventando invincibile durante l'esecuzione. Il dash controlla la distanza massima per evitare muri, infligge danni ai nemici colpiti e aumenta il combo. Ha suoni casuali e effetti visivi.

---

##  SISTEMA CORE #3: SISTEMA DI STANZE E LIVELLI

### Come funziona
Ho sviluppato un sistema di progressione dove il giocatore completa stanze uccidendo tutti i nemici spawnati. Ogni stanza ha un ID, spawn point, e collegamenti alla precedente e successiva. Quando una stanza finisce, si sblocca la prossima o si completa il livello. I livelli hanno background che cambiano.

---

##  SISTEMA CORE #4: SISTEMA DI OGGETTI LANCIABILI

### Come funziona
Ho creato oggetti che il giocatore può raccogliere e lanciare per colpire nemici e aumentare il combo. Gli oggetti hanno timer di vita, effetti sonori, e vengono distrutti dopo l'uso. Alcuni oggetti spawnano popup speciali come "Great" o "Wow" per feedback visivo.

---

##  SISTEMA CORE #5: GESTIONE DEL PERSONAGGIO

### Come funziona
Ho implementato la gestione della salute, stamina, e vite extra del giocatore. Il personaggio riceve danni, diventa temporaneamente invincibile, e ha barre UI che si aggiornano gradualmente. Gestisce anche l'inventario di oggetti vicini e il movimento del braccio per afferrare.

---

##  SISTEMA CORE #6: SISTEMA DI CAMERA

### Come funziona
Ho creato un sistema di camera che segue il giocatore, con movimenti fluidi e posizionamento dinamico nelle stanze. La camera si adatta ai confini delle stanze e ha transizioni tra livelli.

---

##  SISTEMA CORE #7: INTERFACCIA UTENTE

### Come funziona
Ho sviluppato elementi UI per mostrare il contatore combo, pulsanti controller, e hit counter. L'interfaccia si aggiorna in tempo reale con animazioni e feedback visivo per le azioni del giocatore.

---

##  SISTEMA CORE #8: GESTIONE EVENTI E COORDINAMENTO

### Come funziona
Ho usato eventi per coordinare tutti i sistemi: quando un nemico muore, si aggiorna il contatore stanza; quando si lancia un oggetto, aumenta il combo. Questo mantiene i componenti indipendenti ma sincronizzati.

---

##  COME È STATA COSTRUITTA L'ARCHITETTURA

### Sistema basato su Eventi

**Come funziona:**
- Il giocatore colpisce un nemico → viene mandato un evento
- Il contatore combo riceve l'evento e aumenta il punteggio
- I componenti non si conoscono direttamente, ciascuno fa la sua parte

**Vantaggi:**
- I componenti sono indipendenti, quindi non ci sono complicazioni
- Posso aggiungere nuove meccaniche facilmente
- Posso testare ogni componente da solo
- Non ci sono dipendenze confuse tra i componenti

### Principi di progettazione

Ho organizzato il codice seguendo principi consolidati:

| Principio | Come l'ho applicato |
|-----------|--------------------| 
| **Responsabilità singola** | Ogni classe fa una cosa sola. Una gestisce il combo, una il dash, una le stanze |
| **Aperto/Chiuso** | Ho creato classi base che possono essere estese per nuovi tipi di nemici o oggetti |
| **Sostituibilità** | Tutti gli oggetti lanciabili seguono lo stesso schema, quindi il codice funziona per tutti |
| **Separazione di interfacce** | I componenti si scambiano solo i messaggi che servono |
| **Inversione di dipendenze** | I componenti importanti dipendono da astrazioni (gli eventi), non da componenti specifici |

### Come è organizzato il codice

Uso una struttura di ereditarietà:

- **Personaggio** → Base (personaggio) → Giocatore con stamina e vite
- **Oggetti lanciabili** → Base (lanciabile) → Oggetto specifico con timer
- **Stanolivelli** → Base (stanza) → Stanza con spawner e collegamenti
- **Manager UI** → Base (manager) → Contatore combo o pulsanti

---

##  RIEPILOGO STATISTICHE

| Categoria | Quantità | Descrizione |
|-----------|----------|-------------|
| **Script C# che ho creato/modificato** | 20+ | PlayerCharacter, ComboCounter, Dash, Room, Grabbable, CameraMovement, etc. |
| **Scene modificate** | 3+ | MainPrototypev2, MainPrototypeLevel |
| **Prefab modificati** | 15+ | Player, nemici, oggetti lanciabili, UI |
| **Animazioni** | 5+ | Dash, movimenti braccio, transizioni |
| **Eventi implementati** | 15+ | Combo aumentato, stanza finita, oggetto lanciato |
| **Popup oggetti** | 4+ | Great, Wow, altri feedback visivi |

---

##  TECNICHE DI PROGRAMMAZIONE CHE HO USATO

### Lettura di dati e Caricamento Dinamico
- **Caricamento risorse** → **Oggetti lanciabili**: Carico cuori e popup dinamicamente da Resources
- **Raycast per controlli** → **Dash**: Controllo muri prima del dash per sicurezza
- **SphereCast per danni** → **Dash**: Rilevo nemici in area durante il movimento

### Eventi e Callback
- **Callback personalizzati** → **Combo**: Quando colpisco, notifico contatore per aumentare
- **Invocazione sicura** → **Eventi**: Mando notifiche solo se ci sono ascoltatori
- **Ascoltatori multipli** → **Stanze**: Più sistemi reagiscono alla fine stanza

### Tempisti e Animazioni
- **Timer personalizzati** → **Combo**: Azzero combo dopo tempo senza colpi
- **Coroutine per movimento** → **Dash**: Movimento fluido con Lerp
- **Attese controllate** → **Animazioni**: Sincronizzo con animator states

### Ereditarietà nel Codice
- **Classi specializzate** → **Oggetti**: Tutti gli oggetti ereditano da Grabbable
- **Metodi personalizzabili** → **Personaggio**: Classe base con override per giocatore
- **Metodo template** → **Manager**: Pattern comune per inizializzazione

### Collezioni e Liste
- **Liste per inventario** → **Oggetti vicini**: Tengo traccia di lanciabili nel raggio
- **Array per suoni** → **Dash**: Suoni casuali da array
- **Dizionari per configurazione** → **UI**: Mappo elementi UI per aggiornamenti

### Manipolazione di Dati
- **Calcolo danni** → **Dash**: Danni basati su raggio e distanza
- **Aggiornamenti UI** → **Barre**: Fill amount con lerp per fluidità
- **Contatori** → **Combo**: Incremento e reset basato su eventi

### Sicurezza dei Dati
- **Controlli null** → **Tutti i sistemi**: Verifico prima di usare riferimenti
- **Layer mask** → **Collisioni**: Filtro collisioni per efficienza
- **Clamp valori** → **Salute**: Limito tra min e max
- **Gestione eccezioni** → **Eventi**: Evito errori se delegati null

---

##  LIBRERIE E STRUMENTI CHE HO USATO

### Librerie che Ho Scelto
- **TextMeshPro**: Per testi UI di alta qualità
- **Unity Input System**: Per controlli tastiera e controller
- **DOTween**: Per animazioni fluide (anche se limitato)

### Sistemi di Unity che Ho Utilizzato
- **Animator Controller**: State machine per animazioni personaggio
- **Physics.Raycast/SphereCast**: Per controlli ambientali e danni
- **UI Canvas e Slider**: Per barre salute e stamina
- **AudioSource**: Per suoni dash e hit
- **Resources.Load**: Per caricamento dinamico prefab
- **LayerMask**: Per filtrare collisioni

---

##  COSA HO IMPARATO

Ho usato molte tecniche avanzate di programmazione e ingegneria del software in questo progetto.

### Architettura e Progettazione
- **Ho imparato a disaccoppiare i componenti** usando gli eventi, in modo che nessuno conosce completamente l'altro
- **Ho usato pattern collaudati** (come Observer, State Machine) che rendono il codice facile da estendere
- **Ho creato una gerarchia di classi** che permette specializzazione senza duplicazione

### Performance e Ottimizzazione
- **Ho ottimizzato i controlli ambientali** usando raycast per evitare collisioni indesiderate
- **Ho fatto attenzione alla gestione input** bloccando durante animazioni per fluidità
- **Ho usato collezioni appropriate** per gestire inventari e contatori
- **Ho gestito timer e coroutine** per movimenti fluidi

### Qualità del Codice
- **Ho Nominato bene le cose** perché il codice sia leggibile
- **Ho evitato il codice ripetuto** creando classi base e riutilizzandole
- **Ho separato le responsabilità** in modo che ogni classe faccia una cosa sola

### Sviluppo di Giochi d'Azione
- **Ho progettato il combattimento** per essere frenetico e gratificante
- **Ho creato sistemi** che rendono il gioco progressivo (stanze, combo, dash)
- **Ho aggiunto feedback sensoriale** (suoni, popup, animazioni) che rendono il gioco coinvolgente
- **Ho ottimizzato per gameplay** bilanciando difficoltà e soddisfazione

---

##  Conclusione

**GD-Project** è un gioco d'azione dove ho contribuito creando meccaniche core come il sistema combo, il dash offensivo, la progressione attraverso stanze, e gli oggetti lanciabili. Ho usato architetture solide con eventi per mantenere il codice modulare e scalabile, permettendo un gameplay frenetico e gratificante. Questo progetto mi ha insegnato a bilanciare complessità tecnica con divertimento del giocatore, creando sistemi che incoraggiano combo lunghi e decisioni strategiche.