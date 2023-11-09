import { useContext } from "react";
import {
  formContext,
  monthlyPrices,
  yearlyPrices,
} from "../../../store/form-context";

import { Field } from "formik";

import formData from "../../../store/form-data";
import { values } from "../../../store/form-data";

import SwitchButton from "../FormActions/SwitchButton";

import arcadeIcon from "../../../assets/icon-arcade.svg";
import advancedIcon from "../../../assets/icon-advanced.svg";
import proIcon from "../../../assets/icon-pro.svg";

import classes from "./StepTwo.module.scss";

const StepTwo: React.FC<{ values: values }> = ({ values }) => {
  const { yearlyBilling, setYearlyBilling, prices, setPrices } =
    useContext(formContext);

  function switchHandler() {
    setYearlyBilling(!yearlyBilling);
    if (prices === monthlyPrices) {
      setPrices(yearlyPrices);
    } else {
      setPrices(monthlyPrices);
    }
  }

  return (
    <div className={classes["step-two"]}>
      <h1>{formData[1].title}</h1>
      <p>{formData[1].description}</p>
      <div>
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
      <div>
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
      <div>
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
      <div className={classes.switch}>
        <span>Monthly</span>
        <SwitchButton checked={yearlyBilling} onChange={switchHandler} />
        <span>Yearly</span>
      </div>
    </div>
  );
};

export default StepTwo;
