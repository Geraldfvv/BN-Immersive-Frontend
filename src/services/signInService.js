import { showMessage, loader } from "../utils/alerts/alerts";
const url = process.env.REACT_APP_BASE_URL;

export const signIn = async (body) => {
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

// const image = new FormData();
// image.append("image", body.idPhoto);

// uploadImage(image)
//   .then((response) => response.json())
//   .then((data) => {
//     const newBody = { ...body, idPhoto: data.url };
//   });

export const uploadImage = (image) => {
  return fetch(`${url}/signin/upload`, {
    method: "POST",
    body: image,
    mode: "cors",
  });
};
