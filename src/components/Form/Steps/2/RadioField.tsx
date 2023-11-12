import { Field } from "formik";

import { useContext } from "react";
import { formContext } from "../../../../store/form-context";

import { plan } from "../../../../store/form-data";

import classes from "./RadioField.module.scss";

const RadioField: React.FC<{
  value: string;
  plan: plan;
  img: string;
  altText: string;
  groupName: string;
}> = ({ value, plan, img, altText, groupName }) => {
  const { yearlyBilling } = useContext(formContext);
  return (
    <div className={classes.plan}>
      <label
        htmlFor={plan.name}
        className={value === plan.name ? classes.checked : ""}
      >
        <img src={img} alt={altText} />
        <div>
          <p>{plan.name}</p>
          <p>
            {yearlyBilling
              ? `$${plan.yearlyCost}/yr`
              : `$${plan.monthlyCost}}/mo`}
          </p>
          {yearlyBilling && <p>2 months free</p>}
        </div>
      </label>
      <Field type="radio" name={groupName} id={plan.name} value={plan.name} />
    </div>
  );
};

export default RadioField;
