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
  return (
    <div
      data-cy="toastr-message-container"
      data-test={`toastr-${type}-container`}
      className="flex flex-row items-start justify-start"
    >
      <Linkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
          <a target="_blank" href={decoratedHref} key={key} rel="noreferrer">
            {" "}
            {decoratedText}{" "}
          </a>
        )}
      >
        <p className="mx-4 font-medium leading-5 text-white">{message}</p>
      </Linkify>
      {buttonLabel && (
        <Button style="link" label={buttonLabel} onClick={onClick} data-cy={`toastr-${type}-button`} />
      )}
    </div>
  );
};

const showToastr = (message, buttonLabel, onClick) => {
  toast.dark(
    <ToastrComponent
      type="success"
      message={"🎉 " + message}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />,
    {
      position: toast.POSITION.BOTTOM_CENTER,
      transition: Slide,
      hideProgressBar: true,
      className: "nui-toast",
    }
  );
};

const showInfoToastr = (message, buttonLabel, onClick) => {
  toast.dark(
    <ToastrComponent
      type="info"
      message={"🦄 " + message}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />,
    {
      position: toast.POSITION.BOTTOM_CENTER,
      transition: Slide,
      hideProgressBar: true,
      className: "nui-toast",
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
  toast.dark(
    <ToastrComponent
      type="error"
      message={"❌ " + errorMessage}
      buttonLabel={buttonLabel}
      onClick={onClick}
    />,
    {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      transition: Slide,
      className: "nui-toast",
    }
  );
};

export const Toastr = {
  success: showToastr,
  show: showToastr,
  error: showErrorToastr,
  info: showInfoToastr,
};

export default Toastr;
