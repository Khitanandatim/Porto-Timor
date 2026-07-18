import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[5px] bg-ink origin-left z-[60]"
      style={{ scaleX }}
    >
      <div className="h-full bg-gradient-to-r from-yellow via-orange to-pink" />
    </motion.div>
  );
}
