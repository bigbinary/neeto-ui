class OverlayManager {
  constructor() {
    this.overlays = [];
    this.previouslyFocusedElements = [];
    this.subscribers = new Set();
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.isTopOverlay = this.isTopOverlay.bind(this);
    this.hasOverlays = this.hasOverlays.bind(this);
    this.getFinalFocusInOverlay = this.getFinalFocusInOverlay.bind(this);
    this.getTopMostOverlay = this.getTopMostOverlay.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  subscribe(callback) {
    this.subscribers.add(callback);

    return () => this.subscribers.delete(callback);
  }

  add(overlay, elementToFocus) {
    this.overlays.push(overlay);
    this.previouslyFocusedElements.push(elementToFocus);

    this.subscribers.forEach(subscriber => subscriber());
  }

  remove(overlay, elementToFocus) {
    this.overlays = this.overlays.filter(_overlay => _overlay !== overlay);
    this.previouslyFocusedElements = this.previouslyFocusedElements.filter(
      _elementToFocus => _elementToFocus !== elementToFocus
    );

    this.subscribers.forEach(subscriber => subscriber());
  }

  isTopOverlay(overlay) {
    const topMostOverlay = this.overlays[this.overlays.length - 1];

    return topMostOverlay === overlay;
  }

  hasOverlays() {
    return this.overlays.length > 0;
  }

  getFinalFocusInOverlay() {
    const finalFocus = this.previouslyFocusedElements.pop();
    this.subscribers.forEach(subscriber => subscriber());

    return finalFocus;
  }

  getTopMostOverlay() {
    return this.overlays[this.overlays.length - 1];
  }
}

export const manager = new OverlayManager();
