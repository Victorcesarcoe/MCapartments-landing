/*
 * DESIGN "Aquarela Carioca": selo "Preferido dos hóspedes" como carimbo oval de prestígio,
 * com estrela — prova social forte, nunca um chip genérico.
 */
import { Star } from "lucide-react";

interface Props {
  rating: number; // ex.: 4.97
  reviewsCount: number; // ex.: 58
  badge: string; // ex.: "Top 5% das acomodações"
  variant?: "olive" | "seablue";
  light?: boolean;
}

export default function GuestFavoriteBadge({ rating, reviewsCount, badge, variant = "olive", light }: Props) {
  const ring = variant === "olive" ? "border-olive" : "border-seablue";
  const ink = variant === "olive" ? "#a08233" : "#7ba7bc";
  const text = light ? "text-paper" : "text-foreground";
  const muted = light ? "text-paper/80" : "text-muted-foreground";

  return (
    <div
      className={`stamp-rotate card-lift inline-flex flex-col items-center gap-2 rounded-3xl border-2 ${ring} bg-card px-7 py-5 text-center shadow-[0_16px_40px_-14px_rgba(180,86,47,0.35)]`}
      style={{
        backgroundImage: `radial-gradient(${ink} 1px, transparent 1px)`,
        backgroundSize: "10px 10px",
      }}
      role="img"
      aria-label={`Preferido dos hóspedes — nota ${rating.toFixed(2).replace(".", ",")} com ${reviewsCount} avaliações, ${badge}`}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-transparent shadow-md"
        style={{ background: ink }}
      >
        <div className="text-center">
          <Star className="mx-auto h-5 w-5 fill-[#F5C451] text-[#F5C451]" />
          <p className="font-serif text-xl font-bold text-white">{rating.toFixed(2).replace(".", ",")}</p>
        </div>
      </div>
      <span className={`label-eyebrow text-sm ${text}`}>Preferido dos hóspedes</span>
      <span className={`text-xs ${muted}`}>
        {reviewsCount} avaliações · {badge}
      </span>
    </div>
  );
}
