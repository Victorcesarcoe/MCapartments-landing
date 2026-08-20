/*
 * DESIGN "Aquarela Carioca": secção de avaliações reais — destaque editorial com as
 * avaliações oficiais do Airbnb de cada anúncio (nota, selo "Superhost"), muralha em
 * colunas editoriais (masonry) com selos de apartamento, e CTA para ver todas no Airbnb.
 */
import { ALL_REVIEWS, APT1, APT2 } from "@/lib/data";
import { Star, Award, ExternalLink } from "lucide-react";

function AirbnbRatingBlock() {
  return (
    <div className="reveal mb-10 grid gap-5 lg:grid-cols-2">
      {[APT1, APT2].map((apt) => (
        <a
          key={apt.id}
          href={apt.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-lift group flex items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm"
        >
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${apt.accent === "olive" ? "bg-olive/15" : "bg-seablue/15"}`}
          >
            <Award className={`h-8 w-8 ${apt.accent === "olive" ? "text-olive" : "text-seablue"}`} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-serif text-lg font-semibold">
              {apt.name} · {apt.neighborhood}
            </p>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold text-terracotta">
                {apt.rating.toFixed(2).replace(".", ",")}
              </span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.round(apt.rating) ? "fill-[#E5B94B] text-[#E5B94B]" : "text-border"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">· {apt.reviewsCount} avaliações</span>
            </div>
          </div>
          <ExternalLink className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-terracotta" />
        </a>
      ))}
    </div>
  );
}

export default function Reviews() {
  const featured = ALL_REVIEWS.filter((r) => r.rating === 5);
  const others = ALL_REVIEWS.filter((r) => r.rating < 5);

  return (
    <section id="avaliacoes" className="bg-background py-20 lg:py-28">
      <div className="container">
        <div className="reveal mb-6 max-w-2xl">
          <p className="label-eyebrow mb-4 text-terracotta">O que dizem os hóspedes</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
            Avaliações reais dos <em className="text-terracotta">anúncios no Airbnb</em>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Todas as avaliações abaixo são públicas e podem ser conferidas diretamente nas páginas oficiais
            dos anúncios no Airbnb.
          </p>
        </div>

        <AirbnbRatingBlock />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {[...featured, ...others].map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              className="reveal card-lift rounded-2xl border border-border bg-card p-6 shadow-sm"
              style={{ transitionDelay: `${(i % 6) * 50}ms` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[#E5B94B] text-[#E5B94B]" />
                  ))}
                </div>
                <span
                  className={`label-eyebrow rounded-full px-2.5 py-1 text-[10px] ${r.apt === "verano" ? "bg-olive/15 text-olive" : "bg-seablue/15 text-seablue"}`}
                >
                  {r.apt === "verano" ? "Barra · Verano Stay" : "Copacabana · Apto Reformado"}
                </span>
              </div>
              <blockquote className="font-serif text-base leading-relaxed italic text-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 label-eyebrow text-sm text-terracotta">— {r.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Quer ver tudo? As 187 avaliações estão publicadas nos dois anúncios:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={APT1.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 rounded-full border-2 border-olive px-6 py-3 text-sm font-semibold text-olive"
            >
              Avaliações do Flat Verano Stay
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={APT2.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 rounded-full border-2 border-seablue px-6 py-3 text-sm font-semibold text-seablue"
            >
              Avaliações do Apto Reformado
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
