import { useState } from "react";
import { Plus } from "lucide-react";
import { useI18n } from "./i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="px-5 lg:px-10 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="flex justify-center">
          <SectionHeading
            eyebrow={t.faq.eyebrow}
            title={t.faq.title}
            subtitle={t.faq.subtitle}
            align="center"
          />
        </Reveal>
        <div className="mt-12 flex flex-col gap-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen ? "border-brand bg-brand-soft/30 shadow-soft" : "border-border bg-card"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="text-base sm:text-lg font-medium text-foreground">{item.q}</h3>
                    <Plus
                      className={`h-5 w-5 flex-shrink-0 text-foreground/50 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-brand" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-foreground/70 animate-fade-in-up">{item.a}</div>
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
