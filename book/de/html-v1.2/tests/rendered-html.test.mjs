import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
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
  assert.match(html, /Folienübersicht/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
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
  assert.match(html, /Aber wann ist sie nicht nur da, sondern wirklich verlässlich\?/);
  assert.doesNotMatch(html, /src="\/scenes\//);

  for (let scene = 1; scene <= 18; scene += 1) {
    const filename = `scene-${String(scene).padStart(2, "0")}.png`;
    await access(new URL(`../standalone/scenes/${filename}`, import.meta.url));
    assert.match(html, new RegExp(`src="\\./scenes/${filename}"`));
  }
});
