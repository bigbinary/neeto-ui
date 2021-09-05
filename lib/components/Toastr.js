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

import Button from "./Button";

const noop = () => {};

const TOAST_CONFIG = {
  autoClose: false,
  position: toast.POSITION.BOTTOM_CENTER,
  transition: Slide,
  hideProgressBar: true,
  closeButton: (
    <Close size={16} color="#68737D" className="nui-toastr__close-button" />
  ),
  className: "nui-toast",
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
        {TOAST_ICON[type]}
        <p>{message}</p>
      </Linkify>
      {/* {buttonLabel && (
        <Button
          style="link"
          label={buttonLabel}
          onClick={onClick}
          data-cy={`toastr-${type}-button`}
        />
      )} */}
    </div>
  );
};

const showToastr = (message, buttonLabel, onClick) => {
  toast.success(
    <ToastrComponent type="success" message={message} onClick={onClick} />,
    { ...TOAST_CONFIG }
  );
};

const showInfoToastr = (message, buttonLabel, onClick) => {
  toast.info(
    <ToastrComponent type="info" message={message} onClick={onClick} />,
    { ...TOAST_CONFIG, autoClose: 10000 }
  );
};

const ShowToastrWarning = (message, buttonLabel, onClick) => {
  toast.warning(
    <ToastrComponent type="warning" message={message} onClick={onClick} />,
    { ...TOAST_CONFIG }
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
    <ToastrComponent type="error" message={errorMessage} onClick={onClick} />,
    { ...TOAST_CONFIG }
  );
};

export const Toastr = {
  success: showToastr,
  show: showToastr,
  error: showErrorToastr,
  warning: ShowToastrWarning,
  info: showInfoToastr,
};

export default Toastr;
