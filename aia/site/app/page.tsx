const flow = [
  ["01", "Wunsch", "Menschen beschreiben das gewünschte Ergebnis."],
  ["02", "Vorschlag", "Aia entwirft eine verständliche Candidate Revision."],
  ["03", "Freigabe", "Ein Mensch prüft und autorisiert genau diesen Plan."],
  ["04", "Komposition", "Conductor ordnet die Plattformbausteine."],
  ["05", "Lifecycle", "Captain reconciliiert Cluster und Maschinen."],
  ["06", "Evidence", "Sensoren belegen, ob das Versprechen erfüllt ist."],
];

export default function Home() {
  return (
    <main>
      <a className="skipLink" href="#geschichte">Zum Inhalt springen</a>

      <section className="hero" id="start">
        <nav className="topbar" aria-label="Hauptnavigation">
          <a className="brand" href="#start" aria-label="Aia Startseite">
            <span className="brandMark">A</span>
            <span><strong>AIA</strong><small>OKI UNIVERSE</small></span>
          </a>
          <div className="navMeta">
            <span className="targetBadge">MORGEN · TARGET</span>
            <a href="#geschichte">Geschichte</a>
            <a href="#rollen">Rollen</a>
            <a href="#recovery">Recovery</a>
            <a className="languageSwitch" href="/en" lang="en" aria-label="Switch to English">EN</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">ILLUSTRATED GUIDE · CIO &amp; SRE</p>
            <h1>Vom Wunsch zur <span>verifizierbaren Plattform.</span></h1>
            <p className="lede">
              Aia hilft uns vorauszudenken. Menschen bestimmen den Kurs.
              Conductor komponiert. Captain hält die Cluster auf Kurs.
            </p>
            <div className="heroActions">
              <a className="primaryAction" href="#geschichte">Geschichte beginnen <span aria-hidden="true">→</span></a>
              <a className="textAction" href="#rollen">Die neuen Figuren</a>
            </div>
            <div className="roleStrip" aria-label="Verantwortungskette">
              <span><b>01</b> Aia schlägt vor</span>
              <span><b>02</b> Conductor komponiert</span>
              <span><b>03</b> Captain reconciliiert</span>
            </div>
          </div>

          <figure className="heroVisual">
            <img src="/images/aia-captain-cops-shipyard.png" alt="Aia, Conductor und Captain planen gemeinsam in einer Hafenwerkstatt." />
            <figcaption><span>ERSTE BEGEGNUNG</span><strong>Vorschlag · Komposition · Cluster-Lifecycle</strong></figcaption>
          </figure>
        </div>

        <a className="scrollCue" href="#geschichte" aria-label="Zur Geschichte scrollen"><span>ENTDECKEN</span><i aria-hidden="true">↓</i></a>
      </section>

      <section className="opening" id="geschichte">
        <div className="sectionIndex">01 / 12</div>
        <div>
          <p className="eyebrow dark">DIE EINFACHE ERKLÄRUNG</p>
          <h2>Ein guter Plan ist nicht gut genug.</h2>
          <p className="openingText">
            Aia darf beobachten, Zusammenhänge erklären und Vorschläge entwerfen.
            Erst ein Mensch gibt genau den geprüften Plan frei. Danach bringen
            spezialisierte Controller den autorisierten Sollzustand zuverlässig
            in die Realität.
          </p>
          <blockquote>„Aia schlägt vor. Ein Mensch prüft. Die Plattform führt kontrolliert aus.“</blockquote>
        </div>
      </section>

      <section className="characterSection" id="rollen">
        <header className="sectionHeader">
          <div><p className="eyebrow dark">DREI KLARE AUFGABEN</p><h2>Gesichter für die Control Plane.</h2></div>
          <p>Freundliche Figuren, harte Verantwortungsgrenzen. Keine von ihnen besitzt den Schlüssel.</p>
        </header>

        <div className="characterGrid">
          <article className="characterCard aiaCard">
            <div className="portrait"><img src="/images/aia-character-sheet.png" alt="Character Sheet der violetten AI-Assistentin Aia." /></div>
            <div className="characterCopy"><span>AI AGENT</span><h3>Aia</h3><p>liest, sucht, analysiert und entwirft verständliche Vorschläge.</p><q>Ich hätte da eine Idee.</q></div>
          </article>
          <article className="characterCard conductorCard">
            <div className="portrait"><img src="/images/conductor-character-sheet.png" alt="Character Sheet von Conductor, der Crossplane-Komposition personifiziert." /></div>
            <div className="characterCopy"><span>CROSSPLANE</span><h3>Conductor</h3><p>dirigiert freigegebene Compositions und ihre Ressourcen im Takt der Reconciliation.</p><q>Alle folgen derselben Partitur.</q></div>
          </article>
          <article className="characterCard captainCard">
            <div className="portrait"><img src="/images/captain-character-sheet.png" alt="Character Sheet von Captain, der Cluster API personifiziert." /></div>
            <div className="characterCopy"><span>CLUSTER API</span><h3>Captain</h3><p>baut, skaliert, aktualisiert und ersetzt Kubernetes-Cluster deklarativ.</p><q>Ich halte den Cluster auf Kurs.</q></div>
          </article>
        </div>
      </section>

      <section className="chainSection" aria-labelledby="chain-title">
        <header>
          <p className="eyebrow">VERANTWORTUNGSKETTE</p>
          <h2 id="chain-title">Vom Business Intent zur belastbaren Evidence.</h2>
        </header>
        <ol className="flowGrid">
          {flow.map(([number, title, text]) => (
            <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
      </section>

      <section className="gateSection">
        <figure><img src="/images/aia-at-the-gate.png" alt="Aia und die vier Sensoren warten am Tor, während ein Mensch den Schlüssel hält." /></figure>
        <div className="gateCopy">
          <p className="eyebrow dark">DIE SICHERHEITSGRENZE</p>
          <h2>Der Schlüssel bleibt beim Menschen.</h2>
          <p>
            Aia bringt den Plan. Scout, Meter, Check und Proof prüfen Fakten.
            Der Mensch sieht die wirkliche Änderung und autorisiert genau diese
            Revision. Policies validieren die Freigabe, ein deterministischer
            Executor reicht sie ein.
          </p>
          <div className="boundaryRule"><strong>Unveränderliche Regel</strong><span>Der grüne Haken ist kein Schlüssel.</span></div>
        </div>
      </section>

      <section className="specialists">
        <header className="sectionHeader inverse">
          <div><p className="eyebrow">ZWEI SPEZIALISTEN</p><h2>Crossplane und CAPI ergänzen sich.</h2></div>
          <p>Keine starre Produktkette, sondern getrennte Verantwortungen mit einer klaren Übergabe.</p>
        </header>
        <div className="specialistGrid">
          <article className="specialist conductorSpecialist">
            <span className="specialistLabel">CONDUCTOR · CROSSPLANE</span>
            <h3>Was gehört zur Plattform?</h3>
            <p>Compositions bündeln Netzwerk, Identität, Storage, Security, Observability und Cluster-Ressourcen hinter einer verständlichen Plattform-API.</p>
            <ul><li>eigene Plattform-APIs</li><li>wiederverwendbare Compositions</li><li>zusammengehörige Ressourcen</li></ul>
          </article>
          <div className="handoff" aria-label="Gemeinsame Übergabe"><span>FREIGEGEBENER<br />SOLLZUSTAND</span><i aria-hidden="true">→</i></div>
          <article className="specialist captainSpecialist">
            <span className="specialistLabel">CAPTAIN · CLUSTER API</span>
            <h3>Wie bleibt der Cluster auf Kurs?</h3>
            <p>CAPI-Controller reconciliieren Cluster, Control Planes und Machines über unterschiedliche Infrastruktur-Provider hinweg.</p>
            <ul><li>create, scale, upgrade, replace</li><li>Control Plane und Machines</li><li>deklarative Reconciliation</li></ul>
          </article>
        </div>
      </section>

      <section className="shipyardScene">
        <div className="sceneMeta"><span>SZENE 05–07</span><strong>Komposition · Cluster-Lifecycle · Readiness</strong></div>
        <img src="/images/aia-captain-cops-shipyard.png" alt="Aia übergibt ihren Plan an Conductor und Captain in der Plattformwerft." />
        <div className="sceneCaption"><p>Aia beschreibt die Absicht.</p><p>Conductor ordnet die Plattform.</p><p>Captain baut das Cluster-Schiff.</p><strong>Gebaut ist nicht bereit.</strong></div>
      </section>

      <section className="honestySection">
        <header><p className="eyebrow dark">ARCHITEKTUR MIT EHRLICHKEIT</p><h2>Heute klar benennen. Morgen sichtbar gestalten.</h2></header>
        <div className="honestyGrid">
          <article><span className="state today">HEUTE</span><h3>Das Fundament existiert.</h3><p>Architektur, Contracts, Governance-Modell, öffentliches ADR und die erste CAPI-MCP-Evaluation sind dokumentiert.</p></article>
          <article><span className="state target">MORGEN</span><h3>Die sichere Umsetzung folgt.</h3><p>Candidate Contracts, kontrollierter Executor, gehärtete Diagnoseflächen und belastbare Evidenz für alle Akzeptanzkriterien werden implementiert.</p></article>
        </div>
        <p className="honestyNote">Diese Geschichte zeigt das Zielbild. Sie behauptet nicht, dass Aia heute autonome Cluster-Lifecycle-Aktionen ausführt.</p>
      </section>

      <section className="shipSection">
        <img src="/images/openkubes-platform-ship.webp" alt="Das OpenKubes-Plattformschiff mit modularen Containern auf einem digitalen Meer." />
        <div className="shipOverlay"><p className="eyebrow">SZENE 08</p><h2>Die Plattform legt ab.</h2><p>Aus einem geprüften Plan ist eine fahrende Plattform geworden. Menschen bestimmen den Kurs. Controller halten den freigegebenen Zustand stabil.</p></div>
      </section>

      <section className="recoverySection" id="recovery">
        <header className="sectionHeader inverse">
          <div><p className="eyebrow">SZENE 09–11 · RESILIENCE</p><h2>Das Schiff ist ersetzbar. Das Versprechen bleibt.</h2></div>
          <p>Robotics, deklarative Rekonstruktion und Evidence arbeiten zusammen – innerhalb eines freigegebenen Recovery-Plans.</p>
        </header>
        <figure className="recoveryVisual"><img src="/images/aia-robotics-recovery.png" alt="Aia-Roboter bergen geprüfte Container aus dem Meer und bereiten ein frisches Plattformschiff vor." /><figcaption>Physische Robotik macht aus Recovery eine sichtbare, koordinierte Fähigkeit.</figcaption></figure>
        <ol className="recoverySteps">
          <li><span>01</span><h3>Finden</h3><p>Unterwasser- und Flugdrohnen erfassen Lage und Zustand.</p></li>
          <li><span>02</span><h3>Prüfen</h3><p>Identität, Integrität und Recovery-Berechtigung werden verifiziert.</p></li>
          <li><span>03</span><h3>Bergen</h3><p>Autonome Kräne und Roboter transportieren freigegebene Module.</p></li>
          <li><span>04</span><h3>Rekonstruieren</h3><p>Conductor komponiert, Captain baut – auf einem frischen Schiff.</p></li>
        </ol>
      </section>

      <section className="cathedralSection">
        <img src="/images/openkubes-ship-cathedral.png" alt="Das OpenKubes-Schiff fährt nachts an einer beleuchteten Kathedrale vorbei." />
        <div className="cathedralShade" />
        <div className="cathedralCopy">
          <p className="eyebrow">EPILOG · SZENE 12</p>
          <h2>Eine Plattform ist Kathedrale und Schiff zugleich.</h2>
          <p>Sie braucht ein Fundament, das länger hält als einzelne Technologien. Und sie muss weiterfahren, während Menschen sie verbessern.</p>
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
