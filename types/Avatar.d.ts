import React from "react";

export type AvatarProps = {
  size?: "small" | "medium" | "large" | "extraLarge";
  user?: { name: string; imageUrl: string };
  status?: "online" | "idle" | "offline";
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  showTooltip?: boolean;
  tooltipProps?: TooltipProps;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & { [key: string]: any };

export const Avatar: React.FC<AvatarProps>;
