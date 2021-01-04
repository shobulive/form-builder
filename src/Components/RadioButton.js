import React from "react";
import { Holder, OptionContainer } from "./Common";

export const RadioButton = ({
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
            name={id}
            type="radio"
            value={option.id}
            onChange={({ target: { value } } = {}) => handler({ [id]: value })}
            defaultChecked={defaultValue === option.id}
          />
          <label htmlFor={option}>{option.value}</label>
        </div>
      ))}
    </OptionContainer>
  </Holder>
);
