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
  const { prices } = useContext(formContext);

  return (
    <div className={classes["step-two"]}>
      <h1>{formData[1].title}</h1>
      <p>{formData[1].description}</p>
      <div className={classes.plan}>
        <label
          htmlFor="arcade"
          className={values.selectedPlan === "arcade" ? classes.checked : ""}
        >
          <img src={arcadeIcon} alt="arcade icon" />
          <div>
            <p>Arcade</p>
            <p>{`$${prices[0]}/mo`}</p>
          </div>
        </label>
        <Field type="radio" name="selectedPlan" id="arcade" value="arcade" />
      </div>
      <div className={classes.plan}>
        <label
          htmlFor="advanced"
          className={values.selectedPlan === "advanced" ? classes.checked : ""}
        >
          <img src={advancedIcon} alt="advanced icon" />
          <div>
            <p>Advanced</p>
            <p>{`$${prices[1]}/mo`}</p>
          </div>
        </label>
        <Field
          type="radio"
          name="selectedPlan"
          id="advanced"
          value="advanced"
        />
      </div>
      <div className={classes.plan}>
        <label
          htmlFor="pro"
          className={values.selectedPlan === "pro" ? classes.checked : ""}
        >
          <img src={proIcon} alt="pro icon" />
          <div>
            <p>Pro</p>
            <p>{`$${prices[2]}/mo`}</p>
          </div>
        </label>
        <Field type="radio" name="selectedPlan" id="pro" value="pro" />
      </div>
      <ToggleSwitch />
    </div>
  );
};

export default StepTwo;
