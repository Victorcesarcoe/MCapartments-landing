/*
 * DESIGN "Aquarela Carioca": galeria interativa principal de cada apartamento —
 * molduras em arco carioca, navegação por setas + miniaturas, contador "1 / 4",
 * lightbox com teclado e navegação própria.
 */
import { useState } from "react";
import { toast } from "sonner";
import { X, ChevronLeft, ChevronRight, Share2, Copy } from "lucide-react";

export interface GalleryPhoto {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  accent: "olive" | "seablue";
  /** Nome do apartamento para o texto da partilha (ex.: "Flat Verano Stay") */
  shareTitle?: string;
  /** URL do anúncio do Airbnb usada na partilha */
  shareUrl?: string;
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-[#25D366]" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TelegramGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-[#29A5E3]" aria-hidden>
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function XGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-foreground" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function PhotoGallery({ photos, accent, shareTitle, shareUrl }: PhotoGalleryProps) {
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

  const [showShare, setShowShare] = useState(false);

  const title = shareTitle ? `Conheça o ${shareTitle} — apartamento de Superhost no Rio` : "M Apartments no Rio";
  const text = shareTitle
    ? `Olha este apartamento no Rio de Janeiro! ${shareTitle} — nota 4,9+, Superhost há 7 anos. ${shareUrl ?? ""}`
    : "Apartamentos de um Superhost no Rio de Janeiro — Barra e Copacabana.";
  const url = shareUrl ?? window.location.href;

  const shareVia = (target: "web" | "whatsapp" | "telegram" | "twitter" | "copy") => {
    if (target === "web" && navigator.share) {
      navigator
        .share({ title, text, url })
        .catch(() => undefined);
      setShowShare(false);
      return;
    }
    if (target === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n${text}`)}`, "_blank", "noopener");
    } else if (target === "telegram") {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "_blank", "noopener");
    } else if (target === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} ${url}`)}`, "_blank", "noopener");
    } else {
      navigator.clipboard.writeText(url).then(
        () => toast.success("Link copiado! Partilhe como quiser."),
        () => toast.error("Não foi possível copiar o link."),
      );
    }
    setShowShare(false);
  };

  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const dx = e.changedTouches[0].clientX - touchStart.x;
    const dy = e.changedTouches[0].clientY - touchStart.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (absDx > 50 && absDx > absDy) {
      if (dx < 0) next(); else prev();
    }
    setTouchStart(null);
  };

  const [zoom, setZoom] = useState(1);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoom((z) => Math.min(Math.max(z + delta, 1), 3));
  };

  return (
    <>
      {/* Galeria interativa */}
      <div
        className="gallery-support reveal group relative"
        role="region"
        aria-label="Galeria de fotos"
        onKeyDown={handleKey}
      >
        {/* Foto principal em arco carioca — moldura moderna com animação hover */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group-photo relative block w-full overflow-hidden rounded-t-[50%] rounded-b-2xl border border-foreground/10 shadow-[0_14px_30px_-18px_rgba(46,74,59,0.34)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_38px_-18px_rgba(46,74,59,0.42)]"
          style={{ aspectRatio: "5/4" }}
          aria-label={`Abrir foto: ${photos[index].alt}`}
        >
          <img
            key={photos[index].src}
            src={photos[index].src}
            alt={photos[index].alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full animate-in fade-in duration-300 object-cover transition-transform duration-500 ease-out group-hover/photo:scale-[1.035]"
          />
          {/* Overlay de zoom no lightbox — apenas visual */}
          {/* Contador */}
          <span className="absolute right-4 top-4 rounded-full bg-card/95 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm">
            {index + 1} / {photos.length}
          </span>
          {/* Botão de partilha */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowShare((s) => !s);
            }}
            aria-label="Partilhar este apartamento"
            aria-expanded={showShare}
            className="btn-press absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-card/95 text-foreground shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-105"
          >
            <Share2 className="h-4.5 w-4.5" />
          </button>
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

        {/* Menu de partilha */}
        {showShare && (
          <div
            className="absolute left-1/2 top-16 z-20 w-72 -translate-x-1/2 overflow-hidden rounded-[1rem_1rem_1rem_0.25rem] border border-border bg-card shadow-xl"
            role="menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-border px-4 py-3">
              <p className="text-sm font-semibold">Partilhar o {shareTitle ?? "apartamento"}</p>
              <p className="text-xs text-muted-foreground">Envie para amigos e família em segundos.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 p-3">
              <button type="button" role="menuitem" onClick={() => shareVia("whatsapp")} className="flex items-center gap-2.5 rounded-xl border border-border px-3 py-3 text-left text-sm font-medium transition-colors hover:border-[#25D366] hover:text-[#128C4A]">
                <WhatsAppGlyph />
                WhatsApp
              </button>
              <button type="button" role="menuitem" onClick={() => shareVia("telegram")} className="flex items-center gap-2.5 rounded-xl border border-border px-3 py-3 text-left text-sm font-medium transition-colors hover:border-[#29A5E3] hover:text-[#0891D0]">
                <TelegramGlyph />
                Telegram
              </button>
              <button type="button" role="menuitem" onClick={() => shareVia("twitter")} className="flex items-center gap-2.5 rounded-xl border border-border px-3 py-3 text-left text-sm font-medium transition-colors hover:border-foreground/30">
                <XGlyph />
                X (Twitter)
              </button>
              <button type="button" role="menuitem" onClick={() => shareVia("copy")} className="flex items-center gap-2.5 rounded-xl border border-border px-3 py-3 text-left text-sm font-medium transition-colors hover:border-terracotta hover:text-terracotta">
                <Copy className="h-4 w-4" />
                Copiar link
              </button>
            </div>
            {typeof navigator !== "undefined" && "share" in navigator && (
              <button
                type="button"
                role="menuitem"
                onClick={() => shareVia("web")}
                className="w-full border-t border-border px-4 py-3 text-center text-sm font-medium text-terracotta hover:bg-terracotta/5"
              >
                Outras opções…
              </button>
            )}
          </div>
        )}

        {/* Miniaturas navegáveis */}
        <div className="mt-4 grid grid-cols-4 gap-2.5">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1}: ${p.alt}`}
              aria-pressed={i === index}
              className={`relative overflow-hidden rounded-lg border-2 shadow-sm transition-all duration-200 ${
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

      {/* Lightbox com navegação completa, swipe e zoom */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-palm/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos"
          onClick={() => setOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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
            className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-200 ease-out"
            style={{ transform: `scale(${zoom})` }}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            title={zoom > 1 ? "Volte ao normal com o botão X" : "Use a roda do rato para ampliar"}
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
