#  COSMOS - Il Mio Progetto RPG

##  Descrizione Progetto
**COSMOS** è un gioco d'azione RPG in cui ho creato il sistema di combattimento, customizzazione del personaggio, abilità elementali e interfaccia utente per Cyrus. Ho implementato meccaniche di attacco combo, schivate direzionali, equipaggiamento modulare che cambia statistiche, e abilità elementali come fuoco e acqua con cooldown e UI dedicate.

---

##  SISTEMA CORE #1: COMBATTIMENTO E ATTACCHI

### Come funziona
Ho creato un sistema di combattimento con tre tipi di attacchi: attacco base in combo (fino a 2 colpi concatenati), attacco forte con cooldown, e schivate in 4 direzioni. Ogni attacco colpisce i nemici con collider specifici e tiene traccia di quali nemici sono già stati colpiti per evitare danni multipli.

---

##  SISTEMA CORE #2: CUSTOMIZZAZIONE DEL PERSONAGGIO

### Come funziona
Ho sviluppato un sistema dove il giocatore può scegliere 6 parti del corpo: testa, corpo, braccio destro, braccio sinistro, gambe, arma. Ogni parte cambia aspetto visivo, statistiche (attacco, difesa, salute) e talvolta abilità speciali. L'interfaccia mostra l'elemento e le statistiche prima di equipaggiare, e permette di selezionare parti tramite mouse o pulsanti.

---

##  SISTEMA CORE #3: ABILITÀ ELEMENTALI

### Come funziona
Ho implementato abilità elementali per braccia destra e sinistra: fuoco per lanciare palle di fuoco, acqua per getti, scudi protettivi. Ogni abilità ha cooldown, barre di carica nell'UI, suoni dedicati, e integrazione con il sistema di elementi. Le abilità continue si attivano tenendo premuto un tasto.

---

##  SISTEMA CORE #4: MOVIMENTO E INPUT DEL GIOCATORE

### Come funziona
Ho implementato il movimento del personaggio con input WASD, salti, e schivate direzionali. Il sistema gestisce anche il blocco input durante combattimento o menu, e coordina con l'animator per animazioni fluide.

---

##  SISTEMA CORE #5: GESTIONE STATISTICHE E SALUTE

### Come funziona
Ho creato un sistema base per la salute del personaggio con barra HP animata che si aggiorna gradualmente. Gestisce anche statistiche elementali e difesa, con calcolo danni basato su attacco e difesa specifici per elemento.

---

##  SISTEMA CORE #6: INTERFACCIA UTENTE

### Come funziona
Ho sviluppato l'interfaccia per il menu pausa, selezione pezzi, e NPC. Include gestione dell'apertura/chiusura, blocco input, testi dinamici per statistiche, e navigazione con mouse o pulsanti.

---

##  SISTEMA CORE #7: GESTIONE EVENTI E COORDINAMENTO

### Come funziona
Ho usato eventi per coordinare i componenti: quando cambio un pezzo, notifico il personaggio; quando colpisco un nemico, aggiorno la lista colpiti. Questo mantiene i componenti indipendenti ma coordinati.

---

##  SISTEMA CORE #8: ANIMAZIONI E STATE MACHINE

### Come funziona
Ho creato animazioni per attacchi leggeri, pesanti, schivate, idle, e transizioni fluide. Uso state machine nell'animator per gestire i comportamenti del personaggio durante il combattimento.

---

##  COME È STATA COSTRUITTA L'ARCHITETTURA

### Sistema basato su Eventi

**Come funziona:**
- Il giocatore cambia un pezzo → viene mandato un evento
- Il personaggio riceve l'evento e aggiorna la composizione
- I componenti non si conoscono direttamente, ciascuno fa la sua parte

**Vantaggi:**
- I componenti sono indipendenti, quindi non ci sono complicazioni
- Posso aggiungere nuove parti facilmente
- Posso testare ogni componente da solo
- Non ci sono dipendenze confuse tra i componenti

### Principi di progettazione

Ho organizzato il codice seguendo principi consolidati:

| Principio | Come l'ho applicato |
|-----------|--------------------| 
| **Responsabilità singola** | Ogni classe fa una cosa sola. Una gestisce il combattimento, una la customizzazione, una l'input |
| **Aperto/Chiuso** | Ho creato classi base che possono essere estese per nuovi tipi di parti |
| **Sostituibilità** | Tutti i pezzi seguono lo stesso schema, quindi il codice funziona per tutti |
| **Separazione di interfacce** | I componenti si scambiano solo i messaggi che servono |
| **Inversione di dipendenze** | I componenti importanti dipendono da astrazioni (gli eventi), non da componenti specifici |

### Come è organizzato il codice

Uso una struttura di ereditarietà:

- **Personaggio** → Base (personaggio) → Giocatore con customizzazione
- **Pezzi equipaggiabili** → Base (pezzo) → Tipo specifico (testa, braccio, arma)
- **Manager UI** → Base (manager) → Scelta pezzi o menu pausa

---

##  RIEPILOGO STATISTICHE

| Categoria | Quantità | Descrizione |
|-----------|----------|-------------|
| **Script C# che ho creato/modificato** | 25+ | PlayerCharacter, ChoicePieceManager, Weapon, FireArmAbility, LeftArm, PauseMenu, NPC, etc. |
| **Animazioni Cyrus** | 15+ | Attacchi leggeri, pesanti, schivate, idle, abilità elementali |
| **Prefab parti corpo** | 25+ | Teste, braccia, corpi, gambe, armi con mesh diverse |
| **Scene modificate** | 5+ | Build 2.0, SampleScene, Attack System, scene di test |
| **Eventi implementati** | 8+ | Cambio pezzo, set pezzo, morte giocatore, inizio scenario, abilità |
| **Abilità elementali** | 4+ | Fuoco, Acqua, Scudo, altre |

---

##  TECNICHE DI PROGRAMMAZIONE CHE HO USATO

### Lettura di dati e Caricamento Dinamico
- **Lettura automatica dalle enumerazioni** → **Customizzazione**: Ho caricato automaticamente tutti i tipi di parti usando Enum.GetValues()
- **Ricerca sicura di componenti** → **Combattimento**: Controllo in modo sicuro i nemici colpiti con HashSet
- **Caricamento dinamico risorse** → **Pezzi**: Carico modelli e mesh al momento della selezione

### Eventi e Callback
- **Callback personalizzati** → **Customizzazione**: Quando scelgo un pezzo, notifico il personaggio per aggiornare statistiche
- **Invocazione sicura** → **Eventi**: Mando le notifiche solo se c'è chi le ascolta
- **Ascoltatori multipli** → **Combattimento**: Più parti del gioco reagiscono agli attacchi

### Tempisti e Animazioni
- **Animazioni frame-per-frame** → **Combattimento**: Creo combo con stati dell'animator
- **Ritardi controllati** → **Attacchi**: Faccio attendere tra combo e cooldown
- **Cancellazione di azioni** → **Input**: Blocco input durante animazioni

### Ereditarietà nel Codice
- **Classi specializzate** → **Pezzi**: Tutti i pezzi hanno la stessa base, ma ogni tipo cambia statistiche diverse
- **Metodi personalizzabili** → **Personaggio**: La classe base fornisce la struttura, il giocatore aggiunge customizzazione
- **Metodo template** → **Manager**: Ogni manager UI eredita da una base e specializza l'apertura

### Collezioni e Liste
- **Mappe veloci O(1)** → **Composizione**: Cerco parti equipaggiate istantaneamente
- **Insiemi per unicità** → **Nemici colpiti**: HashSet evita di colpire lo stesso nemico due volte
- **Liste di variazioni** → **Pezzi**: Ogni tipo di parte ha più opzioni
- **Array fisso** → **Parti corpo**: Il personaggio ha sempre 6 parti

### Manipolazione di Dati
- **Inversione liste** → **UI**: Quando chiudo menu, gli elementi scompaiono al contrario
- **Funzioni inline** → **Danni**: Calcolo danni con formule brevi
- **Generazione di percorsi** → **Risorse**: Creo percorsi file dal nome del pezzo

### Sicurezza dei Dati
- **Tipi enumerati** → **Tutti i sistemi**: Uso PartType enum anziché stringhe
- **Controlli di sicurezza** → **Tutti**: Prima di usare qualcosa, verifico che non sia null
- **Tipi leggeri** → **Eventi**: Creo argomenti evento con solo dati necessari
- **Gestione elegante dei valori mancanti** → **Tutti**: Gestisco dati mancanti senza crash

---

##  LIBRERIE E STRUMENTI CHE HO USATO

### Librerie che Ho Scelto
- **TextMeshPro**: Ho usato questa libreria per testi di alta qualità nell'interfaccia
- **Unity Input System**: Per controlli moderni e flessibili del movimento
- **Cinemachine**: Per camera dinamica durante combattimento

### Sistemi di Unity che Ho Utilizzato
- **Animator Controller**: State machine per animazioni di attacco e movimento
- **Particle Systems**: Effetti visivi per impatti e abilità
- **Layers e Mask**: Collisioni selettive per attacchi
- **Raycasting**: Per interazioni con UI e nemici
- **UI Canvas**: Per menu di selezione pezzi e pausa

---

##  COSA HO IMPARATO

Ho usato molte tecniche avanzate di programmazione e ingegneria del software in questo progetto.

### Architettura e Progettazione
- **Ho imparato a disaccoppiare i componenti** usando gli eventi, in modo che nessuno conosce completamente l'altro
- **Ho usato pattern collaudati** (come Observer, State Machine) che rendono il codice facile da estendere
- **Ho creato una gerarchia di classi** che permette specializzazione senza duplicazione

### Performance e Ottimizzazione
- **Ho ottimizzato il rilevamento collisioni** usando layer per evitare calcoli inutili
- **Ho fatto attenzione alla gestione input** bloccando durante animazioni per fluidità
- **Ho usato collezioni efficienti** come HashSet per evitare duplicati
- **Ho gestito timer e cooldown** per bilanciare il gameplay

### Qualità del Codice
- **Ho Nominato bene le cose** perché il codice sia leggibile
- **Ho evitato il codice ripetuto** creando classi base e riutilizzandole
- **Ho separato le responsabilità** in modo che ogni classe faccia una cosa sola

### Sviluppo di Giochi RPG
- **Ho progettato il combattimento** per essere strategico e bilanciato
- **Ho creato sistemi** che rendono il gioco profondo (customizzazione, combo, schivate)
- **Ho aggiunto feedback sensoriale** (animazioni, suoni) che rendono il gioco coinvolgente
- **Ho ottimizzato per performance** in modo che il gioco funzioni fluidamente

---

##  Conclusione

**COSMOS** è un gioco RPG d'azione dove ho contribuito creando il cuore del gameplay: combattimento fluido con combo e schivate, sistema di customizzazione profondo che cambia realmente le meccaniche, abilità elementali con cooldown e UI, animazioni avanzate con state machine, e gestione intelligente dell'input e interfaccia. Ho usato architetture solide con eventi per mantenere il codice modulare e scalabile. Questo progetto mi ha insegnato a bilanciare complessità tecnica con usabilità del giocatore, creando sistemi che sono sia potenti che intuitivi.