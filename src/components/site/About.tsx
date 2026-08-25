import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import abstract from "@/assets/abstract.jpg";
import { useI18n } from "./i18n";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);
  return (
    <section id="about" className="px-5 lg:px-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t.about.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {t.about.title}
          </h2>
          <p className="mt-6 text-lg text-foreground/65 leading-relaxed">
            <span className="font-semibold text-foreground">{t.about.intro1}</span>
            {t.about.intro2}
          </p>
          <div className="relative mt-10 overflow-hidden rounded-[2rem] shadow-soft">
            <img src={abstract} alt="" className="w-full h-72 object-cover" loading="lazy" />
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {t.about.tabs.map((tab, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={tab.title} delay={i * 80}>
                <div
                  className={`rounded-3xl border transition-all duration-300 ${
                    isOpen ? "border-brand bg-brand-soft/40 shadow-soft" : "border-border bg-card"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{tab.title}</h3>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? "bg-brand text-brand-foreground" : "bg-surface text-foreground/60"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 animate-fade-in-up">
                      <p className="text-foreground/70 leading-relaxed">{tab.body}</p>
                      <ul className="mt-5 space-y-3">
                        {tab.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-sm text-foreground/75">
                            <Check className="h-5 w-5 flex-shrink-0 text-brand" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
