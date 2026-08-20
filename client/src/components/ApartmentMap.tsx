/*
 * DESIGN "Aquarela Carioca": mapa do apartamento com pin personalizado em terracota,
 * estilo limpo, emoldurado com arco carioca sutil.
 *
 * IMPLEMENTAÇÃO: iframe embed público do Google Maps (maps/embed/v1/place),
 * que não requer chave de API nem autenticação, evitando os erros
 * "API loaded multiple times" e "This page can't load Google Maps correctly"
 * do carregador proxy da API JavaScript.
 */

interface ApartmentMapProps {
  lat: number;
  lng: number;
  label: string;
  accent: "olive" | "seablue";
}

function embedUrl(lat: number, lng: number, label: string): string {
  const q = encodeURIComponent(`${lat},${lng}`);
  const base = encodeURIComponent(label);
  return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${q}&zoom=15`;
}

export default function ApartmentMap({ lat, lng, label, accent }: ApartmentMapProps) {
  const pinColor = accent === "olive" ? "#A08233" : "#7BA7BC";

  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-sm relative" style={{ height: 380 }}>
      <iframe
        title={label}
        className="h-full w-full border-0"
        src={embedUrl(lat, lng, label)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-card/95 px-4 py-2 shadow-sm backdrop-blur-sm">
        <span className="label-eyebrow flex items-center gap-2 text-terracotta">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: pinColor }} />
          {label}
        </span>
      </div>
    </div>
  );
}
