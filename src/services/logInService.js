import { showMessage, loader } from "../utils/alerts/alerts";

export const logIn = (body) => {
  const url = process.env.REACT_APP_BASE_URL;
  loader("Logging in");

  return fetch(`${url}/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      showMessage(err, "error");
    });
};
