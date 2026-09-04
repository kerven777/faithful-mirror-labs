import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";
import { ChevronDown, Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useI18n, LANGS, Lang } from "./i18n";
import { Link } from "@tanstack/react-router";

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const current = LANGS.find((l) => l.code === lang)!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV = [
    { href: "#about", label: t.nav.about },
    { href: "#courses", label: t.nav.courses },
    { href: "#teachers", label: t.nav.teachers },
    { href: "#faq", label: t.faq.eyebrow },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = id === "top" ? document.body : document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2.5 transition-all duration-300 sm:px-4 ${
          scrolled ? "glass-panel" : "border border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex shrink-0 items-center gap-2 pl-1"
        >
          <img src={logo} alt="Kitap" className="h-8 w-auto" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Kitap
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="rounded-full px-3.5 py-2 text-[13px] font-medium text-foreground/65 transition-colors duration-200 hover:bg-brand-soft hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-[13px] font-medium text-foreground/70 transition-colors hover:border-brand/50 hover:text-brand"
            >
              <Globe className="h-3.5 w-3.5" />
              {current.label}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="animate-fade-in absolute right-0 z-20 mt-3 w-36 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                  {LANGS.filter((l) => l.code !== lang).map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Lang);
                        setLangOpen(false);
                      }}
                      className="block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-soft hover:text-brand"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-[13px] font-semibold text-brand-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
          >
            {t.hero.cta}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="rounded-full border border-border p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in-up glass-panel mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="rounded-2xl px-4 py-3 text-[15px] font-medium text-foreground/80 transition-colors hover:bg-brand-soft hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
            >
              {t.hero.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="mt-2 flex gap-2 border-t border-border pt-3">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Lang)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    l.code === lang
                      ? "bg-brand text-brand-foreground"
                      : "bg-surface text-foreground/70"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
