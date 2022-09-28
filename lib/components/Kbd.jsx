import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Kbd = ({ keyName, className, ...otherProps }) => {
  return (
    <span className={classnames(["neeto-ui-kbd", className])} {...otherProps}>
      {keyName}
    </span>
  );
};

Kbd.propTypes = {
  /**
   * To specify keyboard key
   */
  keyName: PropTypes.string,
  /**
   * To provide additional class names to the Kbd.
   */
  className: PropTypes.string,
};

export default Kbd;
