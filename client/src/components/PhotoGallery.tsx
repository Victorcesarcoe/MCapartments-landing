/*
 * DESIGN "Aquarela Carioca": galeria secundária de apoio ao vídeo — molduras suaves,
 * cantos arredondados generosos, hover com elevação terracota suave.
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
  const [open, setOpen] = useState<number | null>(null);

  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () => setOpen((i) => (i === null ? null : (i + 1) % photos.length));

  const dot = accent === "olive" ? "bg-olive" : "bg-seablue";

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            className={`card-lift group relative block overflow-hidden rounded-t-[50%] rounded-b-xl border-2 border-card shadow-md ${i >= 2 ? "hidden aspect-[3/4] sm:block sm:aspect-[4/3]" : "aspect-[4/3]"}`}
            aria-label={`Abrir foto: ${p.alt}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {i === 0 && (
              <span className={`absolute bottom-2 left-2 h-1.5 w-8 rounded-full ${dot}`} aria-hidden />
            )}
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-palm/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-foreground shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 text-foreground shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <img
            src={photos[open].src}
            alt={photos[open].alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
