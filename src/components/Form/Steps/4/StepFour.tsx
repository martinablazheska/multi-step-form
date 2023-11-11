import formData from "../../../../store/form-data";

import { useContext } from "react";
import { formContext } from "../../../../store/form-context";

import calculateSummary from "./calculate-summary";

import classes from "./StepFour.module.scss";

const StepFour: React.FC<{
  name: string;
  email: string;
  phone: string;
  selectedPlan: string;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}> = (values) => {
  const { yearlyBilling, setCurrentStep } = useContext(formContext);

  const summary = calculateSummary(values, yearlyBilling);

  function changeHandler() {
    setCurrentStep(1);
  }
  return (
    <div className={classes["step-four"]}>
      <h1>{formData[3].title}</h1>
      <p>{formData[3].description}</p>
      <div className={classes.summary}>
        <div className={classes.plan}>
          <div>
            <span>
              {summary.plan.name} {yearlyBilling ? "(Yearly)" : "(Monthly)"}
            </span>
            <span onClick={changeHandler}>Change</span>
          </div>
          <div className={classes.price}>
            {yearlyBilling
              ? `$${summary.plan.yearlyCost}/yr`
              : `$${summary.plan.monthlyCost}/mo`}
          </div>
        </div>
        <div className={classes.addons}>
          {summary.selectedAddOns.map((a) => (
            <div>
              <span className={classes.addon}>{a.name}</span>
              <span className={classes.price}>
                {yearlyBilling
                  ? `+$${a.yearlyCost}/yr`
                  : `+$${a.monthlyCost}/mo`}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.total}>
        <span>
          {"Total"} {yearlyBilling ? "(per year)" : "(per month)"}
        </span>
        <span className={classes.price}>
          {yearlyBilling ? `$${summary.total}/yr` : `+$${summary.total}/mo`}
        </span>
      </div>
    </div>
  );
};

export default StepFour;
