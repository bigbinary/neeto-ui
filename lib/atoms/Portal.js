import React, { useRef } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, rootId = "root-portal", el = "div" }) => {
  const target = useRef(null);

  React.useEffect(() => {
    let container = document.getElementById(rootId);
    if (!container) {
      container = document.createElement(el);
      container.setAttribute("id", rootId);
      document.body.appendChild(container);
    }

    container.appendChild(target.current);

    return () => {
      target.current.remove();
      if (container.childNodes.length === 0) {
        container.remove();
      }
    };
  }, [rootId]);

  if (!target.current) {
    target.current = document.createElement(el);
  }

  return ReactDOM.createPortal(children, target.current);
};

export default Portal;
