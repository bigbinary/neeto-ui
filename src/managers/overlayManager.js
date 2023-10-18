class OverlayManager {
  constructor() {
    this.overlays = [];
    this.previouslyFocusedElements = [];
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.isTopOverlay = this.isTopOverlay.bind(this);
    this.hasOverlays = this.hasOverlays.bind(this);
    this.getFinalFocusInOverlay = this.getFinalFocusInOverlay.bind(this);
    this.getTopMostOverlay = this.getTopMostOverlay.bind(this);
  }

  add(overlay, elementToFocus) {
    this.overlays.push(overlay);
    this.previouslyFocusedElements.push(elementToFocus);
  }

  remove(overlay, elementToFocus) {
    this.overlays = this.overlays.filter(_overlay => _overlay !== overlay);
    this.previouslyFocusedElements = this.previouslyFocusedElements.filter(
      _elementToFocus => _elementToFocus !== elementToFocus
    );
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
