import { TEACHERS } from "./data";
import { useI18n } from "./i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const PHOTOS = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=70",
];

export function Teachers() {
  const { t } = useI18n();
  return (
    <section
      id="teachers"
      className="relative overflow-hidden px-5 lg:px-10 py-20 lg:py-28 bg-surface"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 h-72 w-72 rounded-full bg-brand-soft/60 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.nav.teachers} title={t.teachers.title} />
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-border bg-card px-5 py-2 text-sm text-foreground/70">
              {t.teachers.experienceTag}
            </span>
            <span className="rounded-full border border-border bg-card px-5 py-2 text-sm text-foreground/70">
              {t.teachers.load}
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {TEACHERS.map((tt, i) => (
            <Reveal key={tt.name} delay={Math.min(i, 8) * 50}>
              <article className="group overflow-hidden rounded-3xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={PHOTOS[i]}
                    alt={tt.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <p className="text-xs font-medium text-white/90">
                      {t.teachers.experience}: {t.teachers.years(tt.years)}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">{tt.name}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
