import { useEffect } from "react";

class OverlayManager {
  constructor() {
    this.overlays = [];
    this.previouslyFocusedElements = [];
  }

  add(overlay, elementToFocus) {
    this.overlays.push(overlay);
    this.previouslyFocusedElements.push(elementToFocus);
  }

  remove(overlay) {
    this.overlays = this.overlays.filter((_overlay) => _overlay !== overlay);
  }

  isTopOverlay(overlay) {
    const topMostOverlay = this.overlays[this.overlays.length - 1];
    return topMostOverlay === overlay;
  }

  hasOverlays() {
    return this.overlays.length > 0;
  }

  getFinalFocusInOverlay() {
    return this.previouslyFocusedElements.pop();
  }

  getTopMostOverlay() {
    return this.overlays[this.overlays.length - 1];
  }
}

export const manager = new OverlayManager();

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
