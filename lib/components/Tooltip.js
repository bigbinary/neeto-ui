import React from "react";
import Tippy from "@tippyjs/react";
import { roundArrow } from "tippy.js";

const Tooltip = ({
  content,
  size,
  theme = "dark",
  placement = "auto",
  disabled = false,
  animation = "scale-subtle",
  interactive = true,
  children,
  ...otherProps
}) => {
  return (
    <Tippy
      role="tooltip"
      theme={theme}
      arrow={roundArrow}
      placement={placement}
      disabled={disabled}
      animation={animation}
      duration={[100, 200]}
      interactive={interactive}
      {...otherProps}
      content={content}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
