import Button from "./Pages/Button";
import Dropdown from "./Pages/Dropdown";
import Tab from "./Pages/Tab";
import Input from "./Pages/Input";
import Select from "./Pages/Select";
import Toggles from "./Pages/Toggles";
import Modal from "./Pages/Modal";
import Pane from "./Pages/Pane";
import Toastr from "./Pages/Toastr";
import Misc from "./Pages/Misc";

export const COMPONENT_MAPPING = {
  "Button": Button,
  "Dropdown": Dropdown,
  "Tab": Tab,
  "Input": Input,
  "Select": Select,
  "Toggles": Toggles,
  "Modal": Modal,
  "Pane": Pane,
  "Toastr": Toastr,
  "Misc": Misc,
}

export const NAV_LINKS = [
  {
    label: "Components",
    to: "/components",
    items: [
      {
        label: "Button",
        to: "/components/button",
      },
      {
        label: "Dropdown",
        to: "/components/dropdown",
      },
      {
        label: "Tab",
        to: "/components/tab",
      },
    ]
  },
  {
    label: "Form Elements",
    to: "/form-elements",
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
    ]
  },
  {
    label: "Misc",
    to: "/misc",
  },
  {
    label: "Overlays",
    to: "/overlays",
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
    ]
  },
];
