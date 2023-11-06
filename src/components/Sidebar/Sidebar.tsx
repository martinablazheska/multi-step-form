import { useContext } from "react";
import formContext from "../../store/form-context";
import classes from "./Sidebar.module.scss";

function Steps() {
  const steps = [1, 2, 3, 4];
  const { currentStep } = useContext(formContext);

  return (
    <div className={classes.sidebar}>
      {steps.map((step: number) => (
        <span
          key={step}
          className={currentStep + 1 === step ? classes.current : ""}
        >
          {step}
        </span>
      ))}
    </div>
  );
}

export default Steps;
