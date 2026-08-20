/*
 * DESIGN "Aquarela Carioca": secção de localização com dois mapas lado a lado —
 * Barra (dourado-oliva) e Copacabana (azul suave), fundo verde-palma profundo.
 * Coordenadas aproximadas dos bairros — ajustar para os endereços exatos.
 */
import ApartmentMap from "@/components/ApartmentMap";

const BARRA = { lat: -22.9745, lng: -43.3916 }; // Condomínio Verano Stay, Barra Olímpica (aprox.)
const COPA = { lat: -22.9638, lng: -43.1798 }; // Esquina da praia de Copacabana (aprox.)

export default function Location() {
  return (
    <section id="localizacao" className="bg-palm py-20 text-paper lg:py-28">
      <div className="container">
        <div className="reveal mb-12 max-w-2xl">
          <p className="label-eyebrow mb-4 text-[#f0d9c0]">Onde ficam</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-paper sm:text-5xl">
            Dois endereços, <em className="text-[#efc4a3]">dois jeitos de viver o Rio</em>
          </h2>
          <p className="mt-4 text-base text-paper/75">
            Da Barra Olímpica a Copacabana — escolha o cenário que combina com a sua viagem.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="reveal relative">
            <ApartmentMap lat={BARRA.lat} lng={BARRA.lng} label="Flat Verano Stay · Barra Olímpica" accent="olive" />
            <p className="mt-4 flex items-start gap-2.5 text-sm text-paper/85">
              <span className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-olive" aria-hidden />
              Condomínio Verano Stay, próximo ao Parque Olímpico e à estação do BRT — vista para a Pedra da Gávea.
            </p>
          </div>
          <div className="reveal relative">
            <ApartmentMap lat={COPA.lat} lng={COPA.lng} label="Apto Copacabana · Esquina da Praia" accent="seablue" />
            <p className="mt-4 flex items-start gap-2.5 text-sm text-paper/85">
              <span className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-seablue" aria-hidden />
              Prédio na esquina da praia de Copacabana — você sai do elevador e está no calçadão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
