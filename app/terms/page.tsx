import Link from "next/link";

export const metadata = {
  title: "Terms of Use | FaithFocusTools",
  description: "Terms of Use for FaithFocusTools.",
};

export default function TermsPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Terms</p>
        <h1>Terms of Use</h1>
        <p>Last updated: May 2026</p>
      </section>

      <section className="card">
        <h2>Use of This Site</h2>
        <p>
          FaithFocusTools provides free faith-based encouragement tools,
          affirmations, Bible verses, and prayer prompts for personal reflection
          and general inspiration.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          The content on this site is for informational and inspirational
          purposes only. It is not medical, legal, financial, counseling, or
          professional advice.
        </p>

        <h2>User Responsibility</h2>
        <p>
          You are responsible for how you use the content on this site. Always
          seek qualified professional guidance for serious personal, medical,
          financial, legal, or mental health concerns.
        </p>

        <h2>Content Ownership</h2>
        <p>
          The original affirmations, prayers, page layouts, and site content are
          owned by FaithFocusTools unless otherwise stated. Bible verses are
          presented for devotional and educational use.
        </p>

        <h2>Advertising and Links</h2>
        <p>
          This site may display advertisements or include links to third-party
          websites. We are not responsible for the content, policies, or actions
          of third-party websites.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms at any time. Continued use of the site means
          you accept the updated terms.
        </p>

        <Link className="button" href="/">
          Back Home
        </Link>
      </section>
    </main>
  );
}