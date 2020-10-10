import React from "react";
import { toast, Slide, ToastContainer } from "react-toastify"

const Toastr = ({ type, message }) => {
  let icon;
  switch (type) {
    case "success":
      icon = "ri-checkbox-circle-fill";
      break;
    case "error":
      icon = "ri-alert-fill";
      break;
    case "info":
      icon = "ri-information-fill";
      break;
    default:
      icon = "ri-information-fill";
      break;
  }

  return (
    <div className="flex flex-row items-start justify-start">
      <i className={icon}></i>
      <p className="mx-4 font-medium leading-5 text-white">{message}</p>
    </div>
  );
};


const showToastr = (message) => {
  toast.success(<Toastr type="success" message={message} />, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const isError = (e) => e && e.stack && e.message;

const showErrorToastr = error => {
  let errorMessage = error;
  if(isError(error)){
    errorMessage = error.message
  }
  toast.error(<Toastr type="error" message={errorMessage} />, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

export {
  Toastr,
  showToastr,
  showErrorToastr,
  ToastContainer
}