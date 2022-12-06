import { useRef, useCallback, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { manager } from "@bigbinary/neetoui/managers";
import {
  renderFocusOnFocusableElements,
  useOnClickOutside,
  noop,
  hideScrollAndAddMargin,
  showScrollAndRemoveMargin,
} from "../utils";
import { useMutationObserver } from "./useMutationObserver";

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

  const { hasOverlayMutated, setHasOverlayMutated } = useMutationObserver(
    overlayWrapper,
    hasTransitionCompleted,
    {
      attributes: true,
      childList: true,
      subtree: true,
    }
  );

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

  useEffect(() => {
    if (hasOverlayMutated) {
      focusRequiredElementInOverlay();
      setHasOverlayMutated(false);
    }
  }, [hasOverlayMutated]);

  return {
    handleOverlayClose,
  };
};
