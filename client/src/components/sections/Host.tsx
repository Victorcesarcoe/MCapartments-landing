/*
 * DESIGN "Aquarela Carioca": secção do anfitrião — retrato em arco carioca,
 * estatísticas como colunas editoriais, fundo areia suave.
 */
import { HOST } from "@/lib/data";
import { Award, MessageCircle, Star } from "lucide-react";

export default function Host() {
  return (
    <section id="host" className="bg-sand py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr]">
          {/* Retrato em arco carioca */}
          <div className="reveal relative mx-auto w-full max-w-sm">
            <div
              className="overflow-hidden rounded-t-[50%] rounded-b-2xl border-[6px] border-card shadow-[0_30px_60px_-20px_rgba(46,74,59,0.4)]"
              style={{ aspectRatio: "4/5" }}
            >
              <img src={HOST.photo} alt="Mauricio, anfitrião Superhost" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-palm px-6 py-3 text-primary-foreground shadow-lg">
              <Award className="h-5 w-5 text-[#f0c878]" />
              <span className="label-eyebrow text-sm">Superhost</span>
            </div>
          </div>

          <div className="reveal mx-auto max-w-xl lg:mx-0 lg:pl-6">
            <p className="label-eyebrow mb-4 text-terracotta">Seu anfitrião</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              Oi, eu sou o <em className="text-terracotta">Mauricio</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Há 7 anos recebo viajantes nos meus apartamentos no Rio — com roupa de cama 100% algodão,
              check-in sem burocracia e aquela dica boa de carioca que só quem mora aqui conhece. São{" "}
              <strong className="text-foreground">408 avaliações</strong> e uma média de{" "}
              <strong className="text-foreground">4,94</strong> que falam por si.
            </p>

            <div className="mt-8 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="px-2 text-center">
                <p className="font-serif text-3xl font-semibold text-terracotta">{HOST.years}</p>
                <p className="mt-1 text-xs text-muted-foreground">anos hospedando</p>
              </div>
              <div className="px-2 text-center">
                <p className="font-serif text-3xl font-semibold text-terracotta">408</p>
                <p className="mt-1 text-xs text-muted-foreground">avaliações</p>
              </div>
              <div className="px-2 text-center">
                <p className="font-serif text-3xl font-semibold text-terracotta">4,94</p>
                <p className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  de nota <Star className="h-3.5 w-3.5 fill-[#E5B94B] text-[#E5B94B]" />
                </p>
              </div>
            </div>

            <p className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <MessageCircle className="h-5 w-5 shrink-0 text-terracotta" />
              Respondo rápido no WhatsApp — antes, durante e depois da sua estadia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
