import { Typography } from "@luiz/ui";
// import { useSmoothScroll } from "../hooks/useSmoothScroll";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background pt-20 pb-8 px-6 border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
        <Typography variant="caption" className="text-neutral-600">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </Typography>

        <Typography variant="caption" className="text-neutral-600">
          Desenvolvido com React, Vite & GSAP.
        </Typography>

        <button
          onClick={scrollToTop}
          className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
        >
          Voltar ao topo ↑
        </button>
      </div>
    </footer>
  );
};
