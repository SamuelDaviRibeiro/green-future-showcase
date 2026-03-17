import heroImage from "@/assets/hero-nature.jpg";

/* ===== SEÇÃO HERO (Slide 1) =====
   Primeira coisa que o visitante vê.
   Imagem de fundo com texto grande e botão de ação.
   Baseado no slide "Futuro Sustentável".
*/
const HeroSection = () => {
  // Efeito 3: Scroll suave ao clicar no botão
  const scrollToSection = () => {
    document.getElementById("producao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Floresta tropical vista de cima"
          className="w-full h-full object-cover"
        />
        {/* Camada escura por cima da imagem para o texto ficar legível */}
        <div className="absolute inset-0 bg-brown/60" />
      </div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="inline-block bg-accent/90 text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          🌿 Futuro Sustentável
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 text-shadow-hero animate-fade-in-up">
          O futuro é verde,
          <br />
          <span className="text-accent">ou não será.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Conheça a EcoCycle: a garrafa inteligente feita 100% de plástico
          retirado dos oceanos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={scrollToSection}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            Conhecer Produto
          </button>
          <button className="border-2 border-primary-foreground/30 text-primary-foreground font-bold px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-all">
            Ver Vídeo ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
