const forbiddenProperty = {
  font: 1,
  cursor: 1,
  overflowX: 1,
  overflowY: 1,
  textOverflow: 1,
  transition: 1,
  content: 1,
  whiteSpace: 1,
};

export default function forbidden(name, value, { warning }) {
  if (forbiddenProperty[name]) {
    warning(name, value);
    return false;
  }
}
