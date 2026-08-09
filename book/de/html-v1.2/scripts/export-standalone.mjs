import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  languageOptions,
  presentationCopy,
} from "../app/presentation-copy.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = resolve(projectRoot, "standalone");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function inlineMarkup(value) {
  return value
    .split("\n")
    .map((line) =>
      escapeHtml(line)
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>"),
    )
    .join("<br>");
}

function renderDocument(locale) {
  const copy = presentationCopy[locale];
  const assetPrefix = locale === "de" ? "." : "..";
  const languageMarkup = languageOptions
    .map((option) => {
      const href = locale === "de"
        ? option.locale === "de" ? "./" : `./${option.locale}/`
        : option.locale === "de" ? "../" : `../${option.locale}/`;
      const active = option.locale === locale
        ? ' class="active" aria-current="page"'
        : "";
      return `<a href="${href}" lang="${option.locale}" dir="${option.locale === "fa" ? "rtl" : "ltr"}" aria-label="${escapeHtml(option.label)}"${active}>${option.code}</a>`;
    })
    .join("");

  function storyFigure(scene, eager = false) {
    return `<figure class="story-figure">
      <img src="${assetPrefix}${scene.image}" alt="${escapeHtml(scene.alt)}" loading="${eager ? "eager" : "lazy"}" decoding="async">
      <figcaption>${escapeHtml(copy.canonicalIllustration)} · ${escapeHtml(copy.sceneLabel)} ${String(scene.number).padStart(2, "0")}</figcaption>
    </figure>`;
  }

  function sceneSlide(scene) {
    const textLength = scene.paragraphs.join(" ").length;
    const density = textLength > 1250 ? "very-dense" : textLength > 900 ? "dense" : "regular";
    return `<article class="slide scene-slide ${density}" aria-labelledby="offline-title-${scene.slug}">
      <section class="text-panel">
        <div class="eyebrow">${escapeHtml(copy.sceneLabel)} ${String(scene.number).padStart(2, "0")}</div>
        <h1 id="offline-title-${scene.slug}">${escapeHtml(scene.title)}</h1>
        <div class="orange-rule" aria-hidden="true"></div>
        <div class="scene-copy">${scene.paragraphs.map((paragraph) => `<p>${inlineMarkup(paragraph)}</p>`).join("")}</div>
      </section>
      <section class="image-panel">${storyFigure(scene)}</section>
    </article>`;
  }

  const cover = `<article class="slide cover-slide" aria-labelledby="offline-cover-title">
    <section class="text-panel cover-copy">
      <div class="edition-pill">${escapeHtml(copy.edition)}</div>
      <p class="brand-kicker">Oki Universe</p>
      <h1 id="offline-cover-title">${escapeHtml(copy.title)}</h1>
      <div class="orange-rule" aria-hidden="true"></div>
      <p class="subtitle">${escapeHtml(copy.subtitle)}</p>
      <p class="cover-intro">${escapeHtml(copy.coverIntro)}</p>
      <div class="cover-meta"><span>${escapeHtml(copy.sceneCount)}</span><span aria-hidden="true">·</span><span>${escapeHtml(copy.language)}</span><span aria-hidden="true">·</span><span>2026</span></div>
      <p class="creation-credit"><span>${escapeHtml(copy.creationCredit.creator)}</span><span>${escapeHtml(copy.creationCredit.assistance)}</span></p>
    </section>
    <section class="image-panel cover-image">${storyFigure(copy.scenes[17], true)}</section>
  </article>`;

  const quote = `<article class="slide quote-slide" aria-labelledby="offline-quote-title">
    <section class="text-panel quote-copy">
      <div class="eyebrow">${escapeHtml(copy.quoteEyebrow)}</div>
      <h1 id="offline-quote-title">${escapeHtml(copy.quoteTitle)}</h1>
      <div class="orange-rule" aria-hidden="true"></div>
      <blockquote>${escapeHtml(copy.quoteBody)}</blockquote>
      <p class="quote-note">${escapeHtml(copy.quoteNote)}</p>
    </section>
    <section class="image-panel">${storyFigure(copy.scenes[13])}</section>
  </article>`;

  const finale = `<article class="slide finale-slide" aria-labelledby="offline-finale-title">
    <section class="text-panel finale-copy">
      <div class="eyebrow">${escapeHtml(copy.finaleEyebrow)}</div>
      <h1 id="offline-finale-title">${escapeHtml(copy.finaleTitle)}</h1>
      <div class="orange-rule" aria-hidden="true"></div>
      <p class="finale-rhythm">${escapeHtml(copy.finaleRhythm)}</p>
      <p class="finale-small">${escapeHtml(copy.finaleSmall)}</p>
    </section>
    <section class="image-panel">${storyFigure(copy.scenes[17])}</section>
  </article>`;

  const about = `<article class="slide about-slide" aria-labelledby="offline-about-title">
    <section class="text-panel about-copy">
      <div class="eyebrow">${escapeHtml(copy.aboutEyebrow)}</div>
      <h1 id="offline-about-title">${escapeHtml(copy.aboutTitle)}</h1>
      <div class="orange-rule" aria-hidden="true"></div>
      <p class="about-question">${escapeHtml(copy.aboutQuestion)}</p>
      <div class="link-stack">
        <a href="https://openkubes.org/" target="_blank" rel="noreferrer">openkubes.org <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/openkubes/oki" target="_blank" rel="noreferrer">github.com/openkubes/oki <span aria-hidden="true">↗</span></a>
        <a href="https://kubernauts.de/" target="_blank" rel="noreferrer">kubernauts.de <span aria-hidden="true">↗</span></a>
      </div>
      <p class="license-note">${escapeHtml(copy.license)}</p>
    </section>
    <section class="image-panel">${storyFigure(copy.scenes[0])}</section>
  </article>`;

  const deck = [
    { id: "start", label: copy.startLabel, html: cover },
    { id: "leitgedanke", label: copy.quoteLabel, html: quote },
    ...copy.scenes.map((scene) => ({
      id: scene.slug,
      label: `${String(scene.number).padStart(2, "0")} · ${scene.title}`,
      html: sceneSlide(scene),
    })),
    { id: "schluss", label: copy.finaleLabel, html: finale },
    { id: "entdecken", label: copy.aboutLabel, html: about },
  ];

  const slidesMarkup = deck
    .map(
      (slide, index) =>
        `<div class="slide-stage offline-stage" data-slide="${index}" data-id="${slide.id}"${index === 0 ? "" : " hidden"}>${slide.html}</div>`,
    )
    .join("\n");

  const menuMarkup = deck
    .map(
      (slide, index) => `<li><button type="button" data-go="${index}"${index === 0 ? ' class="active" aria-current="page"' : ""}>
        <span class="menu-number">${String(index + 1).padStart(2, "0")}</span>
        <span>${escapeHtml(slide.label)}</span>
      </button></li>`,
    )
    .join("\n");

  const controller = `(() => {
    const slides = [...document.querySelectorAll('[data-slide]')];
    const menuButtons = [...document.querySelectorAll('[data-go]')];
    const progress = document.querySelector('.progress-track span');
    const counter = document.querySelector('.slide-counter');
    const live = document.querySelector('[aria-live]');
    const prev = document.querySelector('[data-action="prev"]');
    const next = document.querySelector('[data-action="next"]');
    const menu = document.querySelector('.menu-backdrop');
    const fullscreenLabel = document.querySelector('[data-fullscreen-label]');
    let current = Math.max(0, slides.findIndex((slide) => slide.dataset.id === location.hash.slice(1)));
    let touchStart = null;

    function show(index) {
      current = Math.max(0, Math.min(slides.length - 1, index));
      slides.forEach((slide, position) => { slide.hidden = position !== current; });
      menuButtons.forEach((button, position) => {
        button.classList.toggle('active', position === current);
        if (position === current) button.setAttribute('aria-current', 'page');
        else button.removeAttribute('aria-current');
      });
      const id = slides[current].dataset.id;
      history.replaceState(null, '', '#' + id);
      progress.style.width = (((current + 1) / slides.length) * 100) + '%';
      counter.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
      prev.disabled = current === 0;
      next.disabled = current === slides.length - 1;
      live.textContent = ${JSON.stringify(copy.slideAnnouncement + " ")} + (current + 1) + ' ' + ${JSON.stringify(copy.of + " ")} + slides.length;
      menu.hidden = true;
    }

    function toggleFullscreen() {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
    }

    document.querySelector('[data-action="menu"]').addEventListener('click', () => { menu.hidden = false; });
    document.querySelector('[data-action="close-menu"]').addEventListener('click', () => { menu.hidden = true; });
    menu.addEventListener('click', (event) => { if (event.target === menu) menu.hidden = true; });
    prev.addEventListener('click', () => show(current - 1));
    next.addEventListener('click', () => show(current + 1));
    document.querySelector('[data-action="fullscreen"]').addEventListener('click', toggleFullscreen);
    menuButtons.forEach((button) => button.addEventListener('click', () => show(Number(button.dataset.go))));
    document.addEventListener('fullscreenchange', () => { fullscreenLabel.textContent = document.fullscreenElement ? ${JSON.stringify(copy.window)} : ${JSON.stringify(copy.fullscreen)}; });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !menu.hidden) { menu.hidden = true; return; }
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); show(current + 1); }
      if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(current - 1); }
      if (event.key === 'Home') { event.preventDefault(); show(0); }
      if (event.key === 'End') { event.preventDefault(); show(slides.length - 1); }
      if (event.key.toLowerCase() === 'f') { event.preventDefault(); toggleFullscreen(); }
      if (event.key.toLowerCase() === 'm') { event.preventDefault(); menu.hidden = !menu.hidden; }
    });
    document.addEventListener('touchstart', (event) => { touchStart = event.changedTouches[0]?.clientX ?? null; }, { passive: true });
    document.addEventListener('touchend', (event) => {
      if (touchStart === null) return;
      const distance = (event.changedTouches[0]?.clientX ?? touchStart) - touchStart;
      touchStart = null;
      if (distance > 60) show(current - 1);
      if (distance < -60) show(current + 1);
    }, { passive: true });
    show(current);
  })();`;

  return `<!doctype html>
  <html lang="${copy.locale}" dir="${copy.direction}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(copy.subtitle)}">
    <meta name="author" content="OpenKubes Community">
    <title>${escapeHtml(copy.title)} · HTML Presentation</title>
    <style>${sharedCss}</style>
  </head>
  <body>
    <main class="presentation-shell" lang="${copy.locale}" dir="${copy.direction}" aria-label="${escapeHtml(copy.presentationAria)}">
      <div class="progress-track" aria-hidden="true"><span></span></div>
      <div class="brand-mark" aria-hidden="true">Oki Universe</div>
      <nav class="language-switcher" aria-label="${escapeHtml(copy.languageMenuLabel)}">${languageMarkup}</nav>
      ${slidesMarkup}
      <div class="sr-only" aria-live="polite" aria-atomic="true"></div>
      <nav class="presentation-controls" aria-label="${escapeHtml(copy.menuAria)}">
        <button type="button" class="control-button" data-action="menu" aria-label="${escapeHtml(copy.menuOpen)}" title="${escapeHtml(copy.menu)} (M)"><span aria-hidden="true">☰</span><span class="control-text">${escapeHtml(copy.menu)}</span></button>
        <div class="navigation-group">
          <button type="button" class="arrow-button" data-action="prev" aria-label="${escapeHtml(copy.previous)}"><span aria-hidden="true">←</span></button>
          <span class="slide-counter" aria-hidden="true"></span>
          <button type="button" class="arrow-button" data-action="next" aria-label="${escapeHtml(copy.next)}"><span aria-hidden="true">→</span></button>
        </div>
        <button type="button" class="control-button" data-action="fullscreen" aria-label="${escapeHtml(copy.fullscreenStart)}" title="${escapeHtml(copy.fullscreen)} (F)"><span aria-hidden="true">⛶</span><span class="control-text" data-fullscreen-label>${escapeHtml(copy.fullscreen)}</span></button>
      </nav>
      <div class="keyboard-hint" aria-hidden="true">${escapeHtml(copy.keyboardHint)}</div>
      <div class="menu-backdrop" hidden>
        <aside class="slide-menu" role="dialog" aria-modal="true" aria-labelledby="offline-menu-title">
          <header class="menu-header">
            <div><p class="eyebrow">Oki Universe</p><h2 id="offline-menu-title">${escapeHtml(copy.menuTitle)}</h2></div>
            <button type="button" class="menu-close" data-action="close-menu" aria-label="${escapeHtml(copy.menuClose)}">×</button>
          </header>
          <ol class="menu-list">${menuMarkup}</ol>
        </aside>
      </div>
    </main>
    <script>${controller}</script>
  </body>
  </html>`;
}

const sharedCss = (await readFile(resolve(projectRoot, "app/globals.css"), "utf8"))
  .replace('@import "tailwindcss";', "")
  .concat(`
    [hidden] { display: none !important; }
    .offline-stage { width: 100%; height: 100%; }
  `);

await mkdir(resolve(outputRoot, "scenes"), { recursive: true });
await mkdir(resolve(outputRoot, "en"), { recursive: true });
await mkdir(resolve(outputRoot, "es"), { recursive: true });
await mkdir(resolve(outputRoot, "fa"), { recursive: true });
await Promise.all(
  presentationCopy.de.scenes.map((scene) =>
    copyFile(
      resolve(projectRoot, "public", scene.image.slice(1)),
      resolve(outputRoot, scene.image.slice(1)),
    ),
  ),
);
await writeFile(resolve(outputRoot, "index.html"), renderDocument("de"), "utf8");
await writeFile(resolve(outputRoot, "en/index.html"), renderDocument("en"), "utf8");
await writeFile(resolve(outputRoot, "es/index.html"), renderDocument("es"), "utf8");
await writeFile(resolve(outputRoot, "fa/index.html"), renderDocument("fa"), "utf8");
console.log(`Four-language standalone presentation written to ${outputRoot}`);
