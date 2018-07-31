import { isNumber } from '../utils';

export default function flex(name, value, {
  warning,
}) {
  let processed;
  ['flex'].forEach( (cssName) => {
    if (name === cssName) {
      const values = value.split(/\s+/).filter( s => !!s.trim() );
      if (values.length === 3) {
        processed = {
          ['flexGrow']: parseFloat(values[0]),
          ['flexShrink']: parseFloat(values[1]),
          ['flexBasis']: parseFloat(values[2]),
        };
      } else if (values.length === 2) {
        processed = {
          ['flexGrow']: parseFloat(values[0]),
          ['flexShrink']: parseFloat(values[1]),
        };
      } else if (values.length === 1 && isNumber(values[0])) {
        processed = {
          [name]: parseFloat(values[0]),
        };
      } else {
        warning(name, value);
      }
    }
  });
  return processed;
}
