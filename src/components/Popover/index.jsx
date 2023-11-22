import React from "react";

import PropTypes from "prop-types";

import Title from "./Title";

import Tooltip from "../Tooltip";

const Popover = ({ children, theme = "light", ...otherProps }) => (
  <Tooltip
    {...{ theme }}
    interactive
    isPopover
    className="neeto-ui-popover"
    content={children}
    position="left"
    {...otherProps}
  />
);

Popover.propTypes = {
  /**
   * The content to be rendered inside the popup.
   */
  children: PropTypes.node,
  /**
   * The popover will be positioned next to the specified element.
   */
  target: PropTypes.node,
  /**
   * To display Popover in dark or light theme. By default the theme is dark.
   */
  theme: PropTypes.oneOf(["dark", "light"]),
  /**
   * To specify whether the Popover is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the position of the Popover.
   */
  position: PropTypes.string,
  /**
   * To auto-hide the Popover after n-milliseconds.
   * Negative values to this prop disables this feature.
   * By default it's disabled.
   */
  hideAfter: PropTypes.number,
  /**
   * To auto-hide the Popover on when target leaves the screen.
   * By default it's disabled.
   */
  hideOnTargetExit: PropTypes.bool,
};

Popover.Title = Title;

export default Popover;
