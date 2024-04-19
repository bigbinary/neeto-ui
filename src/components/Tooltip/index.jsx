import React, { useEffect, useState } from "react";

import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import { followCursor } from "tippy.js";

import "styles/common";
import "styles/components/_tooltip";

import { ARROW } from "./constants";

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
    localProps["onShow"] = instance =>
      setTimeout(() => instance.hide(), hideAfter);
  }

  useEffect(() => {
    if (hideOnTargetExit) {
      const intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => !entry.isIntersecting && instance?.hide());
      });
      instance?.reference && intersectionObserver.observe(instance?.reference);

      return () => intersectionObserver.disconnect();
    }

    return undefined;
  }, [instance, hideOnTargetExit]);

  const handleOnCreate = instance => {
    setInstance(instance);
    instance.popper.firstElementChild?.setAttribute("data-cy", "tooltip-box");
  };

  return (
    <Tippy
      animation="scale-subtle"
      arrow={ARROW}
      duration={[100, 200]}
      placement={position}
      plugins={[followCursor]}
      role="tooltip"
      zIndex={100001}
      onCreate={handleOnCreate}
      {...{
        content,
        disabled,
        interactive,
        theme,
        ...localProps,
        ...otherProps,
      }}
    >
      {React.isValidElement(children) ? children : <span>{children}</span>}
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
   * To specify whether the Tooltip can be hovered over and clicked inside without hiding.
   */
  interactive: PropTypes.bool,
  /**
   * To auto-hide the Tooltip after n-milliseconds.
   * Negative values to this prop disables this feature.
   * By default it's disabled.
   */
  hideAfter: PropTypes.number,
  /**
   * To auto-hide the Tooltip on when target leaves the screen.
   * By default it's disabled.
   */
  hideOnTargetExit: PropTypes.bool,
};

export default Tooltip;
