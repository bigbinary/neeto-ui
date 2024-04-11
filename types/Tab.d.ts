import React from "react";

export type TabProps = {
  size?: "large" | "small";
  noUnderline?: boolean;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { [key: string]: any };

export type TabItemProps<S> = {
  active?: boolean;
  className?: string;
  icon?: string | any;
  onClick?: () => void;
  activeClassName?: string;
  [key: string]: any;
};

const Tab: React.FC<TabProps> & {
  Item: React.FC<TabItemProps<any>>;
};
export default Tab;
