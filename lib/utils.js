import { useEffect } from "react";

export const useOnClickOutside = (insideRef, outsideRef, handler) => {
  useEffect(() => {

    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!insideRef.current || insideRef.current.contains(event.target)) {
        return;
      }
      if (outsideRef.current) {
        // If Outside ref exists, trigger the handler if it contains the event target.
        if (outsideRef.current.contains(event.target)) {
          handler(event);
        }
        return;
      } else {
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [insideRef, outsideRef, handler]);
};
