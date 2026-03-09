import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiFillCalculator } from "react-icons/ai";
import {
  FaBars,
  FaCog,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaHeartbeat,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import "./App.css";
import minhaFoto from "./minha-foto.png";

// Imports do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// 1. CONFIGURAÇÃO DE HARD SKILLS
const hardSkills = [
  { nome: "JavaScript", cor: "#00ffff" },
  { nome: "React", cor: "#00ffff" },
  { nome: "Node.js", cor: "#00ff00" },
  { nome: "Express.js", cor: "#00ff00" },
  { nome: "HTML/CSS", cor: "#a855f7" },
  { nome: "MySQL", cor: "#f97316" },
  { nome: "Python", cor: "#fbbf24" },
  { nome: "Git/GitHub", cor: "#fbbf24" },
];

// 2. CONFIGURAÇÃO DE SOFT SKILLS
const softSkills = [
  { nome: "Trabalho em Equipe", cor: "#ec4899" },
  { nome: "Relatórios Técnicos", cor: "#ec4899" },
  { nome: "Resolução de Problemas", cor: "#8b5cf6" },
  { nome: "Comunicação Eficaz", cor: "#8b5cf6" },
  { nome: "Proatividade", cor: "#f43f5e" },
];

// 3. CONFIGURAÇÃO DOS PROJETOS (COM DETALHES PARA O MODAL)
const meusProjetos = [
  {
    id: 1,
    icone: <GiFarmTractor style={{ fontSize: "2rem", fill: "#00ff00" }} />,
    titulo: "Fieldlytics",
    descricao:
      "Utilizamos Inteligência Artificial avançada para análise de imagens agrícolas e integração de dados climáticos em tempo real, permitindo diagnósticos precisos e recomendações personalizadas para cada tipo de plantação, além de controle financeiro da fazenda.",
    detalhes: `Fieldlytics é uma plataforma SaaS (Software as a Service) voltada para o agronegócio, que utiliza Inteligência Artificial e dados climáticos em tempo real para auxiliar produtores rurais na tomada de decisões mais inteligentes, sustentáveis e produtivas.

      O objetivo do projeto é revolucionar a agricultura por meio da tecnologia, tornando soluções avançadas acessíveis tanto para pequenos produtores quanto para grandes fazendas.`,
    tecnologias: ["React", "Node.js", "Python"],
    github: "https://github.com/luizteixeirasantos/meu-portfolio",
    live: null,
  },
  {
    id: 2,
    icone: <FaDatabase style={{ fontSize: "2rem", fill: "#f97316" }} />,
    titulo: "Sistema de OS",
    descricao:
      "Sistema web do tipo MES (Manufacturing Execution System) simplificado, focado no controle de chão de fábrica.",
    detalhes: `Este projeto é um sistema web do tipo MES (Manufacturing Execution System) simplificado, focado no controle de chão de fábrica. Ele integra três setores principais em tempo real:

    Produção (Operador): Registra início/fim de lotes, apontamento de produção hora-a-hora, paradas de máquina e solicita materiais.

    Almoxarifado: Recebe pedidos de materiais em tempo real (via WebSocket) e gerencia o atendimento.

    Administração: Gerencia usuários, permissões, catálogos e visualiza relatórios históricos de chamados e produção.`,
    tecnologias: ["MySQL", "Node.js", "Backend"],
    github: "https://github.com/luizteixeirasantos/sistema_os.git",
    live: null,
  },
  {
    id: 3,
    icone: <FaCog style={{ fontSize: "2rem", fill: "#a855f7" }} />,
    titulo: "Dashboard WaveSolder",
    descricao:
      "Sistema automático de calculo de fluxo, visando performance, qualidade e economia.",
    detalhes: `Sistema criado para automatizar o cálculo do fluxo ideal para placas de circuito impresso (PCI) em linhas de produção. 

    O sistema considera variáveis operacionais como:

    - Tamanho da PCI
    - Velocidade do transportador (conveyor)
    - Especificações técnicas do fluxo

`,
    tecnologias: ["JavaScript", "Automação", "CSS"],
    github: "https://github.com/luizteixeirasantos/DashboardWave.git",
    live: null,
  },
  {
    id: 4,
    icone: <FaHeartbeat style={{ fontSize: "2rem", fill: "#f80000" }} />,
    titulo: "Landing Page Nutricionista",
    descricao:
      "Page profissional da Dra. Eduarda Goulart, nutricionista, focada em uma metodologia de Nutrição Sem Neura e planos alimentares personalizados..",
    detalhes:
      "O objetivo principal desta página é apresentar a metodologia da Dra. Eduarda Goulart, seus serviços de consulta e acompanhamento, e capturar agendamentos, principalmente via WhatsApp, transformando visitantes em clientes.",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/luizteixeirasantos/nutri-landing-page.git",
    live: "https://nutri-landing-page-blush.vercel.app/",
  },
  {
    id: 5,
    icone: <AiFillCalculator style={{ fontSize: "3rem", fill: "#069db8" }} />,
    titulo: "Calculadora de Retroativo Salarial",
    descricao:
      "Aplicação web desenvolvida em React + Vite para cálculo de valores retroativos salariais",
    detalhes: `
    🚀 Funcionalidades

      💰 Cálculos financeiros
      ✔ Diferença entre salário anterior e atual 
      ✔ Cálculo de retroativo salarial 
      ✔ 13º salário proporcional 
      ✔ Cálculo automático da alíquota de INSS 
      ✔ Total líquido após descontos

      📊 Visualização de dados
      ✔ Gráfico dinâmico dos resultados 
      ✔ Comparação visual entre valores 
      ✔ Dashboard simples e intuitivo

      📂 Exportação de dados
      ✔ Exportar resultado em PDF 
      ✔ Exportar resultado em Excel (.xlsx)

      🧠 Recursos adicionais
      ✔ Histórico de cálculos (Em andamento)
      ✔ Armazenamento em LocalStorage (Em andamento)
      ✔ Layout responsivo 
      ✔ Interface simples e profissional`,
    tecnologias: ["JavaScript", "React", "CSS", "Vite"],
    github: "https://github.com/luizteixeirasantos/calculadora_retroativo.git",
    live: "https://calculadora-retroativo-salario.vercel.app/",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="portfolio-container dark-theme">
      {/* NAVEGAÇÃO */}
      <nav className="main-nav">
        <h1 className="logo">LUIZ HENRIQUE</h1>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={toggleMenu}>
            HOME
          </a>
          <a href="#skills" onClick={toggleMenu}>
            SKILLS
          </a>
          <a href="#projects" onClick={toggleMenu}>
            PROJECTS
          </a>
          <a href="#contact" onClick={toggleMenu}>
            CONTACT
          </a>
        </div>
        <div className="social-top">
          <a
            href="https://www.linkedin.com/in/luizteixeirasantos"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/luiz_henrique_ts/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5537996697120"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-section" id="home">
        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={minhaFoto} alt="Luiz Henrique" className="profile-img" />
          <div className="hero-content">
            <h1 className="hero-title">Olá, eu sou o Luiz Henrique</h1>
            <h2 className="subtitle">
              <span className="text-light-green">DESENVOLVEDOR</span>{" "}
              <span className="text-purple">FULL STACK</span>
            </h2>
            <p className="hero-text">
              Profissional de tecnologia com formação técnica e vocação para o
              desenvolvimento web. Especialista em criar interfaces com React e
              arquiteturas de servidor com Node.js.
            </p>
            <a
              href="mailto:contatoluizhteixeira@gmail.com"
              className="btn-primary no-underline get-in-touch-btn"
            >
              Entre em Contato
            </a>
          </div>
        </motion.div>
      </header>

      {/* SEÇÃO DE SKILLS (CATEGORIZADA) */}
      <section className="skills-section" id="skills">
        <h2 className="section-title text-center">SKILLS</h2>

        <div className="skills-category">
          <h3 className="skills-subtitle text-light-green">HARD SKILLS</h3>
          <div className="skills-grid">
            {hardSkills.map((hab, index) => (
              <motion.div
                className="skill-pill"
                key={index}
                style={{ "--skill-color": hab.cor }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {hab.nome}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-subtitle text-purple">SOFT SKILLS</h3>
          <div className="skills-grid">
            {softSkills.map((hab, index) => (
              <motion.div
                className="skill-pill"
                key={index}
                style={{ "--skill-color": hab.cor }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {hab.nome}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PROJETOS (AGORA COM CARROSSEL) */}
      <section className="projects-section" id="projects">
        <h2 className="section-title text-center">PROJECTS</h2>
        <div className="carousel-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={60}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              // Celulares maiores / Tablets em pé
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Tablets deitados / Notebooks pequenos
              900: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              // Telas grandes (Desktops)
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            style={{ paddingBottom: "3rem", paddingTop: "1rem" }}
          >
            {meusProjetos.map((projeto) => (
              <SwiperSlide key={projeto.id}>
                <div
                  className="project-card"
                  onClick={() => setSelectedProject(projeto)}
                  style={{
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="project-header">
                    {projeto.icone}
                    <h3>{projeto.titulo}</h3>
                  </div>
                  <p style={{ flexGrow: 1 }}>{projeto.descricao}</p>
                  <button
                    className="btn-secondary"
                    style={{
                      marginTop: "1rem",
                      fontSize: "1rem",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Saiba Mais
                  </button>
                </div>
              </SwiperSlide >
            ))}
          </Swiper>
        </div>
      </section>

      {/* MODAL DE DETALHES DO PROJETO */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              <div className="modal-header">
                {selectedProject.icone}
                <h2>{selectedProject.titulo}</h2>
              </div>
              <p className="modal-description">{selectedProject.detalhes}</p>
              <div className="tech-stack" style={{ margin: "1.5rem 0" }}>
                {selectedProject.tecnologias.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="modal-footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <FaGithub className="FaGithub" style={{fill: "#fff", fontSize: "1.3rem"}} /> GitHub
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <FaExternalLinkAlt /> Ver Online
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="main-footer" id="contact">
        <div className="footer-links">
          <a
            href="https://linkedin.com/in/luizteixeirasantos"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/luizteixeirasantos"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:contatoluizhteixeira@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-bottom">Copyright © 2026 Luiz Henrique.</p>
      </footer>
    </div>
  );
}

export default App;
