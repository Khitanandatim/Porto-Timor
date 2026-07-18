import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import * as Icons from "lucide-react";
import Reveal from "./Reveal";
import { stats } from "../data/content";
import { bgSolid } from "../data/colorMap";

function Counter({ value, suffix, duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    }
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="bg-ink text-cream rounded-[2.5rem] brut-border-thick shadow-brut-lg px-6 py-12 md:py-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff8ef 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = Icons[stat.icon] || Icons.Star;
              return (
                <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${bgSolid[stat.color]} brut-border flex items-center justify-center mx-auto mb-4 text-ink`}
                  >
                    <Icon size={22} strokeWidth={2.25} />
                  </div>
                  <div className="font-display font-extrabold text-3xl md:text-5xl mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-display font-medium text-xs md:text-sm text-cream/70 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
