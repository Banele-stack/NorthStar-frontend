import Reveal from "@/components/Reveal";

const PROJECTS = [
  {
    name: "CompliancePro",
    tag: "SHEQ Compliance",
    description:
      "Contractor, workforce, and site-safety compliance dashboard built for South African mining and construction — document tracking, certifications, and incident logs in one place.",
    status: "In development",
  },
  {
    name: "POPIAGuard",
    tag: "Data Protection",
    description:
      "POPIA compliance tracker for businesses and the consultancies managing it on their behalf — processing records, third-party operator agreements, and breach logging.",
    status: "In development",
  },
  {
    name: "Stokvela",
    tag: "Community Finance",
    description:
      "A treasurer's tool for running a stokvel or burial society — member contributions, payout rotation, and a proper record of who's paid and who hasn't.",
    status: "In development",
  },
  {
    name: "The Cosmopolitan",
    tag: "Local Marketplace",
    description:
      "A local business directory and room-booking platform, seeded with real listings across Johannesburg neighbourhoods, built to help local supply get discovered.",
    status: "In development",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-paper-sunk/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-beacon">
            Our work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A fair sense of how we build, before we build yours.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PROJECTS.map(({ name, tag, description, status }, i) => (
            <Reveal
              key={name}
              delay={i * 90}
              className="flex flex-col rounded-2xl border border-line bg-paper-raised p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-ink">{name}</h3>
                <span className="whitespace-nowrap rounded-full bg-paper-sunk px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                  {status}
                </span>
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-beacon">
                {tag}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
