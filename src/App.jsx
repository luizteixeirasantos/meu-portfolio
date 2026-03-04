import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaBars,
  FaCog,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import "./App.css";
import minhaFoto from "./minha-foto.png";

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
  // Exemplo de card de projeto
  // {
  //   id: 1,
  //   icone: <GiFarmTractor style={{ fontSize: "1.5rem", fill: "#00ff00" }} />,
  //   titulo: "App de Agricultura",
  //   descricao: "Plataforma com previsão do tempo e análise de imagens via IA.",
  //   detalhes:
  //     "Este projeto utiliza modelos de Inteligência Artificial em Python para realizar diagnósticos de doenças em plantas através de fotos. No frontend, o React garante uma interface ágil e responsiva para o produtor rural.",
  //   tecnologias: ["React", "Node.js", "Python"],
  //   github: "https://github.com/luizteixeirasantos/meu-portfolio",
  //   live: "https://meu-portfolio-six-self.vercel.app/",
  // },
  {
    id: 1,
    icone: <GiFarmTractor style={{ fontSize: "1.5rem", fill: "#00ff00" }} />,
    titulo: "App de Agricultura",
    descricao: "Plataforma com previsão do tempo e análise de imagens via IA.",
    detalhes:
      "Este projeto utiliza modelos de Inteligência Artificial em Python para realizar diagnósticos de doenças em plantas através de fotos. No frontend, o React garante uma interface ágil e responsiva para o produtor rural.",
    tecnologias: ["React", "Node.js", "Python"],
    github: "https://github.com/luizteixeirasantos/meu-portfolio",
    live: "https://meu-portfolio-six-self.vercel.app/",
  },
  {
    id: 2,
    icone: <FaDatabase style={{ fontSize: "1.5rem", fill: "#f97316" }} />,
    titulo: "Sistema de OS",
    descricao: "Gerenciamento de ordens de serviço com banco de dados SQL.",
    detalhes:
      "Um sistema completo para controle de manutenção e serviços, utilizando MySQL para persistência de dados e Node.js no backend para regras de negócio complexas.",
    tecnologias: ["MySQL", "Node.js", "Backend"],
    github: "https://github.com/luizteixeirasantos/meu-portfolio",
    live: null,
  },
  {
    id: 3,
    icone: <FaCog style={{ fontSize: "1.5rem", fill: "#a855f7" }} />,
    titulo: "Dashboard WaveSolder",
    descricao: "Interface de monitoramento com automação via scripts.",
    detalhes:
      "Interface desenvolvida para monitorar processos industriais, contando com automação via scripts .bat para inicialização rápida do ambiente.",
    tecnologias: ["JavaScript", "Automação", "CSS"],
    github: "https://github.com/luizteixeirasantos/meu-portfolio",
    live: null,
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
        <h2 className="section-title text-center">MINHAS COMPETÊNCIAS</h2>

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

      {/* SEÇÃO DE PROJETOS */}
      <section className="projects-section" id="projects">
        <h2 className="section-title text-center">MEUS PROJETOS</h2>
        <div className="projects-grid">
          {meusProjetos.map((projeto, index) => (
            <motion.div
              className="project-card"
              key={projeto.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedProject(projeto)}
            >
              <div className="project-header">
                {projeto.icone}
                <h3>{projeto.titulo}</h3>
              </div>
              <p>{projeto.descricao}</p>
              <button
                className="btn-secondary"
                style={{
                  marginTop: "1rem",
                  fontSize: "0.8rem",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Saiba Mais
              </button>
            </motion.div>
          ))}
        </div>
      </section>

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
                  <FaGithub /> GitHub
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
    </div>
  );
}

export default App;
