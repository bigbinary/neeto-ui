import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, className = "root-portal", el = "div" }) => {
  let container = document.getElementsByClassName(className)[0];
  if (!container) {
    container = document.createElement(el);
    container.classList.add(className);
  }

  React.useEffect(() => {
    document.body.appendChild(container);
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
