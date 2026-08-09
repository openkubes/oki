import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { scenes } from "../app/story.ts";
import { englishScenes } from "../app/story.en.ts";
import { spanishScenes } from "../app/story.es.ts";
import { persianScenes } from "../app/story.fa.ts";

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
    scenes,
    manuscript: "story/de/manuscript-v1.2.md",
    heading: /^## Szene (\d+) - (.+)$/gm,
  },
  {
    label: "EN v1.0 RC1",
    scenes: englishScenes,
    manuscript: "story/en/manuscript-v1.0-rc1.md",
    heading: /^## Scene (\d+) - (.+)$/gm,
  },
  {
    label: "ES v1.0 RC1",
    scenes: spanishScenes,
    manuscript: "story/es/manuscript-v1.0-rc1.md",
    heading: /^## Escena (\d+) - (.+)$/gm,
  },
  {
    label: "FA v1.0 RC1",
    scenes: persianScenes,
    manuscript: "story/fa/manuscript-v1.0-rc1.md",
    heading: /^## صحنه (\d+) - (.+)$/gm,
  },
];

for (const edition of editions) {
  const manuscript = await readFile(resolve(okiRoot, edition.manuscript), "utf8");
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
assert.match(standalone, /In einer Familie darf jeder anders sein\./);
assert.match(standalone, /Aber wann ist sie nicht nur da, sondern wirklich verlässlich\?/);
assert.match(standalone, /data-slide="21"/);
assert.match(standalone, /href="\.\/en\/"/);
assert.match(englishStandalone, /Oki and the Many Islands/);
assert.match(englishStandalone, /Everyone in a family can be different\./);
assert.match(englishStandalone, /But when is it not merely there, but truly reliable\?/);
assert.match(englishStandalone, /data-slide="21"/);
assert.match(englishStandalone, /href="\.\.\/"/);
assert.match(spanishStandalone, /Oki y las muchas islas/);
assert.match(spanishStandalone, /En una familia, cada uno puede ser diferente\./);
assert.match(spanishStandalone, /Pero ¿cuándo deja de estar simplemente ahí y se vuelve realmente confiable\?/);
assert.match(spanishStandalone, /data-slide="21"/);
assert.match(spanishStandalone, /href="\.\.\/fa\/"/);
assert.match(persianStandalone, /اوکی و جزیره‌های بسیار/);
assert.match(persianStandalone, /در یک خانواده هرکس می‌تواند متفاوت باشد\./);
assert.match(persianStandalone, /اما چه زمانی فقط آنجا نیست و واقعاً قابل اعتماد است؟/);
assert.match(persianStandalone, /data-slide="21"/);
assert.match(persianStandalone, /<html lang="fa" dir="rtl">/);
assert.match(persianStandalone, /href="\.\.\/es\/"/);

console.log(
  "PASS: DE v1.2 plus EN/ES/FA v1.0 RC1, 18 canonical images and all standalone editions agree.",
);
