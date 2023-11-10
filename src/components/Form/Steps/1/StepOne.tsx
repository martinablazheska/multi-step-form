import { Field } from "formik";
import formData from "../../../../store/form-data";

import classes from "./StepOne.module.scss";

const StepOne: React.FC<{
  errors: {
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
  };
  touched: {
    name?: boolean | undefined;
    email?: boolean | undefined;
    phone?: boolean | undefined;
  };
}> = (props) => {
  return (
    <>
      <div className={classes["step-one"]}>
        <h1>{formData[0].title}</h1>
        <p>{formData[0].description}</p>
        <div>
          <div className={classes.label}>
            <label htmlFor="name">Name</label>
            {props.errors.name && props.touched.name && (
              <p>{props.errors.name}</p>
            )}
          </div>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            className={
              props.errors.name && props.touched.name ? classes.error : ""
            }
          />
        </div>

        <div>
          <div className={classes.label}>
            <label htmlFor="email">Email Address</label>
            {props.errors.email && props.touched.email && (
              <p>{props.errors.email}</p>
            )}
          </div>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            className={
              props.errors.email && props.touched.email ? classes.error : ""
            }
          />
        </div>

        <div>
          <div className={classes.label}>
            <label htmlFor="phone">Phone Number</label>
            {props.errors.phone && props.touched.phone && (
              <p>{props.errors.phone}</p>
            )}
          </div>
          <Field
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            className={
              props.errors.phone && props.touched.phone ? classes.error : ""
            }
          />
        </div>
      </div>
    </>
  );
};

export default StepOne;
