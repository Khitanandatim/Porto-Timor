import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/content";
import { bgSolid } from "../data/colorMap";

function SkillCard({ skill, index }) {
  const Icon = Icons[skill.icon] || Icons.Code2;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <Reveal delay={(index % 5) * 0.06}>
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ transformPerspective: 800 }}
        className="bg-surface brut-border-thick rounded-2xl shadow-brut p-5 flex flex-col items-center justify-center text-center gap-3 hover:shadow-brut-lg hover:-translate-y-1 transition-all duration-300"
      >
        <span className={`w-12 h-12 rounded-xl ${bgSolid[skill.color]} brut-border flex items-center justify-center shrink-0`}>
          <Icon size={22} strokeWidth={2.25} />
        </span>
        <span className="font-display font-bold text-sm md:text-base">{skill.name}</span>
      </motion.div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14 md:mb-16 text-center">
          <span className="inline-block font-display font-bold text-sm bg-green/25 brut-border rounded-full px-4 py-1.5 shadow-brut-sm mb-4">
            What I work with
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">Technical Arsenal</h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
