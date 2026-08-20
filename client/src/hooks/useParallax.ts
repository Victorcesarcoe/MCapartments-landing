/*
 * DESIGN "Aquarela Carioca": hook de parallax suave — aplica translate-Y
 * às imagens de fundo conforme o scroll, criando sensação de profundidade.
 * Usa requestAnimationFrame para performance e respeita prefers-reduced-motion.
 * Também implementa lazy loading: a imagem só é renderizada quando entra no viewport.
 */
import { useEffect, useRef, useCallback, useState } from "react";

/**
 * Hook que aplica parallax a um elemento com imagem de fundo.
 * @param speed - fator de velocidade do parallax (0.1 a 0.5, mais alto = mais movimento)
 * @returns objeto com ref do elemento de fundo e flag `visible` (lazy load)
 */
export function useParallax(speed = 0.25) {
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const prefersReduced = useRef<boolean>(false);
  const [visible, setVisible] = useState(false);

  // Lazy loading: só renderiza o conteúdo quando o fundo entra no viewport
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const update = useCallback(() => {
    const el = bgRef.current;
    if (!el) return;
    if (prefersReduced.current) return;

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;

    // Quando o elemento está no centro do viewport, não há offset
    // Quando está abaixo, move para cima (fundo desliza para baixo visualmente)
    const offset = (viewportCenter - elementCenter) * speed;

    el.style.transform = `translateY(${offset}px) scale(1.05)`;
  }, [speed]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReduced.current = mediaQuery.matches;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return { bgRef, visible };
}
