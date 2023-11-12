import formData from "../../../../store/form-data";
import { values } from "../../../../store/form-data";

import { useContext } from "react";
import { formContext } from "../../../../store/form-context";

import calculateSummary from "./calculate-summary";

import classes from "./StepFour.module.scss";

const StepFour: React.FC<{ values: values }> = ({ values }) => {
  const { yearlyBilling, setCurrentStep } = useContext(formContext);

  function changeHandler() {
    setCurrentStep(1);
  }
  const summary = calculateSummary(values, yearlyBilling);
  return (
    <div className={classes["step-four"]}>
      <h1>{formData[3].title}</h1>
      <p>{formData[3].description}</p>
      <div className={classes.summary}>
        <div className={classes.plan}>
          <div>
            <span>
              {summary.plan?.name} {yearlyBilling ? "(Yearly)" : "(Monthly)"}
            </span>
            <span onClick={changeHandler}>Change</span>
          </div>
          <div className={classes.price}>
            {yearlyBilling
              ? `$${summary.plan?.yearlyCost}/yr`
              : `$${summary.plan?.monthlyCost}/mo`}
          </div>
        </div>
        <div className={classes.addons}>
          {summary.selectedAddOns.map((a) => (
            <div key={a.name}>
              <span className={classes.addon}>{a.title}</span>
              <span className={classes.price}>
                {yearlyBilling
                  ? `+$${a.yearlyPrice}/yr`
                  : `+$${a.monthlyPrice}/mo`}
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
