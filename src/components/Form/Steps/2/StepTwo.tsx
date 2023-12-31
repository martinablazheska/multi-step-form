import formData from "../../../../store/form-data";
import { values, plans } from "../../../../store/form-data";

import arcadeIcon from "../../../../assets/icon-arcade.svg";
import advancedIcon from "../../../../assets/icon-advanced.svg";
import proIcon from "../../../../assets/icon-pro.svg";

import ToggleSwitch from "../../../UI/ToggleSwitch";
import RadioField from "./RadioField";
import StepWrapper from "../../../UI/StepWrapper";

import classes from "./StepTwo.module.scss";

const StepTwo: React.FC<{ values: values }> = ({ values }) => {
  return (
    <StepWrapper>
      <h1>{formData[1].title}</h1>
      <p>{formData[1].description}</p>
      <div className={classes["plan-picker"]}>
        <RadioField
          plan={plans[0]}
          groupName="selectedPlan"
          img={arcadeIcon}
          altText="arcade icon"
          value={values.selectedPlan}
        />
        <RadioField
          plan={plans[1]}
          groupName="selectedPlan"
          img={advancedIcon}
          altText="advanced icon"
          value={values.selectedPlan}
        />
        <RadioField
          plan={plans[2]}
          groupName="selectedPlan"
          img={proIcon}
          altText="pro icon"
          value={values.selectedPlan}
        />
      </div>
      <ToggleSwitch />
    </StepWrapper>
  );
};

export default StepTwo;
