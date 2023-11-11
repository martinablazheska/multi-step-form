import { useContext } from "react";
import { formContext } from "../../store/form-context";

import { Formik, Form } from "formik";

import FormActions from "./FormActions/FormActions";
import StepOne from "./Steps/1/StepOne";
import StepTwo from "./Steps/2/StepTwo";
import StepThree from "./Steps/3/StepThree";
import StepFour from "./Steps/4/StepFour";
import FinalStep from "./Steps/5/FinalStep";

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
            {currentStep === 2 && <StepThree values={values} />}
            {currentStep === 3 && <StepFour values={values} />}
            {currentStep === 4 && <FinalStep />}
            {!(currentStep === 4) && <FormActions />}
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default FormContainer;
