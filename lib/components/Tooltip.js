import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";

import { ARROW } from "../constants/overlay";

const Tooltip = ({
  content,
  children,
  theme = "dark",
  disabled = false,
  placement, // Remove this prop once this prop is migrated to position in all neeto products
  position = "auto",
  interactive = false,
  hideAfter = -1,
  ...otherProps
}) => {
  const localProps = {};

  if (hideAfter > 0) {
    localProps["onShow"] = (instance) =>
      setTimeout(() => instance.hide(), hideAfter);
  }

  return (
    <Tippy
      role="tooltip"
      theme={theme}
      content={content}
      arrow={ARROW}
      disabled={disabled}
      animation={"scale-subtle"}
      placement={placement || position}
      plugins={[followCursor]}
      interactive={interactive}
      duration={[100, 200]}
      zIndex={100001}
      {...localProps}
      {...otherProps}
    >
      {children}
    </Tippy>
  );
};

Tooltip.propTypes = {
  /**
   * The component to be rendered inside the popup.
   */
  content: PropTypes.node,
  /**
   * Tooltip popup will be shown when mouse is hovered over this component.
   */
  children: PropTypes.node,
  /**
   * To display Tooltip in dark or light theme. By default the theme is dark.
   */
  theme: PropTypes.oneOf(["dark", "light"]),
  /**
   * To specify whether the Tooltip is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the position of the Tooltip.
   */
  position: PropTypes.string,
  /**
   * Determines if the Tooltip has interactive content inside of it,
   * so that it can be hovered over and clicked inside without hiding
   */
  interactive: PropTypes.bool,
  /**
   * To auto-hide the Tooltip after n-milliseconds.
   * Negative values to this prop disables this feature.
   * By default it's disabled.
   */
  hideAfter: PropTypes.number,
};

export default Tooltip;
