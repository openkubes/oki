import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { scenes } from "../app/story.ts";
import { englishScenes } from "../app/story.en.ts";
import { spanishScenes } from "../app/story.es.ts";
import { persianScenes } from "../app/story.fa.ts";
import { chineseScenes } from "../app/story.zh.ts";
import { japaneseScenes } from "../app/story.ja.ts";
import { arabicScenes } from "../app/story.ar.ts";
import { frenchScenes } from "../app/story.fr.ts";
import { hindiScenes } from "../app/story.hi.ts";
import { portugueseScenes } from "../app/story.pt.ts";
import { presentationCopy } from "../app/presentation-copy.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const okiRoot = resolve(projectRoot, "../../..");
const imageManifestPath = resolve(
  okiRoot,
  "art/canonical/scenes/de/CANONICAL-SCENES-DE-v1.1.sha256",
);

const normalize = (value) =>
  value
    .replaceAll("**", "")
    .replaceAll("`", "")
    .replace(/(?<!\*)\*(?!\*)/g, "")
    .replace(/\s+/g, " ")
    .trim();

const sha256 = async (path) =>
  createHash("sha256").update(await readFile(path)).digest("hex");

const editions = [
  {
    label: "DE v1.2",
    locale: "de",
    scenes,
    manuscript: "story/de/manuscript-v1.2.md",
    heading: /^## Szene (\d+) - (.+)$/gm,
  },
  {
    label: "EN v1.0 RC1",
    locale: "en",
    scenes: englishScenes,
    manuscript: "story/en/manuscript-v1.0-rc1.md",
    heading: /^## Scene (\d+) - (.+)$/gm,
  },
  {
    label: "ES v1.0 RC1",
    locale: "es",
    scenes: spanishScenes,
    manuscript: "story/es/manuscript-v1.0-rc1.md",
    heading: /^## Escena (\d+) - (.+)$/gm,
  },
  {
    label: "FA v1.0 RC1",
    locale: "fa",
    scenes: persianScenes,
    manuscript: "story/fa/manuscript-v1.0-rc1.md",
    heading: /^## صحنه (\d+) - (.+)$/gm,
  },
  {
    label: "ZH v1.0 RC1",
    locale: "zh",
    scenes: chineseScenes,
    manuscript: "story/zh/manuscript-v1.0-rc1.md",
    heading: /^## 场景 (\d+) - (.+)$/gm,
  },
  {
    label: "JA v1.0 RC1",
    locale: "ja",
    scenes: japaneseScenes,
    manuscript: "story/ja/manuscript-v1.0-rc1.md",
    heading: /^## シーン (\d+) - (.+)$/gm,
  },
  {
    label: "AR v1.0 RC1",
    locale: "ar",
    scenes: arabicScenes,
    manuscript: "story/ar/manuscript-v1.0-rc1.md",
    heading: /^## المشهد (\d+) - (.+)$/gm,
  },
  {
    label: "FR v1.0 RC1",
    locale: "fr",
    scenes: frenchScenes,
    manuscript: "story/fr/manuscript-v1.0-rc1.md",
    heading: /^## Scène (\d+) - (.+)$/gm,
  },
  {
    label: "HI v1.0 RC1",
    locale: "hi",
    scenes: hindiScenes,
    manuscript: "story/hi/manuscript-v1.0-rc1.md",
    heading: /^## दृश्य (\d+) - (.+)$/gm,
  },
  {
    label: "PT v1.0 RC1",
    locale: "pt",
    scenes: portugueseScenes,
    manuscript: "story/pt/manuscript-v1.0-rc1.md",
    heading: /^## Cena (\d+) - (.+)$/gm,
  },
];

for (const edition of editions) {
  const manuscript = await readFile(resolve(okiRoot, edition.manuscript), "utf8");
  assert.ok(
    manuscript.startsWith(`# ${presentationCopy[edition.locale].title}\n`),
    `${edition.label}: manuscript and presentation title must agree.`,
  );
  const headings = [...manuscript.matchAll(edition.heading)];
  const manuscriptScenes = headings.map((heading, index) => {
    const bodyStart = (heading.index ?? 0) + heading[0].length;
    const bodyEnd = headings[index + 1]?.index ?? manuscript.length;
    const body = manuscript
      .slice(bodyStart, bodyEnd)
      .replace(/\n---\s*$/, "")
      .trim();

    return {
      number: Number(heading[1]),
      title: heading[2].trim(),
      text: normalize(body),
    };
  });

  assert.equal(
    edition.scenes.length,
    18,
    `${edition.label}: the web edition must contain exactly 18 scenes.`,
  );
  assert.equal(
    manuscriptScenes.length,
    18,
    `${edition.label}: the manuscript must contain exactly 18 scenes.`,
  );

  for (const scene of edition.scenes) {
    const source = manuscriptScenes.find(
      (candidate) => candidate.number === scene.number,
    );
    assert.ok(source, `${edition.label}: scene ${scene.number} is missing.`);
    assert.equal(
      scene.title,
      source.title,
      `${edition.label}: title mismatch in scene ${scene.number}.`,
    );
    assert.equal(
      normalize(scene.paragraphs.join("\n\n")),
      source.text,
      `${edition.label}: text mismatch in scene ${scene.number}.`,
    );
  }
}

const imageManifest = await readFile(imageManifestPath, "utf8");
const expectedImages = new Map();

for (const line of imageManifest.trim().split("\n")) {
  const match = line.match(/^([a-f0-9]{64})\s+OKI-SCENE-DE-(\d{2})-v\d+\.png$/);
  assert.ok(match, `Ungültige Zeile im Bildmanifest: ${line}`);
  expectedImages.set(Number(match[2]), match[1]);
}

assert.equal(expectedImages.size, 18, "Das Bildmanifest muss 18 Szenen enthalten.");

for (const scene of scenes) {
  const filename = `scene-${String(scene.number).padStart(2, "0")}.png`;
  const expected = expectedImages.get(scene.number);
  assert.equal(
    await sha256(resolve(projectRoot, "public/scenes", filename)),
    expected,
    `Public-Bild für Szene ${scene.number} ist nicht kanonisch.`,
  );
  assert.equal(
    await sha256(resolve(projectRoot, "standalone/scenes", filename)),
    expected,
    `Offline-Bild für Szene ${scene.number} ist nicht kanonisch.`,
  );
}

const epilogueAssets = [
  {
    filename: "earth-island.png",
    expectedSha256: "787c2a8e90ea750033323ab11abd53821a28b672591b09711ec133ab9ce79e46",
  },
  {
    filename: "solar-family.png",
    expectedSha256: "523d1c826418108cd1ecfba636a879eac7395fc12fd27008dec3e308c75c82d2",
  },
  {
    filename: "never-finished.png",
    expectedSha256: "26c7a595b79841216476a06c1ddbd540ad011e72cebd7a116f64dda700984296",
  },
];

for (const asset of epilogueAssets) {
  assert.equal(
    await sha256(resolve(projectRoot, "public/epilogue", asset.filename)),
    asset.expectedSha256,
    `Public-Epilogbild ${asset.filename} stimmt nicht mit dem Provenance-Hash überein.`,
  );
  assert.equal(
    await sha256(resolve(projectRoot, "standalone/epilogue", asset.filename)),
    asset.expectedSha256,
    `Offline-Epilogbild ${asset.filename} stimmt nicht mit dem Provenance-Hash überein.`,
  );
}

const standalone = await readFile(resolve(projectRoot, "standalone/index.html"), "utf8");
const englishStandalone = await readFile(
  resolve(projectRoot, "standalone/en/index.html"),
  "utf8",
);
const spanishStandalone = await readFile(
  resolve(projectRoot, "standalone/es/index.html"),
  "utf8",
);
const persianStandalone = await readFile(
  resolve(projectRoot, "standalone/fa/index.html"),
  "utf8",
);
const chineseStandalone = await readFile(
  resolve(projectRoot, "standalone/zh/index.html"),
  "utf8",
);
const japaneseStandalone = await readFile(
  resolve(projectRoot, "standalone/ja/index.html"),
  "utf8",
);
const arabicStandalone = await readFile(
  resolve(projectRoot, "standalone/ar/index.html"),
  "utf8",
);
const frenchStandalone = await readFile(
  resolve(projectRoot, "standalone/fr/index.html"),
  "utf8",
);
const hindiStandalone = await readFile(
  resolve(projectRoot, "standalone/hi/index.html"),
  "utf8",
);
const portugueseStandalone = await readFile(
  resolve(projectRoot, "standalone/pt/index.html"),
  "utf8",
);
for (const editionWithoutDedication of [
  standalone,
  englishStandalone,
  spanishStandalone,
  persianStandalone,
  chineseStandalone,
  japaneseStandalone,
  arabicStandalone,
  frenchStandalone,
  hindiStandalone,
]) {
  assert.doesNotMatch(
    editionWithoutDedication,
    /Para a Emily/,
    "The Emily dedication must remain exclusive to the Portuguese cover.",
  );
}
assert.match(standalone, /In einer Familie darf jeder anders sein\./);
assert.match(standalone, /Oki und das Geheimnis der Inseln/);
assert.match(standalone, /Aber wann ist sie nicht nur da, sondern wirklich verlässlich\?/);
assert.match(standalone, /data-slide="24"/);
assert.match(standalone, /Auch unsere Erde ist eine Insel\./);
assert.match(standalone, /Keine Insel ist ganz allein\./);
assert.match(standalone, /Man ist nie fertig\./);
assert.match(standalone, /Gott sei Dank nicht\./);
assert.match(standalone, /href="\.\/en\/"/);
assert.match(standalone, /Created by Arash Kaffamanesh for Kubernauts/);
assert.match(standalone, /with assistance from ChatGPT and Codex/);
assert.match(standalone, /href="https:\/\/kubernauts\.de\/"/);
assert.match(englishStandalone, /Oki and the Secret of the Islands/);
assert.match(englishStandalone, /Everyone in a family can be different\./);
assert.match(englishStandalone, /But when is it not merely there, but truly reliable\?/);
assert.match(englishStandalone, /data-slide="24"/);
assert.match(englishStandalone, /Our Earth is an island, too\./);
assert.match(englishStandalone, /No island is ever completely alone\./);
assert.match(englishStandalone, /We are never finished\./);
assert.match(englishStandalone, /href="\.\.\/"/);
assert.match(spanishStandalone, /Oki y el secreto de las islas/);
assert.match(spanishStandalone, /En una familia, cada uno puede ser diferente\./);
assert.match(spanishStandalone, /Pero ¿cuándo deja de estar simplemente ahí y se vuelve realmente confiable\?/);
assert.match(spanishStandalone, /data-slide="24"/);
assert.match(spanishStandalone, /Nunca terminamos de crecer\./);
assert.match(spanishStandalone, /href="\.\.\/fa\/"/);
assert.match(persianStandalone, /اوکی و راز جزیره‌ها/);
assert.match(persianStandalone, /در یک خانواده هرکس می‌تواند متفاوت باشد\./);
assert.match(persianStandalone, /اما چه زمانی فقط آنجا نیست و واقعاً قابل اعتماد است؟/);
assert.match(persianStandalone, /data-slide="24"/);
assert.match(persianStandalone, /هیچ چیزی تمامی ندارد\./);
assert.match(persianStandalone, /<html lang="fa" dir="rtl">/);
assert.match(persianStandalone, /href="\.\.\/es\/"/);
assert.match(chineseStandalone, /奥奇与群岛的秘密/);
assert.match(chineseStandalone, /一家人可以各不相同。/);
assert.match(chineseStandalone, /可它什么时候才不只是存在，而是真正可靠呢？/);
assert.match(chineseStandalone, /data-slide="24"/);
assert.match(chineseStandalone, /人永远不会真正完成。/);
assert.match(chineseStandalone, /<html lang="zh" dir="ltr">/);
assert.match(chineseStandalone, /href="\.\.\/ja\/"/);
assert.match(japaneseStandalone, /オキと島々の秘密/);
assert.match(japaneseStandalone, /家族は、みんな違っていていい。/);
assert.match(japaneseStandalone, /でも、ただそこにあるだけでなく、本当に信頼できるのはいつ？/);
assert.match(japaneseStandalone, /data-slide="24"/);
assert.match(japaneseStandalone, /人は、いつまでも未完成。/);
assert.match(japaneseStandalone, /<html lang="ja" dir="ltr">/);
assert.match(japaneseStandalone, /href="\.\.\/zh\/"/);
assert.match(arabicStandalone, /أوكي وسرّ الجزر/);
assert.match(arabicStandalone, /في العائلة يمكن لكل فرد أن يكون مختلفًا\./);
assert.match(arabicStandalone, /لكن متى لا تكون موجودة فحسب، بل موثوقة حقًا؟/);
assert.match(arabicStandalone, /data-slide="24"/);
assert.match(arabicStandalone, /نحن لا نكتمل أبدًا\./);
assert.match(arabicStandalone, /<html lang="ar" dir="rtl">/);
assert.match(arabicStandalone, /href="\.\.\/fr\/"/);
assert.match(frenchStandalone, /Oki et le secret des îles/);
assert.match(frenchStandalone, /Dans une famille, chacun peut être différent\./);
assert.match(frenchStandalone, /Mais quand est-elle vraiment fiable, et pas seulement présente ?/);
assert.match(frenchStandalone, /data-slide="24"/);
assert.match(frenchStandalone, /On n’a jamais fini\./);
assert.match(frenchStandalone, /<html lang="fr" dir="ltr">/);
assert.match(frenchStandalone, /href="\.\.\/hi\/"/);
assert.match(hindiStandalone, /ओकी और द्वीपों का रहस्य/);
assert.match(hindiStandalone, /परिवार में हर कोई अलग हो सकता है।/);
assert.match(hindiStandalone, /लेकिन वह कब केवल मौजूद नहीं, बल्कि सचमुच भरोसेमंद होता है\?/);
assert.match(hindiStandalone, /data-slide="24"/);
assert.match(hindiStandalone, /इंसान कभी पूरा नहीं होता।/);
assert.match(hindiStandalone, /<html lang="hi" dir="ltr">/);
assert.match(hindiStandalone, /href="\.\.\/ar\/"/);
assert.match(portugueseStandalone, /Oki e o segredo das ilhas/);
assert.match(portugueseStandalone, /Em uma família, cada um pode ser diferente\./);
assert.match(portugueseStandalone, /Mas quando ela não está apenas presente, e sim verdadeiramente confiável\?/);
assert.match(portugueseStandalone, /Para a Emily, que em breve chegará ao mundo\. 💚/);
assert.match(portugueseStandalone, /data-slide="24"/);
assert.match(portugueseStandalone, /A gente nunca termina de crescer\./);
assert.match(portugueseStandalone, /<html lang="pt" dir="ltr">/);
assert.match(portugueseStandalone, /href="\.\.\/hi\/"/);

console.log(
  "PASS: DE v1.2 plus EN/ES/FA/ZH/JA/AR/FR/HI/PT v1.0 RC1, 18 canonical scenes, 3 localized epilogue pages and all standalone editions agree.",
);
