import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ===== SEÇÃO TRIPÉ DA SUSTENTABILIDADE (Slide 3) =====
   Mostra os 3 pilares: Econômico, Social e Ambiental.
   Cada card tem uma cor e ícone diferente.
*/

const pillars = [
  {
    title: "Econômico",
    description: "Viabilidade financeira e gestão de riscos.",
    icon: "💰",
    colorClass: "bg-gold/20 border-gold",
    textColor: "text-gold-foreground",
  },
  {
    title: "Social",
    description: "Equidade, saúde e bem-estar das comunidades.",
    icon: "🤝",
    colorClass: "bg-accent/15 border-accent",
    textColor: "text-foreground",
  },
  {
    title: "Ambiental",
    description: "Preservação da biodiversidade e redução da pegada de carbono.",
    icon: "🌱",
    colorClass: "bg-teal/15 border-teal",
    textColor: "text-foreground",
  },
];

const TripleSection = () => {
  // Efeito 5: Clique nos cards para expandir detalhes
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="tripe" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div ref={ref} className="text-center mb-16 opacity-0">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">
            Os 3 Pilares
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-3">
            Tripé da Sustentabilidade
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const cardRef = useScrollReveal();
            return (
              <div
                key={pillar.title}
                ref={cardRef}
                className="opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  onClick={() =>
                    setExpanded(expanded === index ? null : index)
                  }
                  className={`rounded-2xl p-8 border-2 ${pillar.colorClass} cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    expanded === index ? "scale-105 shadow-2xl" : ""
                  }`}
                >
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-extrabold text-primary uppercase tracking-wide mb-3">
                    {pillar.title}
                  </h3>
                  <p className={`text-lg ${pillar.textColor} leading-relaxed`}>
                    {pillar.description}
                  </p>

                  {/* Conteúdo expandido ao clicar */}
                  {expanded === index && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <p className="text-muted-foreground text-sm">
                        {index === 0 &&
                          "Inclui investimentos em tecnologias limpas, economia circular e incentivos fiscais para práticas sustentáveis."}
                        {index === 1 &&
                          "Abrange educação ambiental, inclusão social e melhoria da qualidade de vida nas comunidades."}
                        {index === 2 &&
                          "Envolve conservação de ecossistemas, energias renováveis e gestão responsável de resíduos."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TripleSection;
