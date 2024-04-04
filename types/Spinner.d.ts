import React from "react";

export type SpinnerProps = {
  theme?: "dark" | "light";
  className?: string;
};

export const Spinner: React.FC<SpinnerProps>;
