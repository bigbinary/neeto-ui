import React from "react";

type ToastrFunction = (
  message: React.ReactNode,
  buttonLabel?: React.ReactNode,
  onClick?: () => void,
  customConfig?: object,
  showIcon?: boolean
) => string | null;

const Toastr: {
  show: ToastrFunction;
  info: ToastrFunction;
  success: ToastrFunction;
  error: (
    message: React.ReactNode | Error,
    buttonLabel?: React.ReactNode,
    onClick?: () => void
  ) => string | null;
  warning: ToastrFunction;
};
export default Toastr;
