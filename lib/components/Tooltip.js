import React from "react";
import Tippy from "@tippyjs/react";
import { roundArrow } from "tippy.js";
import { followCursor } from "tippy.js";

const Tooltip = ({
  size,
  content,
  children,
  theme = "dark",
  disabled = false,
  placement = "auto",
  interactive = false,
  ...otherProps
}) => {
  return (
    <Tippy
      role="tooltip"
      // theme={theme}
      content={content}
      arrow={roundArrow}
      disabled={disabled}
      animation={"scale-subtle"}
      placement={placement}
      plugins={[followCursor]}
      interactive={interactive}
      duration={[100, 200]}
      {...otherProps}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
