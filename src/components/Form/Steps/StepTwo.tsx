import { useContext } from "react";
import { formContext } from "../../../store/form-context";

import { Field } from "formik";

import formData from "../../../store/form-data";

import classes from "./StepTwo.module.scss";

function StepTwo() {
  const monthlyPrices = [9, 12, 15];
  const yearlyPrices = [90, 120, 150];
  const { yearlyBilling, setYearlyBilling } = useContext(formContext);
  return (
    <div className={classes["step-two"]}>
      <h1>{formData[1].title}</h1>
      <p>{formData[1].description}</p>
      <div>
        <label htmlFor="arcade">Arcade</label>
        <Field type="radio" name="selectedPlan" id="arcade" value="arcade" />
      </div>
      <div>
        <label htmlFor="advanced">Advanced</label>
        <Field
          type="radio"
          name="selectedPlan"
          id="advanced"
          value="advanced"
        />
      </div>
      <div>
        <label htmlFor="pro">Pro</label>
        <Field type="radio" name="selectedPlan" id="pro" value="pro" />
      </div>
    </div>
  );
}

export default StepTwo;
