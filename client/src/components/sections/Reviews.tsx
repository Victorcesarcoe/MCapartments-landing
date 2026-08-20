/*
 * DESIGN "Aquarela Carioca": muro de avaliações reais — cartões sobrepostos em colunas
 * editoriais (masonry), selo do apartamento como carimbo discreto, fundo off-white.
 */
import { ALL_REVIEWS } from "@/lib/data";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-background py-20 lg:py-28">
      <div className="container">
        <div className="reveal mb-12 max-w-2xl">
          <p className="label-eyebrow mb-4 text-terracotta">O que dizem os hóspedes</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
            Avaliações reais dos <em className="text-terracotta">dois anúncios</em>
          </h2>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {ALL_REVIEWS.map((r, i) => (
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
                  {r.apt === "verano" ? "Barra" : "Copacabana"}
                </span>
              </div>
              <blockquote className="font-serif text-base leading-relaxed italic text-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 label-eyebrow text-sm text-terracotta">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
