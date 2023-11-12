import { useContext } from "react";
import { formContext } from "../../store/form-context";
import classes from "./Sidebar.module.scss";

function Steps() {
  const steps = [1, 2, 3, 4];
  const { currentStep, setCurrentStep, isSubmitted } = useContext(formContext);

  function goToStep(s: number) {
    if (!isSubmitted) {
      setCurrentStep(s - 1);
    }
  }

  return (
    <div className={classes.sidebar}>
      {steps.map((step: number) => (
        <span
          key={step}
          className={currentStep + 1 === step ? classes.current : ""}
          onClick={() => goToStep(step)}
        >
          {step}
        </span>
      ))}
    </div>
  );
}

export default Steps;
