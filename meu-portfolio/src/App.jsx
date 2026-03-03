import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import "./App.css";
import minhaFoto from "./minha-foto.png";

const minhasHabilidades = [
  { nome: "JavaScript", cor: "#00ffff" },
  { nome: "React", cor: "#00ffff" },
  { nome: "Node.js", cor: "#00ff00" },
  { nome: "Express.js", cor: "#a855f7" },
  { nome: "HTML/CSS", cor: "#a855f7" },
  { nome: "MySQL", cor: "#f97316" },
  { nome: "Python", cor: "#fbbf24" },
  { nome: "Git/GitHub", cor: "#fbbf24" },
];

const meusProjetos = [
  {
    id: 1,
    icone: <GiFarmTractor style={{ fontSize: "1.5rem", color: "#00ff00" }} />,
    titulo: "App de Agricultura",
    descricao:
      "Plataforma com previsão do tempo em tempo real e análise de imagens via IA para diagnóstico de doenças em plantas.",
    tecnologias: ["React", "Node.js", "Python"],
  },
  {
    id: 2,
    icone: <FaDatabase style={{ fontSize: "1.5rem", color: "#f97316" }} />,
    titulo: "Sistema de OS",
    descricao:
      "Sistema completo para gerenciamento de ordens de serviço com banco de dados relacional e script SQL unificado.",
    tecnologias: ["SQL", "Backend"],
  },
  {
    id: 3,
    icone: <FaCog style={{ fontSize: "1.5rem", color: "#a855f7" }} />,
    titulo: "Dashboard WaveSolder",
    descricao:
      "Interface de monitoramento com scripts ..bat de automação para inicialização ágil do ambiente de desenvolvimento.",
    tecnologias: ["JavaScript", "Automação"],
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="portfolio-container dark-theme">
      {/* 0. MENU E CABEÇALHO */}
      <nav className="main-nav">
        <h1 className="logo">LUIZ HENRIQUE</h1>

        {/* BOTÃO DO MENU HAMBÚRGUER (Só aparece no telemóvel) */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 6. A classe 'active' é adicionada se isMenuOpen for true */}
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
          {/* LINK DO WHATSAPP ADICIONADO AQUI */}
          <a
            href="https://wa.me/5537996697120"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <header className="hero-section" id="home">
        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={minhaFoto}
            alt="Foto de Perfil de Luiz Henrique"
            className="profile-img"
          />
          <div className="hero-content">
            <h1 className="hero-title">Olá, eu sou o Luiz Henrique</h1>
            <h2 className="subtitle">
              <span className="text-light-green">DESENVOLVEDOR</span>{" "}
              <span className="text-purple">FULL STACK</span>
            </h2>
            <p className="hero-text">
              Profissional de tecnologia com formação técnica e vocação para o
              desenvolvimento web. Meu conjunto de habilidades abrange todo o
              ciclo de desenvolvimento, desde a estruturação de interfaces com
              HTML, CSS3 e REACT até a lógica de servidor e persistência de
              dados utilizando Node.js e MySQL.
            </p>
            <p className="hero-text">
              Destaco-me pela facilidade de comunicação e aptidão para o
              trabalho em equipe, características que considero essenciais para
              o sucesso de projetos colaborativos. Sou movido pela resolução de
              desafios lógicos e pela busca contínua por excelência técnica.
            </p>
            <p className="hero-text">
              Atualmente, estou disponível para integrar times de
              desenvolvimento que valorizem proatividade e comprometimento,
              visando contribuir ativamente para o sucesso dos projetos da
              empresa.
            </p>

            {/* BOTÃO DE E-MAIL ADICIONADO AQUI (Mudamos de <button> para <a> com mailto) */}
            <a
              href="mailto:contatoluizhteixeira@gmail.com?subject=Contato pelo Site"
              target="_blank"
              rel="noreferrer"
              className="btn-primary no-underline get-in-touch-btn"
            >
              Entre em Contato
            </a>
          </div>
        </motion.div>
      </header>

      {/* 2. SEÇÃO: HABILIDADES */}
      <section className="skills-section" id="skills">
        <h2 className="section-title text-center">HABILIDADES TÉCNICAS</h2>
        <div className="skills-grid">
          {minhasHabilidades.map((hab, index) => (
            <motion.div
              className="skill-pill"
              key={index}
              style={{
                "--skill-color": hab.cor,
                "--skill-color-rgb": "0, 255, 255",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {hab.nome}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SEÇÃO: PROJETOS */}
      <section className="projects-section" id="projects">
        <h2 className="section-title text-center">MEUS PROJETOS</h2>
        <div className="projects-grid">
          {meusProjetos.map((projeto, index) => (
            <motion.div
              className="project-card"
              key={projeto.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-header">
                {projeto.icone}
                <h3>{projeto.titulo}</h3>
              </div>
              <p>{projeto.descricao}</p>
              <div className="tech-stack">
                {projeto.tecnologias.map((tech, i) => (
                  <span className="tech-badge" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="projects-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn-secondary no-underline more-projects-btn">
            Ver Mais Projetos
          </button>
        </motion.div>
      </section>

      {/* 4. RODAPÉ */}
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
            href="mailto:contatoluizhteixeira@gmail.com?subject=Contato pelo Site"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="footer-bottom text-center">
          <p>Copyright © 2026 Luiz Henrique.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
