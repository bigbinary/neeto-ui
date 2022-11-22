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

  const hideScrollAndAddMargin = () => {
    const scrollbarWidth = memoizedGetScrollbarWidth();
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scrollbarWidth}px`;
  };

  const showScrollAndRemoveMargin = () => {
    document.body.style.overflow = "auto";
    document.body.style.marginRight = "0px";
  };

  useEffect(() => {
    if (isOpen) {
      if (hasTransitionCompleted) focusRequiredElementInOverlay();
      if (shouldHideScrollAndAddMargin) hideScrollAndAddMargin();
    }
  }, [isOpen, hasTransitionCompleted]);

  useEffect(() => {
    if (!isOpen && !manager.hasOverlays()) {
      returnFocusToPreviousActiveElement();
      if (shouldHideScrollAndAddMargin) showScrollAndRemoveMargin();
      onClose?.();
    }
  }, [isOpen]);

  return {
    handleOverlayClose,
  };
};
