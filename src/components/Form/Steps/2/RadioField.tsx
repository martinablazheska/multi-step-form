import { Field } from "formik";

import { useContext } from "react";
import { formContext } from "../../../../store/form-context";

import classes from "./RadioField.module.scss";

const RadioField: React.FC<{
  value: string;
  title: string;
  id: string;
  price: number;
  img: string;
}> = ({ value, title, id, price, img }) => {
  const { yearlyBilling } = useContext(formContext);
  return (
    <div className={classes.plan}>
      <label htmlFor={id} className={value === id ? classes.checked : ""}>
        <img src={img} alt="icon" />
        <div>
          <p>{title}</p>
          <p>{`$${price}/mo`}</p>
          {yearlyBilling && <p>2 months free</p>}
        </div>
      </label>
      <Field type="radio" name="selectedPlan" id={id} value={value} />
    </div>
  );
};

export default RadioField;
