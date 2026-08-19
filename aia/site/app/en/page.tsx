import type { Metadata } from "next";
import { headers } from "next/headers";

const flow = [
  ["01", "Intent", "People describe the outcome they want."],
  ["02", "Proposal", "Aia drafts a clear candidate revision."],
  ["03", "Approval", "A human reviews and authorizes that exact plan."],
  ["04", "Composition", "Conductor arranges the platform building blocks."],
  ["05", "Lifecycle", "Captain reconciles clusters and machines."],
  ["06", "Evidence", "Sensors prove whether the promise has been fulfilled."],
];

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "aia.openkubes.org";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Aia, Conductor and Captain · OpenKubes";
  const description = "An illustrated story about AI, Crossplane, Cluster API, robotics and verifiable platforms.";

  return {
    title,
    description,
    alternates: { canonical: `${origin}/en`, languages: { de: origin, en: `${origin}/en` } },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${origin}/en`,
      images: [{ url: `${origin}/og.png`, width: 1731, height: 909, alt: "Aia, Conductor and Captain — From intent to a verifiable platform" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function EnglishHome() {
  return (
    <main lang="en">
      <a className="skipLink" href="#story">Skip to content</a>

      <section className="hero" id="start">
        <nav className="topbar" aria-label="Main navigation">
          <a className="brand" href="#start" aria-label="Aia home">
            <span className="brandMark">A</span>
            <span><strong>AIA</strong><small>OKI UNIVERSE</small></span>
          </a>
          <div className="navMeta">
            <span className="targetBadge">TOMORROW · TARGET</span>
            <a href="#story">Story</a>
            <a href="#roles">Roles</a>
            <a href="#recovery">Recovery</a>
            <a className="languageSwitch" href="/" lang="de" aria-label="Zur deutschen Version wechseln">DE</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">ILLUSTRATED GUIDE · CIO &amp; SRE</p>
            <h1>From intent to a <span>verifiable platform.</span></h1>
            <p className="lede">
              Aia helps us think ahead. Humans set the course.
              Conductor composes. Captain keeps the clusters on course.
            </p>
            <div className="heroActions">
              <a className="primaryAction" href="#story">Begin the story <span aria-hidden="true">→</span></a>
              <a className="textAction" href="#roles">Meet the new characters</a>
            </div>
            <div className="roleStrip" aria-label="Chain of responsibility">
              <span><b>01</b> Aia proposes</span>
              <span><b>02</b> Conductor composes</span>
              <span><b>03</b> Captain reconciles</span>
            </div>
          </div>

          <figure className="heroVisual">
            <img src="/images/aia-captain-cops-shipyard.png" alt="Aia, Conductor and Captain planning together in a harbor workshop." />
            <figcaption><span>FIRST ENCOUNTER</span><strong>Proposal · Composition · Cluster lifecycle</strong></figcaption>
          </figure>
        </div>

        <a className="scrollCue" href="#story" aria-label="Continue to the story"><span>DISCOVER</span><i aria-hidden="true">↓</i></a>
      </section>

      <section className="opening" id="story">
        <div className="sectionIndex">01 / 12</div>
        <div>
          <p className="eyebrow dark">THE SIMPLE EXPLANATION</p>
          <h2>A good plan is not good enough.</h2>
          <p className="openingText">
            Aia may observe, explain relationships and draft proposals. A human
            first approves the exact plan that was reviewed. Specialized controllers
            then bring the authorized desired state into reality reliably.
          </p>
          <blockquote>“Aia proposes. A human reviews. The platform executes in a controlled way.”</blockquote>
        </div>
      </section>

      <section className="characterSection" id="roles">
        <header className="sectionHeader">
          <div><p className="eyebrow dark">THREE CLEAR RESPONSIBILITIES</p><h2>Faces for the control plane.</h2></div>
          <p>Friendly characters, firm boundaries of responsibility. None of them holds the key.</p>
        </header>

        <div className="characterGrid">
          <article className="characterCard aiaCard">
            <div className="portrait"><img src="/images/aia-character-sheet.png" alt="Character sheet of Aia, the purple AI assistant." /></div>
            <div className="characterCopy"><span>AI AGENT</span><h3>Aia</h3><p>reads, searches, analyzes and drafts clear proposals.</p><q>I have an idea.</q></div>
          </article>
          <article className="characterCard conductorCard">
            <div className="portrait"><img src="/images/conductor-character-sheet.png" alt="Character sheet of Conductor, personifying Crossplane composition." /></div>
            <div className="characterCopy"><span>CROSSPLANE</span><h3>Conductor</h3><p>conducts approved Compositions and their resources to the rhythm of reconciliation.</p><q>Everyone follows the same score.</q></div>
          </article>
          <article className="characterCard captainCard">
            <div className="portrait"><img src="/images/captain-character-sheet.png" alt="Character sheet of Captain, personifying Cluster API." /></div>
            <div className="characterCopy"><span>CLUSTER API</span><h3>Captain</h3><p>builds, scales, upgrades and replaces Kubernetes clusters declaratively.</p><q>I keep the cluster on course.</q></div>
          </article>
        </div>
      </section>

      <section className="chainSection" aria-labelledby="chain-title-en">
        <header>
          <p className="eyebrow">CHAIN OF RESPONSIBILITY</p>
          <h2 id="chain-title-en">From business intent to trustworthy evidence.</h2>
        </header>
        <ol className="flowGrid">
          {flow.map(([number, title, text]) => (
            <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
      </section>

      <section className="gateSection">
        <figure><img src="/images/aia-at-the-gate.png" alt="Aia and the four sensors wait at the gate while a human holds the key." /></figure>
        <div className="gateCopy">
          <p className="eyebrow dark">THE SECURITY BOUNDARY</p>
          <h2>The key stays with the human.</h2>
          <p>
            Aia brings the plan. Scout, Meter, Check and Proof verify the facts.
            The human sees the real change and authorizes that exact revision.
            Policies validate the approval; a deterministic executor submits it.
          </p>
          <div className="boundaryRule"><strong>Immutable rule</strong><span>The green checkmark is not a key.</span></div>
        </div>
      </section>

      <section className="specialists">
        <header className="sectionHeader inverse">
          <div><p className="eyebrow">TWO SPECIALISTS</p><h2>Crossplane and CAPI complement each other.</h2></div>
          <p>Not a rigid product chain, but distinct responsibilities with a clear handoff.</p>
        </header>
        <div className="specialistGrid">
          <article className="specialist conductorSpecialist">
            <span className="specialistLabel">CONDUCTOR · CROSSPLANE</span>
            <h3>What belongs to the platform?</h3>
            <p>Compositions bundle networking, identity, storage, security, observability and cluster resources behind a clear platform API.</p>
            <ul><li>purpose-built platform APIs</li><li>reusable Compositions</li><li>related resources</li></ul>
          </article>
          <div className="handoff" aria-label="Shared handoff"><span>APPROVED<br />DESIRED STATE</span><i aria-hidden="true">→</i></div>
          <article className="specialist captainSpecialist">
            <span className="specialistLabel">CAPTAIN · CLUSTER API</span>
            <h3>How does the cluster stay on course?</h3>
            <p>CAPI controllers reconcile clusters, control planes and machines across different infrastructure providers.</p>
            <ul><li>create, scale, upgrade, replace</li><li>control plane and machines</li><li>declarative reconciliation</li></ul>
          </article>
        </div>
      </section>

      <section className="shipyardScene">
        <div className="sceneMeta"><span>SCENES 05–07</span><strong>Composition · Cluster lifecycle · Readiness</strong></div>
        <img src="/images/aia-captain-cops-shipyard.png" alt="Aia hands her plan to Conductor and Captain in the platform shipyard." />
        <div className="sceneCaption"><p>Aia describes the intent.</p><p>Conductor arranges the platform.</p><p>Captain builds the cluster ship.</p><strong>Built does not mean ready.</strong></div>
      </section>

      <section className="honestySection">
        <header><p className="eyebrow dark">ARCHITECTURE WITH HONESTY</p><h2>Name today clearly. Make tomorrow visible.</h2></header>
        <div className="honestyGrid">
          <article><span className="state today">TODAY</span><h3>The foundation exists.</h3><p>The architecture, contracts, governance model, public ADR and first CAPI MCP evaluation are documented.</p></article>
          <article><span className="state target">TOMORROW</span><h3>Secure execution comes next.</h3><p>Candidate contracts, a controlled executor, hardened diagnostic surfaces and reliable evidence for every acceptance criterion will be implemented.</p></article>
        </div>
        <p className="honestyNote">This story shows the target architecture. It does not claim that Aia performs autonomous cluster lifecycle actions today.</p>
      </section>

      <section className="shipSection">
        <img src="/images/openkubes-platform-ship.webp" alt="The OpenKubes platform ship carrying modular containers across a digital sea." />
        <div className="shipOverlay"><p className="eyebrow">SCENE 08</p><h2>The platform sets sail.</h2><p>A reviewed plan has become an operating platform. Humans set the course. Controllers keep the approved state stable.</p></div>
      </section>

      <section className="recoverySection" id="recovery">
        <header className="sectionHeader inverse">
          <div><p className="eyebrow">SCENES 09–11 · RESILIENCE</p><h2>The ship is replaceable. The promise remains.</h2></div>
          <p>Robotics, declarative reconstruction and evidence work together within an approved recovery plan.</p>
        </header>
        <figure className="recoveryVisual"><img src="/images/aia-robotics-recovery.png" alt="Aia robots recover verified containers from the sea and prepare a fresh platform ship." /><figcaption>Physical robotics turns recovery into a visible, coordinated capability.</figcaption></figure>
        <ol className="recoverySteps">
          <li><span>01</span><h3>Locate</h3><p>Underwater and aerial drones determine location and condition.</p></li>
          <li><span>02</span><h3>Verify</h3><p>Identity, integrity and recovery authorization are verified.</p></li>
          <li><span>03</span><h3>Recover</h3><p>Autonomous cranes and robots move approved modules.</p></li>
          <li><span>04</span><h3>Reconstruct</h3><p>Conductor composes, Captain builds — on a fresh ship.</p></li>
        </ol>
      </section>

      <section className="cathedralSection">
        <img src="/images/openkubes-ship-cathedral.png" alt="The OpenKubes ship passes an illuminated cathedral at night." />
        <div className="cathedralShade" />
        <div className="cathedralCopy">
          <p className="eyebrow">EPILOGUE · SCENE 12</p>
          <h2>A platform is both cathedral and ship.</h2>
          <p>It needs a foundation that outlives individual technologies. And it must keep moving while people improve it.</p>
          <strong>Built like a cathedral.<br />Operated like a ship.</strong>
          <span>OPEN · STABLE · VERIFIABLE</span>
        </div>
      </section>

      <footer>
        <div className="footerBrand"><span className="brandMark">A</span><div><strong>AIA</strong><p>OpenKubes Illustrated Guide</p></div></div>
        <div className="footerLinks">
          <a href="https://oki.openkubes.org/">Oki Universe ↗</a>
          <a href="https://cluster-api.sigs.k8s.io/">Cluster API ↗</a>
          <a href="https://docs.crossplane.io/latest/">Crossplane ↗</a>
          <a href="https://github.com/openkubes/openkubes/blob/main/architecture/decisions/ADR-Platform-035-hybrid-intent-and-control-plane-execution.md">ADR-035 ↗</a>
        </div>
        <p className="copyright">A concept by Kubernauts · Built in the Oki Universe · Target architecture</p>
      </footer>
    </main>
  );
}
