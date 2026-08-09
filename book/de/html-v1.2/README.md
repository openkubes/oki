# Oki – sechssprachige HTML-Präsentation

Published at:

- Deutsch: <https://oki.openkubes.org/>
- English review preview: <https://oki.openkubes.org/en/>
- Vista previa en español: <https://oki.openkubes.org/es/>
- پیش‌نمایش فارسی: <https://oki.openkubes.org/fa/>
- 简体中文审校预览: <https://oki.openkubes.org/zh/>
- 日本語レビュー版: <https://oki.openkubes.org/ja/>

Interaktive deutsche Präsentationsfassung des illustrierten Kinderführers zu
OpenKubes. Die 18 Szenen stammen aus dem eingefrorenen Manuskript v1.2; die
Bilder sind unveränderte Kopien der kanonischen deutschen Szenenauswahl v1.1.

Die Routen `/en/`, `/es/`, `/fa/`, `/zh/` und `/ja/` sind natürliche Adaptionen des
freigegebenen deutschen Manuskripts in amerikanischem Englisch,
internationalem Spanisch, Persisch, vereinfachtem Chinesisch und Japanisch. Bis
zur jeweiligen menschlichen Sprachfreigabe tragen sie den Status **v1.0 RC1 /
Review Preview**. Alle sechs
Ausgaben verwenden dieselben byte-identischen kanonischen Illustrationen und
werden über ein kompaktes gemeinsames Sprachmenü verbunden. Die persische Ausgabe wird von
rechts nach links gesetzt; technische Kennungen bleiben isoliert von links nach
rechts lesbar.

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

`standalone/index.html`, `standalone/en/index.html`,
`standalone/es/index.html`, `standalone/fa/index.html`,
`standalone/zh/index.html` und `standalone/ja/index.html` können direkt im
Browser geöffnet werden. Alle Texte,
Styles und Steuerungen liegen in dieser Datei; die 18 Bilder befinden sich im
benachbarten Verzeichnis `standalone/scenes/`.

## Governance

Die HTML-Präsentation ist ein Derivat. Quelle der Geschichte ist
`story/de/manuscript-v1.2.md`; Quelle der Bilder bleibt
`art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`.

`npm run qa` vergleicht alle 18 deutschen Szenentexte mit dem eingefrorenen
Manuskript v1.2 und alle englischen, spanischen, persischen, chinesischen und
japanischen Szenentexte mit ihren RC1-Manuskripten. Zusätzlich prüft es die Bilddateien aller Web- und
Offline-Ausgaben gegen das kanonische SHA-256-Manifest.
