export default function position(name, value) {
  // ignore
  if (name === "position" && value === "relative") {
    return false;
  }
}
