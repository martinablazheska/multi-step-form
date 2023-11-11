import formData from "../../../../store/form-data";
import { values, addOns } from "../../../../store/form-data";
import CheckboxField from "./CheckboxField";

import classes from "./StepThree.module.scss";

const StepThree: React.FC<{ values: values }> = ({ values }) => {
  return (
    <div className={classes["step-three"]}>
      <h1>{formData[2].title}</h1>
      <p>{formData[2].description}</p>
      <CheckboxField value={values.onlineService} addOnData={addOns[0]} />
      <CheckboxField value={values.largerStorage} addOnData={addOns[1]} />
      <CheckboxField value={values.customizableProfile} addOnData={addOns[2]} />
    </div>
  );
};

export default StepThree;
