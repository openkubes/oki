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
  {
    locale: "zh",
    exportName: "chineseScenes",
    manuscript: "story/zh/manuscript-v1.0-rc1.md",
    heading: /^## 场景 (\d+) - (.+)$/gm,
    altTexts: [
      "人们站在电脑、电缆和机器之间，一起讨论一张蓝图。",
      "奥奇化作一个友好的蓝绿色身影，出现在一座拥有市政厅的新岛上。",
      "奥奇和建造团队在工坊里注视着一颗出现第一道裂缝的大集群蛋。",
      "奥奇的大岛上出现了一座拥有独立边界和市政厅的小岛，蓝色的米奥站在旁边。",
      "米奥站在自己的市政厅前，奥奇和建造者欢迎这座年轻的岛。",
      "奥奇在市政厅里向米奥展示一本写着契约和哪些事情必须做到的大书。",
      "四个传感器 Scout、Meter、Check 和 Proof 分别拿着望远镜、测量仪、检查板和绿色对勾。",
      "一支独立团队在远处建造新岛，奥奇和米奥从岸边望着他们。",
      "建造团队把一座已经存在的岛介绍给米奥，地图上出现了一段经过确认的安全连接。",
      "建造团队修好年轻岛屿的道路和门，随后传感器验证结果，Proof 举起绿色对勾。",
      "一座高高的灯塔照亮几座岛，并让桥上的一处黑暗显现出来。",
      "艾娅乘小飞艇到来，背着装满图纸和点子的紫色背包，奥奇和米奥欢迎她。",
      "艾娅、奥奇和传感器站在大门前，人类建造者拿着决策权的钥匙。",
      "奥奇、米奥和艾娅望着由共享服务、人工智能、机器人和物联网岛屿组成的多样家族。",
      "奥奇、艾娅和孩子们在笔记本电脑上探索一个用于学习和试验的小岛世界。",
      "风暴之后，人们根据安全保存的图纸重建米奥的市政厅和重要道路，其他岛屿仍然亮着。",
      "人们、奥奇和米奥研究一张清楚标着明天的目标蓝图，它描绘未来的集群生命周期。",
      "傍晚，奥奇、米奥和艾娅望着一个多样而明亮的岛屿家族。",
    ],
  },
  {
    locale: "ja",
    exportName: "japaneseScenes",
    manuscript: "story/ja/manuscript-v1.0-rc1.md",
    heading: /^## シーン (\d+) - (.+)$/gm,
    altTexts: [
      "人々がコンピューター、ケーブル、機械の間で一枚の設計図について話し合っている。",
      "オキが役場のある新しい島に、親しみやすい青と緑の姿で現れる。",
      "オキと建築チームが工房で、最初のひびが入った大きなクラスターのたまごを見守る。",
      "オキの大きな島の上に、独自の境界と役場を持つ小さな島があり、青いミオがそばに立つ。",
      "ミオが自分の役場の前に立ち、オキとつくり手が若い島を迎えている。",
      "オキが役場でミオに、契約と何が動くべきかが書かれた大きな本を見せる。",
      "四つのセンサー Scout、Meter、Check、Proof が、双眼鏡、計測器、チェック表、緑のしるしを持つ。",
      "別の建築チームが遠くで新しい島を作り、オキとミオが岸から見守る。",
      "建築チームがすでに存在する島をミオに紹介し、地図に意図した安全なつながりが現れる。",
      "建築チームが若い島の道とドアを直し、そのあとセンサーが結果を確かめ、Proof が緑のしるしを見せる。",
      "高い灯台がいくつもの島を照らし、橋の暗い場所を見つける。",
      "アイアが設計図とひらめきでいっぱいの紫のリュックを背負い、小さな飛行船で到着する。",
      "アイア、オキ、センサーが門の前に立ち、人間のつくり手が決定権の鍵を持っている。",
      "オキ、ミオ、アイアが共有サービス、AI、ロボット、IoT のさまざまな島の家族を見わたす。",
      "オキ、アイア、子どもたちがノートパソコンで学習と実験のための小さな島世界を探検する。",
      "あらしのあと、人々が守られた設計図からミオの役場と大切な道を作り直し、ほかの島々は光り続ける。",
      "人々、オキ、ミオが、将来のクラスターの旅を描いた、あしたと明記された目標の設計図を見る。",
      "夕暮れに、オキ、ミオ、アイアが多彩に光る島の家族を見わたす。",
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
