import React from "react";

import { t } from "i18next";
import { CheckCircle, Warning, CloseCircle, Info, Close } from "neetoicons";
import { toast, Slide } from "react-toastify";

import { UniqueArray } from "utils";

import Toast from "./Toast";

const TOAST_CONFIG = {
  autoClose: 3500,
  transition: Slide,
  position: toast.POSITION.BOTTOM_LEFT,
  hideProgressBar: true,
  closeButton: ({ closeToast, ...props }) => (
    <Close
      className="neeto-ui-toastr__close-button"
      color="currentColor"
      size={16}
      onClick={closeToast}
      {...props}
    />
  ),
  role: "log",
  className: "neeto-ui-toastr",
};

const TOAST_ICON = {
  success: <CheckCircle className="neeto-ui-text-white" />,
  warning: <Warning className="neeto-ui-text-white" />,
  error: <CloseCircle className="neeto-ui-white" />,
  info: <Info className="neeto-ui-text-white" />,
};

const toastrList = new UniqueArray();

const parseToastrConfig = config => {
  if (typeof config[0] === "object") {
    const { buttonLabel, onClick, ...customConfig } = config[0];

    return { buttonLabel, onClick, customConfig };
  }
  const [buttonLabel, onClick, customConfig] = config;

  return { buttonLabel, onClick, customConfig };
};

const getToastrMessage = message => {
  if (message?.noticeCode === "custom_message" && "customMessage" in message) {
    return message.customMessage;
  } else if (typeof message === "object" && message.noticeCode) {
    return t(message.noticeCode, message);
  } else if (typeof message === "object" && message.notice) {
    return message.notice;
  }

  return message;
};

const withUniqueCheck =
  (type, toastFunc) =>
  (message, ...toastrConfig) => {
    message = getToastrMessage(message);
    const {
      buttonLabel,
      onClick,
      customConfig = {},
    } = parseToastrConfig(toastrConfig);

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
        buttonLabel={buttonLabel}
        message={message}
        type="success"
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
        buttonLabel={buttonLabel}
        message={message}
        type="info"
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
        buttonLabel={buttonLabel}
        message={message}
        type="warning"
        onClick={onClick}
      />,
      config
    )
);

const isError = e => e && e.stack && e.message;
const isAxiosError = e => typeof e === "object" && e.isAxiosError === true;
const isString = s => typeof s === "string" || s instanceof String;
const isErrorCodeObject = e =>
  typeof e === "object" && "key" in e && "context" in e;

const errorCodeTranslation = errorCode => {
  if (typeof errorCode === "string") {
    return t(errorCode);
  } else if (isErrorCodeObject(errorCode)) {
    return t(errorCode.key, errorCode.context);
  }

  return undefined;
};

const getErrorMessage = response => {
  const { error = "", errors = [], errorCode = "", errorCodes = [] } = response;
  const errorMessages = error || errors?.join("\n");
  const errorCodeTranslations =
    (errorCode && t(errorCode, response)) ||
    errorCodes?.map(errorCodeTranslation).join("\n");

  if (errorMessages && errorCodeTranslations) {
    return [errorMessages, errorCodeTranslations].join("\n");
  }

  return errorMessages || errorCodeTranslations;
};

const withParsedErrorMsg =
  toastrFunc =>
  (errorObject, ...toastrConfig) => {
    let errorMessage;

    errorObject = getToastrMessage(errorObject);

    const responseData = errorObject?.response?.data || {};

    if (
      responseData.noticeCode === "custom_message" &&
      "customMessage" in responseData
    ) {
      errorMessage = responseData.customMessage;
    } else if (responseData?.noticeCode) {
      const { data } = errorObject.response;
      errorMessage = t(data.noticeCode, data);
    } else if (isAxiosError(errorObject)) {
      errorMessage = getErrorMessage(responseData) || errorObject.message;
    } else if (isError(errorObject)) errorMessage = errorObject.message;
    else if (isString(errorObject)) errorMessage = errorObject;
    else errorMessage = "Something went wrong.";

    const { buttonLabel, onClick, customConfig } =
      parseToastrConfig(toastrConfig);

    toastrFunc(errorMessage, {
      buttonLabel,
      onClick,
      role: "alert",
      autoClose: false,
      ...customConfig,
    });
  };

const showErrorToastr = withParsedErrorMsg(
  withUniqueCheck("error", ({ message, buttonLabel, onClick, config }) =>
    toast.error(
      <Toast
        buttonLabel={buttonLabel}
        message={message}
        type="error"
        onClick={onClick}
      />,
      config
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
