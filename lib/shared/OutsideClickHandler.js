import React, { useRef, useEffect } from "react";

function OutsideClickHandler({ children, onOutsideClick, className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClick, false);
    return () => {
      document.removeEventListener("click", handleClick, false);
    };
  }, []);

  const handleClick = event => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      onOutsideClick(event);
    }
  };

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

export default OutsideClickHandler;