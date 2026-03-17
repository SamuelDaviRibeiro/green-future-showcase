import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ===== SEÇÃO EQUILÍBRIO (Slide 4) =====
   Lista os pontos sobre equilíbrio entre produção e meio ambiente.
   Baseado no slide com bullet points.
*/

const topics = [
  {
    title: "Transição de Modelos",
    text: 'Superação do modelo "extrair-produzir-descartar" para o modelo circular, onde o resíduo é reintegrado como insumo.',
  },
  {
    title: "Uso de Energias Renováveis",
    text: "Redução da dependência de combustíveis fósseis.",
  },
  {
    title: "Logística Reversa",
    text: "Responsabilidade sobre o ciclo de vida do produto (PNUMA/EcoDebate).",
  },
  {
    title: "Agroflorestas e Bioeconomia",
    text: "Práticas que permitem produzir mantendo a floresta em pé e os serviços ecossistêmicos ativos (Fonte: WWF-Brasil).",
  },
];

const BalanceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="equilibrio" className="py-20 md:py-32">
      <div className="container">
        <div ref={ref} className="text-center mb-16 opacity-0">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">
            Produção & Natureza
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-3">
            Equilíbrio entre Produção
            <br />e Meio Ambiente
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {topics.map((topic, index) => {
            const cardRef = useScrollReveal();
            return (
              <div
                key={topic.title}
                ref={cardRef}
                className="opacity-0"
              >
                {/* Efeito 6: Cards com hover que mostra borda colorida */}
                <div className="group bg-background rounded-2xl p-8 shadow-lg border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <span className="text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {topic.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BalanceSection;
