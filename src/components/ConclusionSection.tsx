import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ===== SEÇÃO IMPACTO + CONCLUSÃO (Slide 5) =====
   Mostra dados estatísticos com contadores animados
   e os pontos da conclusão.
*/

// Efeito 7: Hook para animar números contando de 0 até o valor final
const useCounter = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
};

const stats = [
  { value: 1500, label: "Garrafas retiradas do mar", suffix: "+" },
  { value: 85, label: "Menos CO₂ na produção", suffix: "%" },
  { value: 3, label: "Pilares da sustentabilidade", suffix: "" },
  { value: 100, label: "Material reciclado", suffix: "%" },
];

const conclusions = [
  "Síntese: O equilíbrio não é um limite ao desenvolvimento, mas uma nova forma de projetá-lo.",
  "Responsabilidade Compartilhada: O futuro sustentável depende da tríade: Políticas Públicas (Governo), Práticas ESG (Empresas) e Consumo Consciente (Cidadãos).",
  'Perspectiva: A restauração de ecossistemas, conforme promovido pela "Década da Restauração da ONU", é hoje o elo necessário para a prosperidade econômica e climática.',
];

const ConclusionSection = () => {
  const titleRef = useScrollReveal();

  return (
    <section id="conclusao" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        {/* Contadores animados */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => {
            const { count, ref } = useCounter(stat.value);
            return (
              <div
                key={stat.label}
                ref={ref}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-extrabold text-primary">
                  {count}
                  {stat.suffix}
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Conclusão */}
        <div ref={titleRef} className="opacity-0 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary text-center mb-10">
            Conclusão
          </h2>
          <div className="space-y-6">
            {conclusions.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-background rounded-xl p-6 shadow-md border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
