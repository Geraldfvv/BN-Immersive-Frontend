import { emailRegex } from "../constants";

export const formValidator = (data) => {
  const errors = {};
  const { email, password } = data;

  // Email required and email format
  if (!email) {
    errors.email = "Email is required!";
  } else if (!emailRegex.test(email)) {
    errors.email = "This is not a valid email format!";
  }

  //Password required and password format
  if (!password) {
    errors.password = "Password is required!";
  }

  return errors;
};
