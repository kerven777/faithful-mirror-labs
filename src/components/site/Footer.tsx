import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";
import { useI18n } from "./i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-background px-5 lg:px-10 py-14">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Kitap" className="h-9 w-auto" />
          <p className="mt-4 text-sm text-foreground/60 max-w-sm leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{t.footer.nav}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/60">
            <li>
              <a href="#about" className="hover:text-brand transition-colors">
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-brand transition-colors">
                {t.nav.courses}
              </a>
            </li>
            <li>
              <a href="#teachers" className="hover:text-brand transition-colors">
                {t.nav.teachers}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand transition-colors">
                {t.nav.contact}
              </a>
            </li>
            <li>
              <Link to="/download-guide" className="hover:text-brand transition-colors">
                {t.downloadGuide?.title || "Download Guide"}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{t.footer.contacts}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/60">
            <li>{t.contact.address}</li>
            <li>{t.contact.phone}</li>
            <li>{t.contact.email}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-border flex flex-wrap justify-between gap-4 text-xs text-foreground/50">
        <p>
          © {new Date().getFullYear()} Kitap Bilim Merkezi. {t.footer.rights}
        </p>
        <a href="#" className="hover:text-brand transition-colors">
          {t.footer.privacy}
        </a>
      </div>
    </footer>
  );
}
