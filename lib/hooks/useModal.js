import { useRef, useCallback, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { manager } from "../components/Modal/ModalManager";
import {
  renderFocusOnFocusableElements,
  useOnClickOutside,
  noop,
} from "../utils";

export const useModal = ({
  isOpen,
  initialFocusRef,
  finalFocusRef,
  modalWrapper,
  onClose,
  backdropRef,
  closeOnOutsideClick,
  closeOnEsc,
  blockScrollOnMount,
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

  const focusRequiredElementInModal = () => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
      renderFocusOnFocusableElements(modalWrapper, false);
    } else renderFocusOnFocusableElements(modalWrapper, true);
  };

  const handleModalClose = useCallback(() => {
    if (!manager.isTopModal(modalWrapper)) return;
    returnFocusToPreviousActiveElement();
    onClose?.();
  }, [onClose]);

  useOnClickOutside(
    modalWrapper,
    backdropRef,
    closeOnOutsideClick ? handleModalClose : noop
  );

  useHotkeys(
    "esc",
    () => {
      closeOnEsc ? handleModalClose() : noop();
    },
    [handleModalClose]
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
      focusRequiredElementInModal();
    }
    if (blockScrollOnMount && manager.hasModals()) {
      document.body.style.marginRight = getScrollbarWidth() + "px";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.marginRight = "0px";
      document.body.style.overflow = "auto";
    }
  }, [isOpen, manager.modals]);

  useEffect(() => {
    if (!isOpen && !manager.hasModals()) {
      returnFocusToPreviousActiveElement();
      onClose?.();
    }
  }, [isOpen]);

  return {
    handleModalClose,
  };
};
