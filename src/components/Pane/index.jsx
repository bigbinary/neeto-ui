import React, { useRef, useState, useEffect } from "react";

import classnames from "classnames";
import { Close } from "neetoicons";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import Backdrop from "atoms/Backdrop";
import Portal from "atoms/Portal";
import Button from "components/Button";
import { useOverlay, useOverlayManager } from "hooks";

import Body from "./Body";
import { DEFAULT_PANE_HEADER_HEIGHT } from "./constants";
import Footer from "./Footer";
import Header from "./Header";
import { getHeaderHeight } from "./utils";

const SIZES = { small: "small", large: "large" };

const Pane = ({
  size = SIZES.small,
  isOpen = false,
  onClose = () => {},
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

  const paneWrapper = useRef(null);
  const backdropRef = useRef(null);

  useOverlayManager(paneWrapper, isOpen);

  const { handleOverlayClose, setFocusField } = useOverlay({
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

  useEffect(() => {
    if (!hasTransitionCompleted) return;
    const headerHeight = getHeaderHeight(paneWrapper);
    if (headerHeight > DEFAULT_PANE_HEADER_HEIGHT) {
      paneWrapper.current.style.setProperty(
        "--neeto-ui-pane-header-height",
        `${headerHeight}px`
      );
    }
  }, [hasTransitionCompleted]);

  return (
    <Portal rootId="neeto-ui-portal">
      <CSSTransition
        unmountOnExit
        appear={isOpen}
        classNames="neeto-ui-pane"
        in={isOpen}
        timeout={230}
        onEntered={() => setHasTransitionCompleted(true)}
        onExited={() => setHasTransitionCompleted(false)}
      >
        <Backdrop
          data-testid="backdrop"
          key="pane-backdrop"
          ref={backdropRef}
          className={classnames(
            "neeto-ui-pane__backdrop neeto-ui-flex neeto-ui-justify-end",
            backdropClassName
          )}
        >
          <div
            data-cy="pane-wrapper"
            key="pane-wrapper"
            ref={paneWrapper}
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
                className="neeto-ui-pane__close"
                data-cy="pane-close-button"
                data-testid="close-button"
                icon={Close}
                size="small"
                style="text"
                onClick={handleOverlayClose}
              />
            )}
            {hasTransitionCompleted && (
              <>
                {typeof children === "function"
                  ? children({ setFocusField })
                  : children}
              </>
            )}
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
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
