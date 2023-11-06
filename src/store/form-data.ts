type stepData = {
  step: number;
  name: string;
  title: string;
  description: string;
};

type stepOneInputs = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  name: string;
};

type stepOneValues = {
  name: string;
  email: string;
  phone: string;
};
type stepTwoValues = {
  selectedPlan: string;
};

type stepThreeValues = {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
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

export const stepOneInputs: stepOneInputs[] = [
  {
    id: "1",
    type: "text",
    label: "Name",
    placeholder: "e.g. Stephen King",
    name: "name",
  },
  {
    id: "2",
    type: "text",
    label: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
    name: "email",
  },
  {
    id: "3",
    type: "tel",
    label: "Phone Number",
    placeholder: "e.g. +1 234 567 890",
    name: "phone",
  },
];

export const stepOneValues: stepOneValues = {
  name: "",
  email: "",
  phone: "",
};
export const stepTwoValues: stepTwoValues = {
  selectedPlan: "",
};

export const stepThreeValues: stepThreeValues = {
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
};
