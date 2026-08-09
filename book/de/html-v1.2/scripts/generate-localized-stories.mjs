import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const okiRoot = resolve(projectRoot, "../../..");
const hardBreakSentinel = "__OKI_HARD_BREAK__";

const configurations = [
  {
    locale: "en",
    exportName: "englishScenes",
    manuscript: "story/en/manuscript-v1.0-rc1.md",
    heading: /^## Scene (\d+) - (.+)$/gm,
    altTexts: [
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
    ],
  },
  {
    locale: "es",
    exportName: "spanishScenes",
    manuscript: "story/es/manuscript-v1.0-rc1.md",
    heading: /^## Escena (\d+) - (.+)$/gm,
    altTexts: [
      "Varias personas conversan sobre un plano entre computadoras, cables y máquinas.",
      "Oki aparece como una figura verde y azul sobre una nueva isla con su ayuntamiento.",
      "Oki y el equipo observan en el taller un gran huevo de clúster reluciente con su primera grieta.",
      "Sobre la gran isla de Oki hay una isla más pequeña con límites y ayuntamiento propios, junto a la figura azul de Mio.",
      "Mio está delante de su propio ayuntamiento mientras Oki y la constructora reciben a la joven isla.",
      "Oki muestra a Mio un gran libro rotulado Contratos: ¿Qué debe funcionar?",
      "Los cuatro sensores Scout, Meter, Check y Proof llevan binoculares, un medidor, una tabla y una marca verde.",
      "Un equipo independiente construye una nueva isla a lo lejos mientras Oki y Mio observan desde la costa.",
      "El equipo presenta a Mio una isla que ya existe y aparece una conexión segura y consciente en el mapa.",
      "El equipo repara caminos y puertas; después, los sensores comprueban el resultado y Proof muestra la marca verde.",
      "Un faro alto ilumina varias islas y hace visible una zona oscura de un puente.",
      "Aia llega en una pequeña aeronave con una mochila violeta llena de planos e ideas, y Oki y Mio la reciben.",
      "Aia, Oki y los sensores están ante una puerta mientras la constructora humana sostiene la llave de autoridad.",
      "Oki, Mio y Aia observan una familia variada de islas de servicios compartidos, IA, robótica e IoT.",
      "Oki, Aia y varios niños exploran en una computadora portátil un pequeño mundo de práctica.",
      "Tras una tormenta, las personas reconstruyen el ayuntamiento y los caminos esenciales de Mio mientras las demás islas siguen brillando.",
      "Las personas, Oki y Mio estudian un plano de objetivo marcado claramente como Mañana para un futuro ciclo de vida de clústeres.",
      "Oki, Mio y Aia contemplan al atardecer una familia diversa de islas luminosas.",
    ],
  },
  {
    locale: "fa",
    exportName: "persianScenes",
    manuscript: "story/fa/manuscript-v1.0-rc1.md",
    heading: /^## صحنه (\d+) - (.+)$/gm,
    altTexts: [
      "آدم‌ها میان رایانه‌ها، کابل‌ها و ماشین‌ها دربارهٔ یک نقشهٔ ساخت گفت‌وگو می‌کنند.",
      "اوکی به شکل پیکره‌ای مهربان و سبز و آبی روی جزیره‌ای تازه با یک تالار شهر پدیدار می‌شود.",
      "اوکی و گروه سازنده در کارگاه به یک تخم کلاستر بزرگ و درخشان با نخستین ترک نگاه می‌کنند.",
      "روی جزیرهٔ بزرگ اوکی، جزیره‌ای کوچک‌تر با مرز و تالار شهر خودش در کنار پیکرهٔ آبی میو قرار دارد.",
      "میو جلوی تالار شهر خودش ایستاده و اوکی و سازنده به جزیرهٔ جوان خوشامد می‌گویند.",
      "اوکی در تالار شهر کتاب بزرگی با عنوان قراردادها، چه چیزهایی باید کار کنند، به میو نشان می‌دهد.",
      "چهار حسگر Scout، Meter، Check و Proof دوربین، دستگاه اندازه‌گیری، تختهٔ بررسی و علامت سبز در دست دارند.",
      "گروهی مستقل در دوردست جزیره‌ای تازه می‌سازد و اوکی و میو از ساحل نگاه می‌کنند.",
      "گروه سازنده جزیره‌ای را که از پیش وجود دارد به میو معرفی می‌کند و ارتباطی امن و آگاهانه روی نقشه پدیدار می‌شود.",
      "گروه سازنده راه‌ها و درها را تعمیر می‌کند؛ سپس حسگرها نتیجه را بررسی می‌کنند و Proof علامت سبز را نشان می‌دهد.",
      "فانوس دریایی بلندی چند جزیره را روشن می‌کند و نقطه‌ای تاریک روی یک پل را نمایان می‌سازد.",
      "آیا با کشتی هوایی کوچک و کوله‌پشتی بنفش پُر از نقشه و ایده می‌رسد و اوکی و میو به او خوشامد می‌گویند.",
      "آیا، اوکی و حسگرها جلوی دروازه ایستاده‌اند و سازندهٔ انسان کلید اختیار را در دست دارد.",
      "اوکی، میو و آیا به خانواده‌ای گوناگون از جزیره‌های خدمات مشترک، هوش مصنوعی، رباتیک و اینترنت اشیا نگاه می‌کنند.",
      "اوکی، آیا و چند کودک روی یک لپ‌تاپ دنیای جزیره‌ای کوچکی را برای یادگیری و آزمایش بررسی می‌کنند.",
      "پس از توفان، آدم‌ها تالار شهر و راه‌های اصلی میو را از روی نقشه‌های امن بازسازی می‌کنند و جزیره‌های دیگر همچنان روشن‌اند.",
      "آدم‌ها، اوکی و میو نقشهٔ هدفی را که برای چرخهٔ آیندهٔ کلاستر به‌روشنی با واژهٔ فردا مشخص شده بررسی می‌کنند.",
      "اوکی، میو و آیا هنگام غروب به خانواده‌ای گوناگون و نورانی از جزیره‌ها نگاه می‌کنند.",
    ],
  },
];

for (const configuration of configurations) {
  const manuscriptPath = resolve(okiRoot, configuration.manuscript);
  const outputPath = resolve(projectRoot, `app/story.${configuration.locale}.ts`);
  const manuscript = await readFile(manuscriptPath, "utf8");
  const headings = [...manuscript.matchAll(configuration.heading)];

  if (headings.length !== 18) {
    throw new Error(
      `Expected 18 ${configuration.locale} scenes, found ${headings.length}.`,
    );
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
      alt: configuration.altTexts[index],
      paragraphs: body.split(/\n\s*\n/).map((paragraph) =>
        paragraph
          .replace(/ {2}\n/g, hardBreakSentinel)
          .replace(/\n/g, " ")
          .replaceAll(hardBreakSentinel, "\n")
          .trim(),
      ),
    };
  });

  const source = `// Generated from ${configuration.manuscript}.\n// Run npm run generate:locales after editing a localized manuscript.\n\nimport type { StoryScene } from "./story";\n\nexport const ${configuration.exportName}: StoryScene[] = ${JSON.stringify(scenes, null, 2)};\n`;

  await writeFile(outputPath, source, "utf8");
  console.log(`${configuration.locale.toUpperCase()} story module written to ${outputPath}`);
}
