import { useEffect } from "react";

import { manager } from "managers";

export function useOverlayManager(ref, isOpen) {
  const elementToFocus = document.activeElement;
  useEffect(() => {
    if (isOpen) {
      manager.add(ref, elementToFocus);
    }
    return () => {
      manager.remove(ref);
    };
  }, [isOpen, ref]);
}
