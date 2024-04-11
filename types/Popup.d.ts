import React from "react";

export interface PopupProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  closeOnEsc?: boolean;
  closeButton?: boolean;
  backdropClassName?: string;
  closeOnOutsideClick?: boolean;
  [key: string]: any;
}

export interface PopupContentProps {
  className?: string;
  children?: React.ReactNode;
}
