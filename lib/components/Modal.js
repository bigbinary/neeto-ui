import React, { Component } from "react";
import { Dialog } from "@blueprintjs/core";
import classnames from "classnames";
import Button from "./Button";

class Modal extends Component {
  render() {
    const {
      isOpen,
      onClose,
      size,
      className,
      autoHeight,
      autoWidth,
      showFooter,
      submitButtonProps,
      cancelButtonProps,
      showCloseButton = false,
      ...otherProps
    } = this.props;
    return (
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        className={classnames(["nui-modal__wrapper", className], {
          "nui-modal__wrapper--sm": size === "small",
          "nui-modal__wrapper--md": size === "medium",
          "nui-modal__wrapper--lg": size === "large",
          "nui-modal__wrapper--footer": showFooter,
          "nui-modal__wrapper--auto-height": autoHeight,
          "nui-modal__wrapper--auto-width": autoWidth,
        })}
        {...otherProps}
      >
        {showCloseButton && (
          <div className="nui-modal__close">
            <Button style="icon" icon="ri-close-line" onClick={onClose} data-cy="modal-close-button" />
          </div>
        )}
        {this.props.children}
        {showFooter && (
          <div className="nui-modal__footer" data-cy="modal-footer">
            <Button
              label="Cancel"
              style="secondary"
              size="large"
              onClick={onClose}
              data-test-id="modal-cancel-button"
              data-cy="modal-cancel-button"
              {...cancelButtonProps}
            />
            <Button
              label="Submit"
              className="ml-3"
              size="large"
              data-test-id="modal-submit-button"
              data-cy="modal-submit-button"
              {...submitButtonProps}
            />
          </div>
        )}
      </Dialog>
    );
  }
}

const Title = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full mb-4">
      <h1
        className="text-2xl font-semibold text-gray-800"
        data-test-id="modal-title"
        data-cy="modal-title"
      >
        {children}
      </h1>
    </div>
  );
};

Modal.Title = Title;

export default Modal;
