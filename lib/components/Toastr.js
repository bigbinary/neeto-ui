import React from "react";
import { join } from "ramda";
import Linkify from "react-linkify";
import { toast, Slide } from "react-toastify";
import {
  CheckCircle,
  Warning,
  CloseCircle,
  Info,
  Close,
} from "@bigbinary/neeto-icons";

const noop = () => {};

const TOAST_CONFIG = {
  autoClose: 3500,
  transition: Slide,
  position: toast.POSITION.BOTTOM_CENTER,
  hideProgressBar: true,
  closeButton: (
    <Close size={16} color="#68737D" className="nui-toastr__close-button" />
  ),
  role: "log",
  className: "nui-toastr",
};

const TOAST_ICON = {
  success: <CheckCircle color="#00BA88" />,
  warning: <Warning color="#F3CD82" />,
  error: <CloseCircle color="#F56A58" />,
  info: <Info color="#276EF1" />,
};

const ToastrComponent = ({
  type,
  message,
  buttonLabel = "",
  onClick = noop,
}) => {
  return (
    <div
      data-cy="toastr-message-container"
      data-test={`toastr-${type}-container`}
    >
      <Linkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
          <a target="_blank" href={decoratedHref} key={key} rel="noreferrer">
            &nbsp;{decoratedText}&nbsp;
          </a>
        )}
      >
        <p>{message}</p>
      </Linkify>
      {buttonLabel && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          data-cy={`toastr-${type}-button`}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

const showSuccessToastr = (message, buttonLabel, onClick) => {
  toast.success(
    <ToastrComponent
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
    <ToastrComponent
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
    <ToastrComponent
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

const showErrorToastr = (errorObject, buttonLabel, onClick) => {
  let errorMessage;
  if (isError(errorObject)) errorMessage = errorObject.message;
  else if (errorObject.error) errorMessage = errorObject.error;
  else if (errorObject.errors) errorMessage = join("\n", errorObject.errors);
  else errorMessage = "Something went wrong.";
  toast.error(
    <ToastrComponent
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

export const Toastr = {
  info: showInfoToastr,
  show: showInfoToastr,
  success: showSuccessToastr,
  error: showErrorToastr,
  warning: showWarningToastr,
};

export default Toastr;
