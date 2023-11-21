import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field is required")
    .min(2, "Please enter a valid name."),
  email: Yup.string()
    .required("This field is required")
    .email("Please enter a valid email."),
  phone: Yup.string()
    .required("This field is required")
    .matches(/[0-9]/, "Please enter a valid phone number."),
  selectedPlan: Yup.string().required("Please select your plan."),
});

export default validationSchema;
