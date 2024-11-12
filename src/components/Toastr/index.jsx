import React from "react";

import { t } from "i18next";
import { CheckCircle, Warning, Info, Close } from "neetoicons";
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
      data-cy="toastr-close-button"
      size={16}
      onClick={closeToast}
      {...props}
    />
  ),
  role: "log",
  className: "neeto-ui-toastr",
};

const TOAST_ICON = {
  success: (
    <CheckCircle
      className="neeto-ui-text-white"
      data-cy="success-toast-icon"
      data-testid="success-toast-icon"
    />
  ),
  warning: (
    <Warning
      className="neeto-ui-text-white"
      data-cy="warning-toast-icon"
      data-testid="warning-toast-icon"
    />
  ),
  error: (
    <Warning
      className="neeto-ui-white"
      data-cy="error-toast-icon"
      data-testid="error-toast-icon"
    />
  ),
  info: (
    <Info
      className="neeto-ui-text-white"
      data-cy="info-toast-icon"
      data-testid="info-toast-icon"
    />
  ),
};

const toastrList = new UniqueArray();

const parseToastrConfig = config => {
  if (typeof config[0] === "object") {
    const { buttonLabel, onClick, showIcon, ...customConfig } = config[0];

    return { buttonLabel, onClick, showIcon, customConfig };
  }
  const [buttonLabel, onClick, customConfig, showIcon] = config;

  return { buttonLabel, onClick, customConfig, showIcon };
};

const getToastrMessage = message => {
  if (message?.noticeCode === "custom_message" && "customMessage" in message) {
    return message.customMessage;
  } else if (message && typeof message === "object" && message.noticeCode) {
    return t(message.noticeCode, message);
  } else if (message && typeof message === "object" && message.notice) {
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
      showIcon = false,
      customConfig = {},
    } = parseToastrConfig(toastrConfig);

    let toastId = null;

    if (toastrList.add({ type, message, buttonLabel })) {
      const config = {
        ...TOAST_CONFIG,
        icon: showIcon && TOAST_ICON[type],
        onClose: () => toastrList.remove({ type, message, buttonLabel }),
        ...customConfig,
      };

      toastId = toastFunc({ message, buttonLabel, onClick, config });
    }

    return toastId;
  };

const showSuccessToastr = withUniqueCheck(
  "success",
  ({ message, buttonLabel, onClick, config }) =>
    toast.success(
      <Toast {...{ buttonLabel, message, onClick }} type="success" />,
      config
    )
);

const showInfoToastr = withUniqueCheck(
  "info",
  ({ message, buttonLabel, onClick, config }) =>
    toast.info(
      <Toast {...{ buttonLabel, message, onClick }} type="info" />,
      config
    )
);

const showWarningToastr = withUniqueCheck(
  "warning",
  ({ message, buttonLabel, onClick, config }) =>
    toast.warning(
      <Toast {...{ buttonLabel, message, onClick }} type="warning" />,
      config
    )
);

const isError = e => e && e.stack && e.message;
const isAxiosError = e => e && typeof e === "object" && e.isAxiosError === true;
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

    const { buttonLabel, onClick, customConfig, showIcon } =
      parseToastrConfig(toastrConfig);

    return toastrFunc(errorMessage, {
      buttonLabel,
      onClick,
      role: "alert",
      autoClose: false,
      showIcon,
      ...customConfig,
    });
  };

const showErrorToastr = withParsedErrorMsg(
  withUniqueCheck(
    "error",
    ({ message, buttonLabel, onClick, showIcon, config }) =>
      toast.error(
        <Toast {...{ buttonLabel, message, onClick, showIcon }} type="error" />,
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
