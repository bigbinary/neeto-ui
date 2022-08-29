import React, { useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Close } from "@bigbinary/neeto-icons";
import { CSSTransition } from "react-transition-group";

import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import Button from "../Button";
import { noop } from "../../utils";
import { SIZES } from "../../constants/Modal";
import { Portal, Backdrop } from "../../atoms";
import { useModal } from "../../hooks/useModal";
import { useModalManager } from "./ModalManager";

const Modal = ({
  children,
  finalFocusRef,
  initialFocusRef,
  className = "",
  onClose = noop,
  size = SIZES.sm,
  isOpen = false,
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  blockScrollOnMount = true,
  closeOnOutsideClick = true,
  ...otherProps
}) => {
  const modalWrapper = useRef();
  const backdropRef = useRef();

  useModalManager(modalWrapper, isOpen);

  const { handleModalClose } = useModal({
    isOpen,
    initialFocusRef,
    finalFocusRef,
    modalWrapper,
    onClose,
    backdropRef,
    closeOnOutsideClick,
    closeOnEsc,
    blockScrollOnMount,
  });

  return (
    <Portal rootId="neeto-ui-portal">
      <CSSTransition
        in={isOpen}
        appear={isOpen}
        timeout={300}
        classNames="neeto-ui-modal"
        unmountOnExit
      >
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
                onClick={handleModalClose}
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
  /**
   * To specify the ref of the element which will receive focus when the Modal is closed.
   * If not specified, the focus will be set to the element which was focused when the Modal was opened.
   * If the Modal was opened by clicking on a button, then the focus will be set to the button.
   * */
  finalFocusRef: PropTypes.object,
  /**
   * To specify the ref of the element which will receive focus when the Modal is opened.
   * If not specified, the focus will be set to the first focusable element inside the Modal.
   * */
  initialFocusRef: PropTypes.object,
  /**
   * To specify whether the scroll should be blocked when the Modal is opened.
   * */
  blockScrollOnMount: PropTypes.bool,
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
