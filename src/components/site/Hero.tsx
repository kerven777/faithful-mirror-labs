import hero from "@/assets/hero-classroom.jpg";
import { ArrowRight, GraduationCap, Sparkles, Users, TrendingUp } from "lucide-react";
import { useI18n } from "./i18n";
import { AccentTitle } from "./AccentTitle";
import { TEACHERS } from "./data";

export function Hero() {
  const { t } = useI18n();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pt-12 pb-16 lg:px-10 lg:pt-20 lg:pb-24"
    >
      <div
        aria-hidden
        className="glow-brand pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] opacity-25"
      />
      <div
        aria-hidden
        className="grid-texture pointer-events-none absolute inset-0 text-foreground/[0.035]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-brand uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            Kitap Bilim Merkezi
          </span>

          <h1 className="font-display mt-6 text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-balance text-foreground sm:text-5xl lg:text-[3.6rem]">
            <AccentTitle text={t.hero.title} />
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-pretty text-foreground/60 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#courses"
              onClick={(e) => handleScroll(e, "#courses")}
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
            >
              {t.nav.about}
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-2 gap-3">
            <StatCard
              value={`${TEACHERS.length}+`}
              label={t.hero.statTeachers}
              icon={<GraduationCap className="h-4 w-4" />}
            />
            <StatCard
              value="300+"
              label={t.hero.statCourses}
              icon={<Users className="h-4 w-4" />}
            />
          </div>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:150ms]">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="glow-brand pointer-events-none absolute -inset-6 opacity-30"
            />
            <div
              aria-hidden
              className="absolute -top-4 -right-4 h-40 w-40 rounded-[2.5rem] bg-brand-soft/70"
            />
            <div className="card-premium relative overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src={hero}
                  alt="Kitap"
                  className="aspect-[4/5] h-full w-full object-cover sm:aspect-[5/5]"
                  width={900}
                  height={1125}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-ink/45 via-transparent to-transparent"
                />
              </div>
            </div>

            <div className="animate-float-slow card-premium absolute -left-3 top-10 flex items-center gap-3 px-4 py-3 sm:-left-8">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand text-brand-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-base leading-none font-bold text-foreground">
                  {TEACHERS.length}+
                </p>
                <p className="mt-1.5 truncate text-[11px] leading-none text-foreground/55">
                  {t.hero.statTeachers}
                </p>
              </div>
            </div>

            <div className="animate-float-slower card-premium absolute -right-3 bottom-10 flex items-center gap-3 px-4 py-3 sm:-right-8">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-ink text-ink-foreground">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-base leading-none font-bold text-foreground">
                  300+
                </p>
                <p className="mt-1.5 truncate text-[11px] leading-none text-foreground/55">
                  {t.hero.statCourses}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="card-premium card-hover p-4">
      <div className="grid h-8 w-8 place-items-center rounded-xl bg-brand-soft text-brand">
        {icon}
      </div>
      <p className="font-display mt-3 text-2xl font-bold tracking-tight text-foreground">{value}</p>
      <p className="mt-1 text-xs leading-snug text-foreground/55">{label}</p>
    </div>
  );
}
