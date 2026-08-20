/*
 * DESIGN "Aquarela Carioca": comparativo editorial lado a lado —
 * cartões com identidade própria (dourado-oliva vs. azul suave) sobre fundo areia.
 */
import { APT1, APT2 } from "@/lib/data";
import { Star } from "lucide-react";

const ROWS: { label: string; a1: string; a2: string }[] = [
  { label: "Bairro", a1: "Barra Olímpica", a2: "Copacabana" },
  { label: "Cama", a1: APT1.beds, a2: APT2.beds },
  { label: "Nota no Airbnb", a1: `${APT1.rating.toFixed(2).replace(".", ",")} · ${APT1.badge}`, a2: `${APT2.rating.toFixed(2).replace(".", ",")} · ${APT2.badge}` },
  { label: "Diferencial principal", a1: "Vista para a Pedra da Gávea + condomínio-resort completo", a2: "Esquina da praia + apartamento recém-reformado" },
  { label: "Ideal para", a1: "Quem busca tranquilidade, carro e infraestrutura de resort", a2: "Quem quer praia, mobilidade e vida de bairro" },
  { label: "Check-in", a1: "Na portaria (recepção 24h)", a2: "Self check-in (fechadura eletrônica)" },
];

function Pill({ children, tone }: { children: React.ReactNode; tone: "olive" | "seablue" }) {
  return (
    <span
      className={`inline-block h-2.5 w-2.5 rounded-full ${tone === "olive" ? "bg-olive" : "bg-seablue"}`}
      aria-hidden
    />
  );
}

export default function Compare() {
  return (
    <section id="compare" className="bg-sand py-20 lg:py-28">
      <div className="container">
        <div className="reveal mb-12 max-w-2xl">
          <p className="label-eyebrow mb-4 text-terracotta">Qual é o seu estilo?</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
            Comparativo rápido entre as <em className="text-terracotta">duas estadias</em>
          </h2>
        </div>

        <div className="reveal grid gap-6 overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-[1fr_1fr_1fr]">
          {/* Cabeçalho */}
          <div className="hidden lg:block p-8" />
          {[
            { apt: APT1, tone: "olive" as const },
            { apt: APT2, tone: "seablue" as const },
          ].map(({ apt, tone }) => (
            <div key={apt.id} className="border-t-4 border-border bg-card p-8 lg:border-l lg:border-t-0" style={{ borderTopColor: tone === "olive" ? "#A08233" : "#7BA7BC" }}>
              <div className="mb-4 flex items-center gap-2">
                <Pill tone={tone}>{null}</Pill>
                <span className="label-eyebrow text-terracotta">{apt.neighborhood}</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold leading-tight">{apt.name}</h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-[#E5B94B] text-[#E5B94B]" />
                {apt.rating.toFixed(2).replace(".", ",")} · {apt.reviewsCount} avaliações
              </p>
            </div>
          ))}

          {/* Linhas */}
          {ROWS.map((row, i) => (
            <div key={row.label} className={`contents ${i % 2 === 1 ? "bg-sand/50" : ""}`}>
              <div className="flex items-start gap-3 border-t border-border p-6 lg:border-t-0 lg:p-8">
                <span className="label-eyebrow text-xs text-muted-foreground">{row.label}</span>
              </div>
              {[row.a1, row.a2].map((v, j) => (
                <div key={j} className="border-t border-border p-6 text-sm leading-relaxed lg:border-l lg:p-8">
                  {v}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
