import React from "react";
import { join } from "ramda";
import { toast, Slide } from "react-toastify";
import {
  CheckCircle,
  Warning,
  CloseCircle,
  Info,
  Close,
} from "@bigbinary/neeto-icons";

import Toast from "./Toast";

const TOAST_CONFIG = {
  autoClose: 3500,
  transition: Slide,
  position: toast.POSITION.BOTTOM_CENTER,
  hideProgressBar: true,
  closeButton: ({ closeToast, ...props }) => (
    <Close
      size={16}
      color="currentColor"
      className="neeto-ui-toastr__close-button"
      onClick={closeToast}
      {...props}
    />
  ),
  role: "log",
  className: "neeto-ui-toastr",
};

const TOAST_ICON = {
  success: <CheckCircle className="neeto-ui-text-success-500" />,
  warning: <Warning className="neeto-ui-text-warning-500" />,
  error: <CloseCircle className="neeto-ui-text-error-500" />,
  info: <Info className="neeto-ui-text-info-500" />,
};

const showSuccessToastr = (message, buttonLabel, onClick) => {
  toast.success(
    <Toast
      type="success"
      message={message}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />,
    {
      ...TOAST_CONFIG,
      icon: TOAST_ICON["success"],
    }
  );
};

const showInfoToastr = (message, buttonLabel, onClick) => {
  toast.info(
    <Toast
      type="info"
      message={message}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />,
    { ...TOAST_CONFIG, icon: TOAST_ICON["info"] }
  );
};

const showWarningToastr = (message, buttonLabel, onClick) => {
  toast.warning(
    <Toast
      type="warning"
      message={message}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />,
    {
      ...TOAST_CONFIG,
      icon: TOAST_ICON["warning"],
    }
  );
};

const isError = (e) => e && e.stack && e.message;
const isAxiosError = (e) => typeof e === "object" && e.isAxiosError === true;
const isString = (s) => typeof s === "string" || s instanceof String;

const showErrorToastr = (errorObject, buttonLabel, onClick) => {
  let errorMessage;

  if (isAxiosError(errorObject)) {
    const { error = "", errors = [] } = errorObject?.response?.data || {};
    errorMessage =
      error || (errors && join("\n", errors)) || errorObject.message;
  } else if (isError(errorObject)) errorMessage = errorObject.message;
  else if (isString(errorObject)) errorMessage = errorObject;
  else errorMessage = "Something went wrong.";

  toast.error(
    <Toast
      type="error"
      message={errorMessage}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />,
    {
      ...TOAST_CONFIG,
      icon: TOAST_ICON["error"],
      role: "alert",
      autoClose: 7000,
    }
  );
};

const Toastr = {
  info: showInfoToastr,
  show: showInfoToastr,
  success: showSuccessToastr,
  error: showErrorToastr,
  warning: showWarningToastr,
};

export default Toastr;
