import { Formik, Form, Field } from "formik";
import { stepOneValues } from "../../../store/form-data";
import formData from "../../../store/form-data";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../../../store/validations";

import { useContext } from "react";
import formContext from "../../../store/form-context";

import FormActions from "../FormActions/FormActions";

import classes from "./StepOne.module.scss";

function StepOne() {
  const { setCurrentStep } = useContext(formContext);

  function submitHandler() {
    setCurrentStep(1);
  }

  return (
    <Formik initialValues={stepOneValues} onSubmit={submitHandler}>
      {({ errors, touched }) => (
        <Form>
          <div className={classes["step-one"]}>
            <h1>{formData[0].title}</h1>
            <p>{formData[0].description}</p>
            <div>
              <div className={classes.label}>
                <label htmlFor="name">Name</label>
                {errors.name && touched.name && <p>{errors.name}</p>}
              </div>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Stephen King"
                validate={validateName}
                className={errors.name && touched.name ? classes.error : ""}
              />
            </div>

            <div>
              <div className={classes.label}>
                <label htmlFor="email">Email Address</label>
                {errors.email && touched.email && <p>{errors.email}</p>}
              </div>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="e.g. stephenking@lorem.com"
                validate={validateEmail}
                className={errors.email && touched.email ? classes.error : ""}
              />
            </div>

            <div>
              <div className={classes.label}>
                <label htmlFor="phone">Phone Number</label>
                {errors.phone && touched.phone && <p>{errors.phone}</p>}
              </div>
              <Field
                type="tel"
                id="phone"
                name="phone"
                placeholder="e.g. +1 234 567 890"
                validate={validatePhone}
                className={errors.phone && touched.phone ? classes.error : ""}
              />
            </div>
          </div>
          <FormActions />
        </Form>
      )}
    </Formik>
  );
}

export default StepOne;
