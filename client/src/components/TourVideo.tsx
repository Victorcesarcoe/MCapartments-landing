/*
 * DESIGN "Aquarela Carioca": vídeo como protagonista — moldura de arco carioca,
 * poster antes do play, autoplay loop muted quando visível (IntersectionObserver),
 * botão de ativar som, lazy load fora do viewport.
 */
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

interface TourVideoProps {
  videoUrl: string; // URL real do vídeo (mp4/webm); quando vazio mostra só o poster
  posterUrl: string;
  alt: string;
  accent: "olive" | "seablue";
}

export default function TourVideo({ videoUrl, posterUrl, alt, accent }: TourVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !visible) return;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }, [visible]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const accentBg = accent === "olive" ? "bg-olive" : "bg-seablue";

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-t-[50%] rounded-b-2xl border-4 border-card shadow-[0_24px_60px_-18px_rgba(46,74,59,0.35)]"
    >
      {/* Moldura de arco carioca */}
      <div className={`absolute inset-x-0 top-0 h-2 ${accentBg} opacity-90`} aria-hidden />
      {visible && videoUrl ? (
        <video
          ref={videoRef}
          className="aspect-[16/10] w-full object-cover"
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="metadata"
          onLoadedData={() => setLoaded(true)}
        >
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl.replace(".mp4", ".webm")} type="video/webm" />
        </video>
      ) : (
        <div className="relative">
          <img
            src={posterUrl}
            alt={alt}
            className={`aspect-[16/10] w-full object-cover ${visible && loaded ? "hidden" : ""}`}
            loading="lazy"
            decoding="async"
          />
          {/* Indicador de play sobre o poster */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-palm/25">
            <div className={`flex h-20 w-20 items-center justify-center rounded-full ${accentBg} shadow-lg`}>
              <Play className="h-8 w-8 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
        </div>
      )}

      {visible && videoUrl && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Ativar som" : "Desativar som"}
          className="btn-press absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-foreground/80 text-primary-foreground backdrop-blur-sm"
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      )}
    </div>
  );
}
