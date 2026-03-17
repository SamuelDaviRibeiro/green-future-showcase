import { useEffect, useRef } from "react";

/* ===== HOOK: useScrollReveal =====
   Faz elementos aparecerem com animação quando
   o usuário rola até eles na página.
   Usa a IntersectionObserver API do navegador.
*/
export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};
