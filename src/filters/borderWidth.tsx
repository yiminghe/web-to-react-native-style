export default function borderWidth(name, value, { lengthProcessor }) {
  let processed;
  ["borderWidth"].forEach(cssName => {
    // reference: https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width
    if (name === cssName) {
      const values = value
        .split(/\s+/)
        .filter(s => !!s.trim())
        .map(v => lengthProcessor(name, v));
      if (values.length === 4) {
        processed = {
          ["borderTopWidth"]: values[0],
          ["borderRightWidth"]: values[1],
          ["borderBottomWidth"]: values[2],
          ["borderLeftWidth"]: values[3]
        };
      } else if (values.length === 3) {
        processed = {
          ["borderTopWidth"]: values[0],
          ["borderLeftWidth"]: values[1],
          ["borderRightWidth"]: values[1],
          ["borderBottomWidth"]: values[2]
        };
      } else if (values.length === 2) {
        processed = {
          ["borderTopWidth"]: values[0],
          ["borderBottomWidth"]: values[0],
          ["borderLeftWidth"]: values[1],
          ["borderRightWidth"]: values[1]
        };
      } else {
        processed = { [name]: values[0] };
      }
    }
  });
  return processed;
}
