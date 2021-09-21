import React from "react";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Spinner from "../atoms/Spinner";

const noop = () => {};
const BUTTON_STYLES = { primary: "primary", secondary: "secondary", danger: "danger", text: "text", link: "link" };
const BUTTON_SIZES = { large: "large", default: "default" };
const ICON_POSITIONS = { left: "left", right: "right" };
const BUTTON_TYPES = { button: "button", reset: "reset", submit: "submit"};

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
      ? () => <i className={classnames("nui-btn__icon", [icon])}/>
      : icon || React.Fragment;

  const spinnerMarginSide =
    iconPosition == "left" ? "marginRight" : "marginLeft";

  return (
    <Parent
      ref={ref}
      onClick={handleClick}
      className={classnames("nui-btn", [className], {
        "nui-btn--style-primary": style === BUTTON_STYLES.primary,
        "nui-btn--style-secondary": style === BUTTON_STYLES.secondary,
        "nui-btn--style-danger": style === BUTTON_STYLES.danger,
        "nui-btn--style-text": style === BUTTON_STYLES.text,
        "nui-btn--style-link": style === BUTTON_STYLES.link,
        "nui-btn--size-large": size === BUTTON_SIZES.large,
        "nui-btn--width-full": fullWidth,
        "nui-btn--icon-left": iconPosition == ICON_POSITIONS.left,
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
            <Spinner key="1" size={14} className="nui-btn__spinner" />
          ) : (
            <Icon key="2" size={14} className="nui-btn__icon" />
          )
        ) : (
          /* When Icon is not present, animate the margin from 0 to the needed value*/
          loading && (
            <motion.div
              className="nui-btn__spinner-wrapper"
              initial={{ [spinnerMarginSide]: 0, width: 0, scale: 0 }}
              animate={{
                [spinnerMarginSide]: ".7142857143em",
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
  icon: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * Specifies an internal route to which the button points to.
   */
  to: PropTypes.string,
  /**
   * Specify an exernal link to which the button points to.
   */
  href: PropTypes.string,
  /**
   * Sepcify the type of button.
   */
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  /**
   * Button will be of full width of the container.
   */
  fullWidth: PropTypes.bool,
  /**
   * Use external classnames as override to neetoUI button.
   */
  className: PropTypes.string
};

export default Button;
