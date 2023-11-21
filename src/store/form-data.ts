type stepData = {
  step: number;
  name: string;
  title: string;
  description: string;
};

export type values = {
  name: string;
  email: string;
  phone: string;
  selectedPlan: string;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
};

export type plan = {
  name: string;
  monthlyCost: number;
  yearlyCost: number;
};

export type addOn = {
  name: string;
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export type errors = {
  name?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
};

export type touched = {
  name?: boolean | undefined;
  email?: boolean | undefined;
  phone?: boolean | undefined;
};

const formData: stepData[] = [
  {
    step: 1,
    name: "Your Info",
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    step: 2,
    name: "Select Plan",
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    step: 3,
    name: "Add-ons",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    step: 4,
    name: "Summary",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

export default formData;

export const initialValues: values = {
  name: "",
  email: "",
  phone: "",
  selectedPlan: "Arcade",
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
};

export const plans: plan[] = [
  {
    name: "Arcade",
    monthlyCost: 9,
    yearlyCost: 90,
  },
  {
    name: "Advanced",
    monthlyCost: 12,
    yearlyCost: 120,
  },
  {
    name: "Pro",
    monthlyCost: 15,
    yearlyCost: 150,
  },
];

export const addOns: addOn[] = [
  {
    name: "onlineService",
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: "largerStorage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },

  {
    name: "customizableProfile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
