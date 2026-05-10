export function SiteHeader() {
  return (
    <header className="border-b bg-[#0D2A47] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="text-3xl font-bold">
          FaithFocusTools ✨
        </a>

        <nav className="flex gap-6 text-sm font-semibold">
          <a href="/">Home</a>
          <a href="/articles">Articles</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </div>
    </header>
  );
}
