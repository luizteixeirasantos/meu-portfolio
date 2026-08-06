import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CustomCursor } from "../components/CustomCursor/CustomCursor";
import { Preloader } from "../components/Preloader/Preloader";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export const MainLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Inicializa o scroll suave apenas na web (não no mobile para não quebrar a exp)
  if (typeof window !== "undefined" && window.innerWidth > 768) {
    useSmoothScroll();
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />

      <main
        className={`min-h-screen transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        {children}
      </main>
    </>
  );
};
