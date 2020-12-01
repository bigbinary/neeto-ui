import React from "react";
import { Transition } from "react-spring/renderprops";

export default function Collapse({ children, show = false }) {
  return (
    <Transition
      config={{ tension: 100, friction: 15, clamp: true }}
      items={show}
      from={{ opacity: 0, transform: "scaleY(0)", height: 0 }}
      enter={{ opacity: 1, transform: "scaleY(1)", height: "auto" }}
      leave={{ opacity: 0, transform: "scaleY(0)", height: 0 }}
    >
      {show => show && (props => <div style={props}>{children}</div>)}
    </Transition>
  );
}
