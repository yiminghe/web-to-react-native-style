export default function paddingMargin(name, value, { lengthProcessor }) {
  let processed;
  ['padding', 'margin'].forEach((cssName) => {
    if (name === cssName) {
      const values = value.split(/\s+/).filter(s => !!s.trim()).map(v => lengthProcessor(name, v));
      if (values.length === 4) {
        processed = {
          [`${cssName}Top`]: values[0],
          [`${cssName}Right`]: values[1],
          [`${cssName}Bottom`]: values[2],
          [`${cssName}Left`]: values[3],
        };
      } else if (values.length === 3) {
        processed = {
          [`${cssName}Top`]: values[0],
          [`${cssName}Right`]: values[1],
          [`${cssName}Bottom`]: values[2],
          [`${cssName}Left`]: values[1],
        };
      } else if (values.length === 2) {
        processed = {
          [`${cssName}Top`]: values[0],
          [`${cssName}Right`]: values[1],
          [`${cssName}Bottom`]: values[0],
          [`${cssName}Left`]: values[1],
        };
      } else {
        processed = { [name]: values[0] };
      }
    }
  });
  return processed;
}
