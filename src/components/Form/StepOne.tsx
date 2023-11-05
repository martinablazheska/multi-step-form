import { Field } from "formik";
import { stepOneInputs } from "../../store/form-data";
import classes from "./StepOne.module.scss";

function StepOne() {
  return (
    <div className={classes["step-one"]}>
      {stepOneInputs.map((input) => (
        <div key={input.id}>
          <label htmlFor={input.name}>{input.label}</label>

          <Field
            type={input.type}
            id={input.name}
            name={input.name}
            placeholder={input.placeholder}
          />
        </div>
      ))}
    </div>
  );
}

export default StepOne;
