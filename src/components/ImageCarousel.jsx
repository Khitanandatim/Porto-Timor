import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { bgSolid } from "../data/colorMap";

export default function ImageCarousel({ images = [], color = "yellow", title = "", interval = 3500 }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple || paused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [hasMultiple, paused, images.length, interval]);

  function goTo(i, e) {
    e?.stopPropagation();
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  }

  function prev(e) {
    e?.stopPropagation();
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next(e) {
    e?.stopPropagation();
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  }

  if (!hasImages) {
    return (
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <span className={`w-20 h-20 rounded-3xl ${bgSolid[color]} brut-border-thick shadow-brut flex items-center justify-center`}>
          <ImageIcon size={32} strokeWidth={2} />
        </span>
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${title} — foto ${index + 1}`}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Foto sebelumnya"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface brut-border shadow-brut-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            aria-label="Foto berikutnya"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface brut-border shadow-brut-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => goTo(i, e)}
                aria-label={`Ke foto ${i + 1}`}
                className={`h-2 rounded-full brut-border transition-all duration-300 ${
                  i === index ? `w-6 ${bgSolid[color]}` : "w-2 bg-surface"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}