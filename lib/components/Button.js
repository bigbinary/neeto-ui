import React from "react";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Spinner from "../atoms/Spinner";

const noop = () => {};
const sizes = { large: "large", default: "default" };
const iconPositions = { left: "left", right: "right" };

const Button = React.forwardRef((props, ref) => {
  let {
    icon = null,
    iconPosition = "right",
    label = "",
    loading = false,
    onClick = noop,
    to = null,
    type = "button",
    style = "primary",
    fullWidth = false,
    className = "",
    disabled = false,
    size = null,
    href = null,
    ...otherProps
  } = props;

  const handleClick = (e) => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };

  let Parent, elementSpecificProps;
  if (to) {
    Parent = Link;
    elementSpecificProps = { to };
  } else if (href) {
    Parent = motion.a;
    elementSpecificProps = { href };
  } else {
    Parent = motion.button;
    elementSpecificProps = {
      type,
      animate: {
        width: "auto",
      },
    };
  }

  let Icon =
    typeof icon == "string"
      ? () => <i className={icon} />
      : icon || React.Fragment;

  const spinnerMarginSide =
    iconPosition == "left" ? "marginRight" : "marginLeft";

  return (
    <Parent
      ref={ref}
      onClick={handleClick}
      className={classnames("nui-btn", [`v2-nui-btn--${style}`, className], {
        "nui-btn--large": size === sizes.large,
        "nui-btn--full": fullWidth,
        "nui-btn--iconLeft": iconPosition == iconPositions.left,
        "disabled": disabled,
      })}
      disabled={disabled}
      {...elementSpecificProps}
      {...otherProps}
    >
      {label && <span>{label}</span>}

      <AnimatePresence exitBeforeEnter>
        {icon ? (
          /* When Icon is present, animate between the icon and the spinner*/
          loading ? (
            <Spinner key="1" />
          ) : (
            <Icon key="2" size={14} />
          )
        ) : (
          /* When Icon is not present, animate the margin from 0 to the needed value*/
          loading && (
            <motion.div
              initial={{ [spinnerMarginSide]: 0, width: 0, scale: 0 }}
              animate={{
                [spinnerMarginSide]: iconPosition == "left" ? 12 : 24,
                width: "auto",
                scale: 1,
              }}
              exit={{ [spinnerMarginSide]: 0, width: 0, scale: 0 }}
              transition={{ bounce: false }}
            >
              <Spinner key="3" />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </Parent>
  );
});

export default Button;
