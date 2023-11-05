type stepData = {
  step: number;
  name: string;
  title: string;
  description: string;
};

type textInputs = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  name: string;
};

type formValues = {
  name: string;
  email: string;
  phone: string;
  yearlyBilling: boolean;
  selectedPlan: string;
  addOns: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
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

export const stepOneInputs: textInputs[] = [
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

export default formData;

export const initialFormValues: formValues = {
  name: "",
  email: "",
  phone: "",
  yearlyBilling: false,
  selectedPlan: "",
  addOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};
