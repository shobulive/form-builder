import React from "react";
import { Holder } from "./Common";
export const TextInput = ({ handler, placeholder, id, ...props }) => (
  <Holder {...props}>
    <input
      type="text"
      style={{ width: "100%", height: "40px" }}
      placeholder={placeholder}
      onChange={({ target: { value, checked } } = {}) =>
        handler({ [id]: value }, checked)
      }
    ></input>
  </Holder>
);
