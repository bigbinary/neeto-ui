import React from "react";

export interface AlertProps {
  size?: "small" | "medium" | "large";
  isOpen?: boolean;
  isSubmitting?: boolean;
  className?: string;
  closeOnEsc?: boolean;
  closeButton?: boolean;
  backdropClassName?: string;
  closeOnOutsideClick?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  message?: React.ReactNode;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
  initialFocusElement?: "cancel" | "submit";
  hideCancelButton?: boolean;
}

export const Alert: React.FC<AlertProps>;
