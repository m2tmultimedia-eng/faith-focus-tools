import Link from "next/link";

export const metadata = {
  title: "Contact | FaithFocusTools",
  description: "Contact FaithFocusTools.",
};

export default function ContactPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Contact</p>
        <h1>Contact FaithFocusTools</h1>
        <p>
          Have a question, suggestion, or issue with the site? Reach out below.
        </p>
      </section>

      <section className="card">
        <h2>Contact Email</h2>
        <p>
          Email us at:{" "}
          <a className="text-link" href="mailto:hello@faithfocustools.com">
            hello@faithfocustools.com
          </a>
        </p>

        <h2>Suggestions</h2>
        <p>
          If you would like to suggest new affirmations, prayer topics, Bible
          verse categories, or site improvements, send a message anytime.
        </p>

        <h2>Response Time</h2>
        <p>
          We do our best to respond when possible. Some messages may take longer
          depending on volume.
        </p>

        <Link className="button" href="/">
          Back Home
        </Link>
      </section>
    </main>
  );
}