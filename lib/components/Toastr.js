import React from "react";
import * as R from "ramda";
import { toast, Slide } from "react-toastify";
import Button from "./Button";
import Linkify from "react-linkify";

const noop = () => {};

const ToastrComponent = ({
  type,
  message,
  buttonLabel = "",
  onClick = noop,
}) => {
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
      <Linkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
          <a target="_blank" href={decoratedHref} key={key}>
            {" "}
            {decoratedText}{" "}
          </a>
        )}
      >
        <p className="mx-4 font-medium leading-5 text-white">{message}</p>
      </Linkify>
      {buttonLabel && (
        <Button style="link" label={buttonLabel} onClick={onClick} />
      )}
    </div>
  );
};

const showToastr = (message, buttonLabel, onClick) => {
  toast.success(
    <ToastrComponent
      type="success"
      message={message}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />,
    {
      position: toast.POSITION.BOTTOM_CENTER,
      transition: Slide,
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
    {
      position: toast.POSITION.BOTTOM_CENTER,
      transition: Slide,
    }
  );
};

const isError = (e) => e && e.stack && e.message;

const showErrorToastr = (errorObject, buttonLabel, onClick) => {
  let errorMessage;
  if (isError(errorObject)) errorMessage = errorObject.message;
  else if (errorObject.error) errorMessage = errorObject.error;
  else if (errorObject.errors) errorMessage = R.join("\n", errorObject.errors);
  else errorMessage = "Something went wrong.";
  toast.error(
    <ToastrComponent
      type="error"
      message={errorMessage}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />,
    {
      position: toast.POSITION.BOTTOM_CENTER,
      transition: Slide,
      autoClose: 10000,
    }
  );
};

export const Toastr = {
  success: showToastr,
  error: showErrorToastr,
  info: showInfoToastr,
};

export default Toastr;
