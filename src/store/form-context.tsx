import { createContext, useState } from "react";

type formContext = {
  currentStep: number;
  setCurrentStep: (c: number) => void;
  yearlyBilling: boolean;
  setYearlyBilling: (b: boolean) => void;
  prices: number[];
  setPrices: (p: number[]) => void;
  isSubmitted: boolean;
  setIsSubmitted: (s: boolean) => void;
};

export const formContext = createContext<formContext>({
  currentStep: 0,
  setCurrentStep: () => {},
  yearlyBilling: false,
  setYearlyBilling: () => {},
  prices: [],
  setPrices: () => {},
  isSubmitted: false,
  setIsSubmitted: () => {},
});

export const monthlyPrices: number[] = [9, 12, 15];
export const yearlyPrices: number[] = [90, 120, 150];

const FormContextProvider: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [yearlyBilling, setYearlyBilling] = useState(false);
  const [prices, setPrices] = useState(monthlyPrices);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formContextData: formContext = {
    currentStep,
    setCurrentStep,
    yearlyBilling,
    setYearlyBilling,
    prices,
    setPrices,
    isSubmitted,
    setIsSubmitted,
  };
  return (
    <formContext.Provider value={formContextData}>
      {props.children}
    </formContext.Provider>
  );
};

export default FormContextProvider;
