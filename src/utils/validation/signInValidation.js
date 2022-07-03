import { emailRegex, idRegex, passwordRegex } from "../constants";

export const formValidator = (data, page) => {
  const errors = {};
  const { fullName, id, idPhoto, incomeSource, email, password, confirmPassword } =
    data;

  switch (page) {
    case 0:
      // Full name required
      if (!fullName) {
        errors.fullName = "Full name is required!";
      }

      // Id required and format
      if (!id) {
        errors.id = "Id number is required!";
      } else if (!idRegex.test(id)) {
        errors.id = "This is not a valid id number format!";
      }

      // Id photo required and format
      if (!idPhoto) {
        errors.idPhoto = "Id photo is required!";
      }

      // Income Source required
      if (!incomeSource) {
        errors.incomeSource = "Income source is required!";
      }

      break;
    case 1:
      // Email required and email format
      if (!email) {
        errors.email = "Email is required!";
      } else if (!emailRegex.test(email)) {
        errors.email = "This is not a valid email format!";
      }

      //Password required and password format
      if (!password) {
        errors.password = "Password is required!";
      } else if (!passwordRegex.test(password))
        errors.password = "This is not a valid password format!";

      //Password confirmation required and same as password
      if (!confirmPassword)
        errors.confirmPassword = "Password confirmation is required!";
      else if (data.confirmPassword !== data.password)
        errors.confirmPassword = "Passwords do not match";
      break;
    default:
      break;
  }

  return errors;
};
