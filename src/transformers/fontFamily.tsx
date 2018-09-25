import { assoc } from '../utils';

export default function transform(name, value, { warning }) {
  const values = value.split(',').map((v) => {
    let ret = v.trim();
    if (ret.charAt(0) === `'` || ret.charAt(0) === `"`) {
      ret = ret.slice(1, -1);
    }
    return ret;
  });
  if (values.length) {
    return assoc(name, values[0], {});
  } else {
    warning(name, value);
    return false;
  }
}
