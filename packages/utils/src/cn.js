import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário para fundir classes Tailwind sem conflitos.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
