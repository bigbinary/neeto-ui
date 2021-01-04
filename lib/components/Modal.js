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
      isCloseButtonShown = false,
      ...otherProps
    } = this.props;
    return (
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        className={classnames(
          [
            "nui-modal__wrapper",
            className
          ],
          {
            "nui-modal__wrapper--sm": size === "small",
            "nui-modal__wrapper--md": size === "medium",
            "nui-modal__wrapper--lg": size === "large",
            "nui-modal__wrapper--footer": showFooter,
            "nui-modal__wrapper--auto-height": autoHeight,
            "nui-modal__wrapper--auto-width": autoWidth
          }
        )}
        {...otherProps}
      >
        {isCloseButtonShown &&
          <div className="nui-modal__close">
            <Button style="icon" icon="ri-close-line" onClick={onClose} />
          </div>
        }
        {this.props.children}
        {showFooter && (
          <div className="absolute bottom-0 left-0 flex flex-row items-center justify-end w-full px-6 py-3.5 bg-gray-50">
            <Button
              label="Cancel"
              style="secondary"
              size="large"
              onClick={onClose}
              data-test-id="modal-cancel-button"
              {...cancelButtonProps}
            />
            <Button
              label="Submit"
              className="ml-3"
              size="large"
              data-test-id="modal-submit-button"
              {...submitButtonProps}
            />
          </div>
        )}
      </Dialog>
    );
  }
}

const Title = ({ children, closeButtonProps }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full mb-4">
      <h1
        className="text-2xl font-semibold text-gray-800"
        data-test-id="page-heading">
        {children}
      </h1>
      {closeButtonProps && (
        <div>
          <Button
            style="icon"
            icon="ri-close-line ri-lg"
            {...closeButtonProps}
          />
        </div>
      )}
    </div>
  );
};

Modal.Title = Title;

export default Modal;
