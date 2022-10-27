import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Close } from "@bigbinary/neeto-icons";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import { CSSTransition } from "react-transition-group";

import { Portal, Backdrop } from "../../atoms";
import { useOnClickOutside } from "../../utils";
import Button from "../Button";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const noop = () => {};

const SIZES = { small: "small", large: "large" };

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
  ...otherProps
}) => {
  const paneWrapper = useRef();
  const backdropRef = useRef();

  useOnClickOutside(
    paneWrapper,
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
      <CSSTransition
        in={isOpen}
        appear={isOpen}
        timeout={300}
        classNames="neeto-ui-pane"
        unmountOnExit
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
                onClick={onClose}
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
};

Pane.Header = Header;
Pane.Body = Body;
Pane.Footer = Footer;

export default Pane;
