import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Faith Focus Tools</h3>
            <p className="mt-3 text-sm opacity-80">
              Scripture-inspired encouragement, prayers, affirmations,
              reflections, and personal growth tools.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Site Links</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/">Home</Link>
              <Link href="/articles">Articles</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-sm opacity-70">
          © 2026 Faith Focus Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
