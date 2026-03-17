import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ===== SEÇÃO PRODUÇÃO (Slide 2) =====
   Explica o contexto atual, o dilema e o objetivo.
   Baseado no slide "A Produção".
*/
const ProductionSection = () => {
  const [alertHover, setAlertHover] = useState(false);
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section id="producao" className="py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo: textos */}
          <div ref={ref1} className="opacity-0">
            <span className="text-accent font-bold text-sm uppercase tracking-widest">
              O Desafio
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-3 mb-6">
              A Produção
            </h2>

            {/* Contexto Atual */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-foreground mb-2">
                Contexto Atual:
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O modelo de produção contemporâneo enfrenta o desafio do
                esgotamento de recursos naturais. Segundo dados do PNUMA, a
                extração de matérias-primas triplicou nas últimas décadas.
              </p>
            </div>

            {/* O Dilema */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-foreground mb-2">
                O Dilema:
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Como manter o crescimento socioeconômico sem comprometer a
                regeneração dos biomas?
              </p>
            </div>

            {/* Objetivo */}
            <div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Objetivo:
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Analisar os pilares que sustentam a produção responsável e a
                mitigação de impactos ambientais.
              </p>
            </div>
          </div>

          {/* Lado direito: card de alerta interativo */}
          <div ref={ref2} className="opacity-0">
            {/* Efeito 4: Card muda de cor ao passar o mouse */}
            <div
              className={`rounded-2xl p-8 md:p-12 transition-all duration-500 cursor-pointer shadow-xl ${
                alertHover
                  ? "bg-accent/10 border-2 border-accent scale-105"
                  : "bg-secondary border-2 border-border"
              }`}
              onMouseEnter={() => setAlertHover(true)}
              onMouseLeave={() => setAlertHover(false)}
            >
              <div className="text-5xl mb-4">⚠️</div>
              <p className="text-xl font-bold text-foreground mb-3">
                Fato Alarmante
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Em 2050, haverá <strong className="text-accent">mais plástico do que peixes</strong> no mar.
                8 milhões de toneladas de plástico entram nos oceanos anualmente.
              </p>
            </div>

            {/* Ícone de reciclagem decorativo */}
            <div className="mt-8 flex justify-center">
              <div className="text-8xl opacity-10 text-primary">♻️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
