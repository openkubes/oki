# Oki und die vielen Inseln – HTML-Präsentation v1.2

Published at: <https://openkubes.github.io/oki/>

Interaktive deutsche Präsentationsfassung des illustrierten Kinderführers zu
OpenKubes. Die 18 Szenen stammen aus dem eingefrorenen Manuskript v1.2; die
Bilder sind unveränderte Kopien der kanonischen deutschen Szenenauswahl v1.1.

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

`standalone/index.html` kann direkt im Browser geöffnet werden. Alle Texte,
Styles und Steuerungen liegen in dieser Datei; die 18 Bilder befinden sich im
benachbarten Verzeichnis `standalone/scenes/`.

## Governance

Die HTML-Präsentation ist ein Derivat. Quelle der Geschichte ist
`story/de/manuscript-v1.2.md`; Quelle der Bilder bleibt
`art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`.

`npm run qa` vergleicht alle 18 Szenentexte mit dem eingefrorenen Manuskript
und prüft die Bilddateien der Web- und Offline-Ausgabe gegen das kanonische
SHA-256-Manifest.
