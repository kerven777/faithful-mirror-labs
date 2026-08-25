import { ArrowUpRight } from "lucide-react";
import { useI18n } from "./i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const COVERS = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=70",
];

export function News() {
  const { t } = useI18n();
  const [feature, ...rest] = t.newsItems;
  return (
    <section id="news" className="px-5 lg:px-10 py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title={t.news.title} />
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <article className="group h-full overflow-hidden rounded-3xl bg-card border border-border transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={COVERS[0]}
                  alt={feature.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-foreground/65">{feature.desc}</p>
                <p className="mt-5 text-sm text-foreground/50">{feature.date}</p>
              </div>
            </article>
          </Reveal>

          <Reveal
            delay={100}
            className="flex flex-col divide-y divide-border bg-card rounded-3xl border border-border overflow-hidden"
          >
            {rest.slice(0, 5).map((n, i) => (
              <a
                key={n.title}
                href="#news"
                className="group flex gap-5 p-5 hover:bg-brand-soft/40 transition-colors"
              >
                <img
                  src={COVERS[i + 1]}
                  alt={n.title}
                  loading="lazy"
                  className="h-20 w-28 flex-shrink-0 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground line-clamp-2 group-hover:text-brand transition-colors">
                    {n.title}
                  </h4>
                  <p className="mt-1 text-xs text-foreground/55">{n.date}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-foreground/30 group-hover:text-brand transition-colors" />
              </a>
            ))}
          </Reveal>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.slice(5).map((n, i) => (
            <Reveal key={n.title} delay={i * 60}>
              <article className="group overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={COVERS[i + 6]}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-foreground line-clamp-2">{n.title}</h4>
                  <p className="mt-2 text-xs text-foreground/55">{n.date}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
