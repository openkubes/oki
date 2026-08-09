# Oki Illustration Conformance Checklist

**Asset-ID:**  
**Titel:**  
**Canon-Version:**  
**Oki-Referenz:** `OKI-CHAR-001-v1`  
**Aia-Referenz:** `AIA-CHAR-001-v1`  
**Sensoren-Referenz:** `OKI-SENSOR-SET-001-v1`  
**Prüfer/in:**  
**Datum:**  
**Ergebnis:** PENDING / PASS / FAIL

## 1. Cluster Identity

- [ ] Jeder dargestellte eigenständige Kubernetes-Cluster besitzt ein Rathaus.
- [ ] Keine VM besitzt versehentlich ein Rathaus.
- [ ] Kein Pod besitzt versehentlich ein Rathaus.
- [ ] Ein Rathaus wird nur als Control Plane verwendet.

## 2. Infrastrukturgrenzen

- [ ] Gemeinsamer Boden und getrennte Cluster-Identitäten sind klar unterscheidbar.
- [ ] Der lokale KubeVirt-Pfad wird nicht als universelle OpenKubes-Abhängigkeit dargestellt.
- [ ] Externe oder Multi-Cloud-Cluster liegen außerhalb von Okis Insel, wenn dies die Szene verlangt.

## 3. Current vs. Target

- [ ] Aktuelle Fähigkeiten sind als HEUTE oder CURRENT korrekt dargestellt.
- [ ] Zukünftige Fähigkeiten sind sichtbar als ZIELBILD, MORGEN oder TARGET markiert.
- [ ] `ok-mgmt` wird heute nicht als vollständiger autonomer Workload-Cluster-Erzeuger dargestellt.
- [ ] Registration wird nicht mit Cluster-Erzeugung verwechselt.

## 4. Contracts

- [ ] Das Buch der Versprechen repräsentiert Fähigkeiten und Garantien.
- [ ] Kein konkretes Produkt wird versehentlich als Contract dargestellt.
- [ ] Austauschbare Implementierungen bleiben als solche erkennbar.

## 5. Evidence und Readiness

- [ ] „Geboren ist nicht bereit“ wird nicht verletzt.
- [ ] Sensoren prüfen Fakten, entscheiden aber nicht.
- [ ] Der grüne Haken ist Evidence und kein Schlüssel.
- [ ] Ein erfolgreicher Prozess-Exit wird nicht automatisch als Plattform-Readiness dargestellt.

## 6. AI und Governance

- [ ] Aia hilft beim Lesen, Denken, Analysieren oder Entwerfen.
- [ ] Aia besitzt keinen Schlüssel und keine implizite Authority.
- [ ] Deterministische Systeme beziehungsweise Sensoren prüfen den Vorschlag.
- [ ] Authority und Accountability bleiben sichtbar menschlich.

## 7. Observability

- [ ] Der Leuchtturm macht Zustand oder Probleme sichtbar.
- [ ] Der Leuchtturm verhindert oder repariert Probleme nicht automatisch.
- [ ] Observability wird nicht mit Governance oder Remediation gleichgesetzt.

## 8. Recovery und Gedächtnis

- [ ] Wiederaufbau wird nicht mit vollständiger Erinnerung gleichgesetzt.
- [ ] Pläne, Entscheidungen, Runbooks und Learnings besitzen einen dauerhaften Ort.
- [ ] Secrets, Registrierungen und Management-State erhalten bei Bedarf einen eigenen Restore-Pfad.

## 9. Charaktere und visuelle Konsistenz

- [ ] Oki entspricht dem freigegebenen Character Sheet.
- [ ] Aia entspricht dem freigegebenen Character Sheet.
- [ ] Alle verwendeten Character-Referenz-IDs besitzen den Status `CANONICAL`.
- [ ] Farben und Symbolbedeutungen entsprechen dem Canon.
- [ ] Das Bild ist eine eigenständige Illustration und kein sichtbarer Crop aus einer Visual Bible.
- [ ] Keine fremden Überschriften, Figurenfragmente oder benachbarten Szenen sind sichtbar.

## 10. Provenance und Rechte

- [ ] Der Provenance Record ist vollständig.
- [ ] Alle Referenzbilder und Drittanbieter-Assets sind dokumentiert.
- [ ] Lizenzen und erforderliche Attribution sind geklärt.
- [ ] Quelldatei und verlustfreie Exporte sind archiviert.
- [ ] Der Freigabestatus ist korrekt.

## Freigabe

- [ ] Alle Pflichtprüfungen bestanden.
- [ ] `conformance.result == PASS` ist im Provenance Record eingetragen.
- [ ] Der Rights Review besitzt den Status `PASS`.
- [ ] Source- und Prompt-SHA256 sind dokumentiert und geprüft.
- [ ] Architektur-Review abgeschlossen.
- [ ] Story-/Character-Review abgeschlossen.
- [ ] Rechte-Review abgeschlossen.

**Anmerkungen:**

<!-- Abweichungen, Entscheidungen und notwendige Korrekturen hier dokumentieren. -->
