import { useContext } from "react";
import formContext from "../../store/form-context";

import StepOne from "./Steps/StepOne";

import classes from "./FormContainer.module.scss";

function FormContainer() {
  const { currentStep } = useContext(formContext);
  const stepComponents: React.ReactElement[] = [<StepOne />];

  return <div className={classes.form}>{stepComponents[currentStep]}</div>;
}

export default FormContainer;
