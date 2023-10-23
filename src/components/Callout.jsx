import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const STYLES = {
  info: "info",
  warning: "warning",
  danger: "danger",
  success: "success",
};

const Callout = ({
  icon = null,
  style = STYLES.info,
  className = "",
  children,
  ...otherProps
}) => {
  const Icon = icon;

  return (
    <div
      className={classnames("neeto-ui-callout", {
        "neeto-ui-callout--info": style === STYLES.info,
        "neeto-ui-callout--warning": style === STYLES.warning,
        "neeto-ui-callout--danger": style === STYLES.danger,
        "neeto-ui-callout--success": style === STYLES.success,
        [className]: className,
      })}
      {...otherProps}
    >
      {icon && (
        <div className="neeto-ui-callout__icon" data-testid="callout-icon">
          <Icon />
        </div>
      )}
      {children}
    </div>
  );
};

Callout.propTypes = {
  /**
   * To specify the icon to be used in Callout component. By default, icons are based on the style of the Callout component. Passing false will hide the icon.
   */
  icon: PropTypes.elementType,
  /**
   * To specify the style of Callout component.
   */
  style: PropTypes.oneOf(Object.values(STYLES)),
  /**
   * To provide external classnames to Callout component.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Callout component.
   */
  children: PropTypes.node,
};

export default Callout;
