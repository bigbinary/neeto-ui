import { useEffect } from "react";

class ModalManager {
  constructor() {
    this.modals = [];
    this.previouslyFocusedElements = [];
  }

  add(modal) {
    this.modals.push(modal);
    this.previouslyFocusedElements.push(document.activeElement);
  }

  remove(modal) {
    this.modals = this.modals.filter((_modal) => _modal !== modal);
  }

  getTopModal() {
    return this.modals[this.modals.length - 1];
  }

  manageFinalFocus() {
    return this.previouslyFocusedElements.pop();
  }

  getFocusableElements() {
    return this.previouslyFocusedElements;
  }

  isTopModal(modal) {
    const topmostModal = this.modals[this.modals.length - 1];
    return topmostModal === modal;
  }

  hasModals() {
    return this.modals.length > 0;
  }
}

export const manager = new ModalManager();

export function useModalManager(ref, isOpen) {
  useEffect(() => {
    if (isOpen) {
      manager.add(ref);
    }
    return () => {
      manager.remove(ref);
    };
  }, [isOpen, ref]);
}
