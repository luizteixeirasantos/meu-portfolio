import React from "react";
import { cn } from "@luiz/utils";

const variants = {
  h1: "text-5xl md:text-7xl font-bold tracking-tighter",
  h2: "text-4xl md:text-5xl font-semibold tracking-tight",
  h3: "text-2xl md:text-3xl font-medium",
  body: "text-base md:text-lg text-neutral-400 leading-relaxed",
  caption: "text-sm uppercase tracking-widest text-neutral-500",
};

export const Typography = ({
  variant = "body",
  as: Component = "p",
  className,
  children,
}) => {
  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
};
