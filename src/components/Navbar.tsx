"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-8 w-8 shrink-0" />
          <span className="font-display text-base font-semibold tracking-tight text-ink">
            NorthStar
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-beacon"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-line p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper-raised md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-paper-sunk hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-4 py-2.5 text-center text-sm font-medium text-paper"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
