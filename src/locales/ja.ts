import lang from "./lang";


const ja = {
  ...lang,
  APP_TITLE: "Color Flow",
  // multiple input
  MULTIPLE_INPUT_TYPE_HEX: "HEX",
  MULTIPLE_INPUT_TYPE_RGB: "RGB",
  MULTIPLE_INPUT_TYPE_HSL: "HSL",
  MULTIPLE_INPUT_HEX_PLACEHOLDER: "000000",
  MULTIPLE_INPUT_RGB_PLACEHOLDER: "0,0,0",
  MULTIPLE_INPUT_HSL_PLACEHOLDER: "0,0%,0%",
} as const;

export default ja;
