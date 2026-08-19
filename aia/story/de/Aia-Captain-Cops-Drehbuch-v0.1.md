# Aia, Conductor und Captain

## Vom Wunsch zur verifizierbaren Plattform

**Version:** 0.1  
**Status:** CONCEPT  
**Format:** Illustrated Technical Guide / CIO- und SRE-Präsentation  
**Zielbild:** MORGEN / TARGET  
**Kanon:** Oki Universe Canon v1.0 + ADR-035 / OK-149  

## Leitgedanke

> **Aia hilft uns vorauszudenken. Menschen bestimmen den Kurs.  
> Conductor komponiert. Captain baut und hält die Cluster auf Kurs.  
> Evidenz zeigt, ob die Plattform ihr Versprechen hält.**

Die Geschichte erklärt das Zusammenspiel von Aia, Crossplane und Cluster API,
ohne Aia, Conductor oder Captain implizite Authority zu geben. Der menschliche
Schlüssel, die Policies und der kontrollierte Executor bleiben sichtbar.

## Neue Figuren

### Captain — die personifizierte Cluster API

- **Rolle:** Cluster-Lifecycle-Spezialist; baut, skaliert, aktualisiert und
  ersetzt Cluster über deklarative CAPI-Ressourcen und Controller.
- **Metapher:** freundlicher Kapitän und Schiffsbauer.
- **Farbe:** tiefes Marineblau mit Türkis und Messing.
- **Requisiten:** Steuerrad, Kompass, kleines Cluster-Schiffsmodell und
  Logbuch mit Cluster-, Control-Plane- und Machine-Symbolen.
- **Persönlichkeit:** ruhig, zuverlässig, ausdauernd und präzise.
- **Kanonischer Satz:** „Ich halte den Cluster auf Kurs.“
- **Grenze:** Captain entscheidet nicht über den Kurs und besitzt keinen
  Authority-Schlüssel.

### Conductor — der Crossplane-Dirigent

- **Rolle:** Plattform-Komponist; übersetzt einen freigegebenen Plattformwunsch
  mithilfe von Compositions in zusammengehörige Ressourcen.
- **Metapher:** freundlicher Dirigent eines Plattform-Orchesters.
- **Farbe:** warmes Orange/Kupfer mit tiefem Teal und cremefarbenen Akzenten.
- **Requisiten:** Taktstock, Composition-Partitur und kleine Ressourcen-Ensembles
  für Netzwerk, Identität, Storage, Plattform und Cluster.
- **Persönlichkeit:** strukturiert, kreativ, verbindend und sorgfältig.
- **Kanonischer Satz:** „Alle folgen derselben Partitur.“
- **Grenze:** Conductor genehmigt nichts, besitzt keinen Authority-Schlüssel und
  steht nicht für imperative Ablaufsteuerung. Sein Takt symbolisiert die
  kontinuierliche Reconciliation zum freigegebenen Sollzustand.

## Szenen

### Szene 1 — Ein Wunsch, noch kein Auftrag

**Bild:** Eine CIO-Figur und eine SRE-Figur stehen mit Aia auf der Brücke einer
Werft. Vor ihnen liegt eine leere Seekarte. In der Ferne sind mehrere Inseln
und unterschiedliche Häfen zu sehen.

**Erzähltext:**

> „Wir brauchen eine neue Plattform für drei Teams“, sagte die CIO. „Sicher,
> nachvollziehbar und in mehreren Umgebungen betreibbar.“
>
> Aia öffnete ihren violetten Rucksack. „Ich hätte da eine Idee.“
>
> Noch war es nur ein Wunsch. Kein Auftrag. Und schon gar keine Veränderung.

**Technische Ebene:** Business Intent; kein direkter Schreibzugriff der KI.

---

### Szene 2 — Aia zeichnet einen Vorschlag

**Bild:** Aia legt einen großen, verständlichen Plattformplan aus. Darauf sind
Fähigkeiten statt Produktlogos zu sehen: Cluster, Netzwerk, Identität,
Storage, Observability und Policy.

**Erzähltext:**

> Aia verglich Anforderungen, Verträge und den beobachteten Zustand. Daraus
> machte sie einen Vorschlag, den Menschen lesen und prüfen konnten.

**Technische Ebene:** Candidate Proposal Contract; WYSIWYS-Darstellung;
Version und Provenance.

---

### Szene 3 — Vier Fragen vor dem Tor

**Bild:** Scout blickt auf die vorhandene Umgebung, Meter misst, Check gleicht
den Plan mit dem Buch der Versprechen ab und Proof sammelt die Nachweise.

**Dialog:**

- Scout: „Kann ich es sehen?“
- Meter: „Was sagt die Messung?“
- Check: „Entspricht das dem Versprechen?“
- Proof: „Zeig mir den Beweis.“

**Technische Ebene:** Read-only Diagnostics; Conditions; Events; Evidence.
Die Sensoren entscheiden nicht.

---

### Szene 4 — Der Schlüssel bleibt beim Menschen

**Bild:** Aia, der Plan und die Sensoren warten vor dem bekannten Tor. Die
SRE-Figur prüft die konkrete Änderung. Die menschliche Verantwortliche hält
den Schlüssel. Hinter dem Tor warten Conductor und Captain, ohne Schlüssel.

**Erzähltext:**

> Der Mensch sah genau, was sich ändern sollte, und gab genau diese Revision
> frei. Policies prüften die Freigabe. Erst dann öffnete der Executor den Weg.

**Technische Ebene:** Human Approval; Policy Authorization; Digest-Bindung;
Single-use Acceptance; deterministischer Executor.

---

### Szene 5 — Conductor bringt die Bausteine zusammen

**Bild:** Conductor entfaltet einen mehrlagigen Plan. Aus einem verständlichen
Plattformwunsch entstehen geordnete Module für Netzwerk, Identität, Storage,
Observability, Security und einen CAPI-Cluster. Kein chaotischer YAML-Stapel.

**Dialog:**

> „Ich bringe die Bausteine zusammen“, sagte Conductor. „Jeder bekommt seinen
> Platz, seine Verbindung und sein Versprechen.“

**Technische Ebene:** XRD/XR; Composition; Composition Functions; Managed und
composed Resources. CAPI-Ressourcen können Teil der Composition sein, sind
aber nicht die einzige mögliche Ausgabe.

---

### Szene 6 — Captain baut das Cluster-Schiff

**Bild:** Captain steht in einem maritimen Trockendock. Ein Cluster-Ei öffnet
sich zu einem kleinen Schiff mit eigenem Rathaus auf der Brücke. Maschinen,
Control Plane und Worker werden sichtbar miteinander verbunden.

**Dialog:**

> „Der Kurs ist beschrieben“, sagte Captain. „Jetzt bringe ich Control Plane
> und Maschinen in den gewünschten Zustand.“

**Technische Ebene:** Cluster; ControlPlane; Machines; MachineDeployments;
Infrastructure- und Bootstrap-Provider; deklarative Reconciliation.

---

### Szene 7 — Gebaut ist nicht bereit

**Bild:** Das neue Schiff schwimmt bereits, bleibt aber im Prüfbecken. Meter,
Check, Proof und Scout prüfen es. Aia liest die Evidence gemeinsam mit dem SRE.

**Erzähltext:**

> Das Schiff war geboren. Bereit war es deshalb noch nicht. Erst als seine
> Fähigkeiten messbar funktionierten, durfte es Ladung aufnehmen.

**Technische Ebene:** InfrastructureReady ist nicht Platform Ready;
Conditions, Contract Conformance und durable Evidence.

---

### Szene 8 — Die Plattform legt ab

**Bild:** Übergang von der illustrierten Werft zum realistischen
OpenKubes-Containerschiff. Die Container stehen für freigegebene
Plattformfähigkeiten und portable Bausteine.

**Erzähltext:**

> Aus dem geprüften Plan war eine fahrende Plattform geworden. Menschen
> bestimmten den Kurs. Conductor ordnete ihre Bausteine. Captain hielt ihre Cluster
> auf Kurs. Aia half der Besatzung, vorauszudenken.

**Vorgesehenes Bild:** `aia/art/references/0-openkubes-hero-1600x900.webp`

---

### Szene 9 — Der Sturm

**Bild:** Ein OpenKubes-Schiff ist in schwerer See gekentert. Container treiben
im Wasser. Die Szene bleibt hoffnungsvoll: Rettungslichter sind aktiv, am
Horizont nähert sich bereits ein frisches Schiff.

**Erzähltext:**

> Auch eine sorgfältig gebaute Plattform kann ausfallen. Doch ihre Verträge,
> gesicherten Daten, Entscheidungen und Beweise müssen den Verlust eines
> einzelnen Schiffs überleben.

**Technische Ebene:** Failure Domain; Backup und Restore; Git/Contracts;
Management-State und Secrets mit eigenem Recovery-Pfad.

---

### Szene 10 — Aias Roboter bergen, prüfen und transportieren

**Konzeptgrafik:**
`aia/art/concepts/aia-captain-cops/OKI-AIA-ROBOTICS-RECOVERY-SCENE-10-v0.1.png`

**Bild:** Ein Team spezialisierter Aia-Roboter arbeitet nach einem freigegebenen
Recovery-Plan: Unterwasserdrohne, Flugdrone, autonomer Kran und humanoider
Deckroboter bergen Container. Proof und Check markieren geprüfte Fracht.

**Erzähltext:**

> Aias Roboter fanden die Bausteine, erfassten ihren Zustand und halfen bei
> der Bergung. Nicht alles kam automatisch wieder an Bord. Nur identifizierte,
> geprüfte und autorisierte Fracht durfte auf das neue Schiff.

**Technische Ebene:** Robotics und Edge Telemetry; orchestrierte Recovery;
kein autonomes Umgehen von Authority oder Policy.

---

### Szene 11 — Ein frisches Schiff

**Bild:** Conductor rekonstruiert die Plattformmodule auf dem Kai. Captain baut das
neue Cluster-Schiff. Die Roboter laden die verifizierten Container. Aia und
der SRE vergleichen den neuen Zustand mit dem freigegebenen Plan.

**Erzähltext:**

> Wir retteten nicht den vergänglichen Zustand des alten Schiffs. Wir bauten
> die Plattform aus überprüften Versprechen neu auf.

**Schlusssatz der Szene:**

> **Das Schiff ist ersetzbar. Das Versprechen bleibt.**

---

### Szene 12 — Kathedrale und Schiff

**Bild:** Das OpenKubes-Schiff fährt an der beleuchteten Kathedrale vorbei.
Keine Figuren überlagern das Motiv; die Geschichte tritt einen Schritt zurück.

**Erzähltext:**

> Eine Plattform ist Kathedrale und Schiff zugleich.
>
> Sie braucht ein Fundament, das länger hält als einzelne Technologien. Und
> sie muss weiterfahren, während Menschen sie verbessern.
>
> **Built like a cathedral. Operated like a ship.  
> Open. Stable. Verifiable.**

**Vorgesehenes Bild:** `aia/art/references/0-openkubes-ship-kathedrale.png`

## Unveränderliche Architekturgrenzen

1. Aia schlägt vor; sie genehmigt oder exekutiert nicht selbst.
2. Der Authority-Schlüssel bleibt sichtbar menschlich.
3. Conductor komponiert Ressourcen; Conductor ist weder Polizei noch Policy Engine.
4. Captain reconciliert den Cluster-Lifecycle; Captain bestimmt nicht den Kurs.
5. Sensoren liefern Fakten und Evidence; der grüne Haken ist kein Schlüssel.
6. Crossplane und CAPI sind nicht zwingend eine starre lineare Kette:
   CAPI-Ressourcen können Teil einer Composition sein, während Crossplane auch
   weitere Plattform- und Infrastrukturressourcen komponiert.
7. Die Recovery-Szenen unterscheiden deklarative Rekonstruktion, Daten-Restore,
   Secrets, Registrierungen und Management-State.
8. Alle autonomen Robotik-Aktionen bleiben an einen freigegebenen Recovery-Plan,
   Policies, technische Sicherheitsgrenzen und nachvollziehbare Evidence gebunden.
