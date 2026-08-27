import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    tag: "Build",
    title: "Custom Software Development",
    description:
      "Web platforms and internal tools built around how your business actually works — from the first line of code to a production-ready product.",
  },
  {
    tag: "Build",
    title: "SaaS Product Build",
    description:
      "Multi-tenant platforms with real authentication, role-based access, and data isolation — built to be sold, not just demoed.",
  },
  {
    tag: "Protect",
    title: "Compliance & Workflow Systems",
    description:
      "Dashboards for tracking regulatory, safety, and data-protection obligations — built for South African compliance frameworks.",
  },
  {
    tag: "Run",
    title: "Hosting & Deployment on AWS",
    description:
      "Once your software is built, we deploy and run it on AWS as part of the delivery — so you walk away with a live product, not a zip file and instructions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-beacon">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Software built for your business — and a place for it to run.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICES.map(({ tag, title, description }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="rounded-2xl border border-line bg-paper-raised p-7 shadow-[0_1px_2px_rgba(23,32,51,0.04)] transition-shadow hover:shadow-[0_10px_28px_rgba(23,32,51,0.07)]"
            >
              <span className="inline-flex rounded-full bg-beacon-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-beacon">
                {tag}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
