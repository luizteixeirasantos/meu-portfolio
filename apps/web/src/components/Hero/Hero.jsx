import { Magnetic, Typography } from "@luiz/ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

// Registra o plugin de scroll do GSAP
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  const backgroundRef = useRef(null);

  // Função auxiliar para popular as refs dos textos
  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Animação de Entrada (Reveal)
      // Os textos sobem e surgem suavemente após o preloader
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(textRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        delay: 0.5, // Dá tempo para a cortina do preloader sumir
      });

      tl.from(
        ".hero-button",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8",
      );

      // 2. Efeito Parallax no Background (ScrollTrigger)
      // O background se move em uma velocidade diferente do scroll
      gsap.to(backgroundRef.current, {
        yPercent: 30, // Move 30% do próprio tamanho para baixo
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true, // Amarra a animação à barra de rolagem (manteiga)
        },
      });
    }, heroRef); // Escopa as animações apenas dentro do componente Hero

    return () => ctx.revert(); // Limpeza crucial para React
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Dinâmico / Parallax */}
      <div
        ref={backgroundRef}
        className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface to-background opacity-80" />
        {/* Você pode substituir esta div por uma tag <img /> ou <video /> futuramente */}
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        {/* Envelopando textos para efeito de máscara (clip-path natural) */}
        <div className="overflow-hidden mb-2">
          <Typography
            variant="caption"
            className="inline-block"
            ref={addToTextRefs}
          >
            Luiz • Desenvolvedor Full Stack
          </Typography>
        </div>

        <div className="overflow-hidden">
          <Typography
            variant="h1"
            className="inline-block leading-tight"
            ref={addToTextRefs}
          >
            Construindo <br className="md:hidden" /> interfaces
          </Typography>
        </div>

        <div className="overflow-hidden mb-8">
          <Typography
            variant="h1"
            className="inline-block leading-tight text-accent-muted italic"
            ref={addToTextRefs}
          >
            modernas & escaláveis
          </Typography>
        </div>

        <div className="overflow-hidden mb-12 max-w-2xl">
          <Typography
            variant="body"
            className="inline-block"
            ref={addToTextRefs}
          >
            Da concepção do banco de dados à fluidez de interações
            cinematográficas no frontend.
          </Typography>
        </div>

        <div className="hero-button">
          <Magnetic strength={0.3}>
            <a
              href="#projects"
              style={{
                background: "white",
                color: "black",
                padding: "16px",
                borderRadius: "40px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Ver Projetos
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Indicador de Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <Typography variant="caption" className="text-[10px]">
          Scroll
        </Typography>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
};
