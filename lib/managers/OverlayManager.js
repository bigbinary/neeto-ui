import { useEffect } from "react";

class OverlayManager {
  constructor() {
    this.overlays = [];
    this.previouslyFocusedElements = [];
  }

  add(overlay) {
    this.overlays.push(overlay);
    this.previouslyFocusedElements.push(document.activeElement);
  }

  remove(overlay) {
    this.overlays = this.overlays.filter((_overlay) => _overlay !== overlay);
  }

  manageFinalFocus() {
    return this.previouslyFocusedElements.pop();
  }

  isTopOverlay(overlay) {
    const topMostOverlay = this.overlays[this.overlays.length - 1];
    return topMostOverlay === overlay;
  }

  hasOverlays() {
    return this.overlays.length > 0;
  }
}

export const manager = new OverlayManager();

export function useOverlayManager(ref, isOpen) {
  useEffect(() => {
    if (isOpen) {
      manager.add(ref);
    }
    return () => {
      manager.remove(ref);
    };
  }, [isOpen, ref]);
}
