import { useRef, useCallback, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { manager } from "../managers/OverlayManager";
import {
  renderFocusOnFocusableElements,
  useOnClickOutside,
  noop,
} from "../utils";

export const useOverlay = ({
  isOpen,
  initialFocusRef,
  finalFocusRef,
  overlayWrapper,
  onClose,
  backdropRef,
  closeOnOutsideClick,
  closeOnEsc,
  blockScrollOnMount,
  hasTransitionCompleted,
}) => {
  const autoFocusPreviousFocusableRef = useRef(null);
  const elementToFocusRef = useRef(null);

  const returnFocusToPreviousActiveElement = () => {
    if (finalFocusRef?.current) {
      finalFocusRef.current.focus();
      manager.manageFinalFocus();
    } else {
      elementToFocusRef.current = manager.manageFinalFocus();
      if (elementToFocusRef.current) elementToFocusRef.current.focus();
    }
  };

  const focusRequiredElementInOverlay = () => {
    if (hasTransitionCompleted) {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus();
        renderFocusOnFocusableElements(overlayWrapper, false);
      } else renderFocusOnFocusableElements(overlayWrapper, true);
    }
  };

  const handleOverlayClose = useCallback(() => {
    if (!manager.isTopOverlay(overlayWrapper)) return;
    returnFocusToPreviousActiveElement();
    onClose?.();
  }, [onClose]);

  useOnClickOutside(
    overlayWrapper,
    backdropRef,
    closeOnOutsideClick ? handleOverlayClose : noop
  );

  useHotkeys(
    "esc",
    () => {
      closeOnEsc ? handleOverlayClose() : noop();
    },
    [handleOverlayClose]
  );

  const getScrollbarWidth = () => {
    const parentDiv = document.createElement("div");
    parentDiv.style.visibility = "hidden";
    parentDiv.style.overflow = "scroll";
    document.body.appendChild(parentDiv);
    const childDiv = document.createElement("div");
    parentDiv.appendChild(childDiv);
    const scrollbarWidth = parentDiv.offsetWidth - childDiv.offsetWidth;
    parentDiv?.parentNode?.removeChild(parentDiv);
    return scrollbarWidth;
  };

  useEffect(() => {
    if (isOpen) {
      autoFocusPreviousFocusableRef.current = document.activeElement;
      focusRequiredElementInOverlay();
    }
    if (blockScrollOnMount && manager.hasOverlays()) {
      document.body.style.marginRight = getScrollbarWidth() + "px";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.marginRight = "0px";
      document.body.style.overflow = "auto";
    }
  }, [isOpen, manager.overlays]);

  useEffect(() => {
    if (!isOpen && !manager.hasOverlays()) {
      returnFocusToPreviousActiveElement();
      onClose?.();
    }
  }, [isOpen]);

  return {
    handleOverlayClose,
  };
};
