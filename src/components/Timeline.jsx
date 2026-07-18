import * as Icons from "lucide-react";
import Reveal from "./Reveal";
import { timeline } from "../data/content";
import { bgSolid } from "../data/colorMap";

export default function Timeline() {
  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Reveal className="mb-14 md:mb-16 text-center">
          <span className="inline-block font-display font-bold text-sm bg-orange/25 brut-border rounded-full px-4 py-1.5 shadow-brut-sm mb-4">
            How I got here
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">My Journey</h2>
        </Reveal>

        <div className="relative">
          {/* vertical rule */}
          <div className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-1 bg-ink md:-translate-x-1/2 rounded-full" />

          <div className="flex flex-col gap-10 md:gap-14">
            {timeline.map((item, i) => {
              const Icon = Icons[item.icon] || Icons.Rocket;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className="relative flex md:items-center md:justify-between gap-5 md:gap-8"
                >
                  {/* Left slot (desktop) */}
                  <div className={`hidden md:block md:w-5/12 ${isEven ? "order-1 text-right" : "order-3 text-left"}`}>
                    {isEven && <TimelineCard item={item} Icon={Icon} delay={i * 0.05} align="right" />}
                  </div>

                  {/* Node */}
                  <div className="relative z-10 shrink-0 order-2">
                    <Reveal delay={i * 0.05}>
                      <span
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${bgSolid[item.color]} brut-border-thick shadow-brut-sm flex items-center justify-center`}
                      >
                        <Icon size={18} className="md:w-5 md:h-5" strokeWidth={2.25} />
                      </span>
                    </Reveal>
                  </div>

                  {/* Mobile card (always shown) + desktop right slot */}
                  <div className="flex-1 md:w-5/12 md:order-3">
                    <div className="md:hidden">
                      <TimelineCard item={item} Icon={Icon} delay={i * 0.05} align="left" />
                    </div>
                    <div className="hidden md:block">
                      {!isEven && <TimelineCard item={item} Icon={Icon} delay={i * 0.05} align="left" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, delay, align }) {
  return (
    <Reveal delay={delay} y={20}>
      <div
        className={`bg-surface brut-border-thick rounded-3xl shadow-brut p-5 md:p-6 hover:-translate-y-1 hover:shadow-brut-lg transition-all duration-300 ${
          align === "right" ? "md:ml-auto" : ""
        }`}
      >
        <span className="font-display font-bold text-xs uppercase tracking-wider text-blue-deep">
          {item.year}
        </span>
        <h3 className="font-display font-bold text-lg md:text-xl mt-1 mb-1.5">{item.title}</h3>
        <p className="text-sm md:text-base text-ink/75 leading-relaxed">{item.description}</p>
      </div>
    </Reveal>
  );
}
