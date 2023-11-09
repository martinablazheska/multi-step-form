import classes from "./FormActions.module.scss";
import { useContext } from "react";
import { formContext } from "../../../store/form-context";

function FormActions() {
  const { currentStep, setCurrentStep } = useContext(formContext);

  function prevStepHandler() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div className={classes["form__actions"]}>
      <button type="submit">
        {currentStep === 3 ? "Confirm" : "Next Step"}
      </button>
      <button
        onClick={prevStepHandler}
        disabled={currentStep === 0}
        className={classes["back-button"]}
      >
        Go Back
      </button>
    </div>
  );
}

export default FormActions;
