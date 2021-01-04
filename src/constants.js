export const VALIDATION_TYPES = {
  MANDATORY: (input) => (!input ? "This field is required" : null),
  MAX_LENGTH: (input, value) =>
    input && input.length > value
      ? `Input length should be ${value} characters or less`
      : null,
  TEXT_ONLY: (input) =>
    input && !new RegExp("^[a-zA-Z0-9_ ]*$").test(input)
      ? "Only text allowed"
      : null,
  NUMBER_ONLY: (input) =>
    input && !new RegExp("^[0-9]*$").test(input)
      ? "Only numbers allowed"
      : null,
  AT_LEAST: (input, value) =>
    input && input.length < value ? "At least two should be selected" : null,
};

export const FormComponentTypes = {
  TEXT_INPUT: "TEXT_INPUT",
  RADIO_BUTTON: "RADIO_BUTTON",
  CHECK_BOX: "CHECK_BOX",
};
