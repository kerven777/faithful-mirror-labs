import { GraduationCap, Layers, Users, BookOpen } from "lucide-react";
import { COURSES, TEACHERS } from "./data";
import { useI18n } from "./i18n";
import { Reveal } from "./Reveal";

export function Metrics() {
  const { t } = useI18n();
  const levels = new Set(COURSES.map((c) => c.level)).size;

  const items = [
    {
      value: `${TEACHERS.length}+`,
      label: t.hero.statTeachers,
      icon: <GraduationCap className="h-5 w-5" />,
      ratio: 1,
    },
    {
      value: "300+",
      label: t.hero.statCourses,
      icon: <Users className="h-5 w-5" />,
      ratio: 0.92,
    },
    {
      value: `${COURSES.length}`,
      label: t.nav.courses,
      icon: <BookOpen className="h-5 w-5" />,
      ratio: 0.78,
    },
    {
      value: `${levels}`,
      label: t.courses.levelAll,
      icon: <Layers className="h-5 w-5" />,
      ratio: 0.64,
    },
  ];

  return (
    <section className="px-5 py-6 lg:px-10 lg:py-10">
      <Reveal>
        <div className="card-dark relative mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:px-10 lg:py-14">
          <div
            aria-hidden
            className="grid-texture pointer-events-none absolute inset-0 text-white/[0.05]"
          />
          <div
            aria-hidden
            className="glow-brand pointer-events-none absolute -top-24 -right-16 h-80 w-80 opacity-40"
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_2fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-mint uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                Kitap Bilim Merkezi
              </span>
              <h2 className="font-display mt-5 text-2xl leading-tight font-bold tracking-[-0.02em] text-ink-foreground sm:text-3xl">
                {t.teachers.experienceTag}
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
                {t.teachers.load}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {items.map((m) => (
                <div
                  key={m.label}
                  className="rounded-3xl border border-white/8 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-brand/50"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-2xl bg-brand/20 text-mint">
                    {m.icon}
                  </div>
                  <p className="font-display mt-4 text-3xl font-bold tracking-tight text-ink-foreground">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink-foreground/55">{m.label}</p>
                  <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-brand"
                      style={{ width: `${Math.round(m.ratio * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
