/*
 * DESIGN "Aquarela Carioca": FAQ agrupado por categorias (Check-in e horários,
 * Regras da casa, Dicas sobre a região) — accordion editorial em fundo areia.
 */
import { FAQ, FAQ_GROUPS, WHATSAPP_BASE, type FaqCategory } from "@/lib/data";
import { useState } from "react";
import { useParallax } from "@/hooks/useParallax";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Clock, House, Compass, MessageCircle, Search, X } from "lucide-react";

const CATEGORY_ICONS: Record<FaqCategory, typeof Clock> = {
  checkin: Clock,
  regras: House,
  regiao: Compass,
};

export default function Faq() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  // Filtrar FAQ pela pesquisa
  const filteredGroups = FAQ_GROUPS.map((group) => ({
    ...group,
    items: FAQ.filter(
      (f) =>
        f.category === group.category &&
        (q === "" ||
          f.q.toLowerCase().includes(q) ||
          f.a.toLowerCase().includes(q))
    ),
  })).filter((g) => g.items.length > 0);

  const totalResults = filteredGroups.reduce((acc, g) => acc + g.items.length, 0);

  const { bgRef, visible } = useParallax(0.12);

  return (
    <section id="faq" className="relative overflow-hidden bg-sand py-20 lg:py-28">
      
      {/* Fundo decorativo com parallax + lazy load */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{ transform: "translateY(0) scale(1.05)" }}
      >
        {visible && (
          <img
            src="/manus-storage/hero-rio_4f1073a1.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover opacity-[0.03]"
          />
        )}
      </div>
      <div className="container relative z-10 grid gap-12 lg:grid-cols-[4fr_8fr]">
        <div className="paper-surface reveal p-6 lg:sticky lg:top-24 lg:self-start lg:p-8">
          <p className="editorial-rule label-eyebrow mb-4 text-[10px]">Nota da equipa</p>
          <p className="label-eyebrow mb-4 text-terracotta">Dúvidas frequentes</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Antes de reservar, <em className="text-terracotta">o essencial</em>
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <HelpCircle className="h-4.5 w-4.5 text-terracotta" />
            Qualquer outra dúvida, é só chamar a equipa no WhatsApp.
          </p>
          <p className="mt-8 border-t border-border/70 pt-4 font-serif text-lg italic leading-relaxed text-terracotta/90">
            “Prefiro que você reserve sentindo que já sabe como será chegar.”
          </p>
        </div>
        <div className="reveal space-y-10">
          {/* Campo de pesquisa */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Pesquisar perguntas…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-[0.25rem_1rem_1rem_1rem] border border-border/80 bg-card/70 py-3.5 pl-11 pr-10 text-sm shadow-none outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-terracotta/60 focus:ring-2 focus:ring-terracotta/10"
              aria-label="Pesquisar perguntas do FAQ"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted-foreground/10"
                aria-label="Limpar pesquisa"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {q && (
            <p className="label-eyebrow text-xs text-muted-foreground">
              {totalResults === 0 ? "Nenhuma pergunta encontrada." : `${totalResults} resultado${totalResults === 1 ? "" : "s"} encontrado${totalResults === 1 ? "" : "s"}`}
            </p>
          )}
          {filteredGroups.map((group) => {
            const Icon = CATEGORY_ICONS[group.category];
            const items = group.items;
            if (items.length === 0) return null;
            return (
              <div key={group.category}>
                <h3 className="editorial-rule mb-4 flex items-center gap-2.5 font-serif text-xl font-semibold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta/10">
                    <Icon className="h-4.5 w-4.5 text-terracotta" />
                  </span>
                  {group.label}
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {items.map((f, i) => (
                    <AccordionItem
                      key={`${group.category}-${i}`}
                      value={`faq-${group.category}-${i}`}
                      className="faq-sheet border border-border/70 px-6 shadow-none transition-all duration-300 ease-out data-[state=open]:border-terracotta/50 data-[state=open]:shadow-[0_14px_28px_-22px_rgba(180,86,47,0.48)]"
                    >
                      <AccordionTrigger
                        className="py-5 text-left font-serif text-base font-semibold transition-colors duration-300 hover:no-underline hover:text-terracotta sm:text-lg"
                      >
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground transition-all duration-300 sm:text-base">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Fale Connosco */}
      <div className="container reveal mt-16">
        <div className="cta-band flex flex-col items-center justify-center gap-4 px-8 py-10">
          <p className="font-serif text-xl font-semibold sm:text-2xl">Ainda tem dúvidas?</p>
          <p className="max-w-md text-center text-sm text-muted-foreground">
            A equipa responde rapidamente no WhatsApp — antes, durante e depois da sua estadia.
          </p>
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Tenho uma dúvida sobre os apartamentos no Rio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press mt-2 inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Fale Connosco
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
