const MessageUser = {
  Successful: (message) => {
    Swal.fire({
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  },

  Dialog: (options) => {
    const { title, text, confirmButtonText, successTitle, successText } =
      options;

    return new Promise((resolve, reject) => {
      Swal.fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmButtonText,
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: successTitle,
              text: successText,
              icon: "success",
            }).then(() => {
              resolve(true);
            });
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
