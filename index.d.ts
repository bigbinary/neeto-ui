import React from "react";

export interface AccordionProps {
  className?: string;
  defaultActiveKey?: number;
  padded?: boolean;
  style?: "primary" | "secondary";
}

export interface AccordionItemProps {
  id: string;
  title?: string;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
  titleProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  iconProps?: React.SVGProps<SVGSVGElement>;
}

export interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  colorPaletteProps?: {
    color: { from: string; to: string };
    colorList: { from: string; to: string }[];
    onChange: (from: string, to: string) => void;
  };
}

interface PopupProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  closeOnEsc?: boolean;
  closeButton?: boolean;
  backdropClassName?: string;
  closeOnOutsideClick?: boolean;
  [key: string]: any;
}

interface PopupContentProps {
  className?: string;
}

export type ModalProps = PopupProps & { size?: "xs" | "sm" | "md" };

export type PaneProps = PopupProps & { size?: "sm" | "lg" };

export interface RadioProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  stacked?: boolean;
  className?: string;
  containerClassName?: string;
  error?: string;
  id?: any;
  value?: any;
}

export type RadioItemProps = { label: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TabProps = {
  size: "large" | "default";
  noUnderline?: boolean;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type TabItemProps<S> = {
  active: boolean;
  className?: string;
  icon?: string | React.ReactNode;
  onClick?: () => void;
  activeClassName?: string;
  [key: string]: any;
};

export interface TooltipProps {
  content: React.ReactNode;
  theme?: "dark" | "light";
  disabled?: boolean;
  position?:
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "auto"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end";
  interactive?: boolean;
  hideAfter?: number;
  hideOnTargetExit?: boolean;
}

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: string | JSX.Element;
  iconPosition?: "left" | "right";
  iconSize?: number;
  label: string;
  loading?: boolean;
  to?: string;
  type?: "button" | "reset" | "submit";
  style?: "primary" | "secondary" | "danger" | "danger-text" | "text" | "link";
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  size?: "large" | "xlarge" | "default";
  href?: string;
  tooltipProps?: TooltipProps;
  [key: string]: any;
}

// components

export const Accordion: React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>;
};
export const Modal: React.FC<ModalProps> & {
  Header: React.FC<PopupContentProps>;
  Body: React.FC<PopupContentProps>;
  Footer: React.FC<PopupContentProps>;
};
export const Pane: React.FC<PaneProps> & {
  Header: React.FC<PopupContentProps>;
  Body: React.FC<PopupContentProps & { hasFooter?: boolean }>;
  Footer: React.FC<PopupContentProps>;
};
export const Radio: React.FC<RadioProps> & {
  Item: React.FC<RadioItemProps>;
};
export const Tab: React.FC<TabProps> & {
  Item: React.FC<TabItemProps<any>>;
};

type ToastrFunction = (
  message: React.ReactNode,
  buttonLabel: React.ReactNode,
  onClick: () => void
) => void;

export const Toastr: {
  show: ToastrFunction;
  info: ToastrFunction;
  success: ToastrFunction;
  error: (
    message: React.ReactNode | Error,
    buttonLabel: React.ReactNode,
    onClick: () => void
  ) => void;
  warning: ToastrFunction;
};

export const ColorPicker: React.FC<ColorPickerProps>;
export const Button: React.ForwardRefExoticComponent<ButtonProps>;
export const Tooltip: React.ForwardRefExoticComponent<TooltipProps>;
