import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";
import PropTypes from "prop-types";

import Spinner from "../atoms/Spinner";
import Tooltip from "./Tooltip";

const noop = () => {};
const BUTTON_STYLES = {
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  text: "text",
  link: "link",
};
const BUTTON_SIZES = { large: "large", default: "default" };
const ICON_POSITIONS = { left: "left", right: "right" };
const BUTTON_TYPES = { button: "button", reset: "reset", submit: "submit" };

const Button = React.forwardRef((props, ref) => {
  let {
    icon = null,
    iconPosition = "right",
    iconSize = 16,
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

  const handleClick = (e) => !loading && !disabled && onClick(e);

  const Icon =
    typeof icon == "string"
      ? () => <i data-testid="class-icon" className={classnames("neeto-ui-btn__icon", [icon])} />
      : icon || React.Fragment;

  const spinnerMarginSide =
    iconPosition == "left" ? "marginRight" : "marginLeft";

  return (
    <Tooltip disabled={!tooltipProps} {...tooltipProps}>
      <Parent
        ref={ref}
        onClick={handleClick}
        className={classnames("neeto-ui-btn", [className], {
          "neeto-ui-btn--style-primary": style === BUTTON_STYLES.primary,
          "neeto-ui-btn--style-secondary": style === BUTTON_STYLES.secondary,
          "neeto-ui-btn--style-danger": style === BUTTON_STYLES.danger,
          "neeto-ui-btn--style-text": style === BUTTON_STYLES.text,
          "neeto-ui-btn--style-link": style === BUTTON_STYLES.link,
          "neeto-ui-btn--size-large": size === BUTTON_SIZES.large,
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
                size={iconSize}
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
                initial={{ [spinnerMarginSide]: 0, width: 0, scale: 0 }}
                animate={{
                  [spinnerMarginSide]: ".7142857143em",
                  width: "auto",
                  scale: 1,
                }}
                exit={{ [spinnerMarginSide]: 0, width: 0, scale: 0 }}
                transition={{ bounce: false }}
              >
                <Spinner aria-hidden="true" key="3" />
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
   * Specifies the style of the button.
   */
  style: PropTypes.oneOf(Object.values(BUTTON_STYLES)),
  /**
   * Set the size of the button.
   */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  /**
   * Specifies the position of the icon.
   */
  iconPosition: PropTypes.oneOf(Object.values(ICON_POSITIONS)),
  /**
   * Text to be displayed inside the button.
   */
  label: PropTypes.string,
  /**
   * Indicates if a button is in loading state and shows spinner if true.
   */
  loading: PropTypes.bool,
  /**
   * Set button as disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Icon to be shown in the button.
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  onClick: PropTypes.func,
  /**
   * Specifies an internal route to which the button points to.
   */
  to: PropTypes.string,
  /**
   * Specify an external link to which the button points to.
   */
  href: PropTypes.string,
  /**
   * Specify the type of button.
   */
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  /**
   * Button will be of full width of the container.
   */
  fullWidth: PropTypes.bool,
  /**
   * Use external classnames as override to neetoUI button.
   */
  className: PropTypes.string,
  tooltipProps: PropTypes.object,
};

export default Button;
