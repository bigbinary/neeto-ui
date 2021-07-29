import PropTypes from "prop-types";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "../atoms/Portal";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import { useOnClickOutside } from "../utils";
import Button from "./Button";
// import PageLoader from "./PageLoader";
const noop = () => {};

const Pane = ({
  isOpen,
  onClose = noop,
  size = "md",
  className,
  showFooter,
  submitButtonProps,
  cancelButtonProps,
  closeOnOutsideClick = false,
  showCloseButton = false,
  closeOnEsc = true,
  children,
  loading,
  ...otherProps
}) => {
  const paneWrapper = useRef();

  if (closeOnOutsideClick) useOnClickOutside(paneWrapper, onClose);

  if (closeOnEsc) useHotkeys("esc", onClose);

  return (
    <Portal className="nui-pane--portal">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              backgroundColor: "#1b1f2300",
              backdropFilter: "blur(0px)",
            }}
            animate={{
              backgroundColor: "#1b1f23dd",
              backdropFilter: "blur(2px)",
            }}
            exit={{ backgroundColor: "#1b1f2300", backdropFilter: "blur(0px)" }}
            transition={{
              bounce: false,
              duration: 0.3,
            }}
            key="backdrop"
            className="nui-pane--root"
          >
            <motion.div
              initial={{
                x: 720,
                filter: "blur(2px)",
              }}
              animate={{
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{
                bounce: false,
                duration: 0.4,
              }}
              ref={paneWrapper}
              key="content"
              exit={{ x: 720, filter: "blur(5px)" }}
              className={classnames(["nui-pane--wrapper"], {
                "nui-pane__body--has-footer": showFooter,
              })}
              data-cy="pane-container"
            >
              {children}
              {/* {loading ? <PageLoader /> : children} */}
              {showFooter && (
                <div className="nui-pane--footer">
                  <Button
                    label="Cancel"
                    size="large"
                    style="secondary"
                    className="mr-2"
                    data-test-id="cancel-button"
                    data-cy="pane-cancel-button"
                    {...cancelButtonProps}
                  />
                  <Button
                    label="Update"
                    size="large"
                    data-test-id="submit-button"
                    data-cy="pane-submit-button"
                    {...submitButtonProps}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

Pane.propTypes = {
  cancelButtonProps: PropTypes.any,
  children: PropTypes.array,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showFooter: PropTypes.bool,
  size: PropTypes.oneOfType(["sm", "md", "lg"]),
  submitButtonProps: PropTypes.any,
};

const Header = ({ children, className }) => {
  return (
    <div className={classnames("nui-pane--header", className)}>{children}</div>
  );
};

// const Title = ({ children, className }) => {
//   return (
//     <h2 className={classnames("nui-pane--title", className)}>{children}</h2>
//   );
// };

const Body = ({ children, className }) => {
  return (
    <div className={classnames("nui-pane--body", className)}>{children}</div>
  );
};

const Footer = ({ children, className }) => {
  return (
    <div className={classnames("nui-pane--footer", className)}>{children}</div>
  );
};

Pane.Body = Body;
Pane.Header = Header;
Pane.Footer = Footer;

export default Pane;
