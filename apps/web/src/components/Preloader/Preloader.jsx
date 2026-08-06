import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Olá",
  "Hello",
  "Luiz Henrique",
  "Full Stack Developer",
  "Bem-vindo",
];

export const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        onComplete();
      }, 1000);
      return;
    }

    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 300,
    ); // Fica um pouco mais na primeira palavra

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background text-white"
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="overflow-hidden flex items-center gap-4">
        {/* Ponto animado */}
        <motion.div
          className="w-2 h-2 bg-white rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            className="text-4xl md:text-5xl font-display font-medium tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
