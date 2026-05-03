import Link from "next/link";
import { AdsenseAd } from "@/components/adsense-ad";
import { ProductCTA } from "@/components/product-cta";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Faith Tools for Focus, Peace & Purpose</h1>
        <p>
          Free daily affirmations, Bible verses, and prayer prompts to help you reset your mind and walk a little lighter.
        </p>
        <Link className="button" href="/tools/affirmation-generator">Start With Affirmations</Link>
        <Link className="button" href="/tools/bible-verse-generator">Get a Bible Verse</Link>
      </section>

      <AdsenseAd className="top-ad" />
     
      <section className="grid">
        <Link href="/tools/affirmation-generator" className="card">
          <h2>Affirmation Generator</h2>
          <p>Get a quick faith-friendly affirmation for your day.</p>
        </Link>
        <Link href="/tools/bible-verse-generator" className="card">
          <h2>Bible Verse Generator</h2>
          <p>Receive a Bible verse for encouragement and reflection.</p>
        </Link>
        <Link href="/tools/prayer-generator" className="card">
          <h2>Prayer Generator</h2>
          <p>Simple prayer prompts when words are hard to find.</p>
        </Link>
      </section>
      <section className="cta">
        <h2>Want the 7-Day Faith & Focus Reset?</h2>
        <p>Turn these tools into a simple daily rhythm for prayer, focus, and reflection.</p>
        <Link className="button" href={siteConfig.freeGuideUrl}>Get the Free Guide</Link>
      </section>

      <ProductCTA />
    </main>
  );
}
