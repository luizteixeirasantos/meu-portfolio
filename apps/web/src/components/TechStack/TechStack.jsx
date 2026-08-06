import { motion } from "framer-motion";

export const TechStack = () => {
  const technologies = [
    "      ",
    "      ",
    "      ",
    "      ",
    "      ",
    "JavaScript",
    "Java",
    "React",
    "Node.js",
    "MySQL",
    "Tailwind CSS",
    "Vite",
    "Git",
    "Vercel",
    "Framer Motion",
  ];

  // Duplicamos o array para criar a ilusão de rolagem infinita sem cortes
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-24 overflow-hidden bg-background border-y border-white/5">
      <div className="relative flex whitespace-nowrap">
        {/* Efeito de gradiente nas bordas para suavizar a entrada/saída */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-16 px-8"
          animate={{ x: [0, -1000] }} // Ajustaremos a largura animada via CSS se necessário, mas -1000px é um bom ponto de partida
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Tempo que demora para dar uma volta (mais alto = mais lento)
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <span
              key={index}
              className="text-5xl md:text-7xl font-display font-bold text-transparent text-stroke opacity-30 hover:opacity-100 hover:text-white transition-all duration-500 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
