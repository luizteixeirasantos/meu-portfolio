import { Typography } from "@luiz/ui";
import { motion } from "framer-motion";

export const About = () => {
  const phrase = `Sou Luiz H. Santos, desenvolvedor de software especializado no ecossistema JavaScript, com foco em React, Node.js e na construção de aplicações web modernas, escaláveis e de alta performance.

Tenho experiência prática no desenvolvimento de interfaces responsivas, sistemas internos de gestão e soluções digitais que transformam processos complexos em experiências intuitivas e eficientes. Minha atuação combina sólida lógica de negócio, visualização de dados, integrações em tempo real e atenção rigorosa à experiência do usuário.

Atualmente, estou expandindo meu repertório técnico, aprofundando meus conhecimentos em Java e Angular, com o objetivo de ampliar minha capacidade de desenvolver soluções robustas, versáteis e alinhadas às demandas do mercado.`;

  const paragraphs = phrase.split("\n\n");

  return (
    <section className="py-32 px-6 bg-surface relative" id="about">
      <div className="container mx-auto max-w-5xl">
        <Typography variant="caption" className="mb-8 block text-accent-muted">
          Sobre Mim
        </Typography>

        <div className="mt-12 space-y-8">
          {paragraphs.map((paragraph, paragraphIndex) => {
            const words = paragraph.split(" ");

            return (
              <div
                key={paragraphIndex}
                className="text-3xl md:text-2xl lg:text-2xl font-normal leading-[1.4] tracking-tight flex flex-wrap gap-x-2.5 gap-y-2"
              >
                {words.map((word, wordIndex) => (
                  <div
                    key={`${paragraphIndex}-${wordIndex}`}
                    className="overflow-hidden"
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ y: "100%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{
                        duration: 0.6,
                        ease: [0.33, 1, 0.68, 1],
                        delay: paragraphIndex * 0.3 + wordIndex * 0.02,
                      }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" className="mb-4">
              Foco e Abordagem
            </Typography>
            <Typography variant="body">
              Minha especialidade está em transformar processos e regras de
              negócio complexos em soluções digitais intuitivas, eficientes e
              escaláveis. Atuo principalmente com o ecossistema JavaScript,
              utilizando React, Node.js e bancos de dados relacionais para
              desenvolver aplicações modernas, performáticas e orientadas a
              resultados. Priorizo arquiteturas modulares, código limpo, boas
              práticas de engenharia de software e padronização de versionamento
              com Conventional Commits, assegurando alta manutenibilidade,
              escalabilidade e evolução contínua dos projetos.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h3" className="mb-4">
              Background
            </Typography>
            <Typography variant="body">
              Baseado em Minas Gerais, minha trajetória combina experiência
              prática em desenvolvimento de software, automação de processos e
              criação de sistemas corporativos. Tenho atuado em projetos que vão
              desde plataformas de gestão financeira e aplicações SaaS até
              sistemas de controle de produção e operações industriais em tempo
              real. Meu foco está na construção de soluções robustas que
              integrem tecnologia, eficiência operacional e experiência do
              usuário. Para garantir entregas ágeis e confiáveis, mantenho um
              fluxo de desenvolvimento e deploy otimizado com ferramentas como
              GitHub, Vercel e práticas modernas de integração e entrega
              contínua.
            </Typography>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
