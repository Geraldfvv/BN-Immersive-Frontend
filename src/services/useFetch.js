import { loader } from "../utils/alerts/alerts";

export const Fetch = (method, path, loaderMsg = null, body = null) => {
  const url = process.env.REACT_APP_BASE_URL;

  if (loaderMsg) {
    loader(loaderMsg);
  }

  return fetch(`${url}/${path}`, {
    method: method,
    body: body ? JSON.stringify(body) : null,
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
  })
    .then((response) => response.json())
    .catch((err) => {});
};
