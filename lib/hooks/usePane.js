import { useRef, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import {
  renderFocusOnFocusableElements,
  useOnClickOutside,
  noop,
} from "../utils";

export const usePane = ({
  paneWrapper,
  backdropRef,
  closeOnOutsideClick,
  closeOnEsc,
  onClose,
  isOpen,
  initialFocusRef,
  finalFocusRef,
  hasTransitionCompleted,
}) => {
  const returnFocusToPreviousActiveElement = () => {
    if (hasTransitionCompleted) {
      if (finalFocusRef?.current) {
        finalFocusRef.current.focus();
      }
    }
  };

  const focusRequiredElementsInPane = () => {
    if (hasTransitionCompleted) {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus();
        renderFocusOnFocusableElements(paneWrapper, false);
      } else renderFocusOnFocusableElements(paneWrapper, true);
    }
  };

  useOnClickOutside(
    paneWrapper,
    backdropRef,
    closeOnOutsideClick ? onClose : noop
  );

  const onCloseRef = useRef();
  onCloseRef.current = onClose;

  useHotkeys(
    "esc",
    () => {
      closeOnEsc ? onCloseRef.current() : noop();
    },
    [onCloseRef]
  );

  useEffect(() => {
    if (isOpen) {
      focusRequiredElementsInPane();
    }
    if (!isOpen) {
      returnFocusToPreviousActiveElement();
    }
  }, [isOpen, hasTransitionCompleted]);
};
