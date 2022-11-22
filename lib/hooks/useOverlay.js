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
  const elementToFocusRef = useRef(null);
  const shouldHideScrollAndAddMargin =
    blockScrollOnMount && manager.hasOverlays();

  const returnFocusToPreviousActiveElement = () => {
    if (finalFocusRef?.current) {
      finalFocusRef.current.focus();
      manager.returnFinalFocus();
    } else {
      elementToFocusRef.current = manager.returnFinalFocus();
      if (elementToFocusRef.current) elementToFocusRef.current.focus();
    }
  };

  const focusRequiredElementInOverlay = () => {
    if (hasTransitionCompleted) {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus();
        renderFocusOnFocusableElements(overlayWrapper, false);
      } else {
        renderFocusOnFocusableElements(overlayWrapper, true);
      }
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

  const memoizedGetScrollbarWidth = useCallback(getScrollbarWidth, []);

  const hideScrollbarAndAddMarginRight = () => {
    document.body.style.marginRight = memoizedGetScrollbarWidth() + "px";
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (isOpen) {
      if (hasTransitionCompleted) focusRequiredElementInOverlay();
      if (shouldHideScrollAndAddMargin) hideScrollbarAndAddMarginRight();
    }
  }, [isOpen, hasTransitionCompleted]);

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
