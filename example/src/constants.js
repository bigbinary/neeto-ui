import React from "react";

import {
  Copy,
  Design,
  UserCircle,
  Settings,
  Image,
  Help,
  NeetoDesk,
  Link,
} from "@bigbinary/neeto-icons";

import ActionDropdowns from "./Pages/ActionDropdown";
import Avatar from "./Pages/Avatar";
import Button from "./Pages/Button";
import DatePicker from "./Pages/DatePicker";
import Dropdown from "./Pages/Dropdown";
import Formik from "./Pages/Formik";
import Input from "./Pages/Input";
import Layouts from "./Pages/Layouts";
import Misc from "./Pages/Misc";
import Modal from "./Pages/Modal";
import Pane from "./Pages/Pane";
import Select from "./Pages/Select";
import Tab from "./Pages/Tab";
import Table from "./Pages/Table";
import Tag from "./Pages/Tag";
import TimePicker from "./Pages/TimePicker";
import Toastr from "./Pages/Toastr";
import Toggles from "./Pages/Toggles";
import Tooltip from "./Pages/Tooltip";
import Typography from "./Pages/Typography";

export const COMPONENT_MAPPING = {
  ActionDropdown: ActionDropdowns,
  Avatar: Avatar,
  Button: Button,
  DatePicker: DatePicker,
  Dropdown: Dropdown,
  Formik: Formik,
  Input: Input,
  Layouts: Layouts,
  Misc: Misc,
  Modal: Modal,
  Pane: Pane,
  Select: Select,
  Tab: Tab,
  Table: Table,
  Tag: Tag,
  TimePicker: TimePicker,
  Toastr: Toastr,
  Toggles: Toggles,
  Tooltip: Tooltip,
  Typography: Typography,
};

export const NAV_LINKS = [
  {
    label: "Avatar",
    to: "/avatar",
    icon: () => <>A</>,
  },
  {
    label: "Button",
    to: "/button",
    icon: () => <>B</>,
  },
  {
    label: "DatePicker",
    to: "/datepicker",
    icon: () => <>DP</>,
  },
  {
    label: "Dropdown",
    to: "/dropdown",
    icon: () => <>DD</>,
  },
  {
    label: "Formik",
    to: "/formik",
    icon: () => <>F</>,
  },
  {
    label: "Input",
    to: "/input",
    icon: () => <>I</>,
  },
  {
    label: "Layouts",
    to: "/layouts",
    icon: () => <>L</>,
  },
  {
    label: "Misc",
    to: "/misc",
    icon: () => <>MI</>,
  },
  {
    label: "Modal",
    to: "/modal",
    icon: () => <>MO</>,
  },
  {
    label: "Pane",
    to: "/pane",
    icon: () => <>P</>,
  },
  {
    label: "Select",
    to: "/select",
    icon: () => <>S</>,
  },
  {
    label: "Tab",
    to: "/tab",
    icon: () => <>TB</>,
  },
  {
    label: "Table",
    to: "/table",
    icon: () => <>TL</>,
  },
  {
    label: "Tag",
    to: "/tag",
    icon: () => <>TG</>,
  },
  {
    label: "Toggles",
    to: "/toggles",
    icon: () => <>TS</>,
  },
  {
    label: "Tooltip",
    to: "/tooltip",
    icon: () => <>TP</>,
  },
];

export const STORYBOOK_NAV_LINKS = [
  {
    label: "Components",
    description: "Description here",
    to: "/components",
    icon: Copy,
  },
  {
    label: "Form Elements",
    description: "Description here",
    to: "/form-elements",
    icon: Design,
  },
  {
    label: "Misc",
    description: "Description here",
    to: "/misc",
    icon: UserCircle,
  },
  {
    label: "Formik",
    description: "Description here",
    to: "/formik",
    icon: Image,
  },
  {
    label: "Overlays",
    description: "Description here",
    to: "/overlays",
    icon: Settings,
  },
  {
    label: "Layouts",
    to: "/layouts",
    icon: Image,
  },
];

export const STORYBOOK_FOOTER_LINKS = [
  {
    label: "Help",
    to: "/help",
    icon: Help,
  },
  {
    label: "Agents",
    to: "/agents",
    icon: NeetoDesk,
  },
  {
    label: "External",
    icon: Link,
    href: "https://neetoui.onrender.com",
  },
];
