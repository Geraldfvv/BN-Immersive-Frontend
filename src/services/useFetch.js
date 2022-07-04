import { showMessage, loader } from "../utils/alerts/alerts";

export const useFetch = (method, path, loaderMsg = null, body = null) => {
  const url = process.env.REACT_APP_BASE_URL;

  if (loaderMsg) {
    loader(loaderMsg);
  }

  return fetch(`${url}/${path}`, {
    method: method,
    body: body,
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
