import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { scenes } from "../app/story.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const okiRoot = resolve(projectRoot, "../../..");
const manuscriptPath = resolve(okiRoot, "story/de/manuscript-v1.2.md");
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
assert.match(standalone, /In einer Familie darf jeder anders sein\./);
assert.match(standalone, /Aber wann ist sie nicht nur da, sondern wirklich verlässlich\?/);
assert.match(standalone, /data-slide="21"/);

console.log("PASS: Manuskript v1.2, 18 kanonische Bilder und Offline-Ausgabe stimmen überein.");
