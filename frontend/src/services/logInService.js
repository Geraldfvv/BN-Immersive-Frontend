import { showMessage } from "../utils/alerts/alerts";

export const logIn = (body) => {
  return fetch("http://localhost:3001/login", {
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
