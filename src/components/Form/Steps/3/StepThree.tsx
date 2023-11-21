import formData from "../../../../store/form-data";
import { values, addOns, errors } from "../../../../store/form-data";

import CheckboxField from "./CheckboxField";
import StepWrapper from "../../../UI/StepWrapper";
import ErrorMessage from "../../../UI/ErrorMessage";

const StepThree: React.FC<{ values: values; errors: errors }> = ({
  values,
  errors,
}) => {
  return (
    <StepWrapper>
      <h1>{formData[2].title}</h1>
      <p>{formData[2].description}</p>
      <CheckboxField value={values.onlineService} addOnData={addOns[0]} />
      <CheckboxField value={values.largerStorage} addOnData={addOns[1]} />
      <CheckboxField value={values.customizableProfile} addOnData={addOns[2]} />
      {errors && (
        <ErrorMessage message="Please fill out your personal info in Step 1." />
      )}
    </StepWrapper>
  );
};

export default StepThree;
