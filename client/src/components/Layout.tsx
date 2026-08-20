/*
 * DESIGN "Aquarela Carioca": header fixo que ganha fundo opaco ao rolar,
 * rodapé verde-palma profundo com CTA final, botão flutuante de WhatsApp
 * que pergunta qual apartamento antes de redirecionar.
 */
import { useEffect, useState } from "react";
import { ASSETS, WHATSAPP_BASE, APT1, APT2 } from "@/lib/data";
import { MessageCircle, Star, ExternalLink, ArrowUp } from "lucide-react";

const NAV = [
  { id: "verano-stay", label: "Barra" },
  { id: "copacabana", label: "Copacabana" },
  { id: "avaliacoes", label: "Avaliações" },
  { id: "faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80; // altura aproximada do header fixo
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-palm/95 py-3 shadow-lg backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <button type="button" onClick={() => go("hero")} className="flex items-center gap-3">
          <img src={ASSETS.logo} alt="Rio Stays by Mauricio" className="h-13 w-13" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-semibold italic text-paper">Mauricio</span>
            <span className="label-eyebrow mt-1 text-[10px] text-paper/70">Rio de Janeiro · Superhost</span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => go(n.id)}
              className="text-sm font-medium text-paper/85 transition-colors hover:text-paper"
            >
              {n.label}
            </button>
          ))}
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Quero saber mais sobre os apartamentos no Rio")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-paper/40 lg:hidden"
        >
          <span className={`h-0.5 w-5 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-paper/15 bg-palm/98 px-6 py-5 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => go(n.id)}
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-paper/90 hover:bg-paper/10"
              >
                {n.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={goToTop}
      aria-label="Voltar ao topo"
      className={`btn-press fixed bottom-24 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-palm p-2.5 text-paper shadow-lg transition-all duration-400 ease-out hover:bg-terracotta hover:text-primary-foreground hover:shadow-xl ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export function FloatingWhatsApp() {
  const [which, setWhich] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setWhich(true)}
        aria-label="Reservar pelo WhatsApp"
        className="btn-press group fixed bottom-6 right-6 z-40 flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-[0_12px_34px_-6px_rgba(37,211,102,0.55)] transition-transform duration-200 hover:scale-105"
      >
        {/* Anel de pulsação */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]/50 [animation:pulse-ring_2.2s_cubic-bezier(0.23,1,0.32,1)_infinite]"
          aria-hidden
        />
        <MessageCircle className="relative h-7 w-7" />
        {/* Tooltip */}
        <span className="pointer-events-none absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-xl bg-palm px-3.5 py-2 text-sm font-semibold text-palm-foreground shadow-lg group-hover:block">
          Falar no WhatsApp
        </span>
      </button>

      {which && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-palm/85 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setWhich(false)}
          onKeyDown={(e) => e.key === "Escape" && setWhich(false)}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-xl font-semibold">Qual apartamento te interessa?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Vou abrir o WhatsApp com uma mensagem pronta para o Mauricio.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(APT1.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left shadow-sm transition-colors hover:border-olive"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive/15">
                  <Star className="h-5 w-5 fill-[#E5B94B] text-[#E5B94B]" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Flat Verano Stay</p>
                  <p className="text-xs text-muted-foreground">Barra Olímpica · 4,97</p>
                </div>
              </a>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(APT2.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left shadow-sm transition-colors hover:border-seablue"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-seablue/15">
                  <Star className="h-5 w-5 fill-[#E5B94B] text-[#E5B94B]" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Apto Copacabana</p>
                  <p className="text-xs text-muted-foreground">Esquina da praia · 4,86</p>
                </div>
              </a>
            </div>
            <button
              type="button"
              onClick={() => setWhich(false)}
              className="mt-4 w-full rounded-full py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="relative bg-palm pb-10 pt-20 text-paper lg:pt-28">
      <div className="container">
        <div className="reveal mx-auto max-w-3xl text-center">
          <img src={ASSETS.logo} alt="" className="mx-auto h-14 w-14" aria-hidden />
          <h2 className="font-serif mt-6 text-3xl font-semibold leading-tight sm:text-5xl">
            Pronto para viver o Rio <em className="text-[#efc4a3]">com confiança</em>?
          </h2>
          <p className="mt-4 text-base text-paper/75">
            Escolha o seu cenário — Barra ou Copacabana — e reserve direto com o Mauricio.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={APT1.airbnbUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-4 font-semibold text-primary-foreground shadow-[0_10px_28px_-8px_rgba(180,86,47,0.6)]"
            >
              <ExternalLink className="h-4.5 w-4.5" />
              Anúncio na Barra (Airbnb)
            </a>
            <a
              href={APT2.airbnbUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 rounded-full border border-paper/50 px-7 py-4 font-semibold text-paper hover:bg-paper/10"
            >
              <ExternalLink className="h-4.5 w-4.5" />
              Anúncio em Copacabana (Airbnb)
            </a>
          </div>
          <p className="mt-10 text-sm text-paper/60">
            Superhost há 7 anos · 408 avaliações · nota 4,94 · Rio de Janeiro
          </p>
        </div>
      </div>
    </footer>
  );
}
