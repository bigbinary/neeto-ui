import React, { useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Close } from "@bigbinary/neeto-icons";
import { CSSTransition } from "react-transition-group";

import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import Button from "../Button";
import { usePane } from "../../hooks/usePane";
import { Portal, Backdrop } from "../../atoms";

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

  usePane({
    paneWrapper,
    backdropRef,
    closeOnOutsideClick,
    closeOnEsc,
    onClose,
    isOpen,
  });

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
