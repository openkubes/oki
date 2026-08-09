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
  assert.match(html, /Oki und die vielen Inseln/);
  assert.match(html, /Digitale HTML-Ausgabe/);
  assert.match(html, /v1\.2/);
  assert.match(html, /Der illustrierte Kinderführer zu OpenKubes/);
  assert.match(html, /Created by Arash Kaffamanesh for Kubernauts/);
  assert.match(html, /with assistance from ChatGPT and Codex/);
  assert.match(html, /Folienübersicht/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("renders the English review edition at /en", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Oki and the Many Islands/);
  assert.match(html, /English HTML Preview/);
  assert.match(html, /The Illustrated Children/);
  assert.match(html, /slide overview/i);
});

test("renders the Spanish review edition at /es", async () => {
  const response = await render("/es");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Oki y las muchas islas/);
  assert.match(html, /Vista previa HTML en español/);
  assert.match(html, /La guía infantil ilustrada de OpenKubes/);
  assert.match(html, /Created by Arash Kaffamanesh for Kubernauts/);
  assert.match(html, /Abrir el índice de diapositivas/);
});

test("renders the Persian review edition at /fa with RTL content", async () => {
  const response = await render("/fa");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /اوکی و جزیره‌های بسیار/);
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
  assert.match(html, /奥奇和许许多多的岛屿/);
  assert.match(html, /简体中文 HTML 审校预览/);
  assert.match(html, /OpenKubes 儿童图解指南/);
  assert.match(html, /打开幻灯片目录/);
  assert.match(html, /<main[^>]+lang="zh"[^>]+dir="ltr"/);
});

test("renders the Japanese review edition at /ja", async () => {
  const response = await render("/ja");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /オキとたくさんの島々/);
  assert.match(html, /日本語 HTML レビュー版/);
  assert.match(html, /OpenKubes の子ども向けイラストガイド/);
  assert.match(html, /スライド一覧を開く/);
  assert.match(html, /<main[^>]+lang="ja"[^>]+dir="ltr"/);
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

test("exports a directly openable standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /data-slide="21"/);
  assert.match(html, /Mio und ihr eigenes Rathaus/);
  assert.match(html, /href="https:\/\/kubernauts\.de\/"/);
  assert.match(html, /Aber wann ist sie nicht nur da, sondern wirklich verlässlich\?/);
  assert.doesNotMatch(html, /src="\/scenes\//);

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
  assert.match(html, /Oki and the Many Islands/);
  assert.match(html, /with assistance from ChatGPT and Codex/);
  assert.match(html, /Being Born Is Not the Same as Being Ready/);
  assert.match(html, /href="\.\.\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable Spanish standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/es/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="es" dir="ltr"/);
  assert.match(html, /Oki y las muchas islas/);
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
  assert.match(html, /اوکی و جزیره‌های بسیار/);
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
  assert.match(html, /奥奇和许许多多的岛屿/);
  assert.match(html, /诞生不等于准备就绪/);
  assert.match(html, /href="\.\.\/ja\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});

test("exports a directly openable Japanese standalone presentation", async () => {
  const html = await readFile(new URL("../standalone/ja/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="ja" dir="ltr"/);
  assert.match(html, /オキとたくさんの島々/);
  assert.match(html, /生まれたことと、準備ができたことは違う/);
  assert.match(html, /href="\.\.\/zh\/"/);
  assert.match(html, /src="\.\.\/scenes\/scene-18\.png"/);
  assert.doesNotMatch(html, /src="\/scenes\//);
});
