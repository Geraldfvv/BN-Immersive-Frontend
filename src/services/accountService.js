import { showMessage, loader } from "../utils/alerts/alerts";

export const getAccounts = () => {
  const url = process.env.REACT_APP_BASE_URL;

  fetch(`${url}/accounts`, {
    method: "GET",
    credentials: "include",
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
