import { useRef, useCallback, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { manager } from "../managers/OverlayManager";
import {
  renderFocusOnFocusableElements,
  useOnClickOutside,
  noop,
  hideScrollAndAddMargin,
  showScrollAndRemoveMargin,
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
    elementToFocusRef.current = manager.getFinalFocusInOverlay();
    if (!finalFocusRef?.current) {
      elementToFocusRef?.current?.focus();
    } else {
      finalFocusRef.current.focus();
    }
  };

  const focusRequiredElementInOverlay = () => {
    if (hasTransitionCompleted) {
      if (!initialFocusRef?.current) {
        renderFocusOnFocusableElements(overlayWrapper);
      } else {
        initialFocusRef?.current?.focus();
        renderFocusOnFocusableElements(overlayWrapper, false);
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
      closeOnEsc && handleOverlayClose();
    },
    [handleOverlayClose, closeOnEsc]
  );

  useEffect(() => {
    if (isOpen) {
      if (hasTransitionCompleted) focusRequiredElementInOverlay();
      if (shouldHideScrollAndAddMargin) hideScrollAndAddMargin();
    }

    return () => {
      if (!manager.hasOverlays()) showScrollAndRemoveMargin();
    };
  }, [isOpen, hasTransitionCompleted]);

  return {
    handleOverlayClose,
  };
};
