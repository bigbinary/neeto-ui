import PropTypes from "prop-types";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Portal, Backdrop } from "../atoms";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import { useOnClickOutside } from "../utils";
import {
  PANE_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
  TRANSITION,
} from "../constants/overlay";
import Button from "./Button";
import { Close } from "@bigbinary/neeto-icons";

const noop = () => {};

const Pane = ({
  size = "sm",
  isOpen,
  onClose = noop,
  loading = false,
  children,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  closeOnOutsideClick = true,
}) => {
  const paneWrapper = useRef();

  if (closeOnOutsideClick) useOnClickOutside(paneWrapper, onClose);

  if (closeOnEsc) useHotkeys("esc", onClose);

  return (
    <Portal className="nui-portal">
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            key="pane-backdrop"
            className={classnames("nui-pane__backdrop", backdropClassName)}
          >
            <motion.div
              initial={{
                x: PANE_SIZE,
                filter: BLUR_FINAL,
              }}
              animate={{
                x: 0,
                filter: BLUR_INITIAL,
              }}
              transition={{
                bounce: false,
                duration: TRANSITION,
              }}
              ref={paneWrapper}
              key="pane-wrapper"
              data-cy="pane-wrapper"
              exit={{ x: PANE_SIZE, filter: BLUR_FINAL }}
              className={classnames("nui-pane__wrapper", {
                "nui-pane__wrapper--sm": size === "sm",
                "nui-pane__wrapper--lg": size === "lg",
                [className]: className,
              })}
            >
              {closeButton &&
                <Button
                  style="icon"
                  icon={Close}
                  className="nui-modal__close"
                  onClick={onClose}
                />
              }
              {loading ? <></> : children}
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};

Pane.propTypes = {
  size: PropTypes.oneOfType(["sm", "lg"]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.array,
  className: PropTypes.string,
  closeOnEsc: PropTypes.bool,
  closeButton: PropTypes.bool,
  backdropClassName: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
};

const Header = ({ children, className }) => {
  return (
    <div className={classnames("nui-pane__header", className)}>{children}</div>
  );
};

const Body = ({ children, className }) => {
  return (
    <div className={classnames("nui-pane__body", className)}>{children}</div>
  );
};

const Footer = ({ children, className }) => {
  return (
    <div className={classnames("nui-pane__footer", className)}>{children}</div>
  );
};

Pane.Header = Header;
Pane.Body = Body;
Pane.Footer = Footer;

export default Pane;
