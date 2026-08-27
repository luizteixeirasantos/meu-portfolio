import React, { useState } from "react";
import { Button, Magnetic, Typography } from "@luiz/ui";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      // COLOQUE O SEU ENDPOINT DO FORMSPREE AQUI ABAIXO
      const response = await fetch("https://formspree.io/f/mvzdnpbn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="py-32 px-6 bg-surface relative z-10" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <Typography variant="caption" className="text-accent-muted">
            Contato
          </Typography>
          <div className="mt-8 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              <Typography variant="h1" className="leading-tight">
                Vamos construir <br /> algo{" "}
                <span className="text-accent-muted italic">incrível.</span>
              </Typography>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.form
            className="flex flex-col gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white outline-none focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Qual o seu nome?"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-6 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white cursor-text"
              >
                Qual o seu nome?
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white outline-none focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Seu melhor e-mail"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-6 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white cursor-text"
              >
                Seu melhor e-mail
              </label>
            </div>

            <div className="relative group">
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white outline-none focus:border-white transition-colors peer placeholder-transparent resize-none"
                placeholder="Conte-me sobre o seu projeto"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-6 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white cursor-text"
              >
                Conte-me sobre o seu projeto
              </label>
            </div>

            <div className="pt-4 self-start flex items-center gap-4">
              <Magnetic strength={0.2}>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </Magnetic>
              {status === "success" && (
                <Typography variant="caption" className="text-green-500">
                  Enviado com sucesso!
                </Typography>
              )}
              {status === "error" && (
                <Typography variant="caption" className="text-red-500">
                  Erro ao enviar. Tente novamente.
                </Typography>
              )}
            </div>
          </motion.form>

          <motion.div
            className="flex flex-col gap-12 lg:pl-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <Typography variant="caption" className="mb-4 block">
                Detalhes de Contato
              </Typography>
              <a
                href="mailto:contatoluizhteixeira@gmail.com"
                target="_blank"
                className="text-2xl hover:text-neutral-400 transition-colors block mb-2"
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <FaEnvelope /> - E-mail
              </a>
              <a
                href="https://wa.me/5537996697120"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-neutral-400 transition-colors block"
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <FaWhatsapp /> - WhatsApp
              </a>
            </div>
            <div>
              <Typography variant="caption" className="mb-4 block">
                Localização
              </Typography>
              <Typography variant="body" className="text-2xl text-white">
                Divinópolis, MG
              </Typography>
              <Typography variant="body" className="text-neutral-500 mt-1">
                Brasil
              </Typography>
            </div>
            <div>
              <Typography variant="caption" className="mb-4 block">
                Redes Sociais
              </Typography>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/luizteixeirasantos"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-neutral-400 transition-colors inline-flex items-center gap-2"
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <FaGithub /> - GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/luizh-developer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-neutral-400 transition-colors inline-flex items-center gap-2"
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <FaLinkedinIn /> - LinkedIn ↗
                </a>
                <a
                  href="https://instagram.com/luizts.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl hover:text-neutral-400 transition-colors inline-flex items-center gap-2"
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <FaInstagram /> - Instagram ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
