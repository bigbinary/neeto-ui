import React from "react";

export type CalloutProps = {
  icon?: React.SVGProps<SVGSVGElement>;
  style?: "info" | "warning" | "danger" | "success";
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { [key: string]: any };

const Callout: React.FC<CalloutProps>;
export default Callout;
