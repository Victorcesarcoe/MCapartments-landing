/*
 * DESIGN "Aquarela Carioca": secção de localização com dois mapas lado a lado —
 * Barra (dourado-oliva) e Copacabana (azul suave), fundo verde-palma profundo.
 * Coordenadas aproximadas dos bairros — ajustar para os endereços exatos.
 */
import ApartmentMap from "@/components/ApartmentMap";

const BARRA = { lat: -22.9689832, lng: -43.3877902 }; // Condomínio Verano Stay, Rua Escultor Sergio Camargo, 50, Barra Olímpica
const COPA = { lat: -22.9792834, lng: -43.1893708 }; // Esquina da praia de Copacabana

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
            <div className="mt-3 rounded-lg border border-paper/15 bg-paper/8 p-4">
              <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-paper/60">A pé do apartamento</p>
              <ul className="space-y-1.5 text-sm text-paper/90">
                <li className="flex items-center justify-between">
                  <span>Estação BRT Jardim Sulacap</span>
                  <span className="font-semibold text-olive">~3 min</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Parque Olímpico</span>
                  <span className="font-semibold text-olive">~8 min</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>VillageMall</span>
                  <span className="font-semibold text-olive">~10 min</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Praia da Reserva</span>
                  <span className="font-semibold text-olive">~5 min (carro)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="reveal relative">
            <ApartmentMap lat={COPA.lat} lng={COPA.lng} label="Apto Copacabana · Esquina da Praia" accent="seablue" />
            <p className="mt-4 flex items-start gap-2.5 text-sm text-paper/85">
              <span className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-seablue" aria-hidden />
              Prédio na esquina da praia de Copacabana — você sai do elevador e está no calçadão.
            </p>
            <div className="mt-3 rounded-lg border border-paper/15 bg-paper/8 p-4">
              <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-paper/60">A pé do apartamento</p>
              <ul className="space-y-1.5 text-sm text-paper/90">
                <li className="flex items-center justify-between">
                  <span>Praia e calçadão de Copacabana</span>
                  <span className="font-semibold text-seablue">~1 min</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Metrô Siqueira Campos</span>
                  <span className="font-semibold text-seablue">~8 min</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Forte de Copacabana</span>
                  <span className="font-semibold text-seablue">~10 min</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Posto 5</span>
                  <span className="font-semibold text-seablue">~3 min</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
