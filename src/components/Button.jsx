import React, { useEffect, useRef, useState } from "react";

import classnames from "classnames";
import { Error } from "neetoicons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Spinner from "./Spinner";
import Tooltip from "./Tooltip";

const ThumbsUp = () => <>👍</>;

const BUTTON_STYLES = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  danger: "danger",
  danger_text: "danger-text",
  text: "text",
  link: "link",
};
const SIZES = { small: "small", medium: "medium", large: "large" };
const ICON_POSITIONS = { left: "left", right: "right" };
const BUTTON_TYPES = { button: "button", reset: "reset", submit: "submit" };
const STATUS = { SUCCESS: "success", ERROR: "error", NONE: "" };

const Button = React.forwardRef(
  (
    {
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
      children,
      status,
      onStatusReset,
      ...otherProps
    },
    ref
  ) => {
    let Parent = "button";
    let elementSpecificProps = { type };
    const resetFeedbackIconTimeout = useRef();

    const [didStartAction, setDidStartAction] = useState(false);
    const [isFeedbackIconVisible, setIsFeedbackIconVisible] = useState(false);

    const renderLabel = label || children;

    if (!disabled) {
      if (to) {
        Parent = Link;
        elementSpecificProps = { to };
      } else if (href) {
        Parent = "a";
        elementSpecificProps = { href };
      }
    }

    useEffect(() => {
      if (!loading) return;

      setDidStartAction(true);
    }, [loading]);

    useEffect(() => {
      if (loading || !didStartAction) return;

      if (didStartAction && !status) {
        setDidStartAction(false);

        return;
      }

      setIsFeedbackIconVisible(true);
      setDidStartAction(false);
      resetFeedbackIconTimeout.current = setTimeout(() => {
        setIsFeedbackIconVisible(false);
        onStatusReset?.();
      }, 5000);
    }, [didStartAction, loading]);

    let FeedbackIcon = null;
    if (status === STATUS.SUCCESS) FeedbackIcon = ThumbsUp;

    if (status === STATUS.ERROR) FeedbackIcon = Error;

    const handleClick = e => {
      if (loading || disabled) return;
      setIsFeedbackIconVisible(false);
      clearTimeout(resetFeedbackIconTimeout.current);
      onClick(e);
    };

    const Icon =
      typeof icon === "string"
        ? () => (
            <i
              className={classnames("neeto-ui-btn__icon", [icon])}
              data-testid="class-icon"
            />
          )
        : icon || React.Fragment;

    const isFeedbackIconsVisible =
      loading || didStartAction || (isFeedbackIconVisible && status);

    return (
      <Tooltip disabled={!tooltipProps} {...tooltipProps}>
        <Parent
          className={classnames("neeto-ui-btn", [className], {
            "neeto-ui-btn--style-primary": style === BUTTON_STYLES.primary,
            "neeto-ui-btn--style-secondary": style === BUTTON_STYLES.secondary,
            "neeto-ui-btn--style-tertiary": style === BUTTON_STYLES.tertiary,
            "neeto-ui-btn--style-danger": style === BUTTON_STYLES.danger,
            "neeto-ui-btn--style-danger-text":
              style === BUTTON_STYLES.danger_text,
            "neeto-ui-btn--style-text": style === BUTTON_STYLES.text,
            "neeto-ui-btn--style-link": style === BUTTON_STYLES.link,
            "neeto-ui-btn--size-medium": size === SIZES.medium,
            "neeto-ui-btn--size-large": size === SIZES.large,
            "neeto-ui-btn--width-full": fullWidth,
            "neeto-ui-btn--icon-left": iconPosition === ICON_POSITIONS.left,
            "neeto-ui-btn--icon-only": !renderLabel,
            "neeto-ui-btn--feedback-visible": isFeedbackIconsVisible,
            disabled,
          })}
          onClick={handleClick}
          {...{ disabled, ref, ...elementSpecificProps, ...otherProps }}
        >
          {renderLabel && (
            <span className="neeto-ui-btn__label">{renderLabel}</span>
          )}
          {icon && (
            <Icon
              aria-hidden="true"
              className="neeto-ui-btn__icon"
              size={iconSize}
            />
          )}
          {loading && (
            <span
              className="neeto-ui-btn__feedback-icon"
              data-testid="loading-icon"
            >
              <Spinner aria-hidden="true" size="small" />
            </span>
          )}
          {isFeedbackIconVisible && status && (
            <span
              className="neeto-ui-btn__feedback-icon"
              data-testid="user-feedback-icon"
            >
              <FeedbackIcon aria-hidden="true" size="20" />
            </span>
          )}
        </Parent>
      </Tooltip>
    );
  }
);

Button.displayName = "Button";

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
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
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
   * To set the Button to full width of the container.
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
  /**
   * To specify the children to be rendered inside the Button.
   */
  children: PropTypes.string,
  /**
   * To specify the status of the user action, a check or cross icon will be rendered based on the status
   */
  status: PropTypes.oneOf(Object.values(STATUS)),
  /**
   * This callback will be triggered at the timeout to reset the feedback icon, the host application
   * can use this to reset the status if they are using a local state.
   */
  onStatusReset: PropTypes.func,
};

export default Button;
