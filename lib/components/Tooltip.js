import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";

import { ARROW } from "../constants/overlay";

const Tooltip = ({
  content,
  children,
  theme = "dark",
  disabled = false,
  position = "auto",
  interactive = false,
  hideAfter = -1,
  hideOnTargetExit = false,
  ...otherProps
}) => {
  const [instance, setInstance] = useState(null);
  const localProps = {};

  if (hideAfter > 0) {
    localProps["onShow"] = (instance) =>
      setTimeout(() => instance.hide(), hideAfter);
  }
  useEffect(() => {
    if(hideOnTargetExit) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => !entry.isIntersecting && instance?.hide());
      });
      instance?.reference && intersectionObserver.observe(instance?.reference);
      return () => intersectionObserver.disconnect();
    }
  }, [instance, hideOnTargetExit]);

  return (
    <Tippy
      role="tooltip"
      theme={theme}
      content={content}
      arrow={ARROW}
      disabled={disabled}
      animation={"scale-subtle"}
      placement={position}
      plugins={[followCursor]}
      interactive={interactive}
      duration={[100, 200]}
      zIndex={100001}
      onCreate={(instance) => setInstance(instance)}
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
   * To display tooltip in dark or light theme. By default the theme is dark.
   */
  theme: PropTypes.oneOf(["dark", "light"]),
  /**
   * To specify whether the tooltip is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the position of the tooltip.
   */
  position: PropTypes.string,
  /**
   * To specify whether the tooltip can be hovered over and clicked inside without hiding.
   */
  interactive: PropTypes.bool,
  /**
   * To auto-hide the tooltip after n-milliseconds.
   * Negative values to this prop disables this feature.
   * By default it's disabled.
   */
  hideAfter: PropTypes.number,
  /**
   * To auto-hide the tooltip on when target leaves the screen.
   * By default it's disabled.
   */
  hideOnTargetExit: PropTypes.bool,
};

export default Tooltip;
