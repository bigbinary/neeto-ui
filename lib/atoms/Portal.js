import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, rootId = "root-portal", el = "div" }) => {
  const target = useRef(document.getElementById(rootId));

  useEffect(() => {
    return () => {
      if (target.current.childNodes.length === 0) {
        target.current.remove();
        target.current = null;
      }
    };
  }, [rootId]);

  if (!target.current) {
    target.current = document.createElement(el);
    target.current.setAttribute("id", rootId);
    document.body.appendChild(target.current);
  }

  return createPortal(children, target.current);
};

export default Portal;
