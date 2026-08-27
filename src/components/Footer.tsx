import Logo from "@/components/Logo";
import { Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-6 w-6" />
              <span className="font-display text-sm font-semibold text-ink">
                NorthStar Digital Solutions
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-ink-soft">
              Custom software for South African businesses, built practical
              and hosted on AWS — shipped honestly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                Company
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-ink-soft hover:text-ink">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-ink-soft hover:text-ink">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-ink-soft hover:text-ink">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                Get in touch
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:hello@northstardigital.co.za"
                    className="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    hello@northstardigital.co.za
                  </a>
                </li>
                <li className="text-ink-soft">South Africa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-wide text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} NorthStar Digital Solutions. All rights reserved.</p>
          <p>Registered company, South Africa.</p>
        </div>
      </div>
    </footer>
  );
}
