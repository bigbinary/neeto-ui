import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import "styles/common";
import "styles/components/_popover";

import Title from "./Title";

import Tooltip from "../Tooltip";

const Popover = ({
  children,
  className = "",
  theme = "light",
  ...otherProps
}) => (
  <Tooltip
    {...{ theme }}
    arrow
    interactive
    className={classnames("neeto-ui-popover", className)}
    content={children}
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
  reference: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
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
