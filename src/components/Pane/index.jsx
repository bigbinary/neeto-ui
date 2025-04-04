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
import Footer from "./Footer";
import Header from "./Header";
import { getHeader, updateHeaderHeight } from "./utils";

const SIZES = { small: "small", large: "large", extraLarge: "extraLarge" };

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

  const paneWrapperRef = useRef(null);
  const backdropRef = useRef(null);

  const observerRef = useRef(
    new ResizeObserver(([entry]) =>
      updateHeaderHeight(entry.target, paneWrapperRef)
    )
  );

  useOverlayManager(paneWrapperRef, isOpen);

  const { handleOverlayClose, setFocusField, isTopOverlay } = useOverlay({
    overlayWrapper: paneWrapperRef,
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
    if (!hasTransitionCompleted || !paneWrapperRef.current) return undefined;

    const observer = observerRef.current;
    const header = getHeader(paneWrapperRef);

    if (header) {
      observer.observe(header);

      return () => observer.disconnect();
    }

    const mutationObserver = new MutationObserver(() => {
      const header = getHeader(paneWrapperRef);
      if (!header) return;

      observer.observe(header);
      mutationObserver.disconnect();
    });

    mutationObserver.observe(paneWrapperRef.current, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [hasTransitionCompleted, isTopOverlay]);

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
            ref={paneWrapperRef}
            className={classnames("neeto-ui-pane__wrapper", {
              "neeto-ui-pane__wrapper--small": size === SIZES.small,
              "neeto-ui-pane__wrapper--large": size === SIZES.large,
              "neeto-ui-pane__wrapper--extralarge": size === SIZES.extraLarge,
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
