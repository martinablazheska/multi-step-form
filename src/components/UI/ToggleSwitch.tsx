import { useContext } from "react";
import {
  formContext,
  yearlyPrices,
  monthlyPrices,
} from "../../store/form-context";

import classes from "./ToggleSwitch.module.scss";

const ToggleSwitch: React.FC = () => {
  const { yearlyBilling, setYearlyBilling, setPrices } =
    useContext(formContext);

  function toggleHandler() {
    if (yearlyBilling === true) {
      setYearlyBilling(false);
      setPrices(monthlyPrices);
    } else {
      setYearlyBilling(true);
      setPrices(yearlyPrices);
    }
  }

  function monthlyHandler() {
    setYearlyBilling(false);
    setPrices(monthlyPrices);
  }

  function yearlyHandler() {
    setYearlyBilling(true);
    setPrices(yearlyPrices);
  }

  return (
    <div className={classes["switch-container"]}>
      <span
        className={yearlyBilling ? classes.off : classes.on}
        onClick={monthlyHandler}
      >
        Monthly
      </span>
      <div
        className={`${classes.background} ${
          yearlyBilling ? classes.checked : ""
        }`}
        onClick={toggleHandler}
      >
        <div className={classes.handle}>{""}</div>
      </div>
      <span
        className={yearlyBilling ? classes.on : classes.off}
        onClick={yearlyHandler}
      >
        Yearly
      </span>
    </div>
  );
};

export default ToggleSwitch;
