import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductionSection from "@/components/ProductionSection";
import TripleSection from "@/components/TripleSection";
import BalanceSection from "@/components/BalanceSection";
import ConclusionSection from "@/components/ConclusionSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

/* ===== PÁGINA PRINCIPAL =====
   Junta todas as seções do site em ordem,
   seguindo os 6 slides da apresentação.
*/
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Menu fixo no topo */}
      <Navbar />

      {/* Slide 1: Hero - Futuro Sustentável */}
      <HeroSection />

      {/* Slide 2: A Produção */}
      <ProductionSection />

      {/* Slide 3: Tripé da Sustentabilidade */}
      <TripleSection />

      {/* Slide 4: Equilíbrio Produção x Meio Ambiente */}
      <BalanceSection />

      {/* Slide 5: Impacto + Conclusão */}
      <ConclusionSection />

      {/* Slide 6: Compra + Obrigado */}
      <CtaSection />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Index;
