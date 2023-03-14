import React from "react";
import { NavLinkProps } from "react-router-dom";
import { AvatarProps, InputProps, ButtonProps } from "./index";

export interface AppSwitcherProps {
  isOpen?: boolean;
  className?: string;
  closeOnEsc?: boolean;
  closeOnOutsideClick?: boolean;
  activeApp?: string;
  neetoApps?: {
    name: string;
    description: string;
    url: string;
  }[];
  recentApps?: string[];
  isSidebarOpen?: boolean;
  onClose?: () => void;
  [key: string]: any;
}

export interface ContainerProps {
  isHeaderFixed?: boolean;
}

export interface HeaderProps {
  title?: React.ReactNode;
  menuBarToggle?: () => void;
  searchProps?: InputProps;
  className?: string;
  actionBlock?: React.ReactNode;
  breadcrumbs?: { text: React.ReactNode; link: string }[];
}

export interface MenuBarProps {
  title?: string;
  className?: string;
  showMenu?: boolean;
  "data-cy"?: string;
  children?: React.ReactNode;
}

export interface MenuBarBlockProps {
  label: string;
  url?: string;
  icon?: React.ReactNode;
  count?: number;
  active?: boolean;
  onEdit?: Function;
  onClick?: Function;
  className?: string;
  "data-cy"?: string;
}

export interface MenuBarItemProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  description?: string;
  active?: boolean;
}

export interface MenuBarSubTitleProps {
  iconProps?: ButtonProps;
  "data-cy"?: string;
}

export interface MenuBarSearchProps extends InputProps {
  collapse?: boolean;
  onCollapse?: Function;
}

export interface MenuBarAddNewProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label?: string;
}

export type ScrollableProps = {
  className?: string;
  size?: "small" | "large" | "viewport";
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type NavLinkItemType = {
  to: string;
  label?: React.ReactNode;
  icon?: any;
  description?: React.ReactNode;
} & React.PropsWithoutRef<NavLinkProps<any>> &
  React.RefAttributes<HTMLAnchorElement>;

type FooterLinkType = {
  label?: React.ReactNode;
  icon?: any;
  href?: string;
  to?: string;
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  React.PropsWithoutRef<NavLinkProps<any>> &
  React.RefAttributes<HTMLAnchorElement>;

type LinkType = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label?: React.ReactNode;
  icon?: any;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface SidebarProps {
  organizationInfo?: {
    logo?: React.ReactNode;
    name?: React.ReactNode;
    subdomain?: React.ReactNode;
  };
  navLinks?: NavLinkItemType[];
  tooltipStyle?: "default" | "featured";
  /** @deprecated Prop removed as footer links in sidebar is no longer supported*/
  footerLinks?: FooterLinkType[];
  helpLinks?: {
    documentationProps?: LinkType;
    keyboardShortcutProps?: LinkType;
    liveChatProps?: LinkType;
    changelogProps?: LinkType;
  };
  profileInfo?: {
    name?: string;
    email?: string;
    topLinks?: LinkType[];
    bottomLinks?: LinkType[];
    customContent?: React.ReactNode;
    "data-cy"?: string;
  } & AvatarProps;
  /** @deprecated Prop removed as expanded state of sidebar is no longer supported */
  isCollapsed?: boolean;
  showAppSwitcher?: boolean;
  onAppSwitcherToggle?: React.MouseEventHandler<HTMLButtonElement>;
  appName?: string;
}

export interface SubHeaderProps {
  className?: string;
  leftActionBlock?: React.ReactNode;
  rightActionBlock?: React.ReactNode;
}

export const AppSwitcher: React.FC<AppSwitcherProps>;
export const Container: React.ForwardRefExoticComponent<ContainerProps>;
export const Header: React.FC<HeaderProps>;
export const MenuBar: React.FC<MenuBarProps> & {
  Block: React.FC<MenuBarBlockProps>;
  Item: React.FC<MenuBarItemProps>;
  SubTitle: React.FC<MenuBarSubTitleProps>;
  Search: React.FC<MenuBarSearchProps>;
  AddNew: React.FC<MenuBarAddNewProps>;
};
export const Scrollable: React.FC<ScrollableProps>;
export const Sidebar: React.FC<SidebarProps>;
export const SubHeader: React.FC<SubHeaderProps>;
