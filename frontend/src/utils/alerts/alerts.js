import Swal from "sweetalert2";

export const showMessage = (title, type) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    icon: type,
    title: title,
    customClass: {
      popup: "popup-class",
      icon: "icon-class",
    },
  });
  Toast.fire();
};

export const proceedPayment = () => {
  let timerInterval;
  return Swal.fire({
    title: "Payment is being processed",
    timer: 4000,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
};

export const purchasConfirmation = () => {
  Swal.fire({
    title: "Thank you for your purchase",
    width: 600,
    padding: "3em",
  });
};

export const confirmation = (msg) => {
  return Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
  });
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
