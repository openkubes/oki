import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Oki presentation shell and release metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Oki und das Geheimnis der Inseln/);
  assert.match(html, /Digitale HTML-Ausgabe/);
  assert.match(html, /v1\.2/);
  assert.match(html, /Der illustrierte Kinderführer zu OpenKubes/);
  assert.match(html, /Created by Arash Kaffamanesh for Kubernauts/);
  assert.match(html, /with assistance from ChatGPT and Codex/);
  assert.match(html, /Folienübersicht/);
  assert.match(html, /01<!-- --> \/ <!-- -->25/);
  assert.doesNotMatch(html, /Para a Emily/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("renders the English review edition at /en", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Oki and the Secret of the Islands/);
  assert.match(html, /English HTML Preview/);
  assert.match(html, /The Illustrated Children/);
  assert.match(html, /slide overview/i);
  assert.match(html, /01<!-- --> \/ <!-- -->25/);
});

test("renders the Spanish review edition at /es", async () => {
  const response = await render("/es");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Oki y el secreto de las islas/);
  assert.match(html, /Vista previa HTML en español/);
  assert.match(html, /La guía infantil ilustrada de OpenKubes/);
  assert.match(html, /Created by Arash Kaffamanesh for Kubernauts/);
  assert.match(html, /Abrir el índice de diapositivas/);
});

test("renders the Persian review edition at /fa with RTL content", async () => {
  const response = await render("/fa");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /اوکی و راز جزیره‌ها/);
  assert.match(html, /پیش‌نمایش HTML فارسی/);
  assert.match(html, /راهنمای مصور کودکان برای OpenKubes/);
  assert.match(html, /Created by Arash Kaffamanesh for Kubernauts/);
  assert.match(html, /باز کردن فهرست اسلایدها/);
  assert.match(html, /<main[^>]+dir="rtl"/);
});

test("renders the Simplified Chinese review edition at /zh", async () => {
  const response = await render("/zh");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /奥奇与群岛的秘密/);
  assert.match(html, /简体中文 HTML 审校预览/);
  assert.match(html, /OpenKubes 儿童图解指南/);
  assert.match(html, /打开幻灯片目录/);
  assert.match(html, /<main[^>]+lang="zh"[^>]+dir="ltr"/);
});

test("renders the Japanese review edition at /ja", async () => {
  const response = await render("/ja");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /オキと島々の秘密/);
  assert.match(html, /日本語 HTML レビュー版/);
  assert.match(html, /OpenKubes の子ども向けイラストガイド/);
  assert.match(html, /スライド一覧を開く/);
  assert.match(html, /<main[^>]+lang="ja"[^>]+dir="ltr"/);
});

test("renders the Arabic review edition at /ar with RTL content", async () => {
  const response = await render("/ar");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /أوكي وسرّ الجزر/);
  assert.match(html, /معاينة HTML العربية/);
  assert.match(html, /دليل الأطفال المصوّر إلى OpenKubes/);
  assert.match(html, /فتح فهرس الشرائح/);
  assert.match(html, /<main[^>]+lang="ar"[^>]+dir="rtl"/);
});

test("renders the French review edition at /fr", async () => {
  const response = await render("/fr");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Oki et le secret des îles/);
  assert.match(html, /Aperçu HTML en français/);
  assert.match(html, /Le guide illustré d&#x27;OpenKubes pour les enfants/);
  assert.match(html, /Ouvrir le sommaire des diapositives/);
  assert.match(html, /<main[^>]+lang="fr"[^>]+dir="ltr"/);
});

test("renders the Hindi review edition at /hi", async () => {
  const response = await render("/hi");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /ओकी और द्वीपों का रहस्य/);
  assert.match(html, /हिन्दी HTML समीक्षा-पूर्वावलोकन/);
  assert.match(html, /OpenKubes के बारे में बच्चों की चित्रमय मार्गदर्शिका/);
  assert.match(html, /स्लाइड सूची खोलें/);
  assert.match(html, /<main[^>]+lang="hi"[^>]+dir="ltr"/);
});

test("renders the Portuguese review edition and Emily dedication at /pt", async () => {
  const response = await render("/pt");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Oki e o segredo das ilhas/);
  assert.match(html, /Prévia HTML em português/);
  assert.match(html, /O guia infantil ilustrado de OpenKubes/);
  assert.match(html, /Para a Emily, que em breve chegará ao mundo\. 💚/);
  assert.match(html, /<main[^>]+lang="pt"[^>]+dir="ltr"/);
});

test("keeps all canonical scene assets in the public build", async () => {
  const manifest = await readFile(
    new URL("../app/story.ts", import.meta.url),
    "utf8",
  );

  for (let scene = 1; scene <= 18; scene += 1) {
    assert.match(manifest, new RegExp(`/scenes/scene-${String(scene).padStart(2, "0")}\\.png`));
  }
});

test("keeps all three epilogue illustrations in the public build", async () => {
  await access(new URL("../public/epilogue/earth-island.png", import.meta.url));
  await access(new URL("../public/epilogue/solar-family.png", import.meta.url));
  await access(new URL("../public/epilogue/never-finished.png", import.meta.url));
});

test("provides three localized epilogue pages in every edition", async () => {
  const { epilogueCopy } = await import("../app/epilogue-copy.ts");
  assert.deepEqual(Object.keys(epilogueCopy), ["de", "en", "es", "fa", "zh", "ja", "ar", "fr", "hi", "pt"]);
  for (const pages of Object.values(epilogueCopy)) {
    assert.equal(pages.length, 3);
    assert.equal(pages[0].id, "earth-island");
    assert.equal(pages[1].id, "solar-family");
    assert.equal(pages[2].id, "never-finished");
  }
  assert.equal(epilogueCopy.de[0].title, "Auch unsere Erde ist eine Insel.");
  assert.equal(epilogueCopy.en[1].title, "No island is ever completely alone.");
  assert.equal(epilogueCopy.de[2].title, "Man ist nie fertig.");
  assert.equal(epilogueCopy.en[2].title, "We are never finished.");
  assert.equal(epilogueCopy.es[2].title, "Nunca terminamos de crecer.");
  assert.equal(epilogueCopy.fa[2].title, "آدم هیچ‌وقت تمام نمی‌شود.");
  assert.equal(epilogueCopy.zh[2].title, "人永远不会真正完成。");
  assert.equal(epilogueCopy.ja[2].title, "人は、いつまでも未完成。");
  assert.equal(epilogueCopy.ar[2].title, "نحن لا نكتمل أبدًا.");
  assert.equal(epilogueCopy.fr[2].title, "On n’a jamais fini.");
  assert.equal(epilogueCopy.hi[2].title, "इंसान कभी पूरा नहीं होता।");
  assert.equal(epilogueCopy.pt[2].title, "A gente nunca termina de crescer.");
});

test("exports a directly openable standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /Oki und das Geheimnis der Inseln/);
  assert.match(html, /data-slide="24"/);
  assert.match(html, /Mio und ihr eigenes Rathaus/);
  assert.match(html, /href="https:\/\/kubernauts\.de\/"/);
  assert.match(html, /Aber wann ist sie nicht nur da, sondern wirklich verlässlich\?/);
  assert.doesNotMatch(html, /src="\/scenes\//);
  assert.match(html, /src="\.\/epilogue\/earth-island\.png"/);
  assert.match(html, /src="\.\/epilogue\/solar-family\.png"/);
  assert.match(html, /src="\.\/epilogue\/never-finished\.png"/);
  await access(new URL("../standalone/epilogue/earth-island.png", import.meta.url));
  await access(new URL("../standalone/epilogue/solar-family.png", import.meta.url));
  await access(new URL("../standalone/epilogue/never-finished.png", import.meta.url));

  for (let scene = 1; scene <= 18; scene += 1) {
    const filename = `scene-${String(scene).padStart(2, "0")}.png`;
    await access(new URL(`../standalone/scenes/${filename}`, import.meta.url));
    assert.match(html, new RegExp(`src="\\./scenes/${filename}"`));
  }
});

test("exports a directly openable English standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/en/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="en"/);
  assert.match(html, /Oki and the Secret of the Islands/);
  assert.match(html, /with assistance from ChatGPT and Codex/);
  assert.match(html, /Being Born Is Not the Same as Being Ready/);
  assert.match(html, /href="\.\.\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.match(html, /src="\.\.\/epilogue\/earth-island\.png"/);
  assert.match(html, /src="\.\.\/epilogue\/solar-family\.png"/);
  assert.match(html, /src="\.\.\/epilogue\/never-finished\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable Spanish standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/es/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="es" dir="ltr"/);
  assert.match(html, /Oki y el secreto de las islas/);
  assert.match(html, /href="https:\/\/kubernauts\.de\/"/);
  assert.match(html, /Nacer no es lo mismo que estar listo/);
  assert.match(html, /href="\.\.\/fa\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable Persian standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/fa/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="fa" dir="rtl"/);
  assert.match(html, /اوکی و راز جزیره‌ها/);
  assert.match(html, /with assistance from ChatGPT and Codex/);
  assert.match(html, /به دنیا آمدن، همان آماده بودن نیست/);
  assert.match(html, /href="\.\.\/es\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable Simplified Chinese standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/zh/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="zh" dir="ltr"/);
  assert.match(html, /奥奇与群岛的秘密/);
  assert.match(html, /诞生不等于准备就绪/);
  assert.match(html, /href="\.\.\/ja\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable Japanese standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/ja/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="ja" dir="ltr"/);
  assert.match(html, /オキと島々の秘密/);
  assert.match(html, /生まれたことと、準備ができたことは違う/);
  assert.match(html, /href="\.\.\/zh\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable Arabic standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/ar/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="ar" dir="rtl"/);
  assert.match(html, /أوكي وسرّ الجزر/);
  assert.match(html, /الولادة لا تعني الجاهزية/);
  assert.match(html, /href="\.\.\/fr\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable French standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/fr/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="fr" dir="ltr"/);
  assert.match(html, /Oki et le secret des îles/);
  assert.match(html, /Naître ne veut pas dire être prêt/);
  assert.match(html, /href="\.\.\/hi\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable Hindi standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/hi/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="hi" dir="ltr"/);
  assert.match(html, /ओकी और द्वीपों का रहस्य/);
  assert.match(html, /जन्म लेना तैयार होना नहीं है/);
  assert.match(html, /href="\.\.\/ar\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable Portuguese standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/pt/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="pt" dir="ltr"/);
  assert.match(html, /Oki e o segredo das ilhas/);
  assert.match(html, /Nascer não é o mesmo que estar pronto/);
  assert.match(html, /Para a Emily, que em breve chegará ao mundo\. 💚/);
  assert.match(html, /href="\.\.\/hi\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});
