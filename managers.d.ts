export const manager: {
  add(overlay: any, elementToFocus: any): void;
  remove(overlay: any): void;
  isTopOverlay(overlay): boolean;
  hasOverlays(): boolean;
  getFinalFocusInOverlay(): any;
  getTopMostOverlay(): any;
};
