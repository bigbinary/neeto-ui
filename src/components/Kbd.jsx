import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import Tooltip from "./Tooltip";

const Kbd = ({ keyName, className, tooltipProps, ...otherProps }) => (
  <Tooltip disabled={!tooltipProps} {...tooltipProps}>
    <span className={classnames(["neeto-ui-kbd", className])} {...otherProps}>
      {keyName}
    </span>
  </Tooltip>
);

Kbd.propTypes = {
  /**
   * To specify keyboard key
   */
  keyName: PropTypes.string,
  /**
   * To provide additional class names to the Kbd.
   */
  className: PropTypes.string,
  /**
   * To specify the props to be passed to the tooltip.
   */
  tooltipProps: PropTypes.object,
};

export default Kbd;
