import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Expande o cursor quando passa por links ou botões
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-muted pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      animate={{
        x: mousePosition.x - 16, // Centraliza no eixo X (32px / 2)
        y: mousePosition.y - 16, // Centraliza no eixo Y
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0)",
        border: isHovering ? "none" : "1px solid rgba(255, 255, 255, 0.5)",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    />
  );
};
