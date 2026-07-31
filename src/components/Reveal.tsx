import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  id?: string;
  className?: string;
  delay?: number;
  as?: "div" | "article";
}>;

/** 統一控制進場節奏，並尊重使用者的減少動態效果設定。 */
export default function Reveal({ children, id, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
