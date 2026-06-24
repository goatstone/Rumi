import React from "react";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>About Umina Achala</h1>
      <p className={styles.tagline}>Stones and jewelry from Peru</p>

      <section className={styles.section}>
        <h2>🌄 What is Umina Achala?</h2>
        <p>
          <strong>Umina Achala</strong> unites stone provenance with artisanal
          jewelry. It bridges compliance, heritage, and digital provenance,
          creating a transparent marketplace for stones (
          <strong>Umina</strong>) and jewelry (
          <strong>Achala</strong> originating from Peru).
        </p>
        <p>
          The project is built on the <strong>Hedera blockchain</strong>, chosen
          for its speed, low fees, and energy efficiency. Hedera’s distributed
          ledger ensures that every stone and jewelry record is immutable,
          auditable, and verifiable. This means provenance data, artisan
          recognition, and compliance identifiers are securely stored and
          accessible worldwide.
        </p>
      </section>

      <section className={styles.section}>
        <h2>💎 What is Umina?</h2>
        <p>
          <strong>Umina</strong> represents the certified stone (or mineral in solid form) in raw, cut or
          mounted form. Each stone is documented
          with provenance records, ensuring authenticity and compliance.
        </p>
      </section>

      <section className={styles.section}>
        <h2>🌍 What is Achala?</h2>
        <p>
          <strong>Achala</strong> represents artisanal jewelry crafted from
          tokenized stones and minerals. While Umina certifies provenance,
          Achala transforms these stones into culturally significant creations
          that honor artisans and preserve heritage.
        </p>
      </section>

      <section className={styles.section}>
        <h2>⚖️ Compliance</h2>
        <p>
          Every Umina and Achala piece is anchored in
          <strong> Real World Assets (RWAs)</strong>, ensuring verifiability and
          compliance with Peruvian regulations.
        </p>
        <ul>
          <li>Concession ID (INGEMMET)</li>
          <li>REINFO ID</li>
          <li>Vendor RUC (SUNAT)</li>
          <li>Artisan RNA for jewelry</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>💻 Online Platform</h2>
        <h3>https://umina-achala.pe</h3>
        <p>
          The <strong>Umina Achala Online Platform</strong> is the digital hub
          where provenance, compliance, and artistry converge. It provides
          collectors, artisans, and reviewers with transparent access to the
          lifecycle of stones and jewelry.
        </p>

        <div className={styles.subSection}>
          <h3>🔐 Wallet Integration</h3>
          <ul>
            <li>
              Users connect <strong>Hedera-compatible wallets</strong> to
              authenticate and transact.
            </li>
            <li>
              Wallets enable secure acquisition of{" "}
              <strong>Umina (stone NFTs)</strong> and{" "}
              <strong>Achala (jewelry NFTs)</strong>.
            </li>
          </ul>
        </div>

        <div className={styles.subSection}>
          <h3>📜 Provenance Explorer</h3>
          <ul>
            <li>
              Each NFT includes <strong>metadata</strong>: concession ID, REINFO
              ID, artisan RNA, and vendor RUC.
            </li>
            <li>
              Buyers can trace the <strong>origin of stones</strong> and the{" "}
              <strong>artisanship of jewelry</strong>.
            </li>
            <li>Provenance records are immutable and verifiable on-chain.</li>
          </ul>
        </div>

        <div className={styles.subSection}>
          <h3>🛒 Marketplace Features</h3>
          <ul>
            <li>
              <strong>NFT Listings</strong>: Stones (Umina) and jewelry (Achala)
              are displayed with compliance data.
            </li>
            <li>
              <strong>Composite Creations</strong>: Rings, pendants, and woven
              adornments are showcased with artisan recognition.
            </li>
          </ul>
        </div>

        <div className={styles.subSection}>
          <h3>📊 Compliance Dashboard</h3>
          <ul>
            <li>Displays linked IDs (INGEMMET, SUNAT, RNA).</li>
            <li>
              Provides <strong>export readiness</strong> with VUCE COD and HS
              Code integration.
            </li>
            <li>Ensures every transaction meets regulatory standards.</li>
          </ul>
        </div>

        <div className={styles.subSection}>
          <h3>🌐 Community Access</h3>
          <ul>
            <li>
              Collectors explore cultural artistry while supporting artisans.
            </li>
            <li>
              Artisans gain visibility and recognition through verified
              profiles.
            </li>
            <li>
              Compliance reviewers and buyers interact in a transparent
              ecosystem.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>✨ Artistry</h2>
        <p>
          Umina Achala emphasizes composite craftsmanship, blending stones with
          traditional and modern techniques.
        </p>
        <ul>
          <li>Mount Type: Silver bezel, gold prong, textile wrap</li>
          <li>Artisan Recognition: Craftsman name or ID</li>
          <li>Technique: Filigree, inlay, carving, weaving</li>
          <li>
            Composite Creations: Rings, pendants, bracelets, woven adornments
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>♻️ Lifecycle</h2>
        <ol>
          <li>Minting: NFT creation with provenance metadata</li>
          <li>Mounting/Cutting: Artisan RNA notarized</li>
          <li>Sales: Royalties routed to artisan and treasury</li>
          <li>Export: Linked to VUCE COD and HS Code</li>
          <li>Jewelry Transformation: Stones elevated into Achala pieces</li>
        </ol>
      </section>
    </div>
  );
};

export default AboutPage;
