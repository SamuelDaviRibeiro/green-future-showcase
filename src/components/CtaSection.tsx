import { useState } from "react";
import natureTexture from "@/assets/nature-texture.jpg";

/* ===== SEÇÃO CTA + OBRIGADO (Slide 6) =====
   Seção de compra do produto e agradecimento final.
   Baseado no slide "Muito Obrigado".
*/
const CtaSection = () => {
  // Efeito 8: Feedback visual ao clicar no botão de compra
  const [purchased, setPurchased] = useState(false);
  // Efeito 9: Like button
  const [liked, setLiked] = useState(false);

  const handlePurchase = () => {
    setPurchased(true);
    setTimeout(() => setPurchased(false), 3000);
  };

  return (
    <>
      {/* Seção de Compra */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Pronto para fazer parte da mudança?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Adquira sua EcoCycle e contribua para um futuro mais sustentável.
          </p>

          <div className="bg-background rounded-2xl shadow-2xl border border-border p-10 max-w-md mx-auto">
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">
              Oferta de Lançamento
            </p>
            <p className="text-5xl font-extrabold text-primary mb-6">
              R$ 89,90
            </p>
            <button
              onClick={handlePurchase}
              className={`w-full font-bold py-4 px-8 rounded-lg transition-all duration-300 ${
                purchased
                  ? "bg-primary text-primary-foreground scale-95"
                  : "bg-accent text-accent-foreground hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              {purchased ? "🎉 Adicionado ao Carrinho!" : "Adicionar ao Carrinho"}
            </button>
          </div>
        </div>
      </section>

      {/* Seção Obrigado */}
      <section
        id="obrigado"
        className="relative py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={natureTexture}
            alt="Textura natural"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 container text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
            Muito Obrigado
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Samuel / 2ºD / Programação
          </p>

          {/* Efeito 9: Botão de Like com animação */}
          <button
            onClick={() => setLiked(!liked)}
            className={`text-4xl transition-all duration-300 hover:scale-125 ${
              liked ? "scale-110" : ""
            }`}
          >
            {liked ? "💚" : "🤍"}
          </button>
          <p className="text-primary-foreground/50 text-sm mt-2">
            {liked ? "Obrigado pelo apoio!" : "Clique para apoiar"}
          </p>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
