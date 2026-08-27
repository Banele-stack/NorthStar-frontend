import { ArrowUpRight } from "lucide-react";
import Starmark from "@/components/Starmark";
import Reveal from "@/components/Reveal";

const FACTS = [
  { k: "BASED", v: "South Africa" },
  { k: "HOSTED ON", v: "AWS" },
  { k: "DELIVERED", v: "Built + running" },
];

export default function Hero() {
  return (
    <section id="top" className="grid-field relative overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-32">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised px-3.5 py-1.5 text-xs font-medium text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-beacon" />
              South African software, built &amp; hosted
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight text-ink sm:text-5xl md:text-[3.4rem]">
              A fixed point for{" "}
              <span className="text-beacon">the software</span> your business
              runs on.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              NorthStar Digital Solutions designs and builds custom software —
              and we run it for you on AWS once it&rsquo;s ready, so you get a
              live product without having to figure out hosting yourself.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-beacon"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-beacon hover:text-beacon"
              >
                What we do
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-[11px] tracking-wide text-ink-faint">
              {FACTS.map(({ k, v }) => (
                <div key={k}>
                  <dt className="uppercase">{k}</dt>
                  <dd className="mt-0.5 font-sans text-sm font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative mx-auto aspect-square w-full max-w-md opacity-90">
          <Starmark className="h-full w-full" />
        </Reveal>
      </div>
    </section>
  );
}
