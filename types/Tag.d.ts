import React from "react";

export interface TagProps {
  icon?: string | any;
  size?: "small" | "large";
  label?: string;
  type?: "outline" | "solid";
  onClose?: () => void;
  disabled?: boolean;
  className?: string;
  style?: "success" | "warning" | "danger" | "primary" | "secondary" | "info";
  indicatorStyle?:
    | "success"
    | "warning"
    | "danger"
    | "primary"
    | "secondary"
    | "info";
  /** @deprecated Prop deprecated. Use `style` prop instead*/
  color?: string;
  /** @deprecated Prop deprecated. Use `indicatorStyle` prop instead*/
  indicatorColor?: string;
  children?: string;
}

const Tag: React.FC<TagProps>;
export default Tag;
