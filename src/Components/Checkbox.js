import React from "react";
import { FormComponentTypes } from "../constants";
import { Holder, OptionContainer } from "./Common";
export const Checkbox = ({
  handler,
  options = [],
  id,
  defaultValue,
  ...props
}) => (
  <Holder {...props}>
    <OptionContainer>
      {options.map((option, index) => (
        <div key={index}>
          <input
            id={option}
            type="checkbox"
            onChange={({ target: { value, checked } } = {}) =>
              handler({ [id]: value }, FormComponentTypes.CHECK_BOX, checked)
            }
            value={option.id}
            defaultChecked={defaultValue === option.id}
          />
          <label htmlFor={option}>{option.value}</label>
        </div>
      ))}
    </OptionContainer>
  </Holder>
);
