import React, { useRef, useState } from "react";

import classnames from "classnames";
import { Close } from "neetoicons";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import Backdrop from "atoms/Backdrop";
import Portal from "atoms/Portal";
import Button from "components/Button";
import { useOverlayManager, useOverlay } from "hooks";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const SIZES = {
  small: "small",
  medium: "medium",
  large: "large",
  fullScreen: "fullScreen",
};

const Modal = ({
  size = SIZES.medium,
  isOpen = false,
  onClose = () => {},
  children,
  finalFocusRef,
  initialFocusRef,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  blockScrollOnMount = true,
  closeOnOutsideClick = true,
  ...otherProps
}) => {
  const [hasTransitionCompleted, setHasTransitionCompleted] = useState(false);

  const modalWrapper = useRef(null);
  const backdropRef = useRef(null);

  useOverlayManager(modalWrapper, isOpen);

  const { handleOverlayClose, setFocusField } = useOverlay({
    isOpen,
    initialFocusRef,
    finalFocusRef,
    overlayWrapper: modalWrapper,
    onClose,
    backdropRef,
    closeOnOutsideClick,
    closeOnEsc,
    blockScrollOnMount,
    hasTransitionCompleted,
  });

  const isFullScreenModal = size === SIZES.fullScreen;

  return (
    <Portal rootId="neeto-ui-portal">
      <CSSTransition
        unmountOnExit
        appear={isOpen}
        classNames="neeto-ui-modal"
        in={isOpen}
        timeout={300}
        onEntered={() => setHasTransitionCompleted(true)}
        onExited={() => setHasTransitionCompleted(false)}
      >
        <Backdrop
          data-testid="backdrop"
          key="modal-backdrop"
          ref={backdropRef}
          className={classnames(
            "neeto-ui-modal__backdrop",
            {
              "neeto-ui-modal__backdrop--fullscreen": isFullScreenModal,
            },
            backdropClassName
          )}
        >
          <div
            aria-modal
            key="modal-wrapper"
            ref={modalWrapper}
            role="dialog"
            className={classnames("neeto-ui-modal__wrapper", {
              "neeto-ui-modal__wrapper--small": size === SIZES.small,
              "neeto-ui-modal__wrapper--medium": size === SIZES.medium,
              "neeto-ui-modal__wrapper--large": size === SIZES.large,
              "neeto-ui-modal__wrapper--fullscreen": isFullScreenModal,
              [className]: className,
            })}
            {...otherProps}
          >
            {closeButton && (
              <Button
                aria-label="Close"
                className="neeto-ui-modal__close"
                data-cy="modal-close-button"
                data-testid="close-button"
                icon={Close}
                size={isFullScreenModal ? "large" : "small"}
                style={isFullScreenModal ? "secondary" : "text"}
                onClick={handleOverlayClose}
              />
            )}
            {typeof children === "function"
              ? children({ setFocusField })
              : children}
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
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
   * To add custom classes to backdrop component.
   */
  backdropClassName: PropTypes.string,
  /**
   * To close on clicking outside the Modal content.
   */
  closeOnOutsideClick: PropTypes.bool,
  /*
   * To specify the ref of the element which will receive focus when the Modal is closed.
   * If not specified, the focus will be set to the element which was focused when the Modal was opened.
   * If the Modal was opened by clicking on a button, then the focus will be set to the button.
   * */
  finalFocusRef: PropTypes.object,
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-success mb-2">
   * New
   * </div>
   * To specify the ref of the element which will receive focus when the Modal is opened.
   * If not specified, the focus will be set to the first focusable element inside the Modal.
   * */
  initialFocusRef: PropTypes.object,
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-success mb-2">
   * New
   * </div>
   * To specify whether the scroll should be blocked when the Modal is opened.
   * */
  blockScrollOnMount: PropTypes.bool,
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
