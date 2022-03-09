import React from "react";
import Linkify from "react-linkify";

const noop = () => {};

const Toast = ({ type, message, buttonLabel = "", onClick = noop }) => (
  <div
    data-cy="toastr-message-container"
    data-test={`toastr-${type}-container`}
  >
    <Linkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <a target="_blank" href={decoratedHref} key={key} rel="noreferrer">
          {decoratedText}
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

export default Toast;
