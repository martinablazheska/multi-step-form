export function validateName(value: string) {
  let error;
  if (value.length === 0) {
    error = "This field is required";
  } else if (value.length < 2) {
    error = "Please enter a valid name";
  }
  return error;
}

export function validateEmail(value: string) {
  let error;
  if (value.length === 0) {
    error = "This field is required";
  } else if (value.length < 5 || !value.includes("@")) {
    error = "Please enter a valid email";
  }
  return error;
}

export function validatePhone(value: string) {
  let error;
  if (value.length === 0) {
    error = "This field is required";
  } else if (/[a-z]/i.test(value)) {
    error = "Please enter a valid phone number";
  }
  return error;
}
