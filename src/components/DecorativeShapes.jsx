import { bgSolid } from "../data/colorMap";

/**
 * A single blobby, floating accent shape. Positioned absolutely by the
 * parent via `className` (e.g. "top-10 left-[-40px]").
 */
export function FloatingBlob({ color = "yellow", size = 140, className = "", delay = 0, rotate = 0 }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none animate-blob ${bgSolid[color]} brut-border-thick shadow-brut ${className}`}
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        "--tw-rotate": `${rotate}deg`,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}

/**
 * A small rounded chip/pill shape (quarter-circle style accent), similar to
 * the corner shapes in the reference design.
 */
export function CornerChip({ color = "pink", size = 90, className = "", rotate = 0 }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none ${bgSolid[color]} brut-border-thick shadow-brut rounded-full animate-float-slow ${className}`}
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}
    />
  );
}

export default function DecorativeShapes({ variant = "hero" }) {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden -z-0 pointer-events-none">
        <FloatingBlob color="yellow" size={180} className="top-[8%] left-[-60px]" delay={0} rotate={12} />
        <FloatingBlob color="blue" size={120} className="top-[65%] left-[6%]" delay={1.4} rotate={-8} />
        <CornerChip color="pink" size={70} className="top-[20%] right-[8%]" rotate={0} />
        <CornerChip color="green" size={100} className="bottom-[10%] right-[-30px]" rotate={0} />
      </div>
    );
  }
  return null;
}
