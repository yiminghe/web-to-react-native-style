import { removeSpaceFromRgb, endsWith, isNumber } from "../utils";

export default function transform(name, value, { warning, lengthProcessor }) {
  value = removeSpaceFromRgb(value);
  const values = value.split(/\s+/).filter(s => !!s.trim());
  // rn only support shadow-offset and shadow-color
  if (values.length >= 2) {
    let shadowOffset = {} as any;
    let shadowRadius;
    let shadowColor;
    values.forEach(v => {
      if (endsWith(v, "px") || isNumber(v)) {
        // first num means width
        if (!shadowOffset.width) {
          shadowOffset.width = lengthProcessor(name, v);

          // second num means height
        } else if (!shadowOffset.height) {
          shadowOffset.height = lengthProcessor(name, v);

          // third num means radius
        } else if (!shadowRadius) {
          shadowRadius = lengthProcessor(name, v);
        }
      } else if (v !== "inset" && !shadowColor) {
        shadowColor = v;
      }
    });
    const processed: any = {
      shadowOffset,
      shadowOpacity: 1,
      overflow: "visible"
    };

    if (shadowColor) {
      processed.shadowColor = shadowColor;
    }

    if (shadowRadius) {
      processed.shadowRadius = shadowRadius;
    }
    return processed;
  }
  warning(name, value);
  return false;
}
