import * as Icons from "lucide-react";
import Reveal from "./Reveal";
import { infoCards } from "../data/content";
import { bgSoft } from "../data/colorMap";

export default function InfoCards() {
  return (
    <section className="relative py-6 md:py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {infoCards.map((card, i) => {
            const Icon = Icons[card.icon] || Icons.Info;
            return (
              <Reveal
                key={card.label}
                delay={i * 0.06}
                className={card.wide ? "col-span-2" : "col-span-1"}
              >
                <div
                  className={`h-full bg-surface brut-border-thick rounded-3xl shadow-brut p-5 md:p-6 hover:-translate-y-1.5 hover:shadow-brut-lg transition-all duration-300 ${bgSoft[card.color]}`}
                >
                  <span className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-cream brut-border flex items-center justify-center mb-3 shadow-brut-sm">
                    <Icon size={20} strokeWidth={2.25} />
                  </span>
                  <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-muted mb-1">
                    {card.label}
                  </h4>
                  <p className="font-display font-bold text-base md:text-lg leading-snug break-words">
                    {card.value}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
