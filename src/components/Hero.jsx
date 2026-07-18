import fotoProfil from "../assets/foto-profil.jpg";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail, Sparkles, CircuitBoard, Wifi, Code2 } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { FloatingBlob, CornerChip } from "./DecorativeShapes";
import { profile } from "../data/content";

function useTypingEffect(words, { typingSpeed = 70, deletingSpeed = 40, pause = 1600 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? currentWord.slice(0, t.length - 1) : currentWord.slice(0, t.length + 1)
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(profile.roles);
  const sectionRef = useRef(null);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 18 });
  const springY = useSpring(my, { stiffness: 60, damping: 18 });
  const rotX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const shiftX = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const shiftY = useTransform(springY, [-0.5, 0.5], [-14, 14]);

  function handleMouseMove(e) {
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <FloatingBlob color="yellow" size={220} className="top-[6%] -left-20" delay={0} rotate={8} />
        <FloatingBlob color="blue" size={140} className="bottom-[8%] left-[4%]" delay={1.2} rotate={-10} />
        <CornerChip color="pink" size={64} className="top-[18%] right-[6%]" />
        <CornerChip color="green" size={90} className="bottom-[14%] right-[2%]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-center">
        {/* Text column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green/25 brut-border rounded-full px-4 py-1.5 font-display font-bold text-sm mb-6 shadow-brut-sm"
          >
            <Sparkles size={15} strokeWidth={2.5} />
            Hi, I'm {profile.firstName}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-[13vw] leading-[1.02] tracking-tight sm:text-6xl md:text-7xl mb-4"
          >
            I build with
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-ink">code</span>
              <span className="absolute left-0 right-0 bottom-1 md:bottom-2 h-4 md:h-5 bg-yellow -z-0" />
            </span>{" "}
            &amp; circuits.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-display font-semibold text-xl md:text-2xl text-blue-deep h-8 mb-5"
          >
            {typed}
            <span className="inline-block w-[3px] h-6 md:h-7 bg-ink ml-1 align-middle animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-muted max-w-xl mb-8 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              onClick={() => scrollTo("work")}
              className="group inline-flex items-center gap-2 bg-yellow font-display font-bold text-base px-6 py-3.5 rounded-full brut-border-thick shadow-brut hover:-translate-y-1 active:translate-y-0 active:shadow-brut-sm transition-all duration-200"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 bg-surface font-display font-bold text-base px-6 py-3.5 rounded-full brut-border-thick shadow-brut hover:-translate-y-1 active:translate-y-0 active:shadow-brut-sm transition-all duration-200"
            >
              <Mail size={18} strokeWidth={2.5} />
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* Avatar / illustration column */}
        <motion.div
          style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="relative aspect-square rounded-[2.5rem] bg-blue brut-border-thick shadow-brut-lg flex items-center justify-center overflow-hidden">
            {/* Placeholder illustration made of shapes since no photo is provided */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "radial-gradient(circle, #16140f 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }} />
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full bg-cream brut-border-thick shadow-brut overflow-hidden">
  <img src={fotoProfil} alt={profile.name} className="w-full h-full object-cover" />
</div>

            <motion.span
              style={{ x: shiftX, y: shiftY }}
              className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-yellow brut-border shadow-brut-sm flex items-center justify-center"
            >
              <CircuitBoard size={26} strokeWidth={2.25} />
            </motion.span>
            <motion.span
              style={{ x: shiftY, y: shiftX }}
              className="absolute bottom-8 right-8 w-14 h-14 rounded-2xl bg-green brut-border shadow-brut-sm flex items-center justify-center animate-float"
            >
              <Wifi size={26} strokeWidth={2.25} />
            </motion.span>
            <motion.span
              style={{ x: shiftX, y: shiftY }}
              className="absolute bottom-16 left-8 w-12 h-12 rounded-xl bg-orange brut-border shadow-brut-sm flex items-center justify-center animate-float-slow"
            >
              <Code2 size={22} strokeWidth={2.25} />
            </motion.span>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-ink text-cream font-display font-bold text-xs md:text-sm px-4 py-2 rounded-full brut-border-thick shadow-brut-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            Available for work
          </div>
        </motion.div>
      </div>
    </section>
  );
}
