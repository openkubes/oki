# Oki – zehnsprachige HTML-Präsentation

Published at:

- Deutsch: <https://oki.openkubes.org/>
- English review preview: <https://oki.openkubes.org/en/>
- Vista previa en español: <https://oki.openkubes.org/es/>
- پیش‌نمایش فارسی: <https://oki.openkubes.org/fa/>
- 简体中文审校预览: <https://oki.openkubes.org/zh/>
- 日本語レビュー版: <https://oki.openkubes.org/ja/>
- المعاينة العربية: <https://oki.openkubes.org/ar/>
- Aperçu en français: <https://oki.openkubes.org/fr/>
- हिन्दी समीक्षा-पूर्वावलोकन: <https://oki.openkubes.org/hi/>
- Prévia em português: <https://oki.openkubes.org/pt/>

Interaktive deutsche Präsentationsfassung des illustrierten Kinderführers zu
OpenKubes. Die 18 Szenen stammen aus dem eingefrorenen Manuskript v1.2; die
Bilder sind unveränderte Kopien der kanonischen deutschen Szenenauswahl v1.1.
Drei zusätzliche, sprachneutral illustrierte Epilog- und Nachwortseiten öffnen
danach den Blick von der Inselfamilie auf die gemeinsame Erde, ihre
Sonnenfamilie und auf die Freude daran, niemals ganz fertig zu sein.

Die Routen `/en/`, `/es/`, `/fa/`, `/zh/`, `/ja/`, `/ar/`, `/fr/`, `/hi/` und `/pt/` sind natürliche Adaptionen des
freigegebenen deutschen Manuskripts in amerikanischem Englisch,
internationalem Spanisch, Persisch, vereinfachtem Chinesisch, Japanisch,
modernem Hocharabisch, internationalem Französisch, kindgerechtem Hindi und
brasilianischem Portugiesisch. Bis
zur jeweiligen menschlichen Sprachfreigabe tragen sie den Status **v1.0 RC1 /
Review Preview**. Alle zehn
Ausgaben verwenden dieselben byte-identischen kanonischen Illustrationen und
werden über ein kompaktes gemeinsames Sprachmenü verbunden. Die persische und
arabische Ausgabe werden von rechts nach links gesetzt; technische Kennungen
bleiben isoliert von links nach rechts lesbar.

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
`standalone/zh/index.html`, `standalone/ja/index.html`,
`standalone/ar/index.html`, `standalone/fr/index.html` und
`standalone/hi/index.html` sowie `standalone/pt/index.html` können direkt im
Browser geöffnet werden. Alle Texte,
Styles und Steuerungen liegen in dieser Datei; die 18 Szenenbilder befinden
sich im benachbarten Verzeichnis `standalone/scenes/`, die drei Epilog- und Nachwortbilder in
`standalone/epilogue/`.

## Governance

Die HTML-Präsentation ist ein Derivat. Quelle der Geschichte ist
`story/de/manuscript-v1.2.md`; Quelle der Bilder bleibt
`art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256`.

`npm run qa` vergleicht alle 18 deutschen Szenentexte mit dem eingefrorenen
Manuskript v1.2 und alle englischen, spanischen, persischen, chinesischen,
japanischen, arabischen, französischen, Hindi- und portugiesischen Szenentexte mit ihren
RC1-Manuskripten. Zusätzlich prüft es die Bilddateien aller Web- und
Offline-Ausgaben gegen das kanonische SHA-256-Manifest. Die drei Epilog- und Nachwortseiten
sind Präsentationserweiterungen und verändern weder die 18 Szenen noch die
eingefrorenen Manuskripte.
