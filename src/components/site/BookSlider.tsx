import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import book1 from "@/assets/books/book-1.webp";
import book2 from "@/assets/books/book-2.webp";
import book3 from "@/assets/books/book-3.webp";
import book4 from "@/assets/books/book-4.webp";
import book5 from "@/assets/books/book-5.webp";
import book6 from "@/assets/books/book-6.webp";
import book7 from "@/assets/books/book-7.webp";
import book8 from "@/assets/books/book-8.webp";
import book9 from "@/assets/books/book-9.webp";
import book10 from "@/assets/books/book-10.webp";
import book11 from "@/assets/books/book-11.webp";
import book12 from "@/assets/books/book-12.webp";
import book13 from "@/assets/books/book-13.webp";
import book14 from "@/assets/books/book-14.webp";
import book15 from "@/assets/books/book-15.webp";
import book16 from "@/assets/books/book-16.webp";
import book17 from "@/assets/books/book-17.webp";
import book18 from "@/assets/books/book-18.webp";
import book19 from "@/assets/books/book-19.webp";
import book20 from "@/assets/books/book-20.webp";
import book21 from "@/assets/books/book-21.webp";
import book22 from "@/assets/books/book-22.webp";
import book23 from "@/assets/books/book-23.webp";
import book24 from "@/assets/books/book-24.webp";
import book25 from "@/assets/books/book-25.webp";
import book26 from "@/assets/books/book-26.webp";
import book27 from "@/assets/books/book-27.webp";
import book28 from "@/assets/books/book-28.webp";
import book29 from "@/assets/books/book-29.webp";
import allBook1 from "@/assets/books/all-book-1.webp";
import allBook2 from "@/assets/books/all-book-2.webp";
import allBook3 from "@/assets/books/all-book-3.webp";
import allBook4 from "@/assets/books/all-book-4.webp";
import allBook5 from "@/assets/books/all-book-5.webp";
import allBook6 from "@/assets/books/all-book-6.webp";

type Book = { src: string; alt: string; targetId?: string };

const DEFAULT_BOOKS: Book[] = [
  { src: book1, alt: "English File Beginner" },
  { src: book2, alt: "Practical English" },
  { src: book3, alt: "I love cooking" },
  { src: book4, alt: "A big breakfast" },
  { src: book5, alt: "A new life in the USA" },
];

export const SECONDARY_BOOKS: Book[] = [
  { src: book6, alt: "English File Elementary" },
  { src: book7, alt: "New Year's Eve story" },
  { src: book8, alt: "Making music" },
  { src: book9, alt: "Britain: the good & the bad" },
];

export const TERTIARY_BOOKS: Book[] = [
  { src: book10, alt: "English File Pre-intermediate" },
  { src: book11, alt: "Practical English Restaurant" },
  { src: book12, alt: "Revise and Check" },
  { src: book13, alt: "Murphy's Law" },
  { src: book14, alt: "One dark October evening" },
];

export const QUATERNARY_BOOKS: Book[] = [
  { src: book15, alt: "English File Intermediate Student's Book & Workbook" },
  { src: book16, alt: "Going the extra mile — Reading" },
  { src: book17, alt: "The UK student site — Reading & Speaking" },
  { src: book18, alt: "Changing lives — Grammar" },
  { src: book19, alt: "In the Dragons' Den — Reading" },
];

export const QUINARY_BOOKS: Book[] = [
  { src: book20, alt: "English File Upper-intermediate Student's Book & Workbook" },
  { src: book21, alt: "Narrative tenses — easyJet story" },
  { src: book22, alt: "Reading — Extreme sports" },
  { src: book23, alt: "Used to / be used to / get used to" },
  { src: book24, alt: "Vocabulary — Weather & Climate Stories" },
];

export const SENARY_BOOKS: Book[] = [
  { src: book25, alt: "English File Advanced Student's Book & Workbook" },
  { src: book26, alt: "We are family — Grammar & Vocabulary" },
  { src: book27, alt: "Unreal uses of past tenses — Shop small and local" },
  { src: book28, alt: "The School of Life — Compound adjectives" },
  { src: book29, alt: "A masterpiece? — Perception and sensation" },
];

export const ALL_BOOKS: Book[] = [
  { src: allBook1, alt: "English File Beginner — Student's Book & Workbook", targetId: "ef-beginner" },
  { src: allBook2, alt: "English File Elementary — Student's Book & Workbook", targetId: "ef-elementary" },
  { src: allBook3, alt: "English File Pre-intermediate — Student's Book & Workbook", targetId: "ef-pre-intermediate" },
  { src: allBook4, alt: "English File Intermediate — Student's Book & Workbook", targetId: "ef-intermediate" },
  { src: allBook5, alt: "English File Upper-intermediate — Student's Book & Workbook", targetId: "ef-upper-intermediate" },
  { src: allBook6, alt: "English File Advanced — Student's Book & Workbook", targetId: "ef-advanced" },
];

export function BookSlider({
  books = DEFAULT_BOOKS,
  onBookClick,
}: {
  books?: Book[];
  onBookClick?: (book: Book, index: number) => void;
}) {
  const BOOKS = books;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % BOOKS.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + BOOKS.length) % BOOKS.length), []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(next, 3500);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, next]);

  const getOffset = (i: number) => {
    const diff = i - index;
    const half = Math.floor(BOOKS.length / 2);
    if (diff > half) return diff - BOOKS.length;
    if (diff < -half) return diff + BOOKS.length;
    return diff;
  };

  return (
    <div
      className="relative mx-auto w-full max-w-5xl select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] overflow-hidden [perspective:1200px]">
        {BOOKS.map((b, i) => {
          const offset = getOffset(i);
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const translate = offset * 180;
          const scale = isActive ? 1 : Math.max(0.7, 1 - abs * 0.15);
          const opacity = abs > 2 ? 0 : 1 - abs * 0.25;
          const zIndex = 10 - abs;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{
                transform: `translate(-50%, -50%) translateX(${translate}px) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <button
                type="button"
                onClick={() => isActive && onBookClick?.(b, i)}
                aria-label={b.alt}
                tabIndex={isActive ? 0 : -1}
                className={`group block overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-border transition-transform duration-500 ${
                  isActive && onBookClick ? "cursor-pointer hover:scale-[1.03]" : isActive ? "hover:scale-[1.03]" : ""
                }`}
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  className="block h-[300px] sm:h-[380px] lg:h-[420px] w-auto max-w-[80vw] object-contain"
                />
              </button>
            </div>
          );
        })}
      </div>

      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full bg-card/90 backdrop-blur border border-border text-foreground/80 shadow-md hover:bg-brand hover:text-brand-foreground transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full bg-card/90 backdrop-blur border border-border text-foreground/80 shadow-md hover:bg-brand hover:text-brand-foreground transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {BOOKS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-brand" : "w-2 bg-foreground/25 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
