import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";

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
    localProps["onShow"] = instance => setTimeout(() => instance.hide(), hideAfter);
  };

  return (
    <Tippy
      role="tooltip"
      theme={theme}
      content={content}
      arrow={
        "<svg width='12' height='6' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10 5H0.926697L3.95208 1.63847C4.74227 0.760478 6.11722 0.754951 6.91445 1.62656L10 5Z' /></svg>"
      }
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
      <span>{children}</span>
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
  disabled: PropTypes.bool,
  position: PropTypes.string,
  interactive: PropTypes.bool,
  /**
   * To auto-hide the Tooltip after n-milliseconds.
   * Negative values to this prop disables this feature.
   * By default it's disabled.
   */
  hideAfter: PropTypes.number,
};

export default Tooltip;
