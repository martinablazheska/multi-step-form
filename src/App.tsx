import formContext from "./store/form-context";
import { useState } from "react";
import Main from "./components/Main/Main";
import "./App.scss";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [yearlyBilling, setYearlyBilling] = useState(false);

  const formContextData = {
    currentStep,
    setCurrentStep,
    yearlyBilling,
    setYearlyBilling,
  };
  return (
    <formContext.Provider value={formContextData}>
      <Main />
    </formContext.Provider>
  );
}

export default App;
