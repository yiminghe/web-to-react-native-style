import { isNumber, camelCase, endsWith } from './utils';
import transformers from './transformers/index';
import filters from './filters/index';

export function transform(_name, value, { lengthProcessor, style = {}, reasons } = {} as any) {
  let name = camelCase(_name);
  const processLength = lengthProcessor || defaultLengthProcessor;

  function defaultLengthProcessor(pname, pvalue) {
    if (typeof pvalue === 'string') {
      if (endsWith(pvalue, 'px')) {
        return parseFloat(pvalue.slice(0, -2));
      }
      if (isNumber(pvalue)) {
        return parseFloat(pvalue);
      }
      if (pvalue === 'auto') {
        warning(pname, pvalue);
        return undefined;
      }
    }
    return pvalue;
  }

  function warning(pname, pvalue, preason?) {
    if (reasons) {
      reasons.push(`[style] '${pname}: ${pvalue}' is not supported${preason ? `: ${preason}` : ''}`);
    }
  }

  const params = {
    lengthProcessor: processLength,
    warning,
    style,
  };

  if (typeof value !== 'string') {
    return {
      [name]: value,
    };
  }

  for (let i = 0; i < filters.length; i++) {
    const ret = filters[i](name, value, params);
    if (ret !== undefined) {
      return ret;
    }
  }

  if (transformers[name]) {
    return transformers[name](name, value, params);
  }

  value = processLength(name, value);

  return {
    [name]: value,
  };
}
