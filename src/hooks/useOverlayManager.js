import { useEffect } from "react";

import { manager } from "managers";

const useOverlayManager = (ref, isOpen) => {
  const elementToFocus = document.activeElement;
  useEffect(() => {
    if (isOpen) {
      manager.add(ref, elementToFocus);
    }

    return () => {
      manager.remove(ref, elementToFocus);
    };
  }, [isOpen, ref]);
};

export default useOverlayManager;
