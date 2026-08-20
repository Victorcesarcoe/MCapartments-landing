/*
 * DESIGN "Aquarela Carioca": secção de avaliações reais — carrossel interativo com
 * testemunhos dos hóspedes, setas de navegação, miniaturas, swipe touch e autoplay.
 */
import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { ALL_REVIEWS, APT1, APT2, type ReviewSort } from "@/lib/data";
import { useParallax } from "@/hooks/useParallax";
import { Star, Award, ExternalLink, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";


const REVIEWS_PER_SLIDE = 3;

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
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [sort, setSort] = useState<ReviewSort>("recent");
  const { bgRef, visible } = useParallax(0.12);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Ordenar reviews
  const sortedReviews = useMemo(() => {
    const reviews = [...ALL_REVIEWS];
    if (sort === "recent") {
      reviews.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    } else {
      reviews.sort((a, b) => b.rating - a.rating || (b.date || "").localeCompare(a.date || ""));
    }
    return reviews;
  }, [sort]);

  const totalSlides = Math.ceil(sortedReviews.length / REVIEWS_PER_SLIDE);

  // Resetar para o primeiro slide quando mudar a ordenação
  useEffect(() => {
    setCurrent(0);
  }, [sort]);

  // Detectar touch device para otimizar autoplay
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [playing, totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (absDx > 50 && absDx > absDy) {
      if (dx < 0) next();
      else prev();
    }
    touchStartRef.current = null;
  };

  return (
    <section id="avaliacoes" className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Fundo decorativo com parallax + lazy load */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{ transform: "translateY(0) scale(1.05)" }}
      >
        {visible && (
          <img
            src="/manus-storage/copacabana-beach_83f6ed90.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-[0.04]"
          />
        )}
      </div>
      <div className="container relative z-10">
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

        {/* Resumo da classificação média */}
        <div className="reveal mb-8 flex flex-wrap items-center justify-center gap-8 rounded-3xl border border-border bg-card px-8 py-6 shadow-sm">
          {[APT1, APT2].map((apt) => (
            <div key={apt.id} className="flex items-center gap-4">
              <span className="font-serif text-4xl font-bold text-terracotta">
                {apt.rating.toFixed(2).replace(".", ",")}
              </span>
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(apt.rating) ? "fill-[#E5B94B] text-[#E5B94B]" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="label-eyebrow text-xs text-muted-foreground">
                  {apt.reviewsCount} avaliações · {apt.shortName || apt.name}
                </span>
              </div>
            </div>
          ))}
          <div className="hidden h-12 w-px bg-border sm:block" />
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-terracotta" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold">Superhost</span>
              <span className="label-eyebrow text-xs text-muted-foreground">Reconhecido pelo Airbnb</span>
            </div>
          </div>
        </div>

        {/* Carrossel interativo de testemunhos */}
        <div className="reveal relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {/* Setas de navegação */}
          <button
            type="button"
            onClick={prev}
            aria-label="Testemunho anterior"
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-card p-3 shadow-lg transition-all duration-300 hover:-translate-x-1 hover:shadow-xl lg:flex"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próximo testemunho"
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-card p-3 shadow-lg transition-all duration-300 hover:translate-x-1 hover:shadow-xl lg:flex"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Filtro de ordenação */}
          <div className="reveal mb-6 flex items-center justify-center gap-2">
            <span className="label-eyebrow mr-2 text-xs text-muted-foreground">Ordenar:</span>
            {(["recent", "rating"] as ReviewSort[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSort(s)}
                className={`btn-press rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  sort === s
                    ? "bg-terracotta text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:border-terracotta/50 hover:text-foreground hover:bg-card"
                }`}
              >
                {s === "recent" ? "Mais recentes" : "Melhor classificação"}
              </button>
            ))}
          </div>

          {/* Slides */}
          <div
            className="overflow-hidden"
            style={{ transition: "transform 500ms cubic-bezier(0.23, 1, 0.32, 1)" }}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: "transform 500ms cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                <div key={`${sort}-${slideIdx}`} className="w-full shrink-0 px-1">
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedReviews
                      .slice(slideIdx * REVIEWS_PER_SLIDE, (slideIdx + 1) * REVIEWS_PER_SLIDE)
                      .map((r, i) => (
                        <figure
                          key={`${r.name}-${slideIdx}-${i}`}
                          className="card-lift rounded-2xl border border-border bg-card p-6 shadow-sm"
                          style={{ transitionDelay: `${i * 60}ms` }}
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
                            "{r.text}"
                          </blockquote>
                          <figcaption className="mt-4 label-eyebrow text-sm text-terracotta">
                            — {r.name}
                          </figcaption>
                        </figure>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles inferiores: dots + play/pause */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ir para testemunho ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-terracotta" : "w-2.5 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? "Pausar carrossel" : "Reproduzir carrossel"}
              className="rounded-full border border-border p-2 transition-colors hover:bg-card"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
          </div>
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
