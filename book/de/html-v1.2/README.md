# Oki – bilinguale HTML-Präsentation

Published at:

- Deutsch: <https://oki.openkubes.org/>
- English review preview: <https://oki.openkubes.org/en/>

Interaktive deutsche Präsentationsfassung des illustrierten Kinderführers zu
OpenKubes. Die 18 Szenen stammen aus dem eingefrorenen Manuskript v1.2; die
Bilder sind unveränderte Kopien der kanonischen deutschen Szenenauswahl v1.1.

Die englische Route `/en/` ist eine natürliche amerikanisch-englische Adaption
des freigegebenen deutschen Manuskripts. Bis zur menschlichen Sprachfreigabe
trägt sie den Status **v1.0 RC1 / Review Preview**. Beide Ausgaben verwenden
dieselben byte-identischen kanonischen Illustrationen und sind über den
Sprachschalter `DE`/`EN` verbunden.

## Prerequisites

- Node.js `>=22.13.0`

## Lokal starten

```bash
npm install
npm run dev
npm run build
npm run qa
```

This starter does not use `wrangler.jsonc`.

## Bedienung

- Pfeiltasten, Leertaste oder Page Up/Down: navigieren
- `M`: Folienübersicht
- `F`: Vollbild
- Home/End: Anfang oder Ende
- Touch-Geste nach links/rechts: navigieren

## Offline-Ausgabe

`standalone/index.html` und `standalone/en/index.html` können direkt im Browser
geöffnet werden. Alle Texte,
Styles und Steuerungen liegen in dieser Datei; die 18 Bilder befinden sich im
benachbarten Verzeichnis `standalone/scenes/`.

## Governance

Die HTML-Präsentation ist ein Derivat. Quelle der Geschichte ist
`story/de/manuscript-v1.2.md`; Quelle der Bilder bleibt
`art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`.

`npm run qa` vergleicht alle 18 deutschen Szenentexte mit dem eingefrorenen
Manuskript v1.2, alle 18 englischen Szenentexte mit dem RC1-Manuskript und prüft
die Bilddateien beider Web- und Offline-Ausgaben gegen das kanonische
SHA-256-Manifest.
