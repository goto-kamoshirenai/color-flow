// Hex to RGB
export const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return { r, g, b };
};
// RGB to Hex
export const rgbToHex = (r: number, g: number, b: number) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// hex to cmyk
export const hexToCmyk = (hex: string) => {
  const rgb = hexToRgb(hex);
  const c = 1 - rgb.r / 255;
  const m = 1 - rgb.g / 255;
  const y = 1 - rgb.b / 255;
  const k = Math.min(c, m, y);
  return { c, m, y, k };
};
// hex to hsl
export const hexToHsl = (hex: string) => {
  const rgb = hexToRgb(hex);
  const h = rgb.r / 255;
  const s = rgb.g / 255;
  const l = rgb.b / 255;
  return { h, s, l };
};
// hex to hsv
export const hexToHsv = (hex: string) => {
  const rgb = hexToRgb(hex);
  const h = rgb.r / 255;
  const s = rgb.g / 255;
  const v = rgb.b / 255;
  return { h, s, v };
};
// hex to cie
export const hexToCie = (hex: string) => {
  const rgb = hexToRgb(hex);
  const x = rgb.r / 255;
  const y = rgb.g / 255;
  const z = rgb.b / 255;
  return { x, y, z };
};
// cmyk to hex
export const cmykToHex = (c: number, m: number, y: number, k: number) => {
  const r = 255 * (1 - c) * (1 - k);
  const g = 255 * (1 - m) * (1 - k);
  const b = 255 * (1 - y) * (1 - k);
  return rgbToHex(r, g, b);
};
// hsl to rgb
export const hslToRgb = (h: number, s: number, l: number) => {
  const r = h * 255;
  const g = s * 255;
  const b = l * 255;
  return { r, g, b };
};
// hsv to rgb
export const hsvToRgb = (h: number, s: number, v: number) => {
  const r = h * 255;
  const g = s * 255;
  const b = v * 255;
  return { r, g, b };
};
// cie to rgb
export const cieToRgb = (x: number, y: number, z: number) => {
  const r = x * 255;
  const g = y * 255;
  const b = z * 255;
  return { r, g, b };
};
// hsl to hex
export const hslToHex = (h: number, s: number, l: number) => {
  const rgb = hslToRgb(h, s, l);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
};
// hsv to hex
export const hsvToHex = (h: number, s: number, v: number) => {
  const rgb = hsvToRgb(h, s, v);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
};
// cie to hex
export const cieToHex = (x: number, y: number, z: number) => {
  const rgb = cieToRgb(x, y, z);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
};
// rgb to hsl
export const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
};
