import React from "react";
import { GlobalStyles } from "./Components/GlobalStyles";
import { FormContextDataProvider } from "./DataContext/FormContext";
import { FormPage } from "./Pages/FormPage";
const App = () => (
  <FormContextDataProvider>
    <GlobalStyles />
    <FormPage />
  </FormContextDataProvider>
);

export default App;
