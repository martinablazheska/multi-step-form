import formData from "../../../../store/form-data";
import { values } from "../../../../store/form-data";
import classes from "./StepThree.module.scss";

const StepThree: React.FC<{ values: values }> = ({ values }) => {
  return (
    <div className={classes["step-three"]}>
      <h1>{formData[2].title}</h1>
      <p>{formData[2].description}</p>
    </div>
  );
};

export default StepThree;
