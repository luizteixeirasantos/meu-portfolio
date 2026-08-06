import { Typography } from "@luiz/ui";
import { cn } from "@luiz/utils";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

// Adicionei campos de descrição, videoUrl (placeholder) e links
const projectsData = [
  {
    id: 1,
    title: "Candy Mel",
    category: "E-commerce",
    tech: "JavaScript/React, Animations, NodeJS, MySQL",
    image:
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "",
    description:
      "Plataforma de e-commerce moderna com foco em animações de interface (motion design) e apresentação elegante de produtos.",
    detalhes: [
      "Site moderno UI/UX, com backend integrado",
      "Cadastro de usuários",
      "Interface com animações e interações",
      "Cardápio com filtragem por tipo de produto",
      "Sistema de confirmação de pedido",
      "Vendas automáticas via WhatsApp",
      "Carrinho de compras",
      "Página de contato automatizada",
      "Entre outras funções",
    ],
    repoUrl: "https://github.com/luizteixeirasantos",
    liveUrl: "https://candy-mel.vercel.app/",
  },
  {
    id: 2,
    title: "Agrotech",
    category: "Agrotech Platform",
    tech: "React, Leaflet, Node.js, Python, MySQL, IA",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "", // Você colocará o caminho do seu vídeo aqui depois (ex: "/videos/fieldlytics.mp4")
    description:
      "Plataforma de gestão agrícola focada no monitoramento climático e controle de safras, estoque e finanças. Integração com mapas interativos utilizando Leaflet.",
    detalhes: [
      "Recomendações personalizadas através da IA",
      "Dados climáticos em tempo real",
      "Diagnósticos precisos",
      "Controle financeiro da fazenda",
      "Gestão de safras",
      "Gestão de maquinários",
      "Acesso offline",
      "Entre outras funções",
    ],
    repoUrl: "https://github.com/luizteixeirasantos",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Sistema OS",
    category: "Industrial Control",
    tech: "Full Stack JS, MySQL, React",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "",
    description:
      "Sistema completo de controle de produção industrial do tipo MES (Manufacturing Execution System) simplificado. Monitoramento de status de operadores, produção horária e registro de paradas de máquinas.",
    detalhes: [
      "Registra início/fim de lotes",
      "Apontamento de produção hora-a-hora",
      "Registros de paradas de máquina",
      "Solicitações de materiais",
      "Registros de matérias primas",
      "Registros de produtos",
      "Cadastro/login de colaboradores",
      "Acesso restrito para cada colaborador em sua área especifica",
      "Entre outras funções",
    ],
    repoUrl: "https://github.com/luizteixeirasantos",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Meu Enxoval",
    category: "Financial App",
    tech: "React, autoTable, JavaScript",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "",
    description:
      "Aplicação focada em planejamento financeiro e gestão de itens domésticos, com painéis de controle, gráficos detalhados e exportação de relatórios em PDF.",
    detalhes: [
      "Gráficos de pizza que mostram a divisão financeiras por membro",
      "Checklist de Enxoval com Inteligência Financeira",
      "Cadastro de itens com cálculo de parcelamento",
      "Impacto direto no fluxo de caixa mensal",
      "Links de lojas ('Acesse aqui!')",
      "Gestão de Mercado",
      "Lista de compras com cálculo de Quantidade x Preço Unitário",
      "Planejamento Multi-Usuário",
      "Entre outras funções",
    ],
    repoUrl: "https://github.com/luizteixeirasantos/check-list-casa.git",
    liveUrl: "https://myhome-system.vercel.app/",
  },
  {
    id: 5,
    title: "Web Page Nutricionista",
    category: "Landing Page",
    tech: "JavaScript/React, CSS",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "",
    description:
      "Plataforma de e-commerce moderna com foco em animações de interface (motion design) e apresentação elegante de produtos.",
    detalhes: [
      "Site moderno UI/UX",
      "Agendamentos via WhatsApp",
      "Acesso rápido e fácil",
      "Entre outras funções",
    ],
    repoUrl: "https://github.com/luizteixeirasantos/nutri-landing-page.git",
    liveUrl: "https://nutri-landing-page-blush.vercel.app/",
  },
];

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // Estado para o Modal
  const cursorRef = useRef(null);

  // Travar o scroll do body quando o modal abrir
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedProject]);

  useEffect(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.6,
      ease: "power3.out",
    });
    const rotateTo = gsap.quickTo(cursorRef.current, "rotation", {
      duration: 0.6,
      ease: "power3.out",
    });
    let lastX = 0;

    const moveCursor = (e) => {
      if (selectedProject) return; // Desativa a imagem fantasma se o modal estiver aberto
      const { clientX, clientY } = e;
      xTo(clientX - 200);
      yTo(clientY - 150);
      const deltaX = clientX - lastX;
      rotateTo(deltaX * 0.15);
      lastX = clientX;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [selectedProject]);

  return (
    <>
      <section className="py-32 px-6 bg-background relative z-10" id="projects">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 flex justify-between items-end">
            <Typography variant="caption" className="text-accent-muted">
              Projetos em Destaque
            </Typography>
          </div>

          <div
            className="border-t border-white/10 flex flex-col"
            onMouseLeave={() => setHoveredProject(null)}
          >
            {projectsData.map((project, index) => {
              const isAnotherActive =
                hoveredProject !== null && hoveredProject !== index;
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={cn(
                    "group border-b border-white/10 py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-opacity duration-500",
                    isAnotherActive ? "opacity-30" : "opacity-100",
                  )}
                  onMouseEnter={() => setHoveredProject(index)}
                >
                  <div className="flex flex-col mb-4 md:mb-0 relative z-20 pointer-events-none">
                    <Typography
                      variant="h2"
                      className="group-hover:translate-x-4 transition-transform duration-500 ease-out"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      className="mt-2 text-neutral-500 group-hover:translate-x-4 transition-transform duration-500 delay-75 ease-out"
                    >
                      {project.tech}
                    </Typography>
                  </div>
                  <Typography
                    variant="body"
                    className="text-neutral-400 group-hover:-translate-x-4 transition-transform duration-500 ease-out relative z-20 pointer-events-none"
                  >
                    {project.category}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>

        {/* Imagem Fantasma do Hover */}
        <div
          ref={cursorRef}
          className="pointer-events-none fixed top-0 left-0 w-[400px] h-[300px] hidden md:block z-[100] overflow-hidden"
          style={{ willChange: "transform" }}
        >
          <AnimatePresence mode="wait">
            {hoveredProject !== null && !selectedProject && (
              <motion.div
                key={hoveredProject}
                initial={{ scale: 0.6, opacity: 0, filter: "blur(10px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                exit={{ scale: 0.6, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="w-full h-full shadow-2xl"
              >
                <img
                  src={projectsData[hoveredProject].image}
                  alt={projectsData[hoveredProject].title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Modal do Projeto */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay Escuro */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Container do Modal */}
            <motion.div
              className="relative w-full max-w-6xl max-h-[90vh] bg-surface border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-colors text-white"
              >
                <FaTimes />
              </button>

              {/* Lado Esquerdo: Vídeo / Imagem */}
              <div className="w-full lg:w-3/5 bg-black relative h-64 lg:h-auto flex items-center justify-center overflow-hidden">
                {selectedProject.videoUrl ? (
                  <video
                    src={selectedProject.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                  />
                ) : (
                  <div className="w-full h-full relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Typography
                        variant="caption"
                        className="bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"
                      >
                        Seu Vídeo Aqui
                      </Typography>
                    </div>
                  </div>
                )}
              </div>

              {/* Lado Direito: Informações */}
              <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto">
                <Typography
                  variant="caption"
                  className="text-accent-muted mb-4"
                >
                  {selectedProject.category}
                </Typography>
                <Typography variant="h2" className="mb-2">
                  {selectedProject.title}
                </Typography>
                <Typography
                  variant="caption"
                  className="text-neutral-500 mb-8 block"
                >
                  {selectedProject.tech}
                </Typography>

                <div className="mb-12">
                  <Typography variant="h3" className="mb-4 text-xl">
                    Sobre o Projeto
                  </Typography>
                  <Typography
                    variant="body"
                    className="text-neutral-300 text-base"
                  >
                    {selectedProject.description}
                  </Typography>
                  <details className="mt-6 cursor-pointer group">
                    <summary className="text-white font-medium mb-4 outline-none">
                      Funcionalidades
                    </summary>

                    <ul className="space-y-3 text-neutral-300">
                      {selectedProject.detalhes?.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-accent mt-1">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-colors rounded-full text-sm font-medium w-full sm:w-auto"
                  >
                    <FaGithub size={18} /> Código Fonte
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black hover:bg-neutral-200 transition-colors rounded-full text-sm font-medium w-full sm:w-auto"
                  >
                    <FaExternalLinkAlt size={14} /> Ver Ao Vivo
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
