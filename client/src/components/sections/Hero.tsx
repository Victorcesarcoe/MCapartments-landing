/*
 * DESIGN "Aquarela Carioca": Hero em tela cheia — vídeo de fundo (reel dos 2 aptos),
 * headline serifada gigante alinhada à esquerda, gradiente terracota/verde para contraste,
 * dois CTAs com scroll suave.
 */
import { ChevronDown } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const HERO_VIDEO: string = ""; // TODO: reel de destaque intercalando os 2 apartamentos (mp4/webm)
const HERO_POSTER = "/manus-storage/hero-rio_4f1073a1.jpg";

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
            Viva o Rio. <em className="text-[#efc4a3]">Hospede-se com confiança.</em>
          </h1>
          <p className="hero-fade-in hero-delay-3 mt-6 max-w-xl text-base text-paper/85 sm:text-lg">
            Duas experiências cuidadosamente preparadas para você: a energia de <strong className="text-paper">Copacabana</strong> ou o
            conforto da <strong className="text-paper">Barra Olímpica</strong> — 408 avaliações e nota <strong className="text-[#f0d9c0]">4,94</strong>.
          </p>

          <div className="hero-fade-in hero-delay-4 mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollTo("verano-stay")}
              className="btn-press rounded-full bg-terracotta px-8 py-4 font-semibold text-primary-foreground shadow-[0_10px_30px_-8px_rgba(180,86,47,0.6)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-6px_rgba(180,86,47,0.7)] hover:brightness-110"
            >
              Ver Flat Verano Stay · Barra
            </button>
            <button
              type="button"
              onClick={() => scrollTo("copacabana")}
              className="btn-press rounded-full border border-[#1f3328]/60 bg-[#1f3328]/40 px-8 py-4 font-semibold text-paper backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1f3328]/70 hover:shadow-[0_14px_36px_-6px_rgba(31,51,40,0.6)] hover:brightness-110"
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

      <button
        type="button"
        onClick={() => scrollTo("host")}
        aria-label="Rolar para baixo"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce items-center justify-center rounded-full border border-paper/50 bg-palm/40 p-2.5 text-paper transition-all duration-300 ease-out hover:-translate-x-1/2 hover:translate-y-0.5 hover:bg-palm/70 lg:flex"
      >
        <ChevronDown className="h-5 w-5" />
      </button>
    </section>
  );
}
