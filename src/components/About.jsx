import { Quote, Wrench, Users, Lightbulb } from "lucide-react";
import Reveal from "./Reveal";
import { about } from "../data/content";
import { CornerChip } from "./DecorativeShapes";

const pillars = [
  { icon: Wrench, label: "Problem Solving", color: "bg-yellow" },
  { icon: Users, label: "Team Collaboration", color: "bg-blue" },
  { icon: Lightbulb, label: "Continuous Learning", color: "bg-green" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14 md:mb-16 text-center">
          <span className="inline-block font-display font-bold text-sm bg-blue/20 brut-border rounded-full px-4 py-1.5 shadow-brut-sm mb-4">
            Get to know me
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">About Me</h2>
        </Reveal>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14 items-start">
          {/* Illustration / quote card */}
          <Reveal delay={0.05} className="relative order-2 md:order-1">
            <div className="relative bg-orange brut-border-thick rounded-[2rem] shadow-brut-lg p-8 md:p-10">
              <Quote size={40} className="mb-4" strokeWidth={2} />
              <p className="font-display font-semibold text-lg md:text-xl leading-snug">
                "Turning ideas into functional products, one circuit and one commit at a time."
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-3 bg-cream brut-border rounded-2xl px-4 py-3 shadow-brut-sm"
                  >
                    <span className={`w-9 h-9 rounded-xl ${p.color} brut-border flex items-center justify-center shrink-0`}>
                      <p.icon size={18} strokeWidth={2.25} />
                    </span>
                    <span className="font-display font-semibold text-sm">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <CornerChip color="pink" size={56} className="hidden md:block -top-6 -right-6" />
          </Reveal>

          {/* Paragraphs */}
          <div className="order-1 md:order-2 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="text-base md:text-lg leading-relaxed text-ink/85">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.4} className="flex flex-wrap gap-2 pt-2">
              {about.specializations.map((s) => (
                <span
                  key={s}
                  className="font-display font-semibold text-sm bg-surface brut-border rounded-full px-4 py-2 shadow-brut-sm hover:-translate-y-0.5 hover:shadow-brut transition-all duration-200"
                >
                  {s}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
