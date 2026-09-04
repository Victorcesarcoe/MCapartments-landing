/*
 * DESIGN "Aquarela Carioca": abertura cinematográfica, breve e editorial.
 * A mesma fotografia do Hero surge em tela cheia com a assinatura M Apartments,
 * uma linha de entrada discreta e uma saída suave que revela a página.
 */
import { useCallback, useEffect, useState } from "react";
import { HERO_POSTER, ASSETS } from "@/lib/data";

export default function OpeningIntro() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  const dismiss = useCallback(() => {
    setIsLeaving(true);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(dismiss, reducedMotion ? 240 : 1600);
    return () => window.clearTimeout(timer);
  }, [dismiss]);

  useEffect(() => {
    if (!isLeaving) return;
    const timer = window.setTimeout(() => setIsOpen(false), 680);
    return () => window.clearTimeout(timer);
  }, [isLeaving]);

  if (!isOpen) return null;

  return (
    <div
      className={`opening-intro${isLeaving ? " opening-intro--leaving" : ""}`}
      role="status"
      aria-label="A abrir M Apartments"
    >
      <img className="opening-intro__image" src={HERO_POSTER} alt="" aria-hidden="true" />
      <div className="opening-intro__wash" aria-hidden="true" />

      <div className="opening-intro__content">
        <div className="opening-intro__logo-frame">
          <img src={ASSETS.logo} alt="M Apartments" className="h-full w-full object-contain" />
        </div>
        <div className="opening-intro__rule" aria-hidden="true" />
        <p className="opening-intro__eyebrow">M Apartments · Rio de Janeiro</p>
        <p className="opening-intro__caption">Estadias com personalidade.</p>
      </div>

      <button type="button" className="opening-intro__skip" onClick={dismiss}>
        Entrar agora
      </button>

      <div className="opening-intro__progress" aria-hidden="true" />
    </div>
  );
}
