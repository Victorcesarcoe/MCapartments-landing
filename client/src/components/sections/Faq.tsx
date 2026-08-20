/*
 * DESIGN "Aquarela Carioca": FAQ agrupado por categorias (Check-in e horários,
 * Regras da casa, Dicas sobre a região) — accordion editorial em fundo areia.
 */
import { FAQ, FAQ_GROUPS, WHATSAPP_BASE, type FaqCategory } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Clock, House, Compass, MessageCircle } from "lucide-react";

const CATEGORY_ICONS: Record<FaqCategory, typeof Clock> = {
  checkin: Clock,
  regras: House,
  regiao: Compass,
};

export default function Faq() {
  return (
    <section id="faq" className="bg-sand py-20 lg:py-28">
      <div className="container grid gap-12 lg:grid-cols-[4fr_8fr]">
        <div className="reveal lg:sticky lg:top-24 lg:self-start">
          <p className="label-eyebrow mb-4 text-terracotta">Dúvidas frequentes</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Antes de reservar, <em className="text-terracotta">o essencial</em>
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <HelpCircle className="h-4.5 w-4.5 text-terracotta" />
            Qualquer outra dúvida, é só chamar o Mauricio no WhatsApp.
          </p>
        </div>
        <div className="reveal space-y-10">
          {FAQ_GROUPS.map((group) => {
            const Icon = CATEGORY_ICONS[group.category];
            const items = FAQ.filter((f) => f.category === group.category);
            if (items.length === 0) return null;
            return (
              <div key={group.category}>
                <h3 className="mb-4 flex items-center gap-2.5 font-serif text-xl font-semibold">
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
                      className="rounded-2xl border border-border bg-card px-6 shadow-sm transition-all duration-300 ease-out data-[state=open]:shadow-md data-[state=open]:border-terracotta/30"
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
        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card px-8 py-10 shadow-sm">
          <p className="font-serif text-xl font-semibold sm:text-2xl">Ainda tem dúvidas?</p>
          <p className="max-w-md text-center text-sm text-muted-foreground">
            O Mauricio responde rapidamente no WhatsApp — antes, durante e depois da sua estadia.
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
