import { useMemo, useState } from "react";
import { COURSES, Audience } from "./data";
import { Calendar, Clock, User, ChevronDown } from "lucide-react";
import { useI18n } from "./i18n";

import {
  BookSlider,
  SECONDARY_BOOKS,
  TERTIARY_BOOKS,
  QUATERNARY_BOOKS,
  QUINARY_BOOKS,
  SENARY_BOOKS,
  ALL_BOOKS,
} from "./BookSlider";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const AUDIENCES: ("All" | Audience)[] = ["All", "kids", "adults"];

type CourseCategory = "All" | "English" | "Chinese" | "Computer";
const COURSE_CATEGORIES: CourseCategory[] = ["All", "English", "Chinese", "Computer"];

export function Courses() {
  const { t, lang } = useI18n();
  const [audience, setAudience] = useState<"All" | Audience>("All");
  const [category, setCategory] = useState<CourseCategory>("All");
  const [catOpen, setCatOpen] = useState(false);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const handleBookClick = (book: { targetId?: string }) => {
    if (!book.targetId) return;
    if (category !== "English" || audience !== "adults") {
      setCategory("English");
      setAudience("adults");
    }
    const scrollTo = () => {
      const el = document.getElementById(book.targetId!);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setHighlightedId(book.targetId!);
      window.setTimeout(
        () => setHighlightedId((cur) => (cur === book.targetId ? null : cur)),
        1800,
      );
    };
    // wait for the English Adult section to mount if filters just changed
    window.setTimeout(scrollTo, 80);
  };

  const filtered = useMemo(
    () =>
      COURSES.filter((c) => {
        if (audience !== "All" && c.audience !== audience) return false;
        if (category !== "All") {
          if (category === "English") return true; // existing catalog is English-learning
          return c.title.toLowerCase().includes(category.toLowerCase());
        }
        return true;
      }),
    [audience, category],
  );

  const audLabel = (a: "All" | Audience) =>
    a === "All" ? t.courses.audAll : a === "kids" ? t.courses.audKids : t.courses.audAdults;

  const baseBtn = "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300";
  const activeBtn = "bg-brand text-brand-foreground shadow-soft";
  const inactiveBtn = "bg-surface text-foreground/70 hover:bg-brand-soft hover:text-brand";

  return (
    <section id="courses" className="px-5 lg:px-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex justify-center">
          <SectionHeading
            eyebrow={t.courses.audAll}
            title={t.courses.title}
            subtitle={t.courses.subtitle}
            align="center"
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {AUDIENCES.map((a) => {
            const isAllReset = a === "All" && category === "All" && audience === "All";
            return (
              <button
                key={a}
                onClick={() => {
                  setAudience(a);
                  if (a === "All") setCategory("All");
                }}
                className={`${baseBtn} transition-all duration-300 ${audience === a ? activeBtn : inactiveBtn}`}
              >
                {audLabel(a)}
              </button>
            );
          })}

          <Popover open={catOpen} onOpenChange={setCatOpen}>
            <PopoverTrigger asChild>
              <button
                className={`${baseBtn} inline-flex items-center gap-1.5 ${
                  category !== "All" ? activeBtn : inactiveBtn
                }`}
              >
                {category === "All" ? "Courses" : category}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              sideOffset={8}
              className="w-44 p-1.5 rounded-2xl border border-border bg-card shadow-xl"
            >
              <div className="flex flex-col">
                {COURSE_CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCategory(c);
                      setCatOpen(false);
                    }}
                    className={`text-left rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      category === c
                        ? "bg-brand text-brand-foreground"
                        : "text-foreground/80 hover:bg-brand-soft"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        {category === "All" && (
          <div className="mt-14 animate-fade-in">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-10 lg:mb-14 animate-fade-in">
              {t.englishFile.carouselTitle}
            </h2>
            <BookSlider books={ALL_BOOKS} onBookClick={handleBookClick} />
          </div>
        )}

        {category === "English" &&
          audience === "adults" &&
          (() => {
            type Carousel = {
              lang: Exclude<CourseCategory, "All">;
              books?: Parameters<typeof BookSlider>[0]["books"];
              id: string;
              title: string;
              description: string;
            };
            const carousels: Carousel[] = [
              {
                lang: "English",
                id: "ef-beginner",
                title: t.efLevels.beginner.title,
                description: t.efLevels.beginner.description,
              },
              {
                lang: "English",
                books: SECONDARY_BOOKS,
                id: "ef-elementary",
                title: t.efLevels.elementary.title,
                description: t.efLevels.elementary.description,
              },
              {
                lang: "English",
                books: TERTIARY_BOOKS,
                id: "ef-pre-intermediate",
                title: t.efLevels.preIntermediate.title,
                description: t.efLevels.preIntermediate.description,
              },
              {
                lang: "English",
                books: QUATERNARY_BOOKS,
                id: "ef-intermediate",
                title: t.efLevels.intermediate.title,
                description: t.efLevels.intermediate.description,
              },
              {
                lang: "English",
                books: QUINARY_BOOKS,
                id: "ef-upper-intermediate",
                title: t.efLevels.upperIntermediate.title,
                description: t.efLevels.upperIntermediate.description,
              },
              {
                lang: "English",
                books: SENARY_BOOKS,
                id: "ef-advanced",
                title: t.efLevels.advanced.title,
                description: t.efLevels.advanced.description,
              },
            ];
            return (
              <>
                <div className="mt-16 mx-auto max-w-4xl text-center animate-fade-in">
                  <span className="inline-block rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                    {t.englishFile.eyebrow}
                  </span>
                  <h3 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
                    {t.englishFile.heading}
                  </h3>
                  <p className="mt-6 text-lg sm:text-xl text-foreground/70 leading-relaxed">
                    {t.englishFile.body}
                  </p>
                </div>
                {carousels.map((c, i) => (
                  <div
                    key={`${category}-${c.lang}-${i}`}
                    id={c.id}
                    className={`mt-20 animate-fade-in rounded-3xl transition-all duration-700 scroll-mt-24 ${
                      highlightedId === c.id
                        ? "ring-4 ring-brand/60 bg-brand-soft/40 shadow-2xl"
                        : "ring-0"
                    }`}
                    data-language={c.lang}
                  >
                    <div className="mx-auto max-w-3xl text-center px-4 mb-10 animate-fade-in">
                      <h4 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-brand via-foreground to-brand bg-clip-text text-transparent">
                        {c.title}
                      </h4>
                      <p className="mt-5 text-base sm:text-lg text-foreground/70 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                    <BookSlider books={c.books} />
                  </div>
                ))}
              </>
            );
          })()}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <Reveal key={c.id} delay={Math.min(i, 6) * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium text-foreground/80">
                      {audLabel(c.audience)}
                    </span>
                    <span className="rounded-full bg-brand text-brand-foreground px-3 py-1 text-xs font-medium">
                      {c.level}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/55">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {t.courses.days[c.schedule]}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {t.courses.shifts[c.shift]}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-foreground/50">{t.courses.started}</p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/60 line-clamp-3 flex-1">
                    {t.courses.cefrDesc}
                  </p>
                  <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                    <p className="text-xs text-foreground/50 inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {c.teacher}
                    </p>
                    <p className="text-xl font-semibold text-brand">
                      {c.price.toLocaleString(lang === "ru" ? "ru" : lang === "tm" ? "tk" : "en")}{" "}
                      {t.courses.currency}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-12 text-center text-foreground/50">{t.courses.notFound}</p>
        )}
      </div>
    </section>
  );
}
