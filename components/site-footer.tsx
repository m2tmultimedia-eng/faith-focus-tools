import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  {
    title: "Scripture",
    links: [
      { href: "/tools/bible-verse-generator", label: "Bible Verse Generator" },
      { href: "/topics/anxiety", label: "Verses for Anxiety" },
      { href: "/topics/confidence", label: "Verses for Confidence" },
      { href: "/topics/peace", label: "Verses for Peace" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/tools/affirmation-generator", label: "Daily Affirmations" },
      { href: "/tools/prayer-generator", label: "Prayer Prompts" },
      { href: "/topics", label: "Topic Pages" },
    ],
  },
  {
    title: "Monetization",
    links: [
      { href: siteConfig.freeGuideUrl, label: "7-Day Faith Reset" },
      { href: siteConfig.partnerUrl, label: "Sponsorships" },
      { href: "/contact", label: "Advertise With Us" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            FaithFocusTools
          </Link>
          <p>
            Daily KJV Bible verses, faith affirmations, and prayer prompts for
            focus, peace, and purpose.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="footer-links">
        <Link href="/">Home</Link> · <Link href="/privacy-policy">Privacy Policy</Link> ·{" "}
        <Link href="/terms">Terms</Link> · <Link href="/contact">Contact</Link>
      </p>

      <p>
        © {new Date().getFullYear()} FaithFocusTools. All scripture quotations
        from the King James Version (KJV).
      </p>
    </footer>
  );
}
