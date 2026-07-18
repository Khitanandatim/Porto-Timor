// Tailwind's compiler scans source for literal class strings, so color
// classes must be written out fully here rather than built dynamically
// (e.g. `bg-${color}`) or they will be purged from the final CSS.

export const bgSolid = {
  yellow: "bg-yellow",
  blue: "bg-blue",
  green: "bg-green",
  orange: "bg-orange",
  pink: "bg-pink",
  purple: "bg-purple",
};

export const textSolid = {
  yellow: "text-yellow-deep",
  blue: "text-blue-deep",
  green: "text-green-deep",
  orange: "text-orange-deep",
  pink: "text-pink",
  purple: "text-purple",
};

export const bgSoft = {
  yellow: "bg-yellow/25",
  blue: "bg-blue/20",
  green: "bg-green/20",
  orange: "bg-orange/20",
  pink: "bg-pink/20",
  purple: "bg-purple/20",
};

export const ring = {
  yellow: "focus:shadow-[4px_4px_0px_0px_#f5b700]",
  blue: "focus:shadow-[4px_4px_0px_0px_#1c6fe0]",
  green: "focus:shadow-[4px_4px_0px_0px_#2fae52]",
  orange: "focus:shadow-[4px_4px_0px_0px_#ea6a10]",
  pink: "focus:shadow-[4px_4px_0px_0px_#ff5d8f]",
  purple: "focus:shadow-[4px_4px_0px_0px_#9b8cff]",
};
