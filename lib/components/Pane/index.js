import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Close } from "@bigbinary/neeto-icons";
import { CSSTransition } from "react-transition-group";

import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import Button from "../Button";
import { noop } from "../../utils";
import { Portal, Backdrop } from "../../atoms";
import { useOverlay } from "../../hooks/useOverlay";
import { useOverlayManager } from "../../hooks/useOverlayManager";

const SIZES = { small: "small", large: "large" };

const DEFAULT_PANE_HEADER_HEIGHT = 78;

const Pane = ({
  size = SIZES.small,
  isOpen = false,
  onClose = noop,
  children,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  closeOnOutsideClick = true,
  initialFocusRef,
  finalFocusRef,
  ...otherProps
}) => {
  const [hasTransitionCompleted, setHasTransitionCompleted] = useState(false);

  const paneWrapper = useRef();
  const backdropRef = useRef();

  useOverlayManager(paneWrapper, isOpen);

  const { handleOverlayClose } = useOverlay({
    overlayWrapper: paneWrapper,
    backdropRef,
    closeOnOutsideClick,
    closeOnEsc,
    onClose,
    isOpen,
    initialFocusRef,
    finalFocusRef,
    hasTransitionCompleted,
  });

  const getHeaderHeight = () => {
    const header = paneWrapper.current.querySelector(".neeto-ui-pane__header");
    return header ? header.offsetHeight : DEFAULT_PANE_HEADER_HEIGHT;
  };

  useEffect(() => {
    if (isOpen) {
      const headerHeight = getHeaderHeight();
      if (headerHeight > DEFAULT_PANE_HEADER_HEIGHT) {
        paneWrapper.current.style.setProperty(
          "--neeto-ui-pane-header-height",
          `${headerHeight}px`
        );
      }
    }
  }, [isOpen]);

  return (
    <Portal rootId="neeto-ui-portal">
      <CSSTransition
        unmountOnExit
        in={isOpen}
        appear={isOpen}
        timeout={300}
        classNames="neeto-ui-pane"
        onEntered={() => setHasTransitionCompleted(true)}
        onExited={() => setHasTransitionCompleted(false)}
      >
        <Backdrop
          ref={backdropRef}
          key="pane-backdrop"
          data-testid="backdrop"
          className={classnames(
            "neeto-ui-pane__backdrop neeto-ui-flex neeto-ui-justify-end",
            backdropClassName
          )}
        >
          <div
            ref={paneWrapper}
            key="pane-wrapper"
            data-cy="pane-wrapper"
            className={classnames("neeto-ui-pane__wrapper", {
              "neeto-ui-pane__wrapper--small": size === SIZES.small,
              "neeto-ui-pane__wrapper--large": size === SIZES.large,
              [className]: className,
            })}
            {...otherProps}
          >
            {closeButton && (
              <Button
                aria-label="Close"
                style="text"
                icon={Close}
                className="neeto-ui-pane__close"
                onClick={handleOverlayClose}
                data-testid="close-button"
                size="small"
              />
            )}
            {children}
          </div>
        </Backdrop>
      </CSSTransition>
    </Portal>
  );
};

Pane.propTypes = {
  /**
   * To specify the size of the Pane.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify whether the Pane component is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the callback which will be invoked when the close button of Pane is clicked.
   */
  onClose: PropTypes.func,
  /**
   * To specify the content to be rendered inside the Pane component.
   */
  children: PropTypes.node,
  /**
   * To provide external classname to the Pane component.
   */
  className: PropTypes.string,
  /**
   * To specify whether the Pane component should close on esc key press.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the Pane component should render close button.
   */
  closeButton: PropTypes.bool,
  /**
   * To specify the classname to be applied to the backdrop element.
   */
  backdropClassName: PropTypes.string,
  /**
   * To specify whether the Pane component should close on outside click.
   */
  closeOnOutsideClick: PropTypes.bool,

  /**
   * To specify the ref of the element which should be focused when the Pane component is opened.
   * If not specified, the first focusable element inside the Pane component will be focused.
   * If there are no focusable elements, the Pane component itself will be focused.
   */
  initialFocusRef: PropTypes.object,

  /**
   * To specify the ref of the element which should be focused when the Pane component is closed.
   * If not specified, the element which was focused when the Pane component was opened will be focused.
   */
  finalFocusRef: PropTypes.object,
};

Pane.Header = Header;
Pane.Body = Body;
Pane.Footer = Footer;

export default Pane;
