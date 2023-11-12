import {
  values,
  plans,
  addOns,
  addOn,
  plan,
} from "../../../../store/form-data";

export type summaryType = {
  plan: plan;
  selectedAddOns: addOn[];
  total: number;
};

function calculateSummary(values: values, yearlyBilling: boolean) {
  const plan = plans.find((p) => p.name === values.selectedPlan) as plan;

  let selectedAddOns: addOn[] = [];

  if (values.onlineService) {
    selectedAddOns.push(addOns[0]);
  }

  if (values.largerStorage) {
    selectedAddOns.push(addOns[1]);
  }

  if (values.customizableProfile) {
    selectedAddOns.push(addOns[2]);
  }

  let total: number = 0;
  if (plan !== undefined) {
    if (yearlyBilling) {
      let addOnTotal = 0;
      selectedAddOns.forEach((a) => {
        addOnTotal = +a.yearlyPrice;
      });
      total = plan.yearlyCost + addOnTotal;
    } else {
      let addOnTotal = 0;
      selectedAddOns.forEach((a) => {
        addOnTotal += a.monthlyPrice;
      });
      total = plan.monthlyCost + addOnTotal;
    }
  }
  const summary: summaryType = {
    plan,
    selectedAddOns,
    total,
  };

  return summary;
}

export default calculateSummary;
