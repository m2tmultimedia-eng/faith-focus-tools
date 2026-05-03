"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="logo" aria-label="FaithFocusTools home">
        FaithFocusTools
      </Link>

      <button
        onClick={() => setMobileOpen((value) => !value)}
        className="menu-button"
        aria-expanded={mobileOpen}
        aria-controls="site-navigation"
      >
        Menu
      </button>

      <nav id="site-navigation" className={mobileOpen ? "open" : ""}>
        {mainNav.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
