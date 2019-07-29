import { removeSpaceFromRgb, endsWith, isNumber } from "../utils";

export default function transform(name, value, { lengthProcessor }) {
  value = removeSpaceFromRgb(value);
  const values = value.trim().split(/\s+/);
  const pxs: any = [];
  let textShadowColor;
  values.forEach(v => {
    if (endsWith(v, "px") || isNumber(v)) {
      pxs.push(v);
    } else {
      textShadowColor = v;
    }
  });
  const all: any = {};
  if (textShadowColor) {
    all.textShadowColor = textShadowColor;
  }
  if (pxs.length >= 3) {
    all.textShadowRadius = lengthProcessor(name, pxs[2]);
  }
  if (pxs.length >= 2) {
    const textShadowOffset = (all.textShadowOffset = {} as any);
    textShadowOffset.width = lengthProcessor(name, pxs[0]);
    textShadowOffset.height = lengthProcessor(name, pxs[1]);
  }
  return all;
}
