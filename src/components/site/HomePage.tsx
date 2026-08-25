import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Courses } from "@/components/site/Courses";
import { Teachers } from "@/components/site/Teachers";
import { About } from "@/components/site/About";
import { News } from "@/components/site/News";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingBackground } from "@/components/site/FloatingBackground";
import { I18nProvider } from "@/components/site/i18n";

export function HomePage() {
  return (
    <I18nProvider>
      <div className="relative isolate min-h-screen bg-background font-sans antialiased">
        <FloatingBackground />
        <Header />
        <main>
          <Hero />
          <Courses />
          <Teachers />
          <About />
          <News />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
