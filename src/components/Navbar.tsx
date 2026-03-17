import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/* ===== NAVBAR =====
   Menu de navegação fixo no topo do site.
   Muda de transparente para sólido quando o usuário rola a página.
   Tem versão mobile com botão hamburger.
*/
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Efeito 1: Detecta scroll para mudar aparência do menu
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Início" },
    { href: "#producao", label: "Produção" },
    { href: "#tripe", label: "Tripé" },
    { href: "#equilibrio", label: "Equilíbrio" },
    { href: "#conclusao", label: "Conclusão" },
    { href: "#obrigado", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex justify-between items-center h-20">
        {/* Logo do site */}
        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          <span className="text-primary">Eco</span>
          <span className="text-accent">Cycle</span>
        </a>

        {/* Links de navegação - Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Efeito 2: Botão hamburger para mobile */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile com animação */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg font-semibold text-foreground/80 hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
