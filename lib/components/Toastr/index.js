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
import { UniqueArray } from "../../utils";

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

const toastrList = new UniqueArray();

const withUniqueCheck = (type, toastFunc) => (
  message,
  buttonLabel,
  onClick,
  customConfig = {},
) => {
  if (toastrList.add({ type, message, buttonLabel })) {
    const config = {
      ...TOAST_CONFIG,
      icon: TOAST_ICON[type],
      onClose: () => toastrList.remove({ type, message, buttonLabel }),
      ...customConfig,
    };
    toastFunc({ message, buttonLabel, onClick, config });
  }
};

const showSuccessToastr = withUniqueCheck(
  "success",
  ({ message, buttonLabel, onClick, config }) =>
    toast.success(
      <Toast
        type="success"
        message={message}
        buttonLabel={buttonLabel}
        onClick={onClick}
      />,
      config
    )
);

const showInfoToastr = withUniqueCheck(
  "info",
  ({ message, buttonLabel, onClick, config }) =>
    toast.info(
      <Toast
        type="info"
        message={message}
        buttonLabel={buttonLabel}
        onClick={onClick}
      />,
      config
    )
);

const showWarningToastr = withUniqueCheck(
  "warning",
  ({ message, buttonLabel, onClick, config }) =>
    toast.warning(
      <Toast
        type="warning"
        message={message}
        buttonLabel={buttonLabel}
        onClick={onClick}
      />,
      config
    )
);

const isError = (e) => e && e.stack && e.message;
const isAxiosError = (e) => typeof e === "object" && e.isAxiosError === true;
const isString = (s) => typeof s === "string" || s instanceof String;

const withParsedErrorMsg = (toastrFunc) => (
  errorObject,
  buttonLabel,
  onClick,
  customConfig,
) => {
  let errorMessage;
  if (isAxiosError(errorObject)) {
    const { error = "", errors = [] } = errorObject?.response?.data || {};
    errorMessage =
      error || (errors && join("\n", errors)) || errorObject.message;
  } else if (isError(errorObject)) errorMessage = errorObject.message;
  else if (isString(errorObject)) errorMessage = errorObject;
  else errorMessage = "Something went wrong.";

  toastrFunc(errorMessage, buttonLabel, onClick, customConfig);
};

const showErrorToastr = withParsedErrorMsg(
  withUniqueCheck("error", ({ message, buttonLabel, onClick, config }) =>
    toast.error(
      <Toast
        type="error"
        message={message}
        buttonLabel={buttonLabel}
        onClick={onClick}
      />,
      {
        ...config,
        role: "alert",
        autoClose: 7000,
      }
    )
  )
);

const Toastr = {
  info: showInfoToastr,
  show: showInfoToastr,
  success: showSuccessToastr,
  error: showErrorToastr,
  warning: showWarningToastr,
};

export default Toastr;
