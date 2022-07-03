import { showMessage,loader } from "../utils/alerts/alerts";

export const signIn = (body) => {
  loader("Creating user")
  return fetch("http://localhost:3001/signin", {
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
      showMessage(err, "error");
    });
};
