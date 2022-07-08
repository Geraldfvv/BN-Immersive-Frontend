import { showMessage, loader } from "../utils/alerts/alerts";
const url = process.env.REACT_APP_BASE_URL;

export const signIn = async (body) => {
  loader("Creating user");

  const newBody = new FormData();
  newBody.append("fullName", body.fullName);
  newBody.append("id", body.id);
  newBody.append("incomeSource", body.incomeSource);
  newBody.append("email", body.email);
  newBody.append("password", body.password);
  newBody.append("confirmPassword", body.confirmPassword);
  newBody.append("idPhoto", body.idPhoto);

  return fetch(`${url}/signin`, {
    method: "POST",
    body: newBody,
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status !== 200) {
        showMessage("Sign up failed", "error", 3000);
      } else {
        showMessage(data.message, "success", 3000);
      }
      return data;
    })
    .catch((err) => {
      showMessage("An error has occurred, please try again", "error", 3000);
    });
};

