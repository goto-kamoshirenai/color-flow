import lang from "./lang";

const en = {
  ...lang,
  APP_TITLE: "Color Flow",
  // multiple input
  MULTIPLE_INPUT_TYPE_HEX: "HEX",
  MULTIPLE_INPUT_TYPE_RGB: "RGB",
  MULTIPLE_INPUT_TYPE_HSL: "HSL",
} as const;

export default en;
