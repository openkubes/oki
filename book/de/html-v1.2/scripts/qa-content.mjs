import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { scenes } from "../app/story.ts";
import { englishScenes } from "../app/story.en.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const okiRoot = resolve(projectRoot, "../../..");
const manuscriptPath = resolve(okiRoot, "story/de/manuscript-v1.2.md");
const englishManuscriptPath = resolve(
  okiRoot,
  "story/en/manuscript-v1.0-rc1.md",
);
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

const manuscript = await readFile(manuscriptPath, "utf8");
const sceneHeadings = [
  ...manuscript.matchAll(/^## Szene (\d+) - (.+)$/gm),
];
const manuscriptScenes = sceneHeadings.map((heading, index) => {
  const bodyStart = (heading.index ?? 0) + heading[0].length;
  const bodyEnd = sceneHeadings[index + 1]?.index ?? manuscript.length;
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

assert.equal(scenes.length, 18, "Die Webfassung muss genau 18 Szenen enthalten.");
assert.equal(
  manuscriptScenes.length,
  18,
  "Das eingefrorene Manuskript muss genau 18 Szenen enthalten.",
);

for (const scene of scenes) {
  const source = manuscriptScenes.find((candidate) => candidate.number === scene.number);
  assert.ok(source, `Szene ${scene.number} fehlt im Manuskript.`);
  assert.equal(scene.title, source.title, `Titelabweichung in Szene ${scene.number}.`);
  assert.equal(
    normalize(scene.paragraphs.join("\n\n")),
    source.text,
    `Textabweichung in Szene ${scene.number}.`,
  );
}

const englishManuscript = await readFile(englishManuscriptPath, "utf8");
const englishHeadings = [
  ...englishManuscript.matchAll(/^## Scene (\d+) - (.+)$/gm),
];
const englishManuscriptScenes = englishHeadings.map((heading, index) => {
  const bodyStart = (heading.index ?? 0) + heading[0].length;
  const bodyEnd = englishHeadings[index + 1]?.index ?? englishManuscript.length;
  const body = englishManuscript
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
  englishScenes.length,
  18,
  "The English web edition must contain exactly 18 scenes.",
);
assert.equal(
  englishManuscriptScenes.length,
  18,
  "The English review manuscript must contain exactly 18 scenes.",
);

for (const scene of englishScenes) {
  const source = englishManuscriptScenes.find(
    (candidate) => candidate.number === scene.number,
  );
  assert.ok(source, `Scene ${scene.number} is missing from the English manuscript.`);
  assert.equal(scene.title, source.title, `English title mismatch in scene ${scene.number}.`);
  assert.equal(
    normalize(scene.paragraphs.join("\n\n")),
    source.text,
    `English text mismatch in scene ${scene.number}.`,
  );
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
assert.match(standalone, /In einer Familie darf jeder anders sein\./);
assert.match(standalone, /Aber wann ist sie nicht nur da, sondern wirklich verlässlich\?/);
assert.match(standalone, /data-slide="21"/);
assert.match(standalone, /href="\.\/en\/"/);
assert.match(englishStandalone, /Oki and the Many Islands/);
assert.match(englishStandalone, /Everyone in a family can be different\./);
assert.match(englishStandalone, /But when is it not merely there, but truly reliable\?/);
assert.match(englishStandalone, /data-slide="21"/);
assert.match(englishStandalone, /href="\.\.\/"/);

console.log(
  "PASS: DE v1.2, EN v1.0 RC1, 18 canonical images and both standalone editions agree.",
);
