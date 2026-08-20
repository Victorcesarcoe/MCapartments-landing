/*
 * DESIGN "Aquarela Carioca": galeria interativa principal de cada apartamento —
 * molduras em arco carioca, navegação por setas + miniaturas, contador "1 / 4",
 * lightbox com teclado e navegação própria.
 */
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryPhoto {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  accent: "olive" | "seablue";
}

export default function PhotoGallery({ photos, accent }: PhotoGalleryProps) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  };
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i + 1) % photos.length);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const accentDot = accent === "olive" ? "bg-olive" : "bg-seablue";

  return (
    <>
      {/* Galeria interativa */}
      <div
        className="reveal group relative"
        role="region"
        aria-label="Galeria de fotos"
        onKeyDown={handleKey}
      >
        {/* Foto principal em arco carioca */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="card-lift relative block w-full overflow-hidden rounded-t-[50%] rounded-b-xl border-2 border-card shadow-[0_24px_48px_-24px_rgba(46,74,59,0.45)]"
          style={{ aspectRatio: "5/4" }}
          aria-label={`Abrir foto: ${photos[index].alt}`}
        >
          <img
            key={photos[index].src}
            src={photos[index].src}
            alt={photos[index].alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full animate-in fade-in duration-300 object-cover"
          />
          {/* Contador */}
          <span className="absolute right-4 top-4 rounded-full bg-card/95 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
            {index + 1} / {photos.length}
          </span>
          {/* Setas */}
          <button
            type="button"
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-foreground opacity-0 shadow-md transition-all duration-200 hover:bg-card group-hover:opacity-100 focus-visible:opacity-100 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-foreground opacity-0 shadow-md transition-all duration-200 hover:bg-card group-hover:opacity-100 focus-visible:opacity-100 sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          {/* Barra de progresso da cor do apartamento */}
          <span
            className={`absolute bottom-4 left-1/2 h-1.5 -translate-x-1/2 rounded-full ${accentDot} transition-all duration-300`}
            style={{ width: `${((index + 1) / photos.length) * 100}%`, maxWidth: 160 }}
            aria-hidden
          />
        </button>

        {/* Miniaturas navegáveis */}
        <div className="mt-4 grid grid-cols-4 gap-2.5">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1}: ${p.alt}`}
              aria-pressed={i === index}
              className={`card-lift relative overflow-hidden rounded-xl border-2 shadow-sm transition-all duration-200 ${
                i === index
                  ? `border-terracotta ring-2 ring-terracotta/30`
                  : "border-card hover:border-terracotta/50"
              }`}
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className={`h-full w-full object-cover ${i === index ? "" : "grayscale-[35%] opacity-85"}`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox com navegação completa */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-palm/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-foreground shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-foreground shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <img
            src={photos[index].src}
            alt={photos[index].alt}
            className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Miniaturas no lightbox */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Ver foto ${i + 1}`}
                className={`h-12 w-16 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  i === index ? "border-terracotta" : "border-card opacity-70"
                }`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
