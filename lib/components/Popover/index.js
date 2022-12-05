import React from "react";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip";
import Title from "./Title";

const Popover = ({
  children,
  theme = "light",
  ...otherProps
}) => (
  <Tooltip
    className="neeto-ui-popover"
    theme={theme}
    arrow={false}
    {...otherProps}
  >
    {children}
  </Tooltip>
);

Popover.propTypes = {
  /**
   * The component to be rendered inside the popup.
   */
  content: PropTypes.node,
  /**
   * Popover popup will be shown when mouse is hovered over this component.
   */
  children: PropTypes.node,
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
   * To specify whether the Popover can be hovered over and clicked inside without hiding.
   */
  interactive: PropTypes.bool,
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
