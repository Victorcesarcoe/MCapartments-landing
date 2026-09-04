/*
 * DESIGN "Aquarela Carioca": contexto discreto de navegação para que os CTAs
 * globais possam acompanhar a estadia que está no foco do visitante.
 */
import { useEffect, useState } from "react";

export type ApartmentId = "verano-stay" | "copacabana";

const APARTMENT_IDS: ApartmentId[] = ["verano-stay", "copacabana"];

interface ApartmentContext {
  /** Último apartamento visto; permanece disponível fora da secção para CTAs globais. */
  apartmentId: ApartmentId | null;
  /** Indica se o utilizador está actualmente dentro de uma secção de apartamento. */
  inApartmentSection: boolean;
}

export function useActiveApartment(): ApartmentContext {
  const [context, setContext] = useState<ApartmentContext>({
    apartmentId: null,
    inApartmentSection: false,
  });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportTop = window.innerHeight * 0.22;
      const viewportBottom = window.innerHeight * 0.72;
      const visibleId = APARTMENT_IDS.find((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const { top, bottom } = section.getBoundingClientRect();
        return top <= viewportBottom && bottom >= viewportTop;
      });

      setContext((previous) => {
        const next: ApartmentContext = {
          apartmentId: visibleId ?? previous.apartmentId,
          inApartmentSection: Boolean(visibleId),
        };

        if (
          previous.apartmentId === next.apartmentId &&
          previous.inApartmentSection === next.inApartmentSection
        ) {
          return previous;
        }
        return next;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return context;
}
