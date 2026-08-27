import Reveal from "@/components/Reveal";

const POINTS = [
  {
    title: "Built for the South African market",
    description:
      "We design around the regulations, industries, and realities businesses here actually deal with — not a generic template.",
  },
  {
    title: "We ship it running, not just written",
    description:
      "The same team that builds your software deploys it on AWS and hands you a working product — no separate handoff to figure out hosting.",
  },
  {
    title: "Honest about what's done",
    description:
      "We tell you plainly what's shipped, what's in progress, and what still needs work — not a polished demo hiding an empty backend.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-beacon">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              NorthStar Digital Solutions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              A South African software development company. We build custom
              platforms — from compliance dashboards to community finance
              tools to local marketplaces — and once they&rsquo;re built, we
              run them for you on AWS.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Hosting isn&rsquo;t a separate service you have to go source
              elsewhere — it&rsquo;s part of how we deliver the software, so
              you end up with a working product, not just a codebase.
            </p>
          </Reveal>

          <div className="space-y-5">
            {POINTS.map(({ title, description }, i) => (
              <Reveal
                key={title}
                delay={i * 90}
                className="flex gap-4 rounded-2xl border border-line bg-paper-raised p-6"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-beacon" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
