import { useContext } from "react";
import { formContext } from "../../store/form-context";
import formData from "../../store/form-data";
import classes from "./Sidebar.module.scss";

function Steps() {
  const { currentStep, setCurrentStep, isSubmitted } = useContext(formContext);

  function goToStep(s: number) {
    if (!isSubmitted) {
      setCurrentStep(s - 1);
    }
  }

  return (
    <div className={classes.sidebar}>
      {formData.map((f) => (
        <div
          key={f.step}
          onClick={() => goToStep(f.step)}
          className={classes.step}
        >
          <div className={currentStep + 1 === f.step ? classes.current : ""}>
            {f.step}
          </div>
          <div>
            <span>STEP {f.step}</span>
            <span>{f.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steps;
