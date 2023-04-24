import { useEffect, useRef } from "react";

import { isEmpty } from "ramda";
import { createPortal } from "react-dom";

const Portal = ({ children, rootId = "root-portal", el = "div" }) => {
  const target = useRef(null);

  useEffect(() => {
    let container = document.getElementById(rootId);
    if (!container) {
      container = document.createElement(el);
      container.setAttribute("id", rootId);
      document.body.appendChild(container);
    }

    container.appendChild(target.current);

    return () => {
      target.current.remove();
      if (isEmpty(container.childNodes)) {
        container.remove();
      }
    };
  }, [rootId]);

  if (!target.current) {
    target.current = document.createElement(el);
  }

  return createPortal(children, target.current);
};

export default Portal;
