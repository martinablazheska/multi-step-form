import formData from "../../../../store/form-data";
import { values, addOns } from "../../../../store/form-data";

import CheckboxField from "./CheckboxField";
import StepWrapper from "../../../UI/StepWrapper";

const StepThree: React.FC<{ values: values }> = ({ values }) => {
  return (
    <StepWrapper>
      <h1>{formData[2].title}</h1>
      <p>{formData[2].description}</p>
      <CheckboxField value={values.onlineService} addOnData={addOns[0]} />
      <CheckboxField value={values.largerStorage} addOnData={addOns[1]} />
      <CheckboxField value={values.customizableProfile} addOnData={addOns[2]} />
    </StepWrapper>
  );
};

export default StepThree;
