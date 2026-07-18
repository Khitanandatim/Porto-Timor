import Reveal from "./Reveal";
import ImageCarousel from "./ImageCarousel";
import { labGallery } from "../data/content";

export default function LabGallery() {
  if (!labGallery.images || labGallery.images.length === 0) return null;

  return (
    <section className="relative py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="bg-surface brut-border-thick rounded-[2rem] shadow-brut-lg overflow-hidden">
            <div className="relative h-72 md:h-96 border-b-4 border-ink bg-yellow/20 group">
              <ImageCarousel
                images={labGallery.images}
                color="yellow"
                title={labGallery.title}
                interval={3000}
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="font-display font-bold text-lg md:text-xl mb-1">{labGallery.title}</h3>
              <p className="text-sm md:text-base text-ink/70">{labGallery.subtitle}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}