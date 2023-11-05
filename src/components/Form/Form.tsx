import { useContext } from "react";
import formContext from "../../store/form-context";
import { Formik, Form } from "formik";
import formData from "../../store/form-data";
import { initialFormValues } from "../../store/form-data";
import StepOne from "./StepOne";

import classes from "./Form.module.scss";

function FormContainer() {
  const { currentStep, setCurrentStep } = useContext(formContext);

  function nextStepHandler() {}
  function prevStepHandler() {}

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values) => console.log(values)}
    >
      <Form className={classes.form}>
        <div className={classes["form__body"]}>
          <h1>{formData[currentStep].title}</h1>
          <p>{formData[currentStep].description}</p>
          {currentStep === 0 && <StepOne />}
        </div>

        <div className={classes["form__actions"]}>
          <button onClick={nextStepHandler} disabled={currentStep === 3}>
            Next Step
          </button>
          <button
            onClick={prevStepHandler}
            disabled={currentStep === 0}
            className={classes["back-button"]}
          >
            Go Back
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default FormContainer;
