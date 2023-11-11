import { Field } from "formik";

import { useContext } from "react";
import { formContext } from "../../../../store/form-context";

import { addOn } from "../../../../store/form-data";

import checkmark from "../../../../assets/icon-checkmark.svg";

import classes from "./CheckboxField.module.scss";

const CheckboxField: React.FC<{ addOnData: addOn; value: boolean }> = ({
  addOnData,
  value,
}) => {
  const { yearlyBilling } = useContext(formContext);
  return (
    <div className={classes.addon}>
      <label htmlFor={addOnData.name} className={value ? classes.checked : ""}>
        <div className={classes.info}>
          <div className={classes.checkmark}>
            {value && <img src={checkmark} alt="checkmark" />}
          </div>
          <div className={classes.description}>
            <p>{addOnData.title}</p>
            <p>{addOnData.description}</p>
          </div>
        </div>
        <div className={classes.price}>
          {yearlyBilling
            ? `+$${addOnData.yearlyPrice}/yr`
            : `+$${addOnData.monthlyPrice}/mo`}
        </div>
      </label>
      <Field type="checkbox" name={addOnData.name} id={addOnData.name} />
    </div>
  );
};

export default CheckboxField;
