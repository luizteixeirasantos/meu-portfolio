import React from "react";
import { motion } from "framer-motion";
import { cn } from "@luiz/utils";

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
}) => {
  const baseStyles =
    "px-8 py-4 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";

  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200",
    outline:
      "border border-neutral-800 text-white hover:bg-white hover:text-black",
    ghost: "text-neutral-400 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      <span className="relative z-10">{children}</span>

      {/* Efeito de brilho sutil ao passar o mouse */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"
        initial={false}
      />
    </motion.button>
  );
};
