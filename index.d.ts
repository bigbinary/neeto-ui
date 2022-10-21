import React from "react";

export interface AccordionProps {
  className?: string;
  defaultActiveKey?: number;
  padded?: boolean;
  style?: "primary" | "secondary";
}

export interface AccordionItemProps {
  id?: string;
  title?: string;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
  titleProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { [key: string]: any };
  iconProps?: React.SVGProps<SVGSVGElement>;
}

export interface ColorPickerProps {
  color: string;
  size: "small" | "medium" | "large";
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
  children?: React.ReactNode;
}

export type ModalProps = PopupProps & { size?: "small" | "medium" | "large" };

export type PaneProps = PopupProps & { size?: "small" | "large" };

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
> & { [key: string]: any };

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

export interface ActionDropdownProps {
  label?: string;
  buttonStyle?: "primary" | "secondary";
  buttonSize?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  buttonProps?: ButtonProps;
  dropdownProps?: DropdownProps;
  /** @deprecated Prop deprecated. Use `buttonStyle` prop instead*/
  style?: "primary" | "secondary";
  /** @deprecated Prop deprecated. Use `buttonStyle` prop instead*/
  size?: "small" | "medium" | "large";
}

export interface AlertProps {
  size?: "small" | "medium" | "large";
  isOpen?: boolean;
  isSubmitting?: boolean;
  className?: string;
  closeOnEsc?: boolean;
  closeButton?: boolean;
  backdropClassName?: string;
  closeOnOutsideClick?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  message?: string;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
}

export type AvatarProps = {
  size?: "small" | "medium" | "large" | "extraLarge";
  user?: { name: string; imageUrl: string };
  isSquare?: boolean;
  status?: "online" | "idle" | "offline";
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  showTooltip?: boolean;
  tooltipProps?: TooltipProps;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & { [key: string]: any };

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: string | any;
  iconPosition?: "left" | "right";
  iconSize?: number;
  label?: string;
  loading?: boolean;
  to?: string;
  type?: "button" | "reset" | "submit";
  style?: "primary" | "secondary" | "danger" | "danger-text" | "text" | "link";
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  href?: string;
  tooltipProps?: TooltipProps;
  [key: string]: any;
}

export type CalloutProps = {
  icon?: React.SVGProps<SVGSVGElement>;
  style?: "info" | "warning" | "danger" | "success";
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { [key: string]: any };

export type CheckboxProps = {
  label?: string;
  error?: string;
  className?: string;
  required?: false;
  id?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { [key: string]: any };

export type DatePickerProps = {
  value: any;
  defaultValue?: any;
  className?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  dropdownClassName?: string;
  dateFormat?: string;
  timeFormat?: string;
  onChange?: (date: any, dateString: string) => void;
  onOk?: () => void;
  picker?: "date" | "week" | "month" | "quarter" | "year";
  showTime?: boolean;
  type?: "range" | "date";
  nakedInput?: boolean;
  error?: string;
  id?: string;
  disabled?: boolean;
  [key: string]: any;
};

export interface DropdownProps {
  icon?: string | any;
  label?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  position?:
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end";
  className?: string;
  buttonSize?: "small" | "medium" | "large";
  buttonStyle?:
    | "primary"
    | "secondary"
    | "text"
    | "danger"
    | "danger-text"
    | "link";
  buttonProps?: ButtonProps;
  customTarget?: React.ReactNode | (() => React.ReactNode);
  disabled?: boolean;
  dropdownProps?: any;
  closeOnEsc?: boolean;
  closeOnSelect?: boolean;
  closeOnOutsideClick?: boolean;
  dropdownModifiers?: any[];
  trigger?: "click" | "hover";
  strategy?: "absolute" | "fixed";
  onClick?: () => void;
  /** @deprecated Prop deprecated. Use `dropdownProps` prop instead*/
  ulProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > & { [key: string]: any };
  [key: string]: any;
}

export interface EmailInputProps {
  label?: string;
  placeholder?: string;
  helpText?: string;
  value?: { label: string; value: string; valid: boolean }[];
  onChange?: (
    emails: { label: string; value: string; valid: boolean }[]
  ) => void;
  error?: string;
  onBlur?: () => void;
  filterInvalidEmails?: { label: string };
  counter?: boolean | { label: string; startFrom: number };
  disabled?: boolean;
  maxHeight?: number;
  [key: string]: any;
}

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  [key: string]: any;
  size?: "small" | "medium" | "large";
  label?: string;
  error?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  disabled?: boolean;
  helpText?: string;
  className?: string;
  nakedInput?: boolean;
  contentSize?: number;
  required?: boolean;
}

export type LabelProps = {
  className?: string;
  required?: boolean;
  helpIconProps?: {
    onClick?: () => void;
    icon?: any;
    tooltipProps?: TooltipProps;
    className?: string;
  } & React.SVGProps<SVGSVGElement>;
} & React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & { [key: string]: any };

export type PageLoaderProps = { text?: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { [key: string]: any };

export interface PaginationProps {
  pageSize: number;
  count: number;
  navigate?: (toPage: number) => void;
  pageNo?: number;
  siblingCount?: number;
  className?: string;
}

export type SelectProps = {
  size?: "small" | "medium" | "large";
  label?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  className?: string;
  innerRef?: React.Ref<HTMLSelectElement>;
  isCreateable?: boolean;
  strategy?: "default" | "fixed";
  id?: string;
  loadOptions?: boolean;
  [key: string]: any;
};

export type SpinnerProps = {
  theme?: "dark" | "light";
  className?: string;
};

export type SwitchProps = {
  label?: string;
  required?: boolean;
  className?: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  disabled?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { [key: string]: any };

export interface TableProps {
  rowData: any[];
  columnData: any[];
  allowRowClick?: boolean;
  className?: string;
  currentPageNumber?: number;
  defaultPageSize?: number;
  handlePageChange?: (page: number, pageSize: number) => void;
  loading?: boolean;
  onRowClick?: (
    event: React.MouseEvent<any, MouseEvent>,
    record: any,
    rowIndex: number
  ) => void;
  onRowSelect?: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
  totalCount?: number;
  selectedRowKeys?: React.Key[];
  fixedHeight?: boolean;
  paginationProps?: any;
  scroll?: {
    x?: string | number | true;
    y?: string | number;
    scrollToFirstRowOnChange?: boolean;
  };
  rowSelection?: any;
  [key: string]: any;
}

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
  color: string;
  /** @deprecated Prop deprecated. Use `indicatorStyle` prop instead*/
  indicatorColor?: string;
}

export type TextareaProps = {
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  nakedTextarea?: boolean;
  helpText?: string;
  error?: string;
  label?: string;
  className?: string;
  maxLength?: number;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { [key: string]: any };

export type TimePickerProps = {
  className?: string;
  label?: string;
  format?: string;
  size?: "small" | "medium" | "large";
  interval?: {
    hourStep: number;
    minuteStep: number;
    secondStep: number;
  };
  onChange?: (value: string) => void;
  type?: "time" | "range";
  nakedInput?: boolean;
  disabled?: boolean;
  error?: string;
  defaultValue?: any;
  value?: any;
  id?: string;
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
  [key: string]: any;
}

export type TypographyProps = {
  style?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "body3"
    | "nano";
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  lineHeight?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "b"
    | "strong"
    | "i"
    | "em"
    | "mark"
    | "del"
    | "s"
    | "ins"
    | "sub"
    | "sup"
    | "u"
    | "code"
    | "blockquote";
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "fullwidth"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  className?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    [key: string]: any;
  };

export type KbdProps = {
  keyName?: string;
  className?: string;
};

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
  buttonLabel?: React.ReactNode,
  onClick?: () => void
) => void;

export const Toastr: {
  show: ToastrFunction;
  info: ToastrFunction;
  success: ToastrFunction;
  error: (
    message: React.ReactNode | Error,
    buttonLabel?: React.ReactNode,
    onClick?: () => void
  ) => void;
  warning: ToastrFunction;
};

export const ColorPicker: React.FC<ColorPickerProps>;

export const ActionDropdown: React.FC<ActionDropdownProps>;
export const Alert: React.FC<AlertProps>;
export const Avatar: React.FC<AvatarProps>;
export const Button: React.FC<ButtonProps>;
export const Callout: React.FC<CalloutProps>;
export const Checkbox: React.FC<CheckboxProps>;
export const DatePicker: React.FC<DatePickerProps>;
export const Dropdown: React.FC<DropdownProps> & {
  Menu: React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  >;
  MenuItem: React.FC<
    React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >
  > & { Button: ButtonProps };
  Divider: React.FC<
    React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >
  >;
};
export const EmailInput: React.FC<EmailInputProps>;
export const Input: React.ForwardRefExoticComponent<InputProps>;
export const Label: React.FC<LabelProps>;
export const PageLoader: React.FC<PageLoaderProps>;
export const Pagination: React.FC<PaginationProps>;
export const Select: React.ForwardRefExoticComponent<SelectProps>;
export const Spinner: React.FC<SpinnerProps>;
export const Switch: React.ForwardRefExoticComponent<SwitchProps>;
export const Table: React.FC<TableProps>;
export const Tag: React.FC<TagProps>;
export const Textarea: React.ForwardRefExoticComponent<TextareaProps>;
export const TimePicker: React.FC<TimePickerProps>;
export const Typography: React.ForwardRefExoticComponent<TypographyProps>;
export const Tooltip: React.ForwardRefExoticComponent<TooltipProps>;
export const Kbd: React.FC<KbdProps>;
