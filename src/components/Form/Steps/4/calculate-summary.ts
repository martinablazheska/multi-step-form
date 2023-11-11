import { values, plan, plans } from "../../../../store/form-data";
import { monthlyPrices, yearlyPrices } from "../../../../store/form-context";

function calculateSummary(values: values, yearlyBilling: boolean) {
  let plan: plan = plans[0];
  for (let i = 0; i < plans.length - 1; i++) {
    if (values.selectedPlan === plans[i].name) {
      plan = plans[i];
    }
  }

  let selectedAddOns: {
    name: string;
    monthlyCost: number;
    yearlyCost: number;
  }[] = [];

  if (values.onlineService) {
    selectedAddOns.push({
      name: "Online service",
      monthlyCost: monthlyPrices[0],
      yearlyCost: yearlyPrices[0],
    });
  }

  if (values.largerStorage) {
    selectedAddOns.push({
      name: "Larger storage",
      monthlyCost: monthlyPrices[1],
      yearlyCost: yearlyPrices[1],
    });
  }

  if (values.customizableProfile) {
    selectedAddOns.push({
      name: "Customizable profile",
      monthlyCost: monthlyPrices[2],
      yearlyCost: yearlyPrices[2],
    });
  }

  let total: number = 0;

  if (yearlyBilling) {
    let addOnTotal = 0;
    selectedAddOns.forEach((a) => {
      addOnTotal = +a.yearlyCost;
    });
    total = plan?.yearlyCost + addOnTotal;
  } else {
    let addOnTotal = 0;
    selectedAddOns.forEach((a) => {
      addOnTotal += a.monthlyCost;
    });
    total = plan?.monthlyCost + addOnTotal;
  }

  const summary = {
    plan,
    selectedAddOns,
    total,
  };

  return summary;
}

export default calculateSummary;
