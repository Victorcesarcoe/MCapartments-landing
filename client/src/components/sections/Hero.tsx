/*
 * DESIGN "Aquarela Carioca": Hero em tela cheia — vídeo de fundo (reel dos 2 aptos),
 * headline serifada gigante alinhada à esquerda, gradiente terracota/verde para contraste,
 * dois CTAs com scroll suave.
 */
import { ChevronDown } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { HERO_POSTER } from "@/lib/data";

const HERO_VIDEO: string = ""; // TODO: reel de destaque intercalando os 2 apartamentos (mp4/webm)

function scrollTo(id: string) {
  // Scroll fluido com offset para o header fixo
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80; // altura aproximada do header fixo
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Hero() {
  const { bgRef, visible } = useParallax(0.15);

  return (
    <section id="hero" className="relative flex min-h-[92vh] items-end overflow-hidden">
      {/* Animações de fade-in ao carregar */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-in { animation: heroFadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) both; }
        .hero-delay-1 { animation-delay: 0.15s; }
        .hero-delay-2 { animation-delay: 0.3s; }
        .hero-delay-3 { animation-delay: 0.45s; }
        .hero-delay-4 { animation-delay: 0.6s; }
      `}</style>
      {/* Vídeo de fundo com poster + parallax + lazy load */}
      <div className="absolute inset-0">
        <div ref={bgRef} className="absolute inset-0 will-change-transform transition-transform duration-100 ease-out" style={{ transform: "translateY(0) scale(1.05)" }}>
        {visible && HERO_VIDEO ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={HERO_POSTER}
            preload="metadata"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
            <source src={HERO_VIDEO.replace(".mp4", ".webm")} type="video/webm" />
          </video>
        ) : (
          <img src={HERO_POSTER} alt="Rio de Janeiro ao entardecer visto de um apartamento" className="h-full w-full object-cover" />
        )}
        {/* Gradiente para garantir contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f3328]/95 via-[#1f3328]/45 to-[#1f3328]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f3328]/70 via-transparent to-transparent" />
        </div>
      </div>

      <div className="container relative z-10 pb-24 pt-36">
        <div className="max-w-3xl">
          <p className="hero-fade-in hero-delay-1 label-eyebrow mb-5 flex items-center gap-3 text-[#f0d9c0]">
            <span className="inline-block h-px w-12 bg-[#f0d9c0]/70" aria-hidden />
            Superhost · 7 anos hospedando
          </p>
          <h1 className="hero-fade-in hero-delay-2 font-serif text-4xl leading-[1.05] font-semibold text-paper sm:text-6xl lg:text-7xl">
            Conforto, segurança e uma <em className="text-[#efc4a3]">estadia inesquecível</em>
          </h1>
          <div className="hero-fade-in hero-delay-4 mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollTo("verano-stay")}
              className="btn-cta-hover btn-press rounded-full bg-terracotta px-8 py-4 font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_rgba(180,86,47,0.6)] hover:shadow-[0_18px_40px_-8px_rgba(180,86,47,0.75)]"
            >
              Ver Flat Verano Stay · Barra
            </button>
            <button
              type="button"
              onClick={() => scrollTo("copacabana")}
              className="btn-cta-hover btn-press rounded-full border border-[#1f3328]/60 bg-[#1f3328]/40 px-8 py-4 font-semibold text-paper backdrop-blur-sm hover:bg-[#1f3328]/70 hover:shadow-[0_18px_40px_-8px_rgba(31,51,40,0.65)]"
            >
              Ver Apto Copacabana · Praia
            </button>
          </div>

          <div className="hero-fade-in hero-delay-4 mt-12 flex items-center gap-6 text-paper/80">
            <div className="flex -space-x-2">
              {["#f0d9c0", "#cde0e8", "#d8c9a8"].map((c, i) => (
                <span key={i} className="h-8 w-8 rounded-full border-2 border-[#1f3328]" style={{ background: c }} aria-hidden />
              ))}
            </div>
            <p className="text-sm">
              <span className="font-semibold text-paper">408 avaliações</span> · Superhost há 7 anos · nota 4,94
            </p>
          </div>
        </div>
      </div>

      {/* Indicador visual animado de scroll down */}
      <div
        className="hero-fade-in hero-delay-4 absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden
      >
        <button
          type="button"
          onClick={() => scrollTo("host")}
          aria-label="Rolar para baixo"
          className="scroll-indicator group flex h-12 w-7 items-start justify-center rounded-full border border-paper/50 bg-palm/40 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-palm/70"
        >
          <span className="scroll-indicator-dot mt-0 h-2 w-1.5 rounded-full bg-paper/80 transition-colors duration-300 group-hover:bg-paper" />
        </button>
        <span className="label-eyebrow text-[10px] tracking-[0.2em] text-paper/60">Deslize</span>
      </div>
    </section>
  );
}
