import React from "react";
import { Transition } from "react-spring/renderprops";
import classnames from "classnames";

export default function Collapse({ children, open = false, className = "" }) {
  return (
    <Transition
      config={{ duration: 300, friction: 10 }}
      items={open}
      from={{ opacity: 0, height: 0 }}
      enter={{ opacity: 1, height: "auto" }}
      leave={{ opacity: 0, height: 0 }}
    >
      {open =>
        open &&
        (props => (
          <div style={{ overflowY: "hidden", ...props }}>
            <div className={classnames(["p-0.5", className])}>{children}</div>
          </div>
        ))
      }
    </Transition>
  );
}
