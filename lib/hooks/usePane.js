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
}) => {
  const focusRequiredElementsInPane = () => {
    renderFocusOnFocusableElements(paneWrapper, true);
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
  }, [isOpen]);
};
