export const colorData = [
  {
    id: 0,
    category: ["white","monochrome"],
    value: {
      hex: "#FFFFFF",
    },
  },
  {
    id: 1,
    category: ["black","monochrome"],
    value: {
      hex: "#000000",
    },
  },
  {
    id: 2,
    category: ["red"],
    value: {
      hex: "#FF0000",
    },
  },
  {
    id: 3,
    category: ["purple"],
    value: {
      hex: "#800080",
    },
  },
  {
    id: 4,
    category: ["blue"],
    value: {
      hex: "#0000FF",
    },
  },
  {
    id: 5,
    category: ["green"],
    value: {
      hex: "#00FF00",
    },
  },
  {
    id: 6,
    category: ["yellow"],
    value: {
      hex: "#FFFF00",
    },
  },
  {
    id: 7,
    category: ["orange"],
    value: {
      hex: "#FFA500",
    },
  },
  {
    id: 8,
    category: ["red","white"],
    value: {
      hex: "#FFC0CB",
    },
  },
  {
    id: 9,
    category: ["red","brown"],
    value: {
      hex: "#A52A2A",
    },
  },
  {
    id: 10,
    category: ["blue","white"],
    value: {
      hex: "#00FFFF",
    },
  },
  {
    id: 11,
    category: ["purple","pink"],
    value: {
      hex: "#FF00FF",
    },
  },
  {
    id: 12,
    category: ["green"],
    value: {
      hex: "#00FF00",
    },
  },
  {
    id: 13,
    category: ["purple"],
    value: {
      hex: "#4B0082",
    },
  },
  {
    id: 14,
    category: ["purple","pink"],
    value: {
      hex: "#EE82EE",
    },
  },
  {
    id: 15,
    category: ["yellow"],
    value: {
      hex: "#FFD700",
    },
  },
  {
    id: 16,
    category: ["monochrome"],
    value: {
      hex: "#C0C0C0",
    },
  },
  {
    id: 17,
    category: ["blue","green"],
    value: {
      hex: "#008080",
    },
  },
] as const;

export type ColorData = typeof colorData[number];
