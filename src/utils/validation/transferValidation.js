import { ibanRegex } from "../constants";

export const formValidator = (data) => {
  const errors = {};
  const { origin, destiny, amount, detail } = data;

  // Origin required
  if (!origin) {
    errors.origin = "This field is required!";
  } else if (!ibanRegex.test(origin)) {
    errors.origin = "This is not a valid iban format!";
  }

  //Destiny required and format
  if (!destiny) {
    errors.destiny = "This field is required!";
  } else if (!ibanRegex.test(destiny)) {
    errors.destiny = "This is not a valid iban format!";
  }

  //Amount required
  if (!amount) {
    errors.amount = "Amount is required!";
  } 

  //Detail
  if (!detail) {
    errors.detail = "Detail is required!";
  }

  return errors;
};
