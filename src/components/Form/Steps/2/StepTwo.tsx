import { useContext } from "react";
import { formContext } from "../../../../store/form-context";
import { Field } from "formik";

import formData from "../../../../store/form-data";
import { values } from "../../../../store/form-data";

import arcadeIcon from "../../../../assets/icon-arcade.svg";
import advancedIcon from "../../../../assets/icon-advanced.svg";
import proIcon from "../../../../assets/icon-pro.svg";

import classes from "./StepTwo.module.scss";
import ToggleSwitch from "../../FormActions/ToggleSwitch";

const StepTwo: React.FC<{ values: values }> = ({ values }) => {
  const { yearlyBilling, prices } = useContext(formContext);

  return (
    <div className={classes["step-two"]}>
      <h1>{formData[1].title}</h1>
      <p>{formData[1].description}</p>
      <div className={classes.plan}>
        <label
          htmlFor="Arcade"
          className={values.selectedPlan === "Arcade" ? classes.checked : ""}
        >
          <img src={arcadeIcon} alt="rcade icon" />
          <div>
            <p>Arcade</p>
            <p>{`$${prices[0]}/mo`}</p>
            {yearlyBilling && <p>2 months free</p>}
          </div>
        </label>
        <Field type="radio" name="selectedPlan" id="Arcade" value="Arcade" />
      </div>
      <div className={classes.plan}>
        <label
          htmlFor="Advanced"
          className={values.selectedPlan === "Advanced" ? classes.checked : ""}
        >
          <img src={advancedIcon} alt="advanced icon" />
          <div>
            <p>Advanced</p>
            <p>{`$${prices[1]}/mo`}</p>
            {yearlyBilling && <p>2 months free</p>}
          </div>
        </label>
        <Field
          type="radio"
          name="selectedPlan"
          id="Advanced"
          value="Advanced"
        />
      </div>
      <div className={classes.plan}>
        <label
          htmlFor="Pro"
          className={values.selectedPlan === "Pro" ? classes.checked : ""}
        >
          <img src={proIcon} alt="pro icon" />
          <div>
            <p>Pro</p>
            <p>{`$${prices[2]}/mo`}</p>
            {yearlyBilling && <p>2 months free</p>}
          </div>
        </label>
        <Field type="radio" name="selectedPlan" id="Pro" value="Pro" />
      </div>
      <ToggleSwitch />
    </div>
  );
};

export default StepTwo;
