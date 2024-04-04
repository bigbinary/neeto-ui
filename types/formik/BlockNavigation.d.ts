import React from "react";
import { AlertProps } from "../Alert";

export interface BlockNavigationProps {
  isDirty?: boolean;
}

export const BlockNavigation: React.FC<
  BlockNavigationProps & Partial<AlertProps>
>;
