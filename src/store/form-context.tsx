import { createContext } from "react";

type formContext = {
  currentStep: number;
  setCurrentStep: (c: number) => void;
  yearlyBilling: boolean;
  setYearlyBilling: (b: boolean) => void;
};

const formContext = createContext<formContext>({
  currentStep: 0,
  setCurrentStep: () => {},
  yearlyBilling: false,
  setYearlyBilling: () => {},
});

export default formContext;
