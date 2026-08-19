import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://aia.openkubes.org${pathname}`, {
      headers: {
        accept: "text/html",
        host: "aia.openkubes.org",
        "x-forwarded-host": "aia.openkubes.org",
        "x-forwarded-proto": "https",
      },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete Aia guide", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="de">/i);
  assert.match(html, /<title>Aia, Conductor und Captain · OpenKubes<\/title>/i);
  assert.match(html, /conductor-character-sheet\.png/i);
  assert.match(html, /Alle folgen derselben Partitur/i);
  assert.match(html, /Vom Wunsch zur/);
  assert.match(html, /Der Schlüssel bleibt beim Menschen/);
  assert.match(html, /Das Schiff ist ersetzbar\. Das Versprechen bleibt/);
  assert.match(html, /Built like a cathedral/);
  assert.match(html, /aia-robotics-recovery\.png/);
  assert.doesNotMatch(html, /class="chapterSection"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("server-renders the complete English guide", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<main lang="en">/i);
  assert.match(html, /<title>Aia, Conductor and Captain · OpenKubes<\/title>/i);
  assert.match(html, /A good plan is not good enough/);
  assert.match(html, /Everyone follows the same score/);
  assert.match(html, /The key stays with the human/);
  assert.match(html, /The ship is replaceable\. The promise remains/);
  assert.match(html, /A platform is both cathedral and ship/);
  assert.match(html, /href="\/"[^>]*>DE<\/a>/i);
  assert.match(html, /property="og:url" content="https:\/\/aia\.openkubes\.org\/en"/i);
});

test("emits host-aware social metadata and removes starter artifacts", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /property="og:image" content="https:\/\/aia\.openkubes\.org\/og\.png"/i);
  assert.match(html, /name="twitter:card" content="summary_large_image"/i);

  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app\/_sites-preview", import.meta.url)));
  await access(new URL("../public\/og.png", import.meta.url));
});

test("ships a framework-free standalone index", async () => {
  const html = await readFile(new URL("../standalone/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /href="styles\.css\?v=\d{8}-\d{4}"/i);
  assert.match(html, /src="presentation\.js\?v=\d{8}-\d{4}"/i);
  assert.match(html, /src="images\/aia-robotics-recovery\.png"/i);
  assert.match(html, /Built like a cathedral/i);
  assert.doesNotMatch(html, /\/_next|self\.__next/i);
  await access(new URL("../standalone/styles.css", import.meta.url));
  await access(new URL("../standalone/og.png", import.meta.url));
  const presentation = await readFile(new URL("../standalone/presentation.js", import.meta.url), "utf8");
  assert.match(presentation, /ArrowRight/);
  assert.match(presentation, /ArrowLeft/);
  assert.match(presentation, /data-deck-action="next"/);
  assert.match(presentation, /data-deck-action="overview"/);
  assert.match(presentation, /Zwölf Szenen\. Eine Verantwortungskette\./);
  assert.doesNotMatch(html, /class="chapterSection"/);
});

test("ships a complete offline English presentation", async () => {
  const html = await readFile(new URL("../standalone/en/index.html", import.meta.url), "utf8");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /A good plan is not good enough/);
  assert.match(html, /The ship is replaceable\. The promise remains/);
  assert.match(html, /src="\.\.\/presentation\.js\?v=\d{8}-\d{4}"/i);
  assert.match(html, /href="\.\.\/index\.html"[^>]*>DE<\/a>/i);
  assert.doesNotMatch(html, /class="chapterSection"/);
});
