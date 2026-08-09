"use client";

import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  languageOptions,
  presentationCopy,
  type PresentationCopy,
  type PresentationLocale,
} from "./presentation-copy";
import type { StoryScene } from "./story";

type DeckSlide =
  | { id: "start"; kind: "cover" }
  | { id: "leitgedanke"; kind: "quote" }
  | { id: string; kind: "scene"; scene: StoryScene }
  | { id: "schluss"; kind: "finale" }
  | { id: "entdecken"; kind: "about" };

const makeDeck = (copy: PresentationCopy): DeckSlide[] => [
  { id: "start", kind: "cover" },
  { id: "leitgedanke", kind: "quote" },
  ...copy.scenes.map((scene) => ({ id: scene.slug, kind: "scene" as const, scene })),
  { id: "schluss", kind: "finale" },
  { id: "entdecken", kind: "about" },
];

function InlineMarkup({ children }: { children: string }) {
  const renderLine = (line: string): ReactNode[] =>
    line
      .split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g)
      .filter(Boolean)
      .map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code key={index}>{part.slice(1, -1)}</code>;
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={index}>{part}</Fragment>;
      });

  return children.split("\n").map((line, index, lines) => (
    <Fragment key={`${line}-${index}`}>
      {renderLine(line)}
      {index < lines.length - 1 ? <br /> : null}
    </Fragment>
  ));
}

function StoryImage({
  scene,
  copy,
  eager = false,
}: {
  scene: StoryScene;
  copy: PresentationCopy;
  eager?: boolean;
}) {
  return (
    <figure className="story-figure">
      {/* Canonical artwork is preserved byte-for-byte; framework image rewriting is intentionally disabled. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={scene.image}
        alt={scene.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
      <figcaption>
        {copy.canonicalIllustration} · {copy.sceneLabel} {String(scene.number).padStart(2, "0")}
      </figcaption>
    </figure>
  );
}

function SceneSlide({ scene, copy }: { scene: StoryScene; copy: PresentationCopy }) {
  const textLength = scene.paragraphs.join(" ").length;
  const density = textLength > 1250 ? "very-dense" : textLength > 900 ? "dense" : "regular";

  return (
    <article className={`slide scene-slide ${density}`} aria-labelledby={`title-${scene.slug}`}>
      <section className="text-panel">
        <div className="eyebrow">
          {copy.sceneLabel} {String(scene.number).padStart(2, "0")}
        </div>
        <h1 id={`title-${scene.slug}`}>{scene.title}</h1>
        <div className="orange-rule" aria-hidden="true" />
        <div className="scene-copy">
          {scene.paragraphs.map((paragraph, index) => (
            <p key={index}>
              <InlineMarkup>{paragraph}</InlineMarkup>
            </p>
          ))}
        </div>
      </section>
      <section className="image-panel">
        <StoryImage scene={scene} copy={copy} />
      </section>
    </article>
  );
}

function CoverSlide({ copy }: { copy: PresentationCopy }) {
  return (
    <article className="slide cover-slide" aria-labelledby="cover-title">
      <section className="text-panel cover-copy">
        <div className="edition-pill">{copy.edition}</div>
        <p className="brand-kicker">Oki Universe</p>
        <h1 id="cover-title">{copy.title}</h1>
        <div className="orange-rule" aria-hidden="true" />
        <p className="subtitle">{copy.subtitle}</p>
        <p className="cover-intro">{copy.coverIntro}</p>
        <div className="cover-meta">
          <span>{copy.sceneCount}</span>
          <span aria-hidden="true">·</span>
          <span>{copy.language}</span>
          <span aria-hidden="true">·</span>
          <span>2026</span>
        </div>
        <p className="creation-credit">
          <span>{copy.creationCredit.creator}</span>
          <span>{copy.creationCredit.assistance}</span>
        </p>
      </section>
      <section className="image-panel cover-image">
        <StoryImage scene={copy.scenes[17]} copy={copy} eager />
      </section>
    </article>
  );
}

function QuoteSlide({ copy }: { copy: PresentationCopy }) {
  return (
    <article className="slide quote-slide" aria-labelledby="quote-title">
      <section className="text-panel quote-copy">
        <div className="eyebrow">{copy.quoteEyebrow}</div>
        <h1 id="quote-title">{copy.quoteTitle}</h1>
        <div className="orange-rule" aria-hidden="true" />
        <blockquote>{copy.quoteBody}</blockquote>
        <p className="quote-note">{copy.quoteNote}</p>
      </section>
      <section className="image-panel">
        <StoryImage scene={copy.scenes[13]} copy={copy} />
      </section>
    </article>
  );
}

function FinaleSlide({ copy }: { copy: PresentationCopy }) {
  return (
    <article className="slide finale-slide" aria-labelledby="finale-title">
      <section className="text-panel finale-copy">
        <div className="eyebrow">{copy.finaleEyebrow}</div>
        <h1 id="finale-title">{copy.finaleTitle}</h1>
        <div className="orange-rule" aria-hidden="true" />
        <p className="finale-rhythm">{copy.finaleRhythm}</p>
        <p className="finale-small">{copy.finaleSmall}</p>
      </section>
      <section className="image-panel">
        <StoryImage scene={copy.scenes[17]} copy={copy} />
      </section>
    </article>
  );
}

function AboutSlide({ copy }: { copy: PresentationCopy }) {
  return (
    <article className="slide about-slide" aria-labelledby="about-title">
      <section className="text-panel about-copy">
        <div className="eyebrow">{copy.aboutEyebrow}</div>
        <h1 id="about-title">{copy.aboutTitle}</h1>
        <div className="orange-rule" aria-hidden="true" />
        <p className="about-question">{copy.aboutQuestion}</p>
        <div className="link-stack">
          <a href="https://openkubes.org/" target="_blank" rel="noreferrer">
            openkubes.org <span aria-hidden="true">↗</span>
          </a>
          <a href="https://github.com/openkubes/oki" target="_blank" rel="noreferrer">
            github.com/openkubes/oki <span aria-hidden="true">↗</span>
          </a>
          <a href="https://kubernauts.de/" target="_blank" rel="noreferrer">
            kubernauts.de <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="license-note">{copy.license}</p>
      </section>
      <section className="image-panel">
        <StoryImage scene={copy.scenes[0]} copy={copy} />
      </section>
    </article>
  );
}

function SlideContent({ slide, copy }: { slide: DeckSlide; copy: PresentationCopy }) {
  switch (slide.kind) {
    case "cover":
      return <CoverSlide copy={copy} />;
    case "quote":
      return <QuoteSlide copy={copy} />;
    case "scene":
      return <SceneSlide scene={slide.scene} copy={copy} />;
    case "finale":
      return <FinaleSlide copy={copy} />;
    case "about":
      return <AboutSlide copy={copy} />;
  }
}

function slideLabel(slide: DeckSlide, copy: PresentationCopy) {
  if (slide.kind === "scene") {
    return `${String(slide.scene.number).padStart(2, "0")} · ${slide.scene.title}`;
  }
  if (slide.kind === "cover") return copy.startLabel;
  if (slide.kind === "quote") return copy.quoteLabel;
  if (slide.kind === "finale") return copy.finaleLabel;
  return copy.aboutLabel;
}

export function Presentation({ locale = "de" }: { locale?: PresentationLocale }) {
  const copy = presentationCopy[locale];
  const currentLanguage = languageOptions.find((option) => option.locale === locale);
  const deck = useMemo(() => makeDeck(copy), [copy]);
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStart = useRef<number | null>(null);
  const menuCloseButton = useRef<HTMLButtonElement | null>(null);
  const activeSlide = deck[current];

  const goTo = useCallback((next: number) => {
    const bounded = Math.max(0, Math.min(deck.length - 1, next));
    setCurrent(bounded);
    setMenuOpen(false);
  }, [deck.length]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const previous = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    document.documentElement.lang = copy.locale;
    document.documentElement.dir = copy.direction;
    const id = window.location.hash.slice(1);
    const index = deck.findIndex((slide) => slide.id === id);
    const frame = window.requestAnimationFrame(() => {
      if (index >= 0) setCurrent(index);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [copy.direction, copy.locale, deck]);

  useEffect(() => {
    if (menuOpen) menuCloseButton.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${activeSlide.id}`);
    document.title = `${slideLabel(activeSlide, copy)} · ${copy.title}`;
  }, [activeSlide, copy]);

  useEffect(() => {
    const onFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => document.removeEventListener("fullscreenchange", onFullscreen);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.matches("input, textarea, select")) return;

      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        return;
      }
      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        next();
      }
      if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previous();
      }
      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        goTo(deck.length - 1);
      }
      if (event.key.toLowerCase() === "f") {
        event.preventDefault();
        void toggleFullscreen();
      }
      if (event.key.toLowerCase() === "m") {
        event.preventDefault();
        setMenuOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [deck.length, goTo, menuOpen, next, previous, toggleFullscreen]);

  const progress = useMemo(() => ((current + 1) / deck.length) * 100, [current, deck.length]);

  return (
    <main
      className="presentation-shell"
      lang={copy.locale}
      dir={copy.direction}
      aria-label={copy.presentationAria}
      onTouchStart={(event) => {
        touchStart.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        touchStart.current = null;
        if (distance > 60) previous();
        if (distance < -60) next();
      }}
    >
      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="brand-mark" aria-hidden="true">Oki Universe</div>
      <details className="language-switcher">
        <summary aria-label={copy.languageMenuLabel}>
          <span aria-hidden="true">◎</span>
          <span>{currentLanguage?.code}</span>
        </summary>
        <nav className="language-options" aria-label={copy.languageMenuLabel}>
          {languageOptions.map((option) => (
            <a
              key={option.locale}
              href={option.href}
              lang={option.locale}
              dir={option.locale === "fa" ? "rtl" : "ltr"}
              aria-current={option.locale === locale ? "page" : undefined}
              className={option.locale === locale ? "active" : undefined}
            >
              <span className="language-code">{option.code}</span>
              <span className="language-name">{option.label}</span>
            </a>
          ))}
        </nav>
      </details>

      <div className="slide-stage" key={`${locale}-${activeSlide.id}`}>
        <SlideContent slide={activeSlide} copy={copy} />
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {copy.slideAnnouncement} {current + 1} {copy.of} {deck.length}: {slideLabel(activeSlide, copy)}
      </div>

      <nav className="presentation-controls" aria-label={copy.menuAria}>
        <button
          type="button"
          className="control-button"
          onClick={() => setMenuOpen(true)}
          aria-label={copy.menuOpen}
          title={`${copy.menu} (M)`}
        >
          <span aria-hidden="true">☰</span>
          <span className="control-text">{copy.menu}</span>
        </button>

        <div className="navigation-group">
          <button
            type="button"
            className="arrow-button"
            onClick={previous}
            disabled={current === 0}
            aria-label={copy.previous}
          >
            <span aria-hidden="true">←</span>
          </button>
          <span className="slide-counter" aria-hidden="true">
            {String(current + 1).padStart(2, "0")} / {String(deck.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="arrow-button"
            onClick={next}
            disabled={current === deck.length - 1}
            aria-label={copy.next}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <button
          type="button"
          className="control-button"
          onClick={() => void toggleFullscreen()}
          aria-label={isFullscreen ? copy.fullscreenEnd : copy.fullscreenStart}
          title={`${copy.fullscreen} (F)`}
        >
          <span aria-hidden="true">⛶</span>
          <span className="control-text">{isFullscreen ? copy.window : copy.fullscreen}</span>
        </button>
      </nav>

      <div className="keyboard-hint" aria-hidden="true">{copy.keyboardHint}</div>

      {menuOpen ? (
        <div className="menu-backdrop">
          <aside className="slide-menu" role="dialog" aria-modal="true" aria-labelledby="menu-title">
            <header className="menu-header">
              <div>
                <p className="eyebrow">Oki Universe</p>
                <h2 id="menu-title">{copy.menuTitle}</h2>
              </div>
              <button
                type="button"
                className="menu-close"
                onClick={() => setMenuOpen(false)}
                aria-label={copy.menuClose}
                ref={menuCloseButton}
              >
                ×
              </button>
            </header>
            <ol className="menu-list">
              {deck.map((slide, index) => (
                <li key={slide.id}>
                  <button
                    type="button"
                    className={index === current ? "active" : undefined}
                    onClick={() => goTo(index)}
                    aria-current={index === current ? "page" : undefined}
                  >
                    <span className="menu-number">{String(index + 1).padStart(2, "0")}</span>
                    <span>{slideLabel(slide, copy)}</span>
                  </button>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      ) : null}
    </main>
  );
}
