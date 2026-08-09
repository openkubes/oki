# CA-001 - Mio personifiziert `ok-mgmt`

**Status:** APPROVED / NORMATIVE  
**Prepared:** 2026-08-09  
**Approved:** 2026-08-09  
**Scope:** Canon, Charaktere, deutsches Kindermanuskript, ausgewählte Szenenillustrationen und Gate 5C  
**Human approval:** recorded

## Entscheidungskandidat

| Eigenschaft | Festlegung |
| --- | --- |
| Technische Identität | `ok-mgmt` |
| Figurenname | **Mio** |
| Beiname | **Mio – Okis erste Insel** |
| Symbolische Rolle | **das Herz der Inselfamilie** |
| Asset-ID | `OKMGMT-CHAR-001-v1` |
| Grundfarbe | kräftiges Blau / Navy mit hellblauen Akzenten |

## Kanonischer Kernsatz

> **Mio ist nicht das Herz, ohne das die Inseln sterben.**  
> **Mio ist das Herz, das ihre Beziehungen und Versprechen im Takt hält.**

Das Herz ist ein Bild für Management-Beziehungen, Versprechen und wachsende
Verantwortung. Es ist keine Behauptung, dass bestehende Workload-Cluster ohne
`ok-mgmt` nicht weiterlaufen könnten.

## Herkunft

> **Mio ist die erste Insel, die auf Okis Boden aus einem gemeinsamen Bauplan entstanden ist.**

Mio ist Okis erste innere Kubernetes-Insel und damit die erste bewusste
Kubernetes-auf-Kubernetes-Beziehung der Geschichte. Oki erschafft Mio nicht
allein und nicht magisch. Menschen, deklarierte Konfiguration, Bootstrap-CAPI,
Infrastruktur und weitere Werkzeuge wirken gemeinsam am Entstehungsprozess mit.

## Personifikationsregel

- Mio personifiziert den Management-Cluster `ok-mgmt`.
- Mios Insel zeigt die räumliche und technische Clustergrenze.
- Mios Rathaus symbolisiert die Control Plane dieser Insel.
- Mio ist nicht das Rathaus und das Rathaus ist nicht Mio.
- Mio darf neben oder innerhalb der eigenen Insel erscheinen.
- Oki personifiziert weiterhin ausschließlich `ok-infra`.
- Eine neue Workload-Insel wird Mio bewusst vorgestellt; Oki handelt nicht stellvertretend als Management-Cluster.

## Persönlichkeit und Charakterbogen

Mio ist gewissenhaft, lernwillig, leicht übereifrig, freundlich und liebt
Karten, Beziehungen und Ordnung. Mio ist Steward und Koordinator, nicht König,
Chef oder alleiniger Entscheider.

**Jung:**

> **„Kann ich das schon?“**

**Reif:**

> **„Dafür bin ich verantwortlich.“**

**Zielbild:**

> **„Ich mache das nicht allein. Ich helfe, dass aus einem guten Plan eine verlässliche Insel wird.“**

## Current, Target und Authority

### CURRENT

- Mio darf einen bereits bestehenden Workload-Cluster bewusst registrieren.
- Mio repräsentiert die Management-Beziehung und die Reconciliation der vereinbarten Fähigkeiten.
- Mio darf Zustand, Beziehungen und Evidence sichtbar machen beziehungsweise durch die Sensoren prüfen lassen.
- Mio erstellt im aktuellen, belegten Storyzustand keine Workload-Cluster autonom.
- Wenn Mio beziehungsweise `ok-mgmt` ausfällt, bleiben bestehende Workload-Inseln beleuchtet und lauffähig. Management-Aktionen können pausieren.

### TARGET - nur sichtbar unter `MORGEN` oder `ZIELBILD`

- Mio begleitet den deklarativen Cluster-Lifecycle von der Absicht über Infrastruktur und Bootstrap bis zur nachgewiesenen Bereitschaft.
- Der Lifecycle entsteht aus Bauplänen, Contracts, Providern, Controllern und menschlich verantworteten Entscheidungen.
- Mio darf einen deklarativen Prozess in Bewegung bringen, aber keinen Cluster magisch ausbrüten.

### AUTHORITY

- Menschen behalten Schlüssel, Accountability und finale Freigabe.
- Mio besitzt keinen menschlichen Authority-Schlüssel.
- Aia darf Mio unterstützen, aber weder Mio noch Menschen automatisch überstimmen.

## Visuelles Motiv: der blaue Lichtkern

Mio trägt einen kleinen blauen Lichtkern aus verbundenen Punkten und einer
ruhigen Pulslinie. Es ist kein großes rotes anatomisches Herz.

- Jeder Lichtpunkt steht für eine bewusst etablierte Management-Beziehung.
- Eine erfolgreiche Registration kann einen neuen Lichtpunkt hinzufügen.
- Bei Mios Ausfall wird der Lichtkern ruhig oder dunkel; andere Inseln bleiben beleuchtet.
- Im Target läuft ein Impuls zuerst durch Bauplan und Contract und danach zum Cluster-Ei.
- Verboten sind Krone, Zauberstab, eigener Authority-Schlüssel und magische Geburtsstrahlen.

## Namensregel

Im Kinderbuch wird Mio bei der ersten Einführung einmal mit `ok-mgmt`
verbunden. Danach darf die Geschichte den Figurenname **Mio** verwenden. Der
Technical Guide nennt weiterhin beide Ebenen:

> **Mio personifies `ok-mgmt`, the OpenKubes management cluster.**

`Mio` ist ein Figurenname und kein Akronym. Insbesondere wird
„Management Island Organizer“ nicht kanonisiert, weil dies autonome
Cluster-Erzeugung suggerieren könnte.

Die menschliche Freigabe dieses Amendments ist keine rechtliche Markenfreigabe.
Eine gesonderte Namens- und Markenprüfung bleibt vor einer eigenständigen
Vermarktung der Figur erforderlich.

## Kontrollierter Produktions-Impact

Dieses Amendment erlaubt keinen stillen Austausch freigegebener Dateien.

1. **Gate 2A.1:** minimale Namens- und Einführungsdeltas im eingefrorenen Manuskript reviewen.
2. **Gate 2B.1:** `OKMGMT-CHAR-001-v1` erzeugen, prüfen und menschlich freigeben.
3. **Gate 3.1:** mindestens ein Acceptance-Bild für Mios Identität, Lichtkern und Cluster/Rathaus-Trennung prüfen.
4. **Gate 4.1:** nur die durch den Presence-Audit bestätigten Szenen als neue Versionen produzieren.
5. **Gate 5C:** Buch, Recording-Deck, PDF und Checksums erst danach neu erzeugen und final freigeben.

Current implementation status:

- Gate 2B.1: **APPROVED / CLOSED**; `OKMGMT-CHAR-001-v1` is canonical.
- Gate 2A.1: **APPROVED / CLOSED**; `manuscript-v1.1-mio.md` is frozen.
- Gate 3.1: **APPROVED / CLOSED**; `OKI-KF-MIO-01-v1` is canonical.
- Gate 4.1: **OPEN**; Batch A1 candidate production authorized.
- Gate 5C: on hold.

CA-001 ist ab der menschlichen Freigabe normativ. Die bestehenden Manuskript-,
Character-, Keyframe-, Szenen- und Buchdateien bleiben dennoch unverändert und
behalten ihren dokumentierten historischen Status, bis ihre jeweiligen
Delta-Gates ausdrücklich freigegeben wurden.

## Approval Record

```text
Human reviewer: human project owner
Date: 2026-08-09
Decision: APPROVED
Approved wording: Mio personifiziert ok-mgmt; Beiname "Mio – Okis erste Insel";
  symbolische Rolle "das Herz der Inselfamilie"; Asset-ID
  OKMGMT-CHAR-001-v1. Die dokumentierten Current-, Target-, Authority- und
  Lichtkern-Regeln sind genehmigt.
```
