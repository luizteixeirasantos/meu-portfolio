import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@luiz/ui";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Início", href: "#hero" },
  { name: "Sobre Mim", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Impede o scroll do body quando a sidebar estiver aberta
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // Pequeno delay para a animação da sidebar fechar antes de rolar
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <>
      {/* Botão Hamburger Fixo */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-[150] w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 mix-blend-difference"
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Fundo escuro clicável para fechar */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Painel da Sidebar */}
            <motion.div
              className="relative w-full max-w-md h-full bg-surface border-l border-white/10 p-12 flex flex-col justify-center"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{
                x: "100%",
                transition: { ease: [0.76, 0, 0.24, 1], duration: 0.6 },
              }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-14 h-14 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <FaTimes size={20} />
              </button>

              <Typography variant="caption" className="mb-12 text-accent-muted">
                Navegação
              </Typography>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-4xl md:text-5xl font-display font-medium text-white hover:text-neutral-400 transition-colors inline-block w-fit"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-12 border-t border-white/10">
                <Typography variant="caption" className="mb-4 block">
                  Social
                </Typography>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/luizteixeirasantos"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-neutral-400"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/luizh-developer"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-neutral-400"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
