import { CircleCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { AgentRegistrationForm } from "@/components/AgentRegistrationForm";

export function AgentSection({ t }: { t: Dictionary }) {
  const a = t.agent;
  return (
    <section id="join" aria-labelledby="join-title" className="on-dark relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-0 -z-10 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="eyebrow text-accent-300">{a.eyebrow}</p>
          <h2 id="join-title" className="section-title text-white">{a.title}</h2>
          <p className="mt-3 text-navy-200">{a.intro}</p>
          <h3 className="mt-8 text-sm font-semibold text-navy-300">{a.pointsTitle}</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {a.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-navy-100">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <AgentRegistrationForm t={t} />
        </div>
      </div>
    </section>
  );
}
