import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manuscriptPath = resolve(
  projectRoot,
  "../../../story/en/manuscript-v1.0-rc1.md",
);
const outputPath = resolve(projectRoot, "app/story.en.ts");

const altTexts = [
  "People stand among computers, cables, and machines while they discuss a blueprint together.",
  "Oki appears as a friendly green-and-blue figure on a new island with a town hall.",
  "Oki and the building team watch a large shimmering cluster egg with its first crack inside a workshop.",
  "A smaller island with its own boundary and town hall stands on Oki's larger island beside the blue figure Mio.",
  "Mio stands as a small blue figure in front of their own town hall while Oki and the builder welcome the young island.",
  "Oki shows Mio a large book in the town hall labeled Contracts—What must work?",
  "The four sensor characters Scout, Meter, Check, and Proof hold binoculars, a gauge, a clipboard, and a green check mark.",
  "An independent building team constructs a new island in the distance while Oki and Mio watch from the shore.",
  "The building team introduces an already existing island to Mio, and a deliberate secure connection appears on Mio's map.",
  "The building team repairs paths and doors on a young island; afterward, the sensors verify the outcome and Proof shows the check mark.",
  "A tall lighthouse illuminates several islands and reveals a dark spot on a bridge.",
  "Aia arrives in a small airship with a purple backpack full of plans and ideas as Oki and Mio greet her.",
  "Aia, Oki, and the sensors stand before a gate while the human builder holds the key of authority.",
  "Oki, Mio, and Aia look across a varied family of shared-services, AI, robotics, and IoT islands.",
  "Oki, Aia, and children explore a small island world for learning and experimentation on a laptop.",
  "After a storm, people rebuild Mio's town hall and essential paths from protected plans while the other islands keep shining.",
  "People, Oki, and Mio study a target blueprint clearly marked Tomorrow for a future cluster lifecycle.",
  "Oki, Mio, and Aia look across a diverse, glowing family of islands in the evening.",
];

const manuscript = await readFile(manuscriptPath, "utf8");
const headings = [...manuscript.matchAll(/^## Scene (\d+) - (.+)$/gm)];

if (headings.length !== 18) {
  throw new Error(`Expected 18 English scenes, found ${headings.length}.`);
}

const scenes = headings.map((heading, index) => {
  const number = Number(heading[1]);
  const bodyStart = (heading.index ?? 0) + heading[0].length;
  const bodyEnd = headings[index + 1]?.index ?? manuscript.length;
  const body = manuscript
    .slice(bodyStart, bodyEnd)
    .replace(/\n---\s*$/, "")
    .trim();

  return {
    number,
    slug: `scene-${String(number).padStart(2, "0")}`,
    title: heading[2].trim(),
    image: `/scenes/scene-${String(number).padStart(2, "0")}.png`,
    alt: altTexts[index],
    paragraphs: body.split(/\n\s*\n/).map((paragraph) =>
      paragraph
        .replace(/ {2}\n/g, "\n")
        .replace(/\n/g, " ")
        .replace(/\*\*CONTRACTS\*\* \*What must work\?\*/,
          "**CONTRACTS**\n*What must work?*")
        .trim(),
    ),
  };
});

const source = `// Generated from story/en/manuscript-v1.0-rc1.md.\n// Run npm run generate:en after editing the English manuscript.\n\nimport type { StoryScene } from "./story";\n\nexport const englishScenes: StoryScene[] = ${JSON.stringify(scenes, null, 2)};\n`;

await writeFile(outputPath, source, "utf8");
console.log(`English story module written to ${outputPath}`);
