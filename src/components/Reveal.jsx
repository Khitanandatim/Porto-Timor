import { motion } from "framer-motion";

/**
 * Wraps children in a fade-up-on-scroll animation. Use `delay` to stagger
 * multiple Reveal elements within the same section.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
