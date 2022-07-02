import { showMessage } from "../utils/alerts/alerts";

export const signIn = (body) => {
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
        showMessage("Sign in failed", "error");
      } else {
        showMessage("Signed in successfully", "success");
      }
      return data;
    })
    .catch((err) => {
      showMessage(err, "error");
    });
};
