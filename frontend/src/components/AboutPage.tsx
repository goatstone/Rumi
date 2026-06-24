import React from "react";
import styles from "./AboutPage.module.css";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>{t("about.title")}</h1>
      <p className={styles.tagline}>{t("about.tagline")}</p>

      <section className={styles.section}>
        <h2>{t("about.what")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("about.whatDesc1") }} />
        <p dangerouslySetInnerHTML={{ __html: t("about.whatDesc2") }} />
      </section>

      <section className={styles.section}>
        <h2>{t("about.umina")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("about.uminaDesc") }} />
      </section>

      <section className={styles.section}>
        <h2>{t("about.achala")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("about.achalaDesc") }} />
      </section>

      <section className={styles.section}>
        <h2>{t("about.compliance")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("about.complianceDesc") }} />
        <ul>
          {t("about.complianceItems", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{t("about.platform")}</h2>
        <h3>{t("about.platformUrl")}</h3>
        <p dangerouslySetInnerHTML={{ __html: t("about.platformDesc") }} />

        <div className={styles.subSection}>
          <h3>{t("about.wallet")}</h3>
          <ul>
            {t("about.walletItems", { returnObjects: true }).map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>

        <div className={styles.subSection}>
          <h3>{t("about.provenance")}</h3>
          <ul>
            {t("about.provenanceItems", { returnObjects: true }).map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
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
