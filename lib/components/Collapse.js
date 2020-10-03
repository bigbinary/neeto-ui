import React from "react";
import { Transition } from "react-spring/renderprops";

export default function Collapse({ children, show = false }) {
  return (
    <Transition
      config={{ tension: 100, friction: 1, clamp: true }}
      items={show}
      from={{ height: 0 }}
      enter={{ height: "auto" }}
      leave={{ height: 0 }}
    >
      {show => show && (props => <div style={props}>{children}</div>)}
    </Transition>
  );
}
