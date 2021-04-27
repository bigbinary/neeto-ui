import React from "react";
import * as R from "ramda";
import { toast, Slide } from "react-toastify";

const ToastrComponent = ({ type, message }) => {
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
    <div
      data-cy="toastr-message-container"
      data-test={`toastr-${type}-container`}
      className="flex flex-row items-start justify-start"
    >
      <i className={icon}></i>
      <p className="mx-4 font-medium leading-5 text-white">{message}</p>
    </div>
  );
};

const showToastr = (message) => {
  toast.success(<ToastrComponent type="success" message={message} />, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

const isError = (e) => e && e.stack && e.message;

const showErrorToastr = (errorObject) => {
  let errorMessage;
  if (isError(errorObject)) errorMessage = errorObject.message;
  else if (errorObject.error) errorMessage = errorObject.error;
  else if (errorObject.errors) errorMessage = R.join("\n", errorObject.errors);
  else errorMessage = "Something went wrong.";
  toast.error(<ToastrComponent type="error" message={errorMessage} />, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
  });
};

export const Toastr = {
  success: showToastr,
  error: showErrorToastr,
};

export default Toastr;
