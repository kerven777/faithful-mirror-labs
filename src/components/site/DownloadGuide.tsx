import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { I18nProvider, useI18n } from "@/components/site/i18n";
import { useIsMobile } from "@/hooks/use-mobile";
import { Monitor, Smartphone, ArrowLeft, Code2, FileDown, ScrollText, Github, ExternalLink } from "lucide-react";

export function DownloadGuidePage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main>
          <DownloadGuideContent />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

function DownloadGuideContent() {
  const { t } = useI18n();
  const isMobile = useIsMobile();

  return (
    <section className="px-5 lg:px-10 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.downloadGuide?.backHome || "Back to home"}
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
          {t.downloadGuide?.title || "How to download this project"}
        </h1>
        <p className="mt-4 text-foreground/60 text-lg max-w-xl">
          {t.downloadGuide?.subtitle || "Follow the steps below to save the full source code as a ZIP file."}
        </p>

        <div className="mt-10 flex items-center gap-3">
          <span className="text-sm text-foreground/50">{t.downloadGuide?.detected || "Detected device:"}</span>
          <span
            className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full ${
              isMobile
                ? "bg-brand-soft text-brand dark:bg-brand/20 dark:text-brand-foreground"
                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
            }`}
          >
            {isMobile ? <Smartphone className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
            {isMobile
              ? t.downloadGuide?.mobileLabel || "Mobile"
              : t.downloadGuide?.desktopLabel || "Desktop"}
          </span>
        </div>

        {/* Desktop instructions */}
        <div
          className={`mt-8 rounded-2xl border p-6 lg:p-8 transition-all ${
            !isMobile
              ? "border-brand/30 bg-brand/5 ring-1 ring-brand/20"
              : "border-border bg-card"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-brand/10 flex items-center justify-center">
              <Monitor className="h-5 w-5 text-brand" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              {t.downloadGuide?.desktopTitle || "Desktop instructions"}
            </h2>
          </div>

          <ol className="space-y-6">
            <Step
              number={1}
              icon={<Code2 className="h-5 w-5" />}
              title={t.downloadGuide?.step1Title || "Open the Code Editor"}
              description={
                t.downloadGuide?.step1Desc ||
                "Click the Code Editor icon ( </> ) at the top of the preview window."
              }
            />
            <Step
              number={2}
              icon={<ScrollText className="h-5 w-5" />}
              title={t.downloadGuide?.step2Title || "Find the download button"}
              description={
                t.downloadGuide?.step2Desc ||
                "In the file tree sidebar on the left, scroll all the way to the bottom."
              }
            />
            <Step
              number={3}
              icon={<FileDown className="h-5 w-5" />}
              title={t.downloadGuide?.step3Title || "Download the ZIP"}
              description={
                t.downloadGuide?.step3Desc ||
                'Click the "Download codebase" button. Your browser will save the entire project as a ZIP file.'
              }
            />
          </ol>
        </div>

        {/* Mobile instructions */}
        <div
          className={`mt-6 rounded-2xl border p-6 lg:p-8 transition-all ${
            isMobile
              ? "border-brand/30 bg-brand/5 ring-1 ring-brand/20"
              : "border-border bg-card"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-brand/10 flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-brand" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              {t.downloadGuide?.mobileTitle || "Mobile instructions"}
            </h2>
          </div>

          <div className="rounded-xl bg-brand-soft dark:bg-brand/15 border border-brand/30 p-4 mb-6">
            <p className="text-sm text-brand">
              {t.downloadGuide?.mobileNote ||
                "ZIP download is not available directly from the mobile editor."}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-sm font-bold">
                A
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  {t.downloadGuide?.mobileOption1Title || "Use a desktop browser"}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  {t.downloadGuide?.mobileOption1Desc ||
                    "Open this project on a computer and follow the desktop steps above."}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-sm font-bold">
                B
              </div>
              <div>
                <h3 className="font-medium text-foreground flex items-center gap-2">
                  {t.downloadGuide?.mobileOption2Title || "Connect to GitHub"}
                  <Github className="h-4 w-4 text-foreground/40" />
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  {t.downloadGuide?.mobileOption2Desc ||
                    "Tap the Plus (+) button in chat → GitHub → Connect project. Once linked, you can clone or download the repository from GitHub at any time."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 lg:p-8">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-brand" />
            {t.downloadGuide?.publishedTitle || "Already published?"}
          </h3>
          <p className="mt-2 text-sm text-foreground/60">
            {t.downloadGuide?.publishedDesc ||
              "If your app is already published, you can also share the live link with others from the Publish menu."}
          </p>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="h-8 w-8 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-sm font-bold">
          {number}
        </div>
        {number < 3 && <div className="w-px h-full bg-border mt-2 mb-0" />}
      </div>
      <div className="pb-2">
        <div className="flex items-center gap-2">
          <span className="text-brand">{icon}</span>
          <h3 className="font-medium text-foreground">{title}</h3>
        </div>
        <p className="mt-1 text-sm text-foreground/60 leading-relaxed">{description}</p>
      </div>
    </li>
  );
}
