/*
 * DESIGN "Aquarela Carioca": FAQ em accordion editorial — fundo areia, perguntas em serifada,
 * respostas claras baseadas nas regras reais.
 */
import { FAQ } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function Faq() {
  return (
    <section id="faq" className="bg-sand py-20 lg:py-28">
      <div className="container grid gap-12 lg:grid-cols-[4fr_8fr]">
        <div className="reveal">
          <p className="label-eyebrow mb-4 text-terracotta">Dúvidas frequentes</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Antes de reservar, <em className="text-terracotta">o essencial</em>
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <HelpCircle className="h-4.5 w-4.5 text-terracotta" />
            Qualquer outra dúvida, é só chamar o Mauricio no WhatsApp.
          </p>
        </div>
        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
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
      </div>
    </section>
  );
}
