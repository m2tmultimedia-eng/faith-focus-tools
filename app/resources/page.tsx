import type { Metadata } from "next";
import Link from "next/link";
import { pagePath, seoContentPages } from "@/lib/seo-content-pages";

export const metadata: Metadata = {
  title: "Affirmations, Bible Verses, and Prayer Hub",
  description:
    "Central hub for faith affirmations, KJV Bible verses, and prayer guides by topic, with internal links to every resource and generator.",
  alternates: {
    canonical: "/resources",
  },
};

const clusters = [
  {
    type: "affirmation",
    title: "Affirmation Pages",
    description:
      "Start here when you need mindset support for confidence, focus, healing, money mindset, motivation, or peace at night.",
    toolHref: "/tools/affirmation-generator",
    toolLabel: "Open the Affirmation Generator",
  },
  {
    type: "bible",
    title: "Bible Verse Pages",
    description:
      "Find focused KJV Bible verse collections for anxiety, strength, healing, faith, fear, peace, protection, and encouragement.",
    toolHref: "/tools/bible-verse-generator",
    toolLabel: "Open the Bible Verse Generator",
  },
  {
    type: "prayer",
    title: "Prayer Pages",
    description:
      "Use these prayer guides when you need words for anxiety, financial breakthrough, healing, guidance, protection, clarity, or morning strength.",
    toolHref: "/tools/prayer-generator",
    toolLabel: "Open the Prayer Generator",
  },
];

export default function ResourcesPage() {
  return (
    <main className="container resource-hub">
      <section className="hero">
        <p className="eyebrow">Faith Library</p>
        <h1>Affirmations, Bible Verses, and Prayer Hub</h1>
        <p>
          Browse every FaithFocusTools resource from one central page. These
          topic clusters help you move from a broad need like anxiety, fear, or
          guidance into a focused affirmation guide, Bible verse collection, or
          prayer page.
        </p>
        <Link className="button" href="/">
          Back to Homepage
        </Link>
      </section>

      <section className="hub-intro longform-card">
        <h2>Choose the kind of support you need</h2>
        <p>
          Affirmations are helpful when you want to renew your thoughts and
          practice a stronger inner voice. Bible verses are best when you want
          Scripture to anchor your faith and attention. Prayers are for the
          moments when you need to be honest with God and speak from the heart.
        </p>
        <p>
          Each cluster below links to long-tail pages built around specific
          search intent, so visitors and search engines can understand how the
          site is organized.
        </p>
      </section>

      {clusters.map((cluster) => (
        <section className="resource-cluster" key={cluster.type}>
          <div className="cluster-heading">
            <div>
              <p className="eyebrow">SEO Topic Cluster</p>
              <h2>{cluster.title}</h2>
              <p>{cluster.description}</p>
            </div>
            <Link className="button secondary-button" href={cluster.toolHref}>
              {cluster.toolLabel}
            </Link>
          </div>

          <div className="cluster-link-grid">
            {seoContentPages
              .filter((page) => page.type === cluster.type)
              .map((page) => (
                <Link href={pagePath(page)} className="cluster-link-card" key={page.slug}>
                  <h3>{page.keyword}</h3>
                  <p>{page.metaDescription}</p>
                  <span>Read guide →</span>
                </Link>
              ))}
          </div>
        </section>
      ))}

      <section className="cta">
        <h2>Want a personalized version?</h2>
        <p>
          Use the generators when you want a fresh affirmation, Bible verse, or
          prayer based on your current mood.
        </p>
        <Link className="button" href="/tools/affirmation-generator">
          Start With Affirmations
        </Link>
        <Link className="button" href="/tools/bible-verse-generator">
          Generate a Bible Verse
        </Link>
        <Link className="button" href="/tools/prayer-generator">
          Generate a Prayer
        </Link>
      </section>

      <section className="longform-card">
        <h2>All resource pages</h2>
        <ul className="hub-sitemap-list">
          {seoContentPages.map((page) => (
            <li key={page.slug}>
              <Link href={pagePath(page)}>{page.keyword}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
