import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import Starmark from "@/components/Starmark";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-3xl border border-line bg-paper-raised">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative flex flex-col justify-center overflow-hidden border-b border-line p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <Starmark className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 opacity-[0.06]" />

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-beacon">
                Get in touch
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Let&rsquo;s build something.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                Tell us what you&rsquo;re trying to build or what&rsquo;s
                slowing your infrastructure down. We&rsquo;ll reply with a
                straight answer, not a sales script.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:hello@northstardigital.co.za"
                  className="flex items-center gap-3 text-sm text-ink-soft hover:text-ink"
                >
                  <Mail className="h-4 w-4 text-beacon" />
                  hello@northstardigital.co.za
                </a>
                <div className="flex items-center gap-3 text-sm text-ink-soft">
                  <MapPin className="h-4 w-4 text-ink-faint" />
                  South Africa
                </div>
              </div>
            </div>

            <form
              action="mailto:hello@northstardigital.co.za"
              method="post"
              encType="text/plain"
              className="flex flex-col gap-4 p-8 sm:p-12"
            >
              <div>
                <label htmlFor="name" className="text-xs font-medium text-ink-soft">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-beacon focus:ring-4 focus:ring-beacon-soft"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-ink-soft">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-beacon focus:ring-4 focus:ring-beacon-soft"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-medium text-ink-soft">
                  What are you looking to build?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-beacon focus:ring-4 focus:ring-beacon-soft"
                  placeholder="A quick sentence or two is fine"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-beacon"
              >
                Send message
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
