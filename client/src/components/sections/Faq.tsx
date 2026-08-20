/*
 * DESIGN "Aquarela Carioca": FAQ agrupado por categorias (Check-in e horários,
 * Regras da casa, Dicas sobre a região) — accordion editorial em fundo areia.
 */
import { FAQ, FAQ_GROUPS, type FaqCategory } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Clock, House, Compass } from "lucide-react";

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
                      className="rounded-2xl border border-border bg-card px-6 shadow-sm data-[state=open]:shadow-md"
                    >
                      <AccordionTrigger className="py-5 text-left font-serif text-base font-semibold hover:no-underline sm:text-lg">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
    </section>
  );
}
