export default function display(name, value, { warning, style }) {
  if (name === 'display' && value === 'flex') {
    const all: any = {};
    if (!style['flex-direction']) {
      all.flexDirection = 'row';
    }
    if (!style['flex-wrap']) {
      all.flexWrap = 'wrap';
    }
    return all;
  }
}
