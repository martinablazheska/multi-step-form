import { createContext, useState } from "react";

type formContext = {
  currentStep: number;
  setCurrentStep: (c: number) => void;
  yearlyBilling: boolean;
  setYearlyBilling: (b: boolean) => void;
};

export const formContext = createContext<formContext>({
  currentStep: 0,
  setCurrentStep: () => {},
  yearlyBilling: false,
  setYearlyBilling: () => {},
});

const FormContextProvider: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [yearlyBilling, setYearlyBilling] = useState(false);

  const formContextData: formContext = {
    currentStep,
    setCurrentStep,
    yearlyBilling,
    setYearlyBilling,
  };
  return (
    <formContext.Provider value={formContextData}>
      {props.children}
    </formContext.Provider>
  );
};

export default FormContextProvider;
