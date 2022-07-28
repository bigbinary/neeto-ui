import React from "react";
import { NavLinkProps } from "react-router-dom";
import { AvatarProps, InputProps } from "./index";

export interface AppSwitcherProps {
  size?: "lg" | "sm";
  isOpen?: boolean;
  className?: string;
  closeOnEsc?: boolean;
  closeOnOutsideClick?: boolean;
  environment?: "development" | "staging" | "production";
  activeApp?: string;
  subdomain?: string;
  neetoApps?: string[];
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
  label: React.ReactNode;
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
  footerLinks?: FooterLinkType[];
  profileInfo?: {
    name?: string;
    email?: string;
    topLinks?: LinkType[];
    bottomLinks?: LinkType[];
    customContent?: React.ReactNode;
    changelogProps?: LinkType;
    helpProps?: LinkType;
    "data-cy"?: string;
  } & AvatarProps;
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
export const MenuBar: React.FC<MenuBarProps>;
export const Scrollable: React.FC<ScrollableProps>;
export const Sidebar: React.FC<SidebarProps>;
export const SubHeader: React.FC<SubHeaderProps>;
