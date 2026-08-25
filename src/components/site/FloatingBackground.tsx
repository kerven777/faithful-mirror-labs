import { useEffect, useRef } from "react";
import {
  BookOpen,
  GraduationCap,
  Lightbulb,
  PenTool,
  NotebookPen,
  FileText,
  Calculator,
  Sigma,
  Ruler,
  Atom,
} from "lucide-react";

type Depth = "back" | "mid" | "front";

type FloatItem = {
  Icon: typeof BookOpen;
  top: string;
  left: string;
  depth: Depth;
  size: number;
  drift: "animate-drift-a" | "animate-drift-b" | "animate-drift-c";
  duration: string;
  delay: string;
  parallax: number;
  tint: string;
  hideOnMobile?: boolean;
};

const DEPTH_STYLE: Record<Depth, { opacity: string; blur: string }> = {
  back: { opacity: "opacity-25", blur: "blur-[1.5px]" },
  mid: { opacity: "opacity-35", blur: "" },
  front: { opacity: "opacity-50", blur: "" },
};

const ITEMS: FloatItem[] = [
  {
    Icon: GraduationCap,
    top: "8%",
    left: "9%",
    depth: "front",
    size: 54,
    drift: "animate-drift-a",
    duration: "12s",
    delay: "0s",
    parallax: 0.06,
    tint: "from-brand/25 to-brand/5 text-brand",
  },
  {
    Icon: BookOpen,
    top: "16%",
    left: "86%",
    depth: "mid",
    size: 42,
    drift: "animate-drift-b",
    duration: "15s",
    delay: "1s",
    parallax: 0.04,
    tint: "from-brand-deep/20 to-brand-deep/5 text-brand-deep",
  },
  {
    Icon: Lightbulb,
    top: "27%",
    left: "4%",
    depth: "mid",
    size: 38,
    drift: "animate-drift-c",
    duration: "17s",
    delay: "0.5s",
    parallax: 0.035,
    tint: "from-amber-400/20 to-amber-400/5 text-amber-600",
  },
  {
    Icon: PenTool,
    top: "35%",
    left: "93%",
    depth: "back",
    size: 30,
    drift: "animate-drift-a",
    duration: "18s",
    delay: "2s",
    parallax: 0.025,
    tint: "from-brand/15 to-brand/5 text-brand",
    hideOnMobile: true,
  },
  {
    Icon: Sigma,
    top: "46%",
    left: "7%",
    depth: "front",
    size: 46,
    drift: "animate-drift-b",
    duration: "13s",
    delay: "0.3s",
    parallax: 0.05,
    tint: "from-brand-deep/20 to-brand-deep/5 text-brand-deep",
  },
  {
    Icon: NotebookPen,
    top: "55%",
    left: "90%",
    depth: "mid",
    size: 40,
    drift: "animate-drift-c",
    duration: "16s",
    delay: "1.4s",
    parallax: 0.04,
    tint: "from-brand/20 to-brand/5 text-brand",
  },
  {
    Icon: Calculator,
    top: "64%",
    left: "3%",
    depth: "back",
    size: 32,
    drift: "animate-drift-a",
    duration: "19s",
    delay: "0.8s",
    parallax: 0.03,
    tint: "from-brand-deep/15 to-brand-deep/5 text-brand-deep",
    hideOnMobile: true,
  },
  {
    Icon: FileText,
    top: "73%",
    left: "92%",
    depth: "front",
    size: 44,
    drift: "animate-drift-b",
    duration: "14s",
    delay: "2.2s",
    parallax: 0.055,
    tint: "from-brand/25 to-brand/5 text-brand",
  },
  {
    Icon: Ruler,
    top: "83%",
    left: "8%",
    depth: "mid",
    size: 36,
    drift: "animate-drift-c",
    duration: "17s",
    delay: "0.6s",
    parallax: 0.035,
    tint: "from-amber-400/20 to-amber-400/5 text-amber-600",
  },
  {
    Icon: Atom,
    top: "92%",
    left: "88%",
    depth: "back",
    size: 30,
    drift: "animate-drift-a",
    duration: "20s",
    delay: "1.8s",
    parallax: 0.025,
    tint: "from-brand-deep/15 to-brand-deep/5 text-brand-deep",
    hideOnMobile: true,
  },
];

export function FloatingBackground() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let ticking = false;
    const apply = () => {
      const y = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translate3d(0, ${y * ITEMS[i].parallax}px, 0)`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(apply);
        ticking = true;
      }
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
      {ITEMS.map((item, i) => {
        const { opacity, blur } = DEPTH_STYLE[item.depth];
        return (
          <div
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`absolute will-change-transform ${item.hideOnMobile ? "hidden sm:block" : ""}`}
            style={{ top: item.top, left: item.left }}
          >
            <div
              className={item.drift}
              style={{ animationDuration: item.duration, animationDelay: item.delay }}
            >
              <div
                className={`grid place-items-center rounded-2xl bg-gradient-to-br shadow-soft ${opacity} ${blur} ${item.tint}`}
                style={{ width: item.size, height: item.size }}
              >
                <item.Icon
                  style={{ width: item.size * 0.5, height: item.size * 0.5 }}
                  strokeWidth={1.6}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
