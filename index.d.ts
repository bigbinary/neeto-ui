import { Dayjs } from "dayjs";
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
  showEyeDropper?: boolean;
  showHexValue?: boolean;
  showTransparencyControl?: boolean;
  showPicker?: boolean;
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
  labelProps?: LabelProps;
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
  message?: React.ReactNode;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
  initialFocusElement?: "cancel" | "submit";
  hideCancelButton?: boolean;
}

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
  children?: string;
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
  labelProps?: LabelProps;
  children?: string;
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
  labelProps?: LabelProps;
  [key: string]: any;
};

export type DateTimePickerProps = {
  value: any;
  defaultValue?: any;
  className?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  dropdownClassName?: string;
  dateFormat?: string;
  onChange?: (dateTime: Dayjs) => void;
  nakedInput?: boolean;
  error?: string;
  id?: string;
  labelProps?: LabelProps;
  onDatePickerBlur?: (date: Dayjs) => void,
  onTimePickerBlur?: (time: any) => void,
  onDatePickerFocus?: (date: Dayjs) => void,
  onTimePickerFocus?: (time: any) => void,
  datePickerProps?: { [key: string]: any },
  timePickerProps?: { [key: string]: any },
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

export interface MenuItemProps extends React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> {
  tooltipProps?: TooltipProps;
}

export interface MultiEmailInputProps {
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
  required?: boolean;
  maxHeight?: number;
  labelProps?: LabelProps;
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
  labelProps?: LabelProps;
  maxLength?: number;
  unlimitedChars: boolean;
  rejectCharsRegex?: RegExp;
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
  labelProps?: LabelProps;
  optionRemapping?: { label?: string; value?: string };
  [key: string]: any;
  fetchMore?: () => void;
  totalOptionsCount?: number;
  isAsyncLoadOptionEnabled?: boolean;
  isMulti?: boolean;
  addButtonLabel?: string;
};

export type SpinnerProps = {
  theme?: "dark" | "light";
  className?: string;
};

export type StepperProps = {
  steps: { id: string | number; label: string }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export type SwitchProps = {
  label?: string;
  required?: boolean;
  className?: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  disabled?: boolean;
  labelProps?: LabelProps;
  children?: string;
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
  shouldDynamicallyRenderRowSize?: boolean;
  enableColumnResize?: boolean;
  enableColumnReorder?: boolean;
  enableAddColumn?: boolean;
  onColumnUpdate?: (columns: any[]) => void;
  onColumnAdd?: (position: number) => void;
  onColumnDelete?: (key: string) => void;
  preserveTableStateInQuery?: boolean;
  onColumnHide?: (columnKey: string) => void;
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
  color?: string;
  /** @deprecated Prop deprecated. Use `indicatorStyle` prop instead*/
  indicatorColor?: string;
  children?: string;
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
  labelProps?: LabelProps;
  unlimitedChars: boolean;
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
  labelProps?: LabelProps;
  required: boolean;
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

export interface PopoverProps {
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
  className?: string;
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
  tooltipProps?: TooltipProps;
};

export type SliderProps = {
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  value?: number | number[];
};

export type NoDataProps = {
  title?: string;
  description?: React.ReactNode;
  helpText?: React.ReactNode;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  className?: string;
};

type TreeItemNested = {
  label: string;
  value: string;
  disabled: Boolean;
  children: Array<TreeItemNested>;
};

type TreeItem = {
  id: string;
  label: string;
  value: string;
  disabled: Boolean;
  pId: string;
};

export type TreeSelectProps = {
  allowClear?: Boolean;
  className?: string;
  disabled?: Boolean;
  error?: string;
  fieldNames?: { label?: string; value?: string };
  label?: string;
  onChange: (value: string) => void;
  onSearch?: (searchValue: string) => void;
  placeholder?: string;
  required?: Boolean;
  searchValue?: string;
  showSearch?: Boolean;
  size?: "small" | "middle" | "large";
  suffixIcon?: React.ReactNode;
  switcherIcon?: React.ReactNode;
  treeDataSimpleMode?: Boolean;
  value: string;
  treeData: Array<TreeItemNested> | Array<TreeItem>;
};

export type TreeProps = {
  className?: string;
  allowDrop?: boolean;
  autoExpandParent?: boolean;
  blockNode: boolean;
  checkable: boolean;
  checkedKeys: string[] | { checked: string[]; halfChecked: string[] };
  checkStrictly: boolean;
  defaultCheckedKeys: string[];
  defaultExpandAll: boolean;
  defaultExpandedKeys: string[];
  defaultExpandParent: boolean;
  defaultSelectedKeys: string[];
  disabled: boolean;
  draggable:
    | boolean
    | ((node: DataNode) => boolean)
    | {
        icon?: React.ReactNode | false;
        nodeDraggable?: (node: DataNode) => boolean;
      };
  expandedKeys: string[];
  fieldNames: object;
  filterTreeNode: Function;
  height: number;
  icon: ReactNode;
  loadData: Function;
  loadedKeys: string[];
  multiple: boolean;
  selectable: boolean;
  selectedKeys: string[];
  showIcon: boolean;
  showLine:
    | boolean
    | {
        showLeafIcon:
          | boolean
          | ReactNode
          | ((props: AntTreeNodeProps) => ReactNode);
      };
  switcherIcon: ReactNode | ((props: AntTreeNodeProps) => ReactNode);
  titleRender: Function;
  treeData: array<{ key; title; children; [disabled, selectable] }>;
  virtual: boolean;
  onCheck: Function;
  onDragEnd: Function;
  onDragEnter: Function;
  onDragLeave: Function;
  onDragOver: Function;
  onDragStart: Function;
  onDrop: Function;
  onExpand: Function;
  onLoad: Function;
  onRightClick: Function;
  onSelect: Function;
};

export type TimePickerInputProps = {
  label?: string;
  value?: string | Date;
  onChange?: (date: any, value: string) => void;
  labelProps?: object;
  className?: string;
  error?: string;
  required?: boolean;
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
export const DateTimePicker: React.FC<DateTimePickerProps>;
export const Dropdown: React.FC<DropdownProps> & {
  Menu: React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  >;
  MenuItem: React.FC<MenuItemProps> & { Button: ButtonProps };
  Divider: React.FC<
    React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >
  >;
};
export const MultiEmailInput: React.FC<MultiEmailInputProps>;
export const Input: React.ForwardRefExoticComponent<InputProps>;
export const Label: React.FC<LabelProps>;
export const Pagination: React.FC<PaginationProps>;
export const Select: React.ForwardRefExoticComponent<SelectProps>;
export const Spinner: React.FC<SpinnerProps>;
export const Stepper: React.FC<StepperProps>;
export const Switch: React.ForwardRefExoticComponent<SwitchProps>;
export const Slider: React.ForwardRefExoticComponent<SliderProps>;
export const Table: React.FC<TableProps>;
export const Tag: React.FC<TagProps>;
export const Textarea: React.ForwardRefExoticComponent<TextareaProps>;
export const TimePicker: React.FC<TimePickerProps>;
export const Typography: React.ForwardRefExoticComponent<TypographyProps>;
export const Tooltip: React.ForwardRefExoticComponent<TooltipProps>;
export const Popover: React.ForwardRefExoticComponent<PopoverProps>;
export const Kbd: React.FC<KbdProps>;
export const NoData: React.FC<NoDataProps>;
export const TreeSelect: React.FC<TreeSelectProps>;
export const Tree: React.FC<TreeProps>;
export const TimePickerInput: React.FC<TimePickerInputProps>;
