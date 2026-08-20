/*
 * DESIGN "Aquarela Carioca": linha de litoral/topografia como divisor de secções —
 * assinatura visual recorrente entre blocos principais.
 */
interface Props {
  color: string; // cor do preenchimento abaixo da linha (cor da secção seguinte)
  strokeColor: string; // cor da linha costeira
  flip?: boolean;
}

export default function CoastlineDivider({ color, strokeColor, flip }: Props) {
  return (
    <div className={`coastline-divider ${flip ? "rotate-180" : ""}`} aria-hidden>
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path
          d="M0,28 C120,12 240,36 360,26 C480,16 560,8 720,18 C880,28 1000,38 1140,26 C1260,16 1360,10 1440,14 L1440,48 L0,48 Z"
          fill={color}
        />
        <path
          d="M0,28 C120,12 240,36 360,26 C480,16 560,8 720,18 C880,28 1000,38 1140,26 C1260,16 1360,10 1440,14"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
