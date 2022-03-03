import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const STYLES = {
  info: "info",
  warning: "warning",
  danger: "danger",
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
        [className]: className,
      })}
      {...otherProps}
    >
      {icon && (
        <div className="neeto-ui-callout__icon">
          <Icon />
        </div>
      )}
      {children}
    </div>
  );
};

Callout.propTypes = {
  /**
   * Specify the icon to be used in callout component. By default, icons are based on the style of the callout component. Passing false will hide the icon.
   */
  icon: PropTypes.elementType,
  /**
   * Specify the style of callout component.
   */
  style: PropTypes.oneOf(Object.values(STYLES)),
  /**
   * Provide external classnames to callout component.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Callout.
   */
  children: PropTypes.node,
};

export default Callout;
