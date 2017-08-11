const ps = {
  fontWeight: 1,
};

export default function display(name, value) {
  if (ps[name]) {
    return { [name]: String(value) };
  }
}
