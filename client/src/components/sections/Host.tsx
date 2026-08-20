/*
 * DESIGN "Aquarela Carioca": secção do anfitrião reescrita — sem fotografia,
 * identidade construída em monograma tipográfico (inicial "M" em arco carioca),
 * estatísticas editoriais em quatro colunas, citação em destaque, fundo areia suave.
 */
import { Award, MessageCircle, Star, Waves } from "lucide-react";

const STATS = [
  { value: "4,94", unit: "/ 5", label: "Nota média", icon: Star },
  { value: "408", unit: "", label: "Avaliações", icon: MessageCircle },
  { value: "7", unit: "anos", label: "De experiência em hospedagem", icon: Waves },
  { value: "100", unit: "%", label: "Taxa de resposta", icon: Award },
];

export default function Host() {
  return (
    <section id="host" className="bg-sand py-20 lg:py-28">
      <div className="container">
        {/* Cabeçalho editorial sem fotografia: monograma "M" em arco */}
        <div className="reveal mb-12 flex flex-col items-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-t-[50%] rounded-b-2xl bg-palm text-primary-foreground shadow-[0_20px_40px_-16px_rgba(46,74,59,0.5)]">
            <span className="font-serif text-6xl font-bold leading-none text-[#f0c878]">M</span>
          </div>
          <p className="label-eyebrow mb-3 text-terracotta">Conheça seu anfitrião</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            <em className="text-terracotta">Mauricio</em>
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-xl italic text-terracotta/90 sm:text-2xl">
            Hospitalidade que começa antes da sua chegada.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Coluna esquerda: texto de apresentação */}
          <div className="reveal space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Receber pessoas é, para Mauricio, muito mais do que disponibilizar um lugar para ficar. É
              cuidar dos detalhes, oferecer tranquilidade e fazer com que cada hóspede se sinta
              verdadeiramente bem-vindo.
            </p>
            <p>
              Com <strong className="text-foreground">7 anos de experiência em hospedagem</strong>, Mauricio
              construiu sua trajetória com base em um princípio simples:{" "}
              <strong className="text-foreground">
                uma boa estadia é feita de conforto, atenção e confiança.
              </strong>
            </p>
            <p>
              À frente da <strong className="text-foreground">Pousada dos Meros</strong>, sua experiência
              como anfitrião se traduz em um atendimento próximo, cuidadoso e comprometido com cada etapa
              da jornada do hóspede — desde o primeiro contato até o momento do check-out.
            </p>
            <p>
              Nascido na década de 80, Mauricio traz para sua forma de receber a experiência de quem
              entende que cada viagem possui uma história própria. Seja para alguns dias de descanso, uma
              viagem de negócios ou para descobrir o Rio de Janeiro, seu propósito é tornar a hospedagem{" "}
              <strong className="text-foreground">simples, confortável e especial</strong>.
            </p>
            <blockquote className="border-l-4 border-terracotta pl-5 font-serif text-lg italic text-foreground sm:text-xl">
              “Meu objetivo é que você chegue como hóspede e vá embora levando uma boa experiência.”
            </blockquote>
            <p className="font-semibold text-foreground">Seja bem-vindo. O Rio espera por você.</p>
          </div>

          {/* Coluna direita: estatísticas + Superhost */}
          <div className="reveal flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <div
                  key={`stat-${i}`}
                  className="card-lift rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <s.icon className="mx-auto mb-3 h-5 w-5 text-terracotta" />
                  <p className="font-serif text-3xl font-semibold text-terracotta">
                    {s.value}
                    <span className="text-lg">{s.unit}</span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="card-lift relative overflow-hidden rounded-2xl border border-border bg-palm p-8 text-primary-foreground shadow-sm">
              <Award className="absolute -right-4 -top-4 h-24 w-24 text-[#f0c878]/20" />
              <h3 className="mb-3 flex items-center gap-3 font-serif text-2xl font-semibold">
                <Award className="h-6 w-6 text-[#f0c878]" />
                Superhost Airbnb
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
                O reconhecimento de <strong className="text-[#f0c878]">Superhost</strong> representa a
                consistência de um trabalho dedicado à hospitalidade. Superhosts são anfitriões experientes,
                reconhecidos por suas excelentes avaliações, comunicação eficiente e compromisso em
                proporcionar experiências de qualidade aos seus hóspedes.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
                Para Mauricio, esse reconhecimento não é apenas uma conquista — é um compromisso de
                continuar oferecendo uma hospedagem cada vez melhor.
              </p>
            </div>

            <div className="card-lift rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="mb-2 flex items-center gap-2.5 font-serif text-lg font-semibold">
                <MessageCircle className="h-5 w-5 text-terracotta" />
                Pode contar comigo
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Com <strong className="text-foreground">100% de taxa de resposta</strong>, Mauricio valoriza
                uma comunicação clara, rápida e atenciosa. Antes, durante e depois da sua estadia, você
                terá um anfitrião preparado para ajudar no que for necessário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
