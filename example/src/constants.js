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
    label: "Components",
    description: "Description here",
    to: "/components",
    icon: Copy,
    items: [
      {
        label: "ActionDropdown",
        to: "/components/action-dropdown",
      },
      {
        label: "Avatar",
        to: "/components/avatar",
      },
      {
        label: "Button",
        to: "/components/button",
      },
      {
        label: "DatePicker",
        to: "/components/date-picker",
      },
      {
        label: "Dropdown",
        to: "/components/dropdown",
      },
      {
        label: "Tab",
        to: "/components/tab",
      },
      {
        label: "Tag",
        to: "/components/tag",
      },
      {
        label: "Table",
        to: "/components/table",
      },

      {
        label: "Tooltip",
        to: "/components/tooltip",
      },
      {
        label: "TimePicker",
        to: "/components/time-picker",
      },
      {
        label: "Typography",
        to: "/components/typography",
      },
    ],
  },
  {
    label: "Form Elements",
    description: "Description here",
    to: "/form-elements",
    icon: Design,
    items: [
      {
        label: "Input",
        to: "/form-elements/input",
      },
      {
        label: "Select",
        to: "/form-elements/select",
      },
      {
        label: "Toggles",
        to: "/form-elements/Toggles",
      },
    ],
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
    items: [
      {
        label: "Modal",
        to: "/overlays/modal",
      },
      {
        label: "Toastr",
        to: "/overlays/toastr",
      },
      {
        label: "Pane",
        to: "/overlays/pane",
      },
      {
        label: "Tooltip",
        to: "/overlays/tooltip",
      },
    ],
  },
  {
    label: "Layouts",
    to: "/layouts",
    icon: Image,
  },
];

export const FOOTER_LINKS = [
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
    href: "https://neetoui-v2.netlify.app",
  },
];
