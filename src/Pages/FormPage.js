import { useContext } from "react";
import { Button, MainContainer, P, Select } from "../Components/Common";
import { FormComponents } from "../Components/FormComponents";
import { FormContext } from "../DataContext/FormContext";
import json1 from "../RenderJson/Json1.json";
import json2 from "../RenderJson/Json2.json";

const JSONS = [json1, json2];

export const FormPage = () => {
  const {
    writeData,
    submitAction,
    errors,
    selectedJSON,
    setSelectedJSON,
  } = useContext(FormContext);
  return (
    <MainContainer>
      <Select
        onChange={({ target: { value } } = {}) => setSelectedJSON(JSONS[value])}
      >
        <option disabled selected value>
          Please select a JSON
        </option>
        {JSONS.map((_json, index) => (
          <option key={index} value={index}>{`JSON #${index + 1}`}</option>
        ))}
      </Select>
      {!selectedJSON && <P>Select a JSON to continue</P>}
      {selectedJSON &&
        selectedJSON.map((fieldProps, index) => {
          const Component = FormComponents[fieldProps.type];
          if (!Component) return null;
          return (
            <Component
              key={index}
              {...fieldProps}
              error={errors[fieldProps.id]}
              handler={writeData}
            ></Component>
          );
        })}
      <Button onClick={() => submitAction(selectedJSON)}>Submit</Button>
    </MainContainer>
  );
};
