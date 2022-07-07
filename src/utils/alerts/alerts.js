import Swal from "sweetalert2";

export const showMessage = (title, type , timer = null) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: timer,
    icon: type,
    title: title,
    customClass: {
      popup: "popup",
      icon: "icon",
    },
  });
  Toast.fire();
};

export const loader = (title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    title: title,
    didOpen: () => {
      Swal.showLoading()
    },
    customClass: {
      popup: "popup",
      icon: "icon",
    },
  });
  Toast.fire();
};

// .then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       Swal.fire("Saved!", "", "success");
//     } else if (result.isDenied) {
//       Swal.fire("Changes are not saved", "", "info");
//     }
//   });

// MySwal.fire({
//   title: <p>Hello World</p>,
//   didOpen: () => {
//     MySwal.showLoading();
//   },
// }).then(() => {
//   return MySwal.fire(<p>Shorthand works too</p>);
// });
