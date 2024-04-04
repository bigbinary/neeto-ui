import React from "react";

type ToastrFunction = (
  message: React.ReactNode,
  buttonLabel?: React.ReactNode,
  onClick?: () => void
) => void;

export const Toastr: {
  show: ToastrFunction;
  info: ToastrFunction;
  success: ToastrFunction;
  error: (
    message: React.ReactNode | Error,
    buttonLabel?: React.ReactNode,
    onClick?: () => void
  ) => void;
  warning: ToastrFunction;
};
