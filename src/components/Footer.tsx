/* ===== FOOTER =====
   Rodapé do site com o ano atual automático.
*/
const Footer = () => {
  // Efeito 10: Ano automático
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brown text-brown-foreground py-8">
      <div className="container text-center">
        <p className="text-sm opacity-70">
          &copy; {year} EcoCycle — Trabalho Escolar 2º Ano
        </p>
        <p className="text-xs opacity-50 mt-1">
          Feito com 💚 para um futuro sustentável
        </p>
      </div>
    </footer>
  );
};

export default Footer;
