import { assoc } from '../utils';

export default function borderColor(name, value) {
  let processed;
  ['borderColor'].forEach( (cssName) => {
    // reference: https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color
    if (name === cssName) {
      const values = value.split(/\s+/).filter( s => !!s.trim() );
      if (values.length === 4) {
        processed = {
          borderTopColor: values[0],
          borderRightColor: values[1],
          borderBottomColor: values[2],
          borderLeftColor: values[3],
        };
      } else if (values.length === 3) {
        processed = {
          borderTopColor: values[0],
          borderLeftColor: values[1],
          borderRightColor: values[1],
          borderBottomColor: values[2],
        };
      } else if (values.length === 2) {
        processed = {
          borderTopColor: values[0],
          borderBottomColor: values[0],
          borderLeftColor: values[1],
          borderRightColor: values[1],
        };
      } else {
        processed = assoc(name, values[0]);
      }
    }
  });
  return processed;
}
