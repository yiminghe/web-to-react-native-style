import { removeSpaceFromRgb } from '../utils';

export default function transform(name, value, { warning }) {
  value = removeSpaceFromRgb(value);
  const parts: any[] = value && value.split(/\s+/).filter(s => !!s) || [];
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (p.charAt(0) === '#' || p.slice(0, 3) === 'rgb') {
      return { backgroundColor: p };
    }
  }
  warning(name, value);
  return false;
}
