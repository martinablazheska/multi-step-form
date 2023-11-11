import { createContext, useState } from "react";

type formContext = {
  currentStep: number;
  setCurrentStep: (c: number) => void;
  yearlyBilling: boolean;
  setYearlyBilling: (b: boolean) => void;
  prices: number[];
  setPrices: (p: number[]) => void;
};

export const formContext = createContext<formContext>({
  currentStep: 0,
  setCurrentStep: () => {},
  yearlyBilling: false,
  setYearlyBilling: () => {},
  prices: [],
  setPrices: () => {},
});

export const monthlyPrices: number[] = [9, 12, 15];
export const yearlyPrices: number[] = [90, 120, 150];

const FormContextProvider: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  const [currentStep, setCurrentStep] = useState(4);
  const [yearlyBilling, setYearlyBilling] = useState(false);
  const [prices, setPrices] = useState(monthlyPrices);

  const formContextData: formContext = {
    currentStep,
    setCurrentStep,
    yearlyBilling,
    setYearlyBilling,
    prices,
    setPrices,
  };
  return (
    <formContext.Provider value={formContextData}>
      {props.children}
    </formContext.Provider>
  );
};

export default FormContextProvider;
