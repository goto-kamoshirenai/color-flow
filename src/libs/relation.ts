import { hexToRgb, rgbToHex } from "./conversion";

// hexから補色を求める
export const getComplementaryColor = (hex: string) => {
  const rgb = hexToRgb(hex);
  const complementaryColor = rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b);
  return complementaryColor;
};

// 元の色と補色の間の色を求める
export const getBetweenColor = (hex: string) => {
  const rgb = hexToRgb(hex);
  const complementaryColor = getComplementaryColor(hex);
  const complementaryRgb = hexToRgb(complementaryColor);
  const betweenColor = rgbToHex(
    (rgb.r + complementaryRgb.r) / 2,
    (rgb.g + complementaryRgb.g) / 2,
    (rgb.b + complementaryRgb.b) / 2
  );
  return betweenColor;
};
