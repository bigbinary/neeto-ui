import React from "react";

export type ProgressBarProps = {
  className?: string;
  progressPercentage: number;
  progressValue?: string;
};

const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps>;
export default ProgressBar;
