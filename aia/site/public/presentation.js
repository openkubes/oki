(() => {
  const main = document.querySelector("main");
  if (!main) return;

  const slides = [...main.children].filter((element) =>
    element.matches("section, footer"),
  );
  if (slides.length < 2) return;

  const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
  const copy = isEnglish ? {
    previous: "Previous slide",
    next: "Next slide",
    openOverview: "Open slide overview",
    closeOverview: "Close slide overview",
    overview: "Slide overview",
    overviewLead: "Twelve scenes. One chain of responsibility.",
    slide: "Slide",
    of: "of",
    titles: [
      "Start",
      "A good plan is not good enough",
      "Faces for the control plane",
      "From business intent to evidence",
      "The key stays with the human",
      "Conductor and Captain",
      "The platform shipyard",
      "Today and tomorrow",
      "The platform sets sail",
      "Recovery: The promise remains",
      "Cathedral and ship",
      "OpenKubes · Sources and links",
    ],
  } : {
    previous: "Vorherige Folie",
    next: "Nächste Folie",
    openOverview: "Folienübersicht öffnen",
    closeOverview: "Folienübersicht schließen",
    overview: "Folienübersicht",
    overviewLead: "Zwölf Szenen. Eine Verantwortungskette.",
    slide: "Folie",
    of: "von",
    titles: [
      "Start",
      "Ein guter Plan ist nicht gut genug",
      "Gesichter für die Control Plane",
      "Vom Business Intent zur Evidence",
      "Der Schlüssel bleibt beim Menschen",
      "Conductor und Captain",
      "Die Plattformwerft",
      "Heute und morgen",
      "Die Plattform legt ab",
      "Recovery: Das Versprechen bleibt",
      "Kathedrale und Schiff",
      "OpenKubes · Quellen und Links",
    ],
  };

  slides.forEach((slide, index) => {
    slide.classList.add("deckSlide");
    slide.dataset.slide = String(index);
    if (!slide.id) slide.id = `kapitel-${String(index + 1).padStart(2, "0")}`;
  });

  const controls = document.createElement("div");
  controls.className = "deckControls";
  controls.innerHTML = `
    <button type="button" data-deck-action="prev" aria-label="${copy.previous}">←</button>
    <button type="button" class="deckOverviewToggle" data-deck-action="overview" aria-label="${copy.openOverview}" aria-haspopup="dialog" aria-expanded="false">☰</button>
    <span class="deckCounter" aria-hidden="true"></span>
    <button type="button" data-deck-action="next" aria-label="${copy.next}">→</button>
  `;

  const progress = document.createElement("div");
  progress.className = "deckProgress";
  progress.setAttribute("aria-hidden", "true");
  progress.innerHTML = "<span></span>";

  const overview = document.createElement("aside");
  overview.className = "deckOverview";
  overview.setAttribute("role", "dialog");
  overview.setAttribute("aria-modal", "true");
  overview.setAttribute("aria-labelledby", "deck-overview-title");
  overview.setAttribute("aria-hidden", "true");
  overview.innerHTML = `
    <header>
      <div><span>AIA · OKI UNIVERSE</span><h2 id="deck-overview-title">${copy.overview}</h2></div>
      <button type="button" data-deck-action="close-overview" aria-label="${copy.closeOverview}">×</button>
    </header>
    <p>${copy.overviewLead}</p>
    <ol></ol>
  `;

  const overviewList = overview.querySelector("ol");
  slides.forEach((slide, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <button type="button" data-deck-slide="${index}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${copy.titles[index] || `${copy.slide} ${index + 1}`}</strong>
      </button>
    `;
    overviewList.append(item);
  });

  const scrim = document.createElement("button");
  scrim.type = "button";
  scrim.className = "deckOverviewScrim";
  scrim.setAttribute("aria-label", copy.closeOverview);
  scrim.hidden = true;

  const live = document.createElement("p");
  live.className = "deckLive";
  live.setAttribute("aria-live", "polite");

  document.body.append(progress, controls, scrim, overview, live);
  document.body.classList.add("deckMode");

  const previous = controls.querySelector('[data-deck-action="prev"]');
  const next = controls.querySelector('[data-deck-action="next"]');
  const overviewToggle = controls.querySelector('[data-deck-action="overview"]');
  const closeOverviewButton = overview.querySelector('[data-deck-action="close-overview"]');
  const counter = controls.querySelector(".deckCounter");
  const progressBar = progress.querySelector("span");
  const requested = decodeURIComponent(location.hash.slice(1));
  let current = Math.max(0, slides.findIndex((slide) => slide.id === requested));
  let overviewOpen = false;

  function closeOverview(restoreFocus = true) {
    if (!overviewOpen) return;
    overviewOpen = false;
    overview.classList.remove("isOpen");
    overview.setAttribute("aria-hidden", "true");
    overviewToggle.setAttribute("aria-expanded", "false");
    scrim.hidden = true;
    if (restoreFocus) overviewToggle.focus();
  }

  function openOverview() {
    overviewOpen = true;
    overview.classList.add("isOpen");
    overview.setAttribute("aria-hidden", "false");
    overviewToggle.setAttribute("aria-expanded", "true");
    scrim.hidden = false;
    closeOverviewButton.focus();
  }

  function show(index, updateHash = true) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, position) => {
      slide.hidden = position !== current;
      slide.setAttribute("aria-hidden", position === current ? "false" : "true");
      if (position === current) slide.scrollTop = 0;
    });

    const number = String(current + 1).padStart(2, "0");
    const total = String(slides.length).padStart(2, "0");
    counter.textContent = `${number} / ${total}`;
    progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    live.textContent = `${copy.slide} ${current + 1} ${copy.of} ${slides.length}: ${copy.titles[current]}`;

    overview.querySelectorAll("[data-deck-slide]").forEach((button, index) => {
      button.classList.toggle("isCurrent", index === current);
      if (index === current) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });

    if (updateHash) history.replaceState(null, "", `#${slides[current].id}`);
  }

  previous.addEventListener("click", () => show(current - 1));
  next.addEventListener("click", () => show(current + 1));
  overviewToggle.addEventListener("click", openOverview);
  closeOverviewButton.addEventListener("click", () => closeOverview());
  scrim.addEventListener("click", () => closeOverview());
  overviewList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-deck-slide]");
    if (!button) return;
    const target = Number(button.dataset.deckSlide);
    closeOverview(false);
    show(target);
    overviewToggle.focus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overviewOpen) {
      event.preventDefault();
      closeOverview();
      return;
    }
    if (overviewOpen || event.target.matches("input, textarea, select, button")) return;
    if (["ArrowRight", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      show(current + 1);
    }
    if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      show(current - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      show(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      show(slides.length - 1);
    }
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = decodeURIComponent(link.getAttribute("href").slice(1));
    const targetIndex = slides.findIndex((slide) => slide.id === targetId);
    if (targetIndex >= 0) {
      event.preventDefault();
      show(targetIndex);
    }
  });

  let touchStartX = 0;
  let touchStartY = 0;
  document.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  }, { passive: true });
  document.addEventListener("touchend", (event) => {
    if (overviewOpen) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
      show(current + (deltaX < 0 ? 1 : -1));
    }
  }, { passive: true });

  window.addEventListener("hashchange", () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const index = slides.findIndex((slide) => slide.id === id);
    if (index >= 0 && index !== current) show(index, false);
  });

  show(current, !requested);
})();
