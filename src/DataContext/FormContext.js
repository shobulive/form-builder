import { createContext, useEffect, useState } from "react";
import { FormComponentTypes, VALIDATION_TYPES } from "../constants";

export const FormContext = createContext();

export const FormContextDataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedJSON, setSelectedJSON] = useState(null);
  useEffect(() => {
    const newData = {};
    // populate default values
    if (selectedJSON) {
      for (let field of selectedJSON) {
        if (!field.defaultValue) continue;
        if (field.type === FormComponentTypes.CHECK_BOX)
          newData[field.id] = [field.defaultValue];
        else newData[field.id] = field.defaultValue;
      }
      setData(newData);
    }
  }, [selectedJSON]);

  const submitAction = (renderJSON) => {
    let errorsNew = {};
    for (let jsonProp of renderJSON) {
      for (let validation of jsonProp.validations) {
        const error = VALIDATION_TYPES[validation.type](
          data[jsonProp.id],
          validation.value
        );
        if (error) {
          errorsNew[jsonProp.id] = error;
        }
      }
    }
    setErrors(errorsNew);
  };
  const writeData = (inputData, type, checked) => {
    if (type === FormComponentTypes.CHECK_BOX) {
      const KEY = Object.keys(inputData)[0];
      if (checked) {
        setData({
          ...data,
          ...{ [KEY]: [...(data[KEY] || []), inputData[KEY]] },
        });
      } else {
        if (data[KEY] && data[KEY].length === 1) {
          delete data[KEY];
          setData(data);
        } else
          setData({
            ...data,
            [KEY]: data[KEY].filter((item) => item !== inputData[KEY]),
          });
      }
    } else setData({ ...data, ...inputData });
  };
  return (
    <FormContext.Provider
      value={{ writeData, submitAction, errors, selectedJSON, setSelectedJSON }}
    >
      {children}
    </FormContext.Provider>
  );
};
