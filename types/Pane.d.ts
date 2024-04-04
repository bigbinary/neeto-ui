import React from "react";
import { PopupProps, PopupContentProps } from "./Popup";

export type PaneProps = PopupProps & { size?: "small" | "large" };

export const Pane: React.FC<PaneProps> & {
  Header: React.FC<PopupContentProps>;
  Body: React.FC<PopupContentProps & { hasFooter?: boolean }>;
  Footer: React.FC<PopupContentProps>;
};
