import formData from "../../../../store/form-data";
import { values } from "../../../../store/form-data";

import classes from "./StepFour.module.scss";

const StepFour: React.FC<{ values: values }> = ({ values }) => {
  return (
    <div className={classes["step-four"]}>
      <h1>{formData[3].title}</h1>
      <p>{formData[3].description}</p>
      <div className={classes.summary}>
        <div className={classes.plan}>
          <div>
            <span>Arcade (Monthly)</span>
            <span>Change</span>
          </div>
          <div className={classes.price}>$9/mo</div>
        </div>
        <div className={classes.addons}>
          <div>
            <span className={classes.addon}>Online service</span>
            <span className={classes.price}>+$1/mo</span>
          </div>
          <div>
            <span className={classes.addon}>Larger storage</span>
            <span className={classes.price}>+$2/mo</span>
          </div>
        </div>
      </div>
      <div className={classes.total}>
        <span>Total (per month)</span>
        <span className={classes.price}>+$12/mo</span>
      </div>
    </div>
  );
};

export default StepFour;
