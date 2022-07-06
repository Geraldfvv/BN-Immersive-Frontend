import { showMessage, loader } from "../utils/alerts/alerts";

export const signIn = (body) => {
  const url = process.env.REACT_APP_BASE_URL;
  loader("Creating user");

  return fetch(`${url}/signin`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status !== 200) {
        showMessage("Sign up failed", "error");
      } else {
        showMessage(data.message, "success");
      }
      return data;
    })
    .catch((err) => {
      showMessage("An error has occurred, please try again", "error");
    });
};
