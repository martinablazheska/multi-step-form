import { useContext } from "react";
import { formContext } from "../../store/form-context";

import { Formik, Form } from "formik";

import FormActions from "./FormActions/FormActions";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";

import { initialValues } from "../../store/form-data";
import validationSchema from "../../store/validation-schema";

import classes from "./FormContainer.module.scss";

function FormContainer() {
  const { currentStep, setCurrentStep } = useContext(formContext);
  function submitHandler() {
    if (currentStep === 3) {
      console.log("Submitted");
    } else {
      setCurrentStep(currentStep + 1);
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched }) => (
        <div className={classes["form-container"]}>
          <Form className={classes.form}>
            {currentStep === 0 && <StepOne errors={errors} touched={touched} />}
            {currentStep === 1 && <StepTwo values={values} />}
            <FormActions />
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default FormContainer;
