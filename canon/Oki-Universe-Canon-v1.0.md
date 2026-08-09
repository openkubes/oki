# Oki Universe Canon

## OpenKubes Illustrated Universe

**Version:** 1.0  
**Status:** APPROVED  
**Approved:** 2026-08-08 - Gate 1, human approval  
**Last reviewed:** 2026-08-09 - global children's-book title recorded through CA-002
**Purpose:** Gemeinsame Source of Truth für Kinderbuch, Illustrated Technical Guide, Präsentationen, Videos, Website und weitere Oki-Medien.  
**Source prototype:** `Oki-und-die-Inseln-der-vielen-Cluster-DE-v1.pptx`

**Approved amendments:** [`CA-001 - Mio personifiziert ok-mgmt`](amendments/CA-001-mio-ok-mgmt-personification.md) und [`CA-002 - Globaler Kinderbuchtitel`](amendments/CA-002-global-book-title.md) sind seit 2026-08-09 normativ.

## 1. Grundregel

Das Oki-Universum erklärt OpenKubes durch eine kindgerechte Welt.

Metaphern dürfen vereinfachen. Sie dürfen die zugrunde liegende OpenKubes-Architektur jedoch niemals verfälschen.

> **Story first. Architecture underneath. Truth throughout.**

## 2. Die drei Produkte

Alle Formate entstehen aus demselben Kanon, aber mit unterschiedlicher technischer Tiefe.

### A. Kinderbuch

**Ziel:** Geschichte verstehen und Figuren lieben.

**Kanonischer deutscher Buchtitel:** **Oki und das Geheimnis der Inseln**
**Kanonischer Untertitel:** **Der illustrierte Kinderführer zu OpenKubes**

Die früheren Titel **Oki und die Inseln der vielen Cluster** und **Oki und die
vielen Inseln** bleiben nur in historischen Freigabe- und Release-Artefakten
erhalten. Der aktuelle globale Titel wurde durch CA-002 am 9. August 2026 vom
menschlichen Project Owner freigegeben. Die Entscheidung ändert weder den
eingefrorenen Storybogen noch die Bedeutung von Inseln als Kubernetes-Cluster.

Enthält Oki, Aia, Inseln, Eier, Rathäuser, Sensoren, Leuchtturm, Tor und Abenteuer. Technische Begriffe werden sparsam eingeführt. Es gibt keine langen Architektur-Erklärungen in der Haupthandlung.

**Redaktionelle Zielgruppe:** zum Vorlesen ab etwa 7 bis 8 Jahren, zum selbstständigen Lesen ungefähr 9 bis 12 Jahre. Dies ist keine formale Altersfreigabe, sondern ein Schreibtest: Die Haupthandlung muss ohne Begriffe wie Reconcile, Evidence oder Authority verständlich bleiben.

### B. Illustrated Technical Guide

**Ziel:** Die Metaphern mit echten OpenKubes-Konzepten verbinden.

Enthält zusätzlich `ok-infra`, `ok-mgmt`, Workload Cluster, Control Plane, Contracts, Registration, Reconciliation, Readiness, Observability sowie Current vs. Target. Story und technische Erklärung stehen nebeneinander.

### C. Präsentation und Video

**Ziel:** OpenKubes vollständig erklären.

Die Bilder bleiben einfach. Speaker Notes oder Narration liefern die technische Tiefe.

> **Die Folie bleibt Kinderbuch. Der Sprecher darf Platform Engineer sein.**

## 3. Oki

### Kanonischer Name

**Oki**

Possessiv im Deutschen: **Okis**

Richtig: Okis Insel, Okis Rathaus, Okis Werkzeugkiste.  
Falsch: Okki, Okkis.

### Technische Identität

Oki repräsentiert `ok-infra`, den Mother Infra Cluster der Geschichte.

Oki ist kein Pod und lebt nicht auf `ok-infra`.

> **Oki ist die personifizierte Form von `ok-infra`.**

### Herkunft

Oki ist der erste Kubernetes-Cluster der Geschichte. Vor Oki existiert ein physischer oder virtueller Ausgangspunkt: Computer, Server oder andere geeignete Infrastruktur. Darauf wird Kubernetes gebootstrapped. So entsteht `ok-infra`. So wird Oki geboren.

### Persönlichkeit

Oki ist neugierig, freundlich, lernbereit, verantwortungsbewusst und nicht allwissend.

Seine wichtigste Eigenschaft: **Oki stellt die richtige Frage.**

Kanonischer Satz:

> **„Warum?“**

## 4. Aia

### Kanonischer Name

**Aia**

Herkunft: **AIA - AI Agent**. Die Abkürzung wird nur bei der Einführung erklärt. Danach heißt die Figur Aia.

### Rolle

Aia kann lesen, suchen, analysieren, Zusammenhänge herstellen, Vorschläge erzeugen, Änderungen vorbereiten und bei der Interpretation von Evidence helfen.

Aia entscheidet nicht automatisch und besitzt keine implizite Authority.

### Persönlichkeit

Aia ist schnell, neugierig, ideenreich, hilfsbereit und gelegentlich etwas voreilig.

Kanonischer Satz:

> **„Ich hätte da eine Idee.“**

Running Gag: Aia hat meistens mehr Ideen im Rucksack als geplant.

## 5. Die Menschen

Menschen bleiben bewusst Teil der Oki-Welt. Sie werden nicht durch AI oder Automation aus der Geschichte entfernt.

### Der Builder

Repräsentiert Platform Engineers, Operatoren, Architekten und andere Menschen, die Systeme bauen und verstehen.

Kanonischer Satz:

> **„Was muss wahr sein?“**

### Der Mensch am Tor

Repräsentiert Authority, Accountability, bewusste Freigabe und Human Decision. Er kann dieselbe Figur wie der Builder sein.

Der Mensch besitzt den Schlüssel. Nicht Aia. Nicht die Sensoren. Nicht der grüne Haken.

## 6. `ok-mgmt`

**Mio** personifiziert den Management-Cluster `ok-mgmt`. Der technische Name
wird bei Mios erster Einführung einmal genannt; danach darf das Kinderbuch den
Figurennamen verwenden.

**Beiname:** **Mio – Okis erste Insel**  
**Symbolische Rolle:** **das Herz der Inselfamilie**  
**Kanonisches Character Asset:** `OKMGMT-CHAR-001-v1`

> **Mio ist nicht das Herz, ohne das die Inseln sterben.**  
> **Mio ist das Herz, das ihre Beziehungen und Versprechen im Takt hält.**

Mio ist die erste Insel, die auf Okis Boden aus einem gemeinsamen Bauplan
entstanden ist. Mio ist Steward und Koordinator, nicht König, Chef oder
alleiniger Entscheider. Mios Insel bleibt die Clustergrenze; das Rathaus ist
das Symbol der Control Plane. Mio ist weder Inselgrenze noch Rathaus.

### Charakterbogen

Am Anfang:

> **„Kann ich das schon?“**

Später:

> **„Dafür bin ich verantwortlich.“**

`ok-mgmt` wächst von einem jungen Management-Cluster zu einer reiferen Management-Ebene.

Im aktuellen Storyzustand registriert Mio bereits bestehende Workload-Cluster,
reconcilet vereinbarte Fähigkeiten und macht Zustand beziehungsweise Evidence
sichtbar. Mio erstellt Workload-Cluster nicht autonom. Nur im deutlich
markierten `MORGEN`-Zielbild darf Mio den deklarativen Lifecycle von der Absicht
bis zur nachgewiesenen Bereitschaft begleiten. Menschen behalten Schlüssel,
Accountability und finale Freigabe.

## 7. Das Cluster-Ei

Das Cluster-Ei ist eines der zentralen Symbole.

### Bedeutung

> **Die Möglichkeit eines deklarativ beschriebenen Kubernetes-Clusters, der gerade entstehen kann oder entsteht.**

Ein Ei ist noch kein fertiger Cluster.

### Kanonische Stadien

0. **Idee** - nur Name oder Claim.
1. **Deklaration** - Ressourcen und gewünschte Fähigkeiten sind beschrieben.
2. **Infrastruktur** - VMs, Netzwerk und Storage entstehen.
3. **Bootstrap** - Kubernetes beginnt zu starten; erster Riss.
4. **Geburt** - das eigene Rathaus wird sichtbar; **KNACKS!**
5. **Insel** - der Cluster existiert; Readiness-Prüfungen beginnen.

Kanonische Regel:

> **Geboren ist nicht bereit.**

## 8. Das Rathaus

**Rathaus = Kubernetes Control Plane. Immer.**

Jeder eigenständige Kubernetes-Cluster besitzt in der Metapher ein eigenes Rathaus.

> Gemeinsamer Boden.  
> Eigene Insel.  
> Eigenes Rathaus.

Eine VM allein bekommt kein Rathaus. Ein Pod bekommt kein Rathaus. Ein Produkt bekommt kein Rathaus. Das Rathaus kennzeichnet Cluster-Identität.

## 9. Das Buch der Versprechen

**Buch der Versprechen = OpenKubes Contracts**

Auf dem Buch darf stehen:

**VERTRÄGE**  
*Was muss funktionieren?*

Das Buch beschreibt Fähigkeiten und Garantien, nicht konkrete Lieblingsprodukte.

> **Contracts, not Components.**

Kindlich:

> **Versprechen statt Lieblingsbausteine.**

## 10. Die Sensoren

Die Sensoren prüfen Fakten. Sie entscheiden nicht.

### Scout

- Symbol: Fernglas
- Frage: „Kann ich es sehen?“
- Bedeutung: Visibility / observable state

### Meter

- Symbol: Messgerät
- Frage: „Was sagt die Messung?“
- Bedeutung: measurable state

### Check

- Symbol: Klemmbrett
- Frage: „Entspricht das dem Versprechen?“
- Bedeutung: Contract Conformance

### Proof

- Symbol: großer grüner Haken
- Frage: „Zeig mir den Beweis.“
- Bedeutung: Evidence Summary

Unveränderliche Regel:

> **Der grüne Haken ist kein Schlüssel.**

## 11. Der Leuchtturm

**Leuchtturm = Observability**

Er hilft zu sehen, was läuft, was langsam ist, was fehlt und wo Probleme entstehen. Er verhindert Fehler nicht automatisch, repariert Fehler nicht automatisch und entscheidet nichts.

Kanonischer Dialog:

> „Verhindert der Leuchtturm alle Probleme?“  
> „Nein. Aber er hilft uns, sie zu sehen.“

## 12. Das Tor

Das Tor steht für eine bewusste Veränderung beziehungsweise Freigabe.

Vor dem Tor befinden sich Aia, Vorschlag, Sensoren und Evidence. Am Tor befinden sich Mensch, Bauplan und Schlüssel. Hinter dem Tor liegt die reale Änderung.

## 13. Der Schlüssel

**Schlüssel = Authority**

Der Schlüssel symbolisiert Verantwortung, nicht Macht.

Kanonischer Governance-Satz:

> **Maschinen prüfen Fakten.  
> Aia hilft beim Denken.  
> Menschen entscheiden.**

## 14. `ok-shared`

`ok-shared` ist eine eigenständige Plattforminsel. Es ist keine unsichtbare technische Ablage.

Metapher: **Versorgungshafen**

Sichtbare Fähigkeiten können sein:

- Secrets -> Tresor
- Registry -> Lagerhaus
- Observability -> Leuchtturm
- Storage -> Speicherbereich

> **Shared does not mean hidden.**

## 15. `ok-ai`

`ok-ai` ist eine eigene Kubernetes-Insel mit eigenem Rathaus und dem Thema AI Workspace. Aia kann dort arbeiten, aber Aia ist nicht `ok-ai`.

## 16. `ok-robotics`

`ok-robotics` ist eine eigenständige Insel. Visuelle Motive: Roboter, Wege, Bewegung und Telemetrie.

## 17. `ok-iot`

`ok-iot` ist eine eigenständige Edge-Insel. Visuelle Motive: Sensoren, Geräte, Funk und abgelegene Umgebungen.

## 18. `ok-local`

`ok-local` ist keine normale Produktionsinsel.

Metapher:

> **Okis Inselwelt für den Rucksack**

Es erlaubt, die wesentlichen Konzepte lokal zu lernen und auszuprobieren.

## 19. Kubeception

Kubeception beginnt nach Oki. Der kanonische lokale Ablauf lautet:

physischer oder virtueller Boden  
-> Oki / `ok-infra`  
-> KubeVirt VMs  
-> `ok-mgmt` als eigenständiger Kubernetes-Cluster

Der lokale Referenzpfad nutzt KubeVirt. Andere Hosting- und Target-Infrastrukturen sind möglich, sofern dafür ein geeignetes und verifiziertes Provider-Profil sowie die notwendigen Identitäts-, Netzwerk- und Contract-Voraussetzungen existieren.

Dabei sind zwei Achsen getrennt zu betrachten:

1. **Hosting von `ok-mgmt`:** Auf welcher Infrastruktur der Management-Cluster selbst läuft.
2. **Workload-Provider-Profil:** Auf welcher Zielinfrastruktur `ok-mgmt` Workload-Cluster verwaltet oder künftig erzeugt.

Ein verifiziertes Workload-Provider-Profil beweist nicht automatisch Hosting-Unabhängigkeit von `ok-mgmt`. Konkrete Provider dürfen nur zusammen mit ihrem belegten Status als Current, Target oder Experimental genannt werden.

Kanonischer Satz:

> **„Wie viele Inseln passen eigentlich in eine Insel?“**

## 20. Current Architecture

Diese Regeln dürfen in keiner Veröffentlichung verletzt werden.

Heute wird der Workload-Cluster vom Cluster Owner beziehungsweise `ok-cluster` erzeugt.

Danach:

**CREATE -> REGISTER -> RECONCILE -> PROVE**

`ok-mgmt` darf heute nicht als vollständiger autonomer Workload-Cluster-Erzeuger dargestellt werden. Registration bedeutet nicht Cluster-Erzeugung. Der Cluster existiert bereits; durch Registrierung entsteht die Management-Beziehung.

## 21. Target Architecture

Im Zielbild bleibt Oki / Mother Infra Bootstrap-Anker für `ok-mgmt`. Danach übernimmt `ok-mgmt` zunehmend den deklarativen Workload-Cluster-Lifecycle.

Target muss visuell gekennzeichnet sein als **ZIELBILD** oder **MORGEN**.

> **Target darf niemals wie Current aussehen.**

## Architecture Sources

Die technische Wahrheit des Oki-Canons wird nicht aus der Präsentation abgeleitet. Sie wird von den folgenden Architektur- und Implementierungsquellen getragen:

### Normative, akzeptierte Architekturentscheidungen

- [ADR-Platform-001 - Contracts, not Components](../../openkubes/architecture/decisions/ADR-Platform-001-contracts-not-components.md) - stabile Contracts und austauschbare Implementierungen.
- [ADR-Platform-006 - Management Cluster](../../openkubes/architecture/decisions/ADR-Platform-006-mgmt-cluster.md) - beschlossene Rolle von `ok-mgmt` als Laufzeitort der Management-Fähigkeiten.
- [ADR-Platform-007 - CAPI Responsibility Split](../../openkubes/architecture/decisions/ADR-Platform-007-capi-responsibility-split.md) - Bootstrap-Verantwortung auf Mother Infra und Runtime-Verantwortung auf `ok-mgmt`.
- [ADR-Platform-013 - Workload Cluster Registration](../../openkubes/architecture/decisions/ADR-Platform-013-workload-cluster-registration.md) - explizite Registrierung als eigene Vertrauens- und Verantwortungsgrenze.
- [ADR-Platform-018 - Observability Capability](../../openkubes/architecture/decisions/ADR-Platform-018-observability-capability.md) - beobachtbare und überprüfbare Plattformfähigkeit.
- [ADR-Platform-023 - CAPI Infrastructure Providers as Implementation Profiles](../../openkubes/architecture/decisions/ADR-Platform-023-capi-infrastructure-providers-as-implementation-profiles.md) - Provider-Portabilität innerhalb des nativen CAPI-Pfads und ausdrückliche Grenze gegenüber einer noch nicht bewiesenen Hosting Independence.

### Proposed oder Draft - nur als Target, Option oder Experiment verwendbar

- [ADR-Platform-011 - GitOps](../../openkubes/architecture/decisions/ADR-Platform-011-gitops.md) - vorgeschlagener deklarativer GitOps-Lifecycle.
- [ADR-Platform-015 - Agentic AI](../../openkubes/architecture/decisions/ADR-Platform-015-agentic-ai.md) - vorgeschlagene AI-Fähigkeit mit Read-only- und Human-Authority-Grenzen; PoC-Ergebnis Go, finale Annahme noch ausstehend.
- [ADR-Platform-021 - Read-only Platform Diagnostics Contract](../../openkubes/architecture/decisions/ADR-Platform-021-read-only-platform-diagnostics-contract.md) - Draft des providerneutralen Diagnosevertrags.

### Operative Current-Evidence

- [`ok-cluster` README](../../ok-cluster/README.md) - heute verfügbare Create-, Bootstrap-, Register-, Reconcile- und Prove-Pfade sowie ihre Trust Boundaries.
- Runtime-, Acceptance- und Evidence-Artefakte in `ok-cluster/docs/adoption/` - Beleg für tatsächlich ausgeführte Fähigkeiten.

### Abgeleitete Präsentationsreferenz

- [OpenKubes Recording Edition DE v1](../../output/presentations/OpenKubes-Recording-Edition-DE-v1.pptx) - narrative und visuelle Referenz, aber keine normative Architekturquelle.

### Quellenhierarchie

1. Akzeptierte ADRs definieren verbindliche Architekturentscheidungen.
2. Current-Behauptungen benötigen zusätzlich operative Implementierungs- oder Runtime-Evidence.
3. Proposed- und Draft-ADRs dürfen nur als Target, Option oder Experiment dargestellt werden.
4. Präsentationen und Videos sind abgeleitete Medien und niemals alleinige Source of Truth.

Wenn Entscheidung und Implementierungsstand auseinanderliegen, wird die Entscheidung als beschlossenes Target und der belegte Laufzeitstand als Current dargestellt. Eine Statusänderung einer Quelle löst eine Canon-Impact-Prüfung aus.

## 22. Sprache

### Kinderebene

Bevorzugt: bauen, vorstellen, versorgen, prüfen, hinschauen, Versprechen, Rathaus, Leuchtturm und Schlüssel.

### Technische Ebene

Nachgelagert: Create, Register, Reconcile, Prove, Control Plane, Observability, Evidence, Contract und Authority.

Die Kinderebene darf niemals durch die technische Ebene verdrängt werden. Technische Begriffe stehen in Begleittext, Anhang, Speaker Notes oder Narration.

Technische Identifier wie `ok-mgmt`, `ok-ai`, `ok-shared`, `ok-robotics`,
`ok-iot` und `ok-local` behalten ihren ASCII-Bindestrich und dürfen im Layout
nicht am Bindestrich getrennt werden. Die Untrennbarkeit wird durch
Textkastenbreite, Umbruch oder Layoutkorrektur erreicht, nicht durch einen
anderen Unicode-Bindestrich.

## 23. Farbwelt

- **Oki:** Türkis / Blaugrün
- **Aia:** Violett / Flieder
- **Infra:** Grün / natürliche Erdtöne
- **Management:** Blau
- **AI:** Violett / Nachtblau
- **Shared:** warme Hafen- und Werkstattfarben
- **Evidence:** neutral; Grün nur für bestanden

## 24. Größenverhältnisse

Lesbarkeit hat Vorrang vor physikalischem Realismus. Eier dürfen groß sein, Rathäuser prominent, Leuchttürme dominant und Figuren im Verhältnis zu Inseln unterschiedlich groß. Die semantische Bedeutung darf sich nicht ändern.

## 25. Charakterkonsistenz

Für jede Hauptfigur werden kanonische Ansichten gepflegt.

### Oki

Front, Dreiviertelansicht, Seite, Rücken, neugierig, überrascht, verstanden, besorgt und verantwortlich.

### Aia

Front, Dreiviertelansicht, Seite, Rucksack, Analyse, viele Ideen, Tor-Moment und Lernen.

### Sensoren

Jeweils eine klare Standardform.

Character Sheets sind Referenz für alle späteren Illustrationen, aber nicht selbst das Story-Artwork.

### Kanonische Character References

- **Oki:** `OKI-CHAR-001-v1` - `CANONICAL`
- **Aia:** `AIA-CHAR-001-v1` - `CANONICAL`
- **Sensoren:** `OKI-SENSOR-SET-001-v1` - `CANONICAL`

Diese IDs wurden am 8. August 2026 im menschlichen Gate 2B freigegeben. Neue Character-Generationen erhalten neue Versionen; eine stillschweigende Neudefinition derselben ID ist nicht erlaubt.

### Kanonische Acceptance-Keyframes

- **Oki wird geboren:** `OKI-KF-01-v1` - `CANONICAL`
- **Kubernetes auf Kubernetes:** `OKI-KF-02-v1` - `CANONICAL`
- **Aia am Tor:** `OKI-KF-03-v1` - `CANONICAL`
- **Die Inselfamilie / kanonischer Schluss:** `OKI-KF-04-v1` - `CANONICAL`

Diese exakten Bilder wurden am 8. August 2026 im menschlichen Gate 3 freigegeben. Die Inselgeist-Geburtsform in KF-01 ist eine genehmigte Transformation des kanonischen Oki. Die Acceptance-Keyframes sind visuelle Anker für die vollständige Szenenproduktion; sie ersetzen keine szenenspezifische Architekturprüfung.

## 26. Illustration Provenance

Jede finale Illustration erhält einen Provenance Record. Mindestens dokumentiert werden:

- Asset-ID
- Titel
- Datum
- Generierungs- oder Illustrationstool
- Modell oder Verfahren
- Ausgangsprompt oder Creative Brief
- Referenzbilder
- Bearbeitungsschritte
- finale Quelldatei
- finale Exportdateien
- verantwortliche Person
- Freigabestatus

Die verbindliche Vorlage liegt unter `templates/illustration-provenance-template.yaml`.

## 27. Rechte und Lizenzierung

Vor öffentlicher Veröffentlichung wird für jedes Asset dokumentiert:

- Herkunft aller Ausgangsmaterialien
- verwendete Drittanbieter-Assets und deren Lizenz
- Generierungstool und Nutzungsbedingungen zum Erstellungszeitpunkt
- eventuell erforderliche Attribution
- freigegebene OpenKubes-Lizenz des finalen Assets

Keine ungeklarten Bilder werden Teil eines kanonischen Releases.

## 28. Prompt Archive

Prompts und Creative Briefs werden versioniert, zum Beispiel:

```text
art/
  prompts/
    characters/
      oki-v1.md
      aia-v1.md
    keyframes/
      kubeception-v1.md
      aia-gate-v1.md
```

Ein Prompt allein ist nicht der Kanon. Der Kanon besteht aus Character Sheet, Bedeutung, freigegebenem Referenzbild und Provenance Record.

## 29. Source Files

Finale Assets werden in der höchstmöglichen editierbaren beziehungsweise verlustfreien Qualität archiviert. Keine zukünftige Produktion darf ausschließlich von einem Screenshot oder zugeschnittenen PPT-Bild abhängen.

## 30. Asset-Status

- **CONCEPT:** Idee oder Exploration
- **CANDIDATE:** möglicher kanonischer Stil
- **CANONICAL:** freigegeben
- **RETIRED:** nicht mehr verwenden

Frühe Experimente bleiben nachvollziehbar, ohne später versehentlich erneut eingesetzt zu werden.

### Unveränderliches Release-Gate

Ein Asset darf nur den Status `CANONICAL` erhalten, wenn:

- `conformance.result == PASS`,
- der Rights Review mit `PASS` abgeschlossen ist,
- Source- und Prompt-Integrität dokumentiert sind,
- die verantwortliche Person die Freigabe erteilt hat.

Fehlt eine dieser Bedingungen, bleibt das Asset `CONCEPT` oder `CANDIDATE`.

## 31. Illustration Conformance Test

Vor Freigabe jeder Illustration wird die Checkliste unter `templates/illustration-conformance-checklist.md` ausgefüllt.

Mindestens zu prüfen:

- Hat jeder echte Cluster ein Rathaus?
- Hat eine VM oder ein Pod versehentlich ein Rathaus?
- Wird Target als Current dargestellt?
- Wird ein Produkt versehentlich als Contract dargestellt?
- Besitzt Aia den Schlüssel?
- Öffnet ein grüner Haken das Tor?
- Repariert der Leuchtturm automatisch?
- Wird Wiederaufbau mit vollständiger Erinnerung gleichgesetzt?

Bei einem problematischen Ergebnis wird das Asset nicht freigegeben.

## 32. Der kanonische Storybogen

Die folgenden 20 Szenen bilden das kanonische **Story Inventory**. Für das Kinderbuch v1 werden die Einträge 3 und 4 sowie 6 und 7 jeweils zu einer Szene verbunden. So entsteht ein 18-Szenen-Manuskript, ohne den kanonischen Erzählvorrat zu verkleinern.

1. Vor Oki
2. Oki wird geboren
3. KubeVirt
4. das erste Ei
5. Kubernetes auf Kubernetes
6. eigenes Rathaus
7. `ok-mgmt`
8. Buch der Versprechen
9. Sensoren
10. neuer Workload-Cluster
11. Vorstellen
12. Prüfen
13. Leuchtturm
14. Aia
15. Tor und Schlüssel
16. Inselfamilie
17. Inselwelt für den Rucksack
18. Sturm und Gedächtnis
19. nächste Generation
20. Was ist OpenKubes?

## 33. Kanonischer Schluss

Der junge Cluster fragt:

> „Welche Insel davon ist OpenKubes?“

Oki antwortet:

> **„Nicht eine einzige.“**

Dann:

> **„OpenKubes ist eine gute Art, immer wieder verlässliche Inseln zu bauen.“**

Im Hintergrund:

> **knacks ...**

## 34. Kanonisches Motto

> # Baue.
> # Verbinde.
> # Prüfe.
> # Lerne.
> # Wachse.

> **Wenn du bereit bist, hilf der nächsten Insel beim Entstehen.**

## 35. Produktionsregel ab v2

Die bisherige Präsentation bleibt **Oki Concept Prototype v1**. Sie ist nicht die visuelle Source of Truth.

Die Produktionsreihenfolge lautet:

**Canon -> Kindermanuskript -> Canonical Character Assets -> Canonical Scene Illustrations -> Kinderbuch -> Illustrated Technical Guide -> PPT -> DE Video -> EN Adaptation -> EN Video**

Jedes Format entsteht aus derselben Welt, nicht umgekehrt.

## Canon Principle

> **One universe. One architecture. Many ways to tell the story.**

## Änderungsregeln

- Jede inhaltliche Änderung erhält eine neue Canon-Version.
- Änderungen an Current oder Target Architecture brauchen technische Review.
- Änderungen an Figuren, Symbolbedeutungen oder visueller Semantik brauchen Story- und Conformance-Review.
- `CANONICAL` Assets dürfen nur durch eine neue freigegebene Version ersetzt oder auf `RETIRED` gesetzt werden.
- Die Historie bleibt nachvollziehbar.
