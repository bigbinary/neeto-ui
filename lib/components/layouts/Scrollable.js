import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SIZES = { small: "small", large: "large", viewport: "viewport" };

const Scrollable = ({ children, className = "", size = "small" }) => (
  <div
    className={classnames([
      "neeto-ui-scrollable",
      {
        "neeto-ui-scrollable--small": size === SIZES.small,
        "neeto-ui-scrollable--large": size === SIZES.large,
        "neeto-ui-scrollable--viewport": size === SIZES.viewport,
        [className]: className,
      },
    ])}
  >
    {children}
  </div>
);

Scrollable.propTypes = {
  /**
   * To specify the components to be rendered inside the scrollable.
   */
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
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * To provide external classNames.
   */
  className: PropTypes.string,
};

export default Scrollable;
