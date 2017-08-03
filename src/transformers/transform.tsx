const TRANSFORM_PARTS = {
  perspective: 1,
  rotate: 1,
  rotateX: 1,
  rotateY: 1,
  rotateZ: 1,
  scaleX: 1,
  scaleY: 1,
  translateX: 1,
  translateY: 1,
  skewX: 1,
  skewY: 1,
};

export default function transform(name, value, { warning, lengthProcessor }) {
  const expressionTagReg = /(\w+)\(([^)]+)\)/g;
  let match;
  const ret: any[] = [];
  /* tslint:disable:no-conditional-assignment */
  while ((match = expressionTagReg.exec(value))) {
    let p = match[1];
    const v = match[2];
    if (TRANSFORM_PARTS[p]) {
      if (p === 'rotate') {
        p = 'rotateZ';
      }
      ret.push({
        [p]: lengthProcessor(p, v),
      });
    } else if (p === 'translate' || p === 'skew') {
      const ss = v.split(',').map(s => s.trim()).filter(s => !!s);
      ret.push({
        [`${p}X`]: lengthProcessor(p, ss[0]),
      });
      ret.push({
        [`${p}Y`]: lengthProcessor(p, ss[1]),
      });
    } else if (p === 'scale') {
      const ss = v.split(',').map(s => s.trim()).filter(s => !!s);
      ret.push({
        [`${p}X`]: lengthProcessor(p, ss[0]),
      });
      ret.push({
        [`${p}Y`]: lengthProcessor(p, ss[1] === undefined ? ss[0] : ss[1]),
      });
    } else {
      warning(p, v);
    }
  }
  return {
    [name]: ret,
  };
}
