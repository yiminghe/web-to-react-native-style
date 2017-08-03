import { endsWith } from '../utils';

const BORDER_STYLE_ENUM = {
  none: 1,
  hidden: 1,
  dotted: 1,
  dashed: 1,
  solid: 1,
  double: 1,
  groove: 1,
  ridge: 1,
  inset: 1,
  outset: 1,
};

const VALID_BORDER_STYLE_ENUM = {
  solid: 1,
  dotted: 1,
  dashed: 1,
};

const DEFAULT_BORDER_STYLE = 'solid';

export default function border(name, value, { warning, lengthProcessor }) {
  let processed;
  ['border', 'borderTop', 'borderLeft', 'borderRight', 'borderBottom'].forEach((cssName) => {
    // react-native does not support border-bottom-style
    if (name === `${cssName}Style` && name !== 'borderStyle') {
      warning(name, value);
      processed = false;
    } else if (name === cssName) {
      const values = value.split(/\s+/).filter(s => !!s.trim());
      const ret: any = {};
      values.forEach((v) => {
        v = v.toLowerCase();
        if (endsWith(v, 'px')) {
          ret[`${cssName}Width`] = lengthProcessor(name, v);
        } else if (BORDER_STYLE_ENUM[v]) {
          if (cssName === 'border') {
            ret[`${cssName}Style`] = VALID_BORDER_STYLE_ENUM[v] ? v : DEFAULT_BORDER_STYLE;
          } else {
            warning(`${cssName}Style`, value);
          }
        } else {
          ret[`${cssName}Color`] = v;
        }
      });
      processed = ret;
    }
  });
  return processed;
}
