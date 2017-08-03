const numberReSnippet = '(?:NaN|-?(?:(?:\\d+|\\d*\\.\\d+)(?:[E|e][+|-]?\\d+)?|Infinity))';
const matchOnlyNumberRe = new RegExp(`^(${numberReSnippet})$`);

export function isNumber(str) {
  return !!str.trim().match(matchOnlyNumberRe);
}

export function camelCase(name) {
  return name.replace(/-(\w)/g, (_w, g) => g.toUpperCase());
}

export function endsWith(str, suffix) {
  return str && str.slice(0 - suffix.length) === suffix;
}

export function removeSpaceFromRgb(value) {
  return value.replace(/\([^)]+\)/, m => m.replace(/\s+/g, ''));
}
