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
import { scenes, type StoryScene } from "./story";

type DeckSlide =
  | { id: "start"; kind: "cover" }
  | { id: "leitgedanke"; kind: "quote" }
  | { id: string; kind: "scene"; scene: StoryScene }
  | { id: "schluss"; kind: "finale" }
  | { id: "entdecken"; kind: "about" };

const deck: DeckSlide[] = [
  { id: "start", kind: "cover" },
  { id: "leitgedanke", kind: "quote" },
  ...scenes.map((scene) => ({ id: scene.slug, kind: "scene" as const, scene })),
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

function StoryImage({ scene, eager = false }: { scene: StoryScene; eager?: boolean }) {
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
        Kanonische Illustration · Szene {String(scene.number).padStart(2, "0")}
      </figcaption>
    </figure>
  );
}

function SceneSlide({ scene }: { scene: StoryScene }) {
  const textLength = scene.paragraphs.join(" ").length;
  const density = textLength > 1250 ? "very-dense" : textLength > 900 ? "dense" : "regular";

  return (
    <article className={`slide scene-slide ${density}`} aria-labelledby={`title-${scene.slug}`}>
      <section className="text-panel">
        <div className="eyebrow">Szene {String(scene.number).padStart(2, "0")}</div>
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
        <StoryImage scene={scene} />
      </section>
    </article>
  );
}

function CoverSlide() {
  return (
    <article className="slide cover-slide" aria-labelledby="cover-title">
      <section className="text-panel cover-copy">
        <div className="edition-pill">Digitale HTML-Ausgabe · v1.2</div>
        <p className="brand-kicker">Oki Universe</p>
        <h1 id="cover-title">Oki und die vielen Inseln</h1>
        <div className="orange-rule" aria-hidden="true" />
        <p className="subtitle">Der illustrierte Kinderführer zu OpenKubes</p>
        <p className="cover-intro">
          Eine Geschichte über klare Versprechen, ehrliche Beweise und Menschen,
          die Verantwortung übernehmen.
        </p>
        <div className="cover-meta">
          <span>18 Szenen</span>
          <span aria-hidden="true">·</span>
          <span>Deutsch</span>
          <span aria-hidden="true">·</span>
          <span>2026</span>
        </div>
      </section>
      <section className="image-panel cover-image">
        <StoryImage scene={scenes[17]} eager />
      </section>
    </article>
  );
}

function QuoteSlide() {
  return (
    <article className="slide quote-slide" aria-labelledby="quote-title">
      <section className="text-panel quote-copy">
        <div className="eyebrow">Der Leitgedanke</div>
        <h1 id="quote-title">
          In einer Familie darf jeder anders sein.
        </h1>
        <div className="orange-rule" aria-hidden="true" />
        <blockquote>
          Sie hält zusammen, weil sich alle aufeinander verlassen können.
        </blockquote>
        <p className="quote-note">
          Nicht ein bestimmtes Werkzeug verbindet die Inseln, sondern gemeinsam
          verstandene Versprechen.
        </p>
      </section>
      <section className="image-panel">
        <StoryImage scene={scenes[13]} />
      </section>
    </article>
  );
}

function FinaleSlide() {
  return (
    <article className="slide finale-slide" aria-labelledby="finale-title">
      <section className="text-panel finale-copy">
        <div className="eyebrow">Was ist OpenKubes?</div>
        <h1 id="finale-title">
          Eine gute Art, immer wieder verlässliche Inseln zu bauen.
        </h1>
        <div className="orange-rule" aria-hidden="true" />
        <p className="finale-rhythm">Baue. Verbinde. Prüfe. Lerne. Wachse.</p>
        <p className="finale-small">
          Nicht eine einzige Insel. Eine gemeinsame Methode für viele
          unterschiedliche Plattformen.
        </p>
      </section>
      <section className="image-panel">
        <StoryImage scene={scenes[17]} />
      </section>
    </article>
  );
}

function AboutSlide() {
  return (
    <article className="slide about-slide" aria-labelledby="about-title">
      <section className="text-panel about-copy">
        <div className="eyebrow">Weiter entdecken</div>
        <h1 id="about-title">
          Eine Insel entsteht. Dann noch eine.
        </h1>
        <div className="orange-rule" aria-hidden="true" />
        <p className="about-question">
          Aber wann ist sie nicht nur da, sondern wirklich verlässlich?
        </p>
        <div className="link-stack">
          <a href="https://openkubes.org/" target="_blank" rel="noreferrer">
            openkubes.org <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/openkubes/oki"
            target="_blank"
            rel="noreferrer"
          >
            github.com/openkubes/oki <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="license-note">
          Text und Konzept: OpenKubes Community. Illustrationen: CC BY 4.0;
          OpenKubes/Oki-Namen, Logos und Marken ausgenommen.
        </p>
      </section>
      <section className="image-panel">
        <StoryImage scene={scenes[0]} />
      </section>
    </article>
  );
}

function SlideContent({ slide }: { slide: DeckSlide }) {
  switch (slide.kind) {
    case "cover":
      return <CoverSlide />;
    case "quote":
      return <QuoteSlide />;
    case "scene":
      return <SceneSlide scene={slide.scene} />;
    case "finale":
      return <FinaleSlide />;
    case "about":
      return <AboutSlide />;
  }
}

function slideLabel(slide: DeckSlide) {
  if (slide.kind === "scene") {
    return `${String(slide.scene.number).padStart(2, "0")} · ${slide.scene.title}`;
  }
  if (slide.kind === "cover") return "Start";
  if (slide.kind === "quote") return "Leitgedanke";
  if (slide.kind === "finale") return "OpenKubes";
  return "Weiter entdecken";
}

export function Presentation() {
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
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const previous = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    const index = deck.findIndex((slide) => slide.id === id);
    const frame = window.requestAnimationFrame(() => {
      if (index >= 0) setCurrent(index);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (menuOpen) menuCloseButton.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${activeSlide.id}`);
    document.title = `${slideLabel(activeSlide)} · Oki und die vielen Inseln`;
  }, [activeSlide]);

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
  }, [goTo, menuOpen, next, previous, toggleFullscreen]);

  const progress = useMemo(() => ((current + 1) / deck.length) * 100, [current]);

  return (
    <main
      className="presentation-shell"
      aria-label="Oki und die vielen Inseln – HTML-Präsentation"
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

      <div className="brand-mark" aria-hidden="true">
        Oki Universe
      </div>

      <div className="slide-stage" key={activeSlide.id}>
        <SlideContent slide={activeSlide} />
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Folie {current + 1} von {deck.length}: {slideLabel(activeSlide)}
      </div>

      <nav className="presentation-controls" aria-label="Präsentationssteuerung">
        <button
          type="button"
          className="control-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Folienübersicht öffnen"
          title="Übersicht (M)"
        >
          <span aria-hidden="true">☰</span>
          <span className="control-text">Übersicht</span>
        </button>

        <div className="navigation-group">
          <button
            type="button"
            className="arrow-button"
            onClick={previous}
            disabled={current === 0}
            aria-label="Vorherige Folie"
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
            aria-label="Nächste Folie"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <button
          type="button"
          className="control-button"
          onClick={() => void toggleFullscreen()}
          aria-label={isFullscreen ? "Vollbild beenden" : "Vollbild starten"}
          title="Vollbild (F)"
        >
          <span aria-hidden="true">⛶</span>
          <span className="control-text">{isFullscreen ? "Fenster" : "Vollbild"}</span>
        </button>
      </nav>

      <div className="keyboard-hint" aria-hidden="true">
        ← → navigieren · M Übersicht · F Vollbild
      </div>

      {menuOpen ? (
        <div className="menu-backdrop">
          <aside
            className="slide-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-title"
          >
            <header className="menu-header">
              <div>
                <p className="eyebrow">Oki Universe</p>
                <h2 id="menu-title">Folienübersicht</h2>
              </div>
              <button
                type="button"
                className="menu-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Folienübersicht schließen"
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
                    <span>{slideLabel(slide)}</span>
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
