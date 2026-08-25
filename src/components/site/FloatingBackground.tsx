import { useEffect, useRef } from "react";

import bookOpen from "@/assets/float/book-open.png";
import bookStack from "@/assets/float/book-stack.png";
import bookmark from "@/assets/float/bookmark.png";
import bulb from "@/assets/float/bulb.png";
import cap from "@/assets/float/cap.png";
import notebook from "@/assets/float/notebook.png";
import pages from "@/assets/float/pages.png";
import pens from "@/assets/float/pens.png";

type Depth = "far" | "mid" | "near";

type FloatItem = {
  src: string;
  alt: string;
  top: string;
  left: string;
  depth: Depth;
  /** rendered width in px (desktop) */
  size: number;
  drift: "animate-float3d-a" | "animate-float3d-b" | "animate-float3d-c";
  duration: string;
  delay: string;
  /** scroll parallax factor — larger = nearer */
  parallax: number;
  spin: number;
  hideOnMobile?: boolean;
};

/**
 * Depth layers: farther objects are smaller in contrast, softer and blurrier so
 * foreground content always stays legible.
 */
const DEPTH_STYLE: Record<Depth, string> = {
  far: "opacity-[0.2] blur-[3px] saturate-[0.75]",
  mid: "opacity-[0.32] blur-[1.2px] saturate-[0.9]",
  near: "opacity-[0.42] blur-[0.3px]",
};

const ITEMS: FloatItem[] = [
  {
    src: cap,
    alt: "",
    top: "6%",
    left: "7%",
    depth: "near",
    size: 128,
    drift: "animate-float3d-a",
    duration: "27s",
    delay: "0s",
    parallax: 0.075,
    spin: -12,
  },
  {
    src: bookOpen,
    alt: "",
    top: "13%",
    left: "83%",
    depth: "mid",
    size: 116,
    drift: "animate-float3d-b",
    duration: "34s",
    delay: "-6s",
    parallax: 0.05,
    spin: 14,
  },
  {
    src: bulb,
    alt: "",
    top: "24%",
    left: "3%",
    depth: "mid",
    size: 84,
    drift: "animate-float3d-c",
    duration: "41s",
    delay: "-12s",
    parallax: 0.045,
    spin: 8,
  },
  {
    src: pens,
    alt: "",
    top: "31%",
    left: "91%",
    depth: "far",
    size: 96,
    drift: "animate-float3d-a",
    duration: "46s",
    delay: "-3s",
    parallax: 0.022,
    spin: -22,
    hideOnMobile: true,
  },
  {
    src: bookStack,
    alt: "",
    top: "42%",
    left: "6%",
    depth: "near",
    size: 138,
    drift: "animate-float3d-b",
    duration: "29s",
    delay: "-17s",
    parallax: 0.07,
    spin: 6,
  },
  {
    src: pages,
    alt: "",
    top: "49%",
    left: "88%",
    depth: "mid",
    size: 108,
    drift: "animate-float3d-c",
    duration: "37s",
    delay: "-9s",
    parallax: 0.048,
    spin: -9,
  },
  {
    src: bookmark,
    alt: "",
    top: "59%",
    left: "2%",
    depth: "far",
    size: 78,
    drift: "animate-float3d-a",
    duration: "49s",
    delay: "-21s",
    parallax: 0.02,
    spin: 18,
    hideOnMobile: true,
  },
  {
    src: notebook,
    alt: "",
    top: "66%",
    left: "90%",
    depth: "near",
    size: 124,
    drift: "animate-float3d-b",
    duration: "31s",
    delay: "-14s",
    parallax: 0.08,
    spin: -7,
  },
  {
    src: bookOpen,
    alt: "",
    top: "77%",
    left: "9%",
    depth: "mid",
    size: 100,
    drift: "animate-float3d-c",
    duration: "39s",
    delay: "-25s",
    parallax: 0.042,
    spin: 21,
  },
  {
    src: bulb,
    alt: "",
    top: "84%",
    left: "84%",
    depth: "far",
    size: 72,
    drift: "animate-float3d-a",
    duration: "52s",
    delay: "-8s",
    parallax: 0.018,
    spin: -15,
    hideOnMobile: true,
  },
  {
    src: pages,
    alt: "",
    top: "92%",
    left: "5%",
    depth: "mid",
    size: 92,
    drift: "animate-float3d-b",
    duration: "35s",
    delay: "-19s",
    parallax: 0.05,
    spin: 11,
  },
  {
    src: bookStack,
    alt: "",
    top: "96%",
    left: "89%",
    depth: "far",
    size: 88,
    drift: "animate-float3d-c",
    duration: "44s",
    delay: "-30s",
    parallax: 0.024,
    spin: -19,
    hideOnMobile: true,
  },
];

export function FloatingBackground() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let ticking = false;
    const apply = () => {
      const y = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translate3d(0, ${(-y * ITEMS[i].parallax).toFixed(2)}px, 0)`;
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
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {ITEMS.map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`absolute will-change-transform ${item.hideOnMobile ? "hidden lg:block" : ""}`}
          style={{ top: item.top, left: item.left, transformStyle: "preserve-3d" }}
        >
          <div
            className={`${item.drift} will-change-transform`}
            style={{
              animationDuration: item.duration,
              animationDelay: item.delay,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="animate-float3d-breathe"
              style={{ animationDelay: item.delay, transform: `rotate(${item.spin}deg)` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width={item.size}
                height={item.size}
                className={`h-auto w-[70%] sm:w-full ${DEPTH_STYLE[item.depth]}`}
                style={{ width: item.size, maxWidth: "40vw" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
