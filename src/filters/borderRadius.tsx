export default function borderRadius(name, value, { lengthProcessor }) {
  let processed;
  ["borderRadius"].forEach(cssName => {
    // reference: https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius
    if (name === cssName) {
      const values = value
        .split(/\s+/)
        .filter(s => !!s.trim())
        .map(v => lengthProcessor(name, v));
      if (values.length === 4) {
        processed = {
          ["borderTopLeftRadius"]: values[0],
          ["borderTopRightRadius"]: values[1],
          ["borderBottomRightRadius"]: values[2],
          ["borderBottomLeftRadius"]: values[3]
        };
      } else if (values.length === 3) {
        processed = {
          ["borderTopLeftRadius"]: values[0],
          ["borderTopRightRadius"]: values[1],
          ["borderBottomLeftRadius"]: values[1],
          ["borderBottomRightRadius"]: values[2]
        };
      } else if (values.length === 2) {
        processed = {
          ["borderTopLeftRadius"]: values[0],
          ["borderBottomRightRadius"]: values[0],
          ["borderTopRightRadius"]: values[1],
          ["borderBottomLeftRadius"]: values[1]
        };
      } else {
        processed = { [name]: values[0] };
      }
    }
  });
  return processed;
}
