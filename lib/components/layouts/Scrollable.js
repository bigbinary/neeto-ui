import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const sizes = { small: "small", large: "large", viewport: "viewport" };

const Scrollable = ({ children, className, size = "small" }) => {
  return (
    <div
      className={classnames([
        "neeto-ui-scrollable", {
          "neeto-ui-scrollable--small": size === sizes.small,
          "neeto-ui-scrollable--large": size === sizes.large,
          "neeto-ui-scrollable--viewport": size === sizes.viewport,
          [className]: className
        }
      ])}
    >
      {children}
    </div>
  );
};

Scrollable.propTypes = {
  children: PropTypes.node,
  /**
   * To specify vertical size of the scrollable
   *
   * `large` - for size with an offset of `Header` height
   *
   * `small` - for size with an offset of `Header` height and `SubHeader` height
   *
   * `viewport` - for scrollable with viewport height
   */
  size: PropTypes.oneOf(Object.values(sizes)),
  className: PropTypes.string
};

export default Scrollable;
