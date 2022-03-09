import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Close } from "@bigbinary/neeto-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";

import { Portal, Backdrop } from "../../atoms";
import { useOnClickOutside } from "../../utils";
import {
  PANE_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
  TRANSITION,
} from "../../constants/overlay";
import Button from "../Button";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const noop = () => {};

const SIZES = ["sm", "lg"];

const ANIMATION_VARIANTS = {
  open: {
    x: 0,
    filter: BLUR_INITIAL,
  },
  closed: {
    x: PANE_SIZE,
    filter: BLUR_FINAL,
  },
};

const Pane = ({
  size = "sm",
  isOpen = false,
  onClose = noop,
  loading = false,
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

  useHotkeys("esc", closeOnEsc ? onClose : noop);

  return (
    <Portal rootId="neeto-ui-portal">
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            ref={backdropRef}
            key="pane-backdrop"
            className={classnames(
              "neeto-ui-pane__backdrop flex justify-end",
              backdropClassName
            )}
          >
            <motion.div
              variants={ANIMATION_VARIANTS}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{
                bounce: false,
                duration: TRANSITION,
              }}
              ref={paneWrapper}
              key="pane-wrapper"
              data-cy="pane-wrapper"
              className={classnames("neeto-ui-pane__wrapper", {
                "neeto-ui-pane__wrapper--sm": size === "sm",
                "neeto-ui-pane__wrapper--lg": size === "lg",
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
                />
              )}
              {loading ? <></> : children}
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};

Pane.propTypes = {
  /**
   * To specify the size of the Pane.
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * To specify whether the Pane component is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the callback which will be invoked when the Pane is closed.
   */
  onClose: PropTypes.func,
  /**
   * To specify whether the Pane is in loading state.
   */
  loading: PropTypes.bool,
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
