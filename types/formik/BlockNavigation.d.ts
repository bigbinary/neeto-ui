import React from "react";
import { AlertProps } from "../Alert";

export interface BlockNavigationProps {
  isDirty?: boolean;
}

const BlockNavigation: React.FC<BlockNavigationProps & Partial<AlertProps>>;
export default BlockNavigation;
