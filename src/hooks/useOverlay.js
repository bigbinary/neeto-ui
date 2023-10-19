import { useRef, useEffect, useCallback, useSyncExternalStore } from "react";

import { useHotkeys } from "react-hotkeys-hook";

import { manager } from "managers";
import {
  noop,
  hideScrollAndAddMargin,
  showScrollAndRemoveMargin,
  focusFirstFocusableElement,
  trapFocusOnFocusableElements,
} from "utils";

import useOnClickOutside from "./useOnClickOutside";

const useOverlay = ({
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

  const bodyHeight = document.body.offsetHeight;
  const windowHeight = window.innerHeight;
  const hasScroll = bodyHeight > windowHeight;

  const shouldHideScrollAndAddMargin =
    hasScroll && blockScrollOnMount && manager.hasOverlays();

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
      if (initialFocusRef?.current) {
        initialFocusRef?.current?.focus();
      } else {
        focusFirstFocusableElement(overlayWrapper);
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

  const isTopOverlay = useSyncExternalStore(manager.subscribe, () =>
    manager.isTopOverlay(overlayWrapper)
  );

  useHotkeys(
    "esc",
    () => {
      closeOnEsc && handleOverlayClose();
    },
    [handleOverlayClose, closeOnEsc]
  );

  useEffect(() => {
    let cleanUp = noop;
    if (isOpen) {
      if (hasTransitionCompleted && isTopOverlay) {
        focusRequiredElementInOverlay();
        // Enable focus trap only for the topmost overlay
        cleanUp = trapFocusOnFocusableElements(overlayWrapper);
      }

      if (shouldHideScrollAndAddMargin) hideScrollAndAddMargin();
    }

    return () => {
      if (!manager.hasOverlays()) showScrollAndRemoveMargin();
      cleanUp();
    };
  }, [isOpen, hasTransitionCompleted, isTopOverlay]);

  const setFocusField = fieldRef => {
    if (!fieldRef) return;
    initialFocusRef = { current: fieldRef };
    if (hasTransitionCompleted) focusRequiredElementInOverlay();
  };

  return { handleOverlayClose, setFocusField };
};

export default useOverlay;
