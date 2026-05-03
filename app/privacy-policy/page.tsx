import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | FaithFocusTools",
  description: "Privacy Policy for FaithFocusTools.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p>Last updated: May 2026</p>
      </section>

      <section className="card">
        <p>
          FaithFocusTools provides free affirmation, Bible verse, prayer, and
          faith-based reflection tools. This Privacy Policy explains how this
          site may collect and use information.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect basic information such as browser type, pages visited,
          device information, and general usage data to understand how visitors
          use the site.
        </p>

        <h2>Cookies and Advertising</h2>
        <p>
          This site may use cookies and similar technologies. Third-party vendors,
          including Google, may use cookies to serve ads based on a user’s prior
          visits to this or other websites.
        </p>

        <p>
          Google’s use of advertising cookies enables it and its partners to
          serve ads based on visits to this site and other sites on the internet.
          Users may opt out of personalized advertising by visiting Google’s Ad
          Settings.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services such as Google AdSense, analytics
          tools, hosting providers, or affiliate platforms. These services may
          collect information according to their own privacy policies.
        </p>

        <h2>Personal Information</h2>
        <p>
          We do not sell personal information. If you contact us, we may use the
          information you provide only to respond to your message.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this Privacy Policy, contact us through the contact
          page.
        </p>

        <Link className="button" href="/">
          Back Home
        </Link>
      </section>
    </main>
  );
}