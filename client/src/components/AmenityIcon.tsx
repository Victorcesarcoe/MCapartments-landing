/*
 * DESIGN "Aquarela Carioca": grid de comodidades com ícones lineares em terracota,
 * estilo editorial acolhedor.
 */
import {
  Car,
  Eye,
  Waves,
  Dumbbell,
  Flame,
  UtensilsCrossed,
  Snowflake,
  ChefHat,
  Wifi,
  Tv,
  WashingMachine,
  Bed,
  Umbrella,
  KeyRound,
  ShieldCheck,
  Wind,
  Briefcase,
  ArrowUpDown,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  car: Car,
  eye: Eye,
  waves: Waves,
  dumbbell: Dumbbell,
  flame: Flame,
  utensils: UtensilsCrossed,
  chef: ChefHat,
  snowflake: Snowflake,
  wifi: Wifi,
  tv: Tv,
  washing: WashingMachine,
  bed: Bed,
  umbrella: Umbrella,
  key: KeyRound,
  shield: ShieldCheck,
  wind: Wind,
  suitcase: Briefcase,
  elevator: ArrowUpDown,
};

export default function AmenityIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Wifi;
  return <Icon className={className} />;
}
