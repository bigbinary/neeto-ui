import React from "react";
import { Transition } from "react-spring/renderprops";

export default function Collapse({ children, open = false }) {
  return (
    <Transition
      config={{ duration: 300, friction: 10, clamp: true }}
      items={open}
      from={{ opacity: 0, height: 0 }}
      enter={{ opacity: 1, height: "auto" }}
      leave={{ opacity: 0, height: 0 }}
    >
      {open =>
        open &&
        (props => (
          <div style={{ overflow: "hidden", ...props }}>
            {children}
          </div>
        ))
      }
    </Transition>
  );
}
