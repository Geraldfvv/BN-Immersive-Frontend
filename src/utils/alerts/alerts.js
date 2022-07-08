import Swal from "sweetalert2";

export const showMessage = (title, type, timer = null) => {
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
      Swal.showLoading();
    },
    customClass: {
      popup: "popup",
      icon: "icon",
    },
  });
  Toast.fire();
};

export const confirmation = (text) => {
  return Swal.fire({
    title: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#1635966",
    cancelButtonColor: "#ff0000",
  })
};
