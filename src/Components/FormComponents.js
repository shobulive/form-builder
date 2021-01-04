import { FormComponentTypes } from "../constants";
import { Checkbox } from "./Checkbox";
import { RadioButton } from "./RadioButton";
import { TextInput } from "./TextInput";

export const FormComponents = {
  [FormComponentTypes.TEXT_INPUT]: TextInput,
  [FormComponentTypes.RADIO_BUTTON]: RadioButton,
  [FormComponentTypes.CHECK_BOX]: Checkbox,
};
