import { assoc } from "../utils";

const ps = {
  fontWeight: 1
};

export default function display(name, value) {
  if (ps[name]) {
    return assoc(name, String(value));
  }
}
