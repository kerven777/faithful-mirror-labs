import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";
import { ChevronDown, Menu, X, Download, ArrowUpRight } from "lucide-react";
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-2.5 shrink-0"
        >
          <img src={logo} alt="Kitap" className="h-10 w-auto" />
          <span className="font-display text-2xl font-bold text-brand tracking-tight">Kitap</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/70 bg-card/60 px-2 py-1.5 backdrop-blur">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-brand-soft hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/download-guide"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-brand transition-colors"
          >
            <Download className="h-4 w-4" />
            {t.nav.download}
          </Link>
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground/75 hover:border-brand hover:text-brand transition-colors"
            >
              {current.label}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 mt-3 w-36 rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-fade-in z-20">
                  {LANGS.filter((l) => l.code !== lang).map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Lang);
                        setLangOpen(false);
                      }}
                      className="block w-full px-4 py-2.5 text-left text-sm hover:bg-brand-soft hover:text-brand transition-colors"
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
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            {t.hero.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur animate-fade-in-up">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-foreground/80 hover:bg-brand-soft hover:text-brand transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/download-guide"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[15px] font-medium text-foreground/80 flex items-center gap-2 hover:bg-brand-soft hover:text-brand transition-colors"
            >
              <Download className="h-4 w-4" />
              {t.nav.download}
            </Link>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
            >
              {t.hero.cta}
            </a>
            <div className="flex gap-2 pt-4 mt-2 border-t border-border">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Lang)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
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
