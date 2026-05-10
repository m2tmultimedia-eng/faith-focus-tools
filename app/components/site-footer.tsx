export function SiteFooter() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">Faith Focus Tools</h3>

            <p className="mt-4 text-sm opacity-80">
              Scripture-inspired encouragement, prayers, affirmations,
              reflection tools, and faith-based personal growth resources.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>

            <div className="flex flex-col gap-3 text-sm">
              <a href="/">Home</a>
              <a href="/articles">Articles</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>

            <div className="flex flex-col gap-3 text-sm">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms</a>
              <a href="/disclaimer">Disclaimer</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-sm opacity-70">
          © 2026 Faith Focus Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
