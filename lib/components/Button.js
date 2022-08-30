import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";
import PropTypes from "prop-types";

import Spinner from "../atoms/Spinner";
import Tooltip from "./Tooltip";

const BUTTON_STYLES = {
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  danger_text: "danger-text",
  text: "text",
  link: "link",
};
const SIZES = { small: "small", medium: "medium", large: "large" };
const ICON_POSITIONS = { left: "left", right: "right" };
const BUTTON_TYPES = { button: "button", reset: "reset", submit: "submit" };

const Button = React.forwardRef((props, ref) => {
  let {
    icon = null,
    iconPosition = ICON_POSITIONS.right,
    iconSize = 16,
    label = "",
    loading = false,
    onClick = () => {},
    to = "",
    type = BUTTON_TYPES.button,
    style = BUTTON_STYLES.primary,
    fullWidth = false,
    className = "",
    disabled = false,
    size = SIZES.medium,
    href = "",
    tooltipProps = null,
    ...otherProps
  } = props;

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
    };
  }

  const handleClick = (e) => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };

  const Icon =
    typeof icon == "string"
      ? () => (
        <i
          data-testid="class-icon"
          className={classnames("neeto-ui-btn__icon", [icon])}
        />
      )
      : icon || React.Fragment;

  return (
    <Tooltip disabled={!tooltipProps} {...tooltipProps}>
      <Parent
        ref={ref}
        onClick={handleClick}
        className={classnames("neeto-ui-btn", [className], {
          "neeto-ui-btn--style-primary": style === BUTTON_STYLES.primary,
          "neeto-ui-btn--style-secondary": style === BUTTON_STYLES.secondary,
          "neeto-ui-btn--style-danger": style === BUTTON_STYLES.danger,
          "neeto-ui-btn--style-danger-text":
            style === BUTTON_STYLES.danger_text,
          "neeto-ui-btn--style-text": style === BUTTON_STYLES.text,
          "neeto-ui-btn--style-link": style === BUTTON_STYLES.link,
          "neeto-ui-btn--size-medium": size === SIZES.medium,
          "neeto-ui-btn--size-large": size === SIZES.large,
          "neeto-ui-btn--width-full": fullWidth,
          "neeto-ui-btn--icon-left": iconPosition == ICON_POSITIONS.left,
          "neeto-ui-btn--icon-only": !label,
          disabled: disabled,
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
              <Spinner
                aria-hidden="true"
                key="1"
                size={16}
                className="neeto-ui-btn__spinner"
              />
            ) : (
              <Icon
                aria-hidden="true"
                key="2"
                size={iconSize}
                className="neeto-ui-btn__icon"
              />
            )
          ) : (
            /* When Icon is not present, animate the margin from 0 to the needed value*/
            loading && (
              <motion.div
                className="neeto-ui-btn__spinner-wrapper"
                initial={{ width: 0, scale: 0 }}
                animate={{
                  width: "auto",
                  scale: 1,
                }}
                exit={{ width: 0, scale: 0 }}
                transition={{ bounce: false }}
              >
                <Spinner
                  aria-hidden="true"
                  key="3"
                  size={16}
                  className="neeto-ui-btn__spinner"
                />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </Parent>
    </Tooltip>
  );
});

Button.propTypes = {
  /**
   * To specify the style of the Button.
   */
  style: PropTypes.oneOf(Object.values(BUTTON_STYLES)),
  /**
   * To set the size of the Button.
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To specify the position of the icon.
   */
  iconPosition: PropTypes.oneOf(Object.values(ICON_POSITIONS)),
  /**
   * To specify the size of the icon.
   */
  iconSize: PropTypes.number,
  /**
   * To set the text to be displayed inside the Button.
   */
  label: PropTypes.string,
  /**
   * Indicates if a Button is in loading state and shows spinner if true.
   */
  loading: PropTypes.bool,
  /**
   * To set Button as disabled.
   */
  disabled: PropTypes.bool,
  /**
   * To set the icon to be shown in the Button.
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * To specify the action to be triggered on clicking the Button.
   */
  onClick: PropTypes.func,
  /**
   * To specify an internal route to which the Button points to.
   */
  to: PropTypes.string,
  /**
   * To specify an external link to which the Button points to.
   */
  href: PropTypes.string,
  /**
   * To specify the type of Button.
   */
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  /**
   * To set the button to full width of the container.
   */
  fullWidth: PropTypes.bool,
  /**
   * To provide external classnames to Button component.
   */
  className: PropTypes.string,
  /**
   * To specify the props to be passed to the tooltip.
   */
  tooltipProps: PropTypes.object,
};

export default Button;
