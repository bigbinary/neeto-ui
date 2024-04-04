import React from "react";

export type StepperProps = {
  steps: { id: string | number; label: string }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export const Stepper: React.FC<StepperProps>;
