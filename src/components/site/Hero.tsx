import hero from "@/assets/hero-classroom.jpg";
import { ArrowRight, GraduationCap, Sparkles, Users } from "lucide-react";
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
      className="relative overflow-hidden px-5 lg:px-10 pt-10 pb-20 lg:pt-16 lg:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-soft/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-surface blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            Kitap Bilim Merkezi
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-foreground text-balance">
            <AccentTitle text={t.hero.title} />
          </h1>

          <p className="mt-6 max-w-lg text-base sm:text-lg text-foreground/65 leading-relaxed text-pretty">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              onClick={(e) => handleScroll(e, "#courses")}
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground/80 transition-colors hover:border-brand hover:text-brand"
            >
              {t.nav.about}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-border/70 pt-8">
            <div>
              <p className="font-display text-3xl font-bold text-foreground">{TEACHERS.length}+</p>
              <p className="mt-1 text-sm text-foreground/55">{t.hero.statTeachers}</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-3xl font-bold text-foreground">300+</p>
              <p className="mt-1 text-sm text-foreground/55">{t.hero.statCourses}</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:150ms]">
          <div className="relative mx-auto aspect-[4/5] max-w-md">
            <div aria-hidden className="absolute inset-0 blob-shape bg-brand-soft" />
            <div className="absolute inset-4 overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={hero}
                alt="Kitap"
                className="h-full w-full object-cover"
                width={900}
                height={1125}
              />
            </div>

            <div className="animate-float-slow absolute -left-6 top-8 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-soft backdrop-blur sm:-left-10">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-none">
                  {TEACHERS.length}+
                </p>
                <p className="mt-1 text-xs text-foreground/55 leading-none">
                  {t.hero.statTeachers}
                </p>
              </div>
            </div>

            <div className="animate-float-slower absolute -right-4 bottom-10 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-soft backdrop-blur sm:-right-8">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-deep text-brand-deep-foreground">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-none">300+</p>
                <p className="mt-1 text-xs text-foreground/55 leading-none">{t.hero.statCourses}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
