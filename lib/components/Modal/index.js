import React, { useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useHotkeys } from "react-hotkeys-hook";
import { Close } from "@bigbinary/neeto-icons";
import { CSSTransition } from "react-transition-group";

import { Portal, Backdrop } from "../../atoms";
import { useOnClickOutside } from "../../utils";
import Button from "../Button";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const noop = () => {};

const SIZES = {
  xs: "xs",
  sm: "sm",
  md: "md",
};

const Modal = ({
  size = SIZES.sm,
  isOpen = false,
  onClose = noop,
  children,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  closeOnOutsideClick = true,
  ...otherProps
}) => {
  const modalWrapper = useRef();
  const backdropRef = useRef();

  useOnClickOutside(
    modalWrapper,
    backdropRef,
    closeOnOutsideClick ? onClose : noop
  );

  const onCloseRef = useRef();
  onCloseRef.current = onClose;

  useHotkeys(
    "esc",
    () => {
      closeOnEsc ? onCloseRef.current() : noop();
    },
    [onCloseRef]
  );

  return (
    <Portal rootId="neeto-ui-portal">
      <CSSTransition in={isOpen} timeout={300} classNames="neeto-ui-modal" unmountOnExit>
        <Backdrop
          ref={backdropRef}
          key="modal-backdrop"
          data-testid="backdrop"
          className={classnames("neeto-ui-modal__backdrop", backdropClassName)}
        >
          <div
            role="dialog"
            aria-modal={true}
            ref={modalWrapper}
            key="modal-wrapper"
            className={classnames("neeto-ui-modal__wrapper", {
              "neeto-ui-modal__wrapper--xs": size === SIZES.xs,
              "neeto-ui-modal__wrapper--sm": size === SIZES.sm,
              "neeto-ui-modal__wrapper--md": size === SIZES.md,
              [className]: className,
            })}
            {...otherProps}
          >
            {closeButton && (
              <Button
                aria-label="Close"
                style="text"
                icon={Close}
                className="neeto-ui-modal__close"
                onClick={onClose}
                data-testid="close-button"
              />
            )}
            {children}
          </div>
        </Backdrop>
      </CSSTransition>
    </Portal>
  );
};

Modal.propTypes = {
  /**
   * To specify the size of the Modal.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify whether the Modal is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the callback which will be invoked when the Modal is closed.
   */
  onClose: PropTypes.func,
  /**
   * To specify the content to be rendered inside the Modal component.
   */
  children: PropTypes.node,
  /**
   * To provide external classNames to the Modal.
   */
  className: PropTypes.string,
  /**
   * To close the Modal on pressing the Esc key.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the close button of the Modal should be displayed or not.
   */
  closeButton: PropTypes.bool,
  /**
   * To add custom classes to Backdrop component.
   */
  backdropClassName: PropTypes.string,
  /**
   * To close on clicking outside the Modal content.
   */
  closeOnOutsideClick: PropTypes.bool,
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
