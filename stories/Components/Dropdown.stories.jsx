import React, { useState } from "react";

import { Settings, Delete, Search } from "neetoicons";

import { Button, Dropdown, Tag, Input, Typography } from "components";

import { EVENT_BUBBLING_CAPTURING } from "./constants";

const description = `
\`import { Dropdown } from "@bigbinary/neetoui";\`

\`Dropdown\` presents a list of options in a menu that can be expanded when
clicked, allowing users to select one option from the list.

The \`Dropdown\` component has three subcomponents:

- \`Dropdown.Menu\`: Defines the container for organizing and displaying a list of
  clickable items.
- \`Dropdown.MenuItem\`: Represents an individual item or option in the dropdown
  menu. \`Dropdown.MenuItem.Button\` provides a button-like element within a menu
  item.
- \`Dropdown.Divider\`: Creates a visual separation or divider between groups of
  menu items.

You can use destructuring assignment to conveniently access subcomponents of the
\`Dropdown\` component as follows:

\`\`\`code
const { Menu, MenuItem, Divider } = Dropdown;
\`\`\`

This simplifies the code and allows you to work with these subcomponents
directly.

We use \`Tippy\` component from Tippy.js under the hood. For extra customization,
refer [Tippy](https://atomiks.github.io/tippyjs/v6/all-props/).
`;

const metadata = {
  title: "Components/Dropdown",
  component: Dropdown,
  subcomponents: {
    "Dropdown.Menu": Dropdown.Menu,
    "Dropdown.MenuItem": Dropdown.MenuItem,
    "Dropdown.MenuItem.Button": Dropdown.MenuItem.Button,
    "Dropdown.Divider": Dropdown.Divider,
  },
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A6",
    },
  },
  argTypes: {
    icon: {
      description: "To specify the icon to be rendered in the Dropdown target.",
      control: "object",
      table: { type: { summary: "oneOfType([element, func])" } },
    },
    label: {
      description: "To specify the label for Dropdown target button.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    isOpen: {
      description: "To specify whether the Dropdown is open or not.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    onClose: {
      description:
        "To specify the action to be triggered on closing the Dropdown.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    trigger: {
      description: "To specify the triggering action for Dropdown.",
      control: "select",
      options: Object.keys({
        click: "click",
        hover: "mouseenter focus",
        all: "mouseenter focus click",
        manual: "manual",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "click" },
      },
    },
    strategy: {
      description:
        "To specify the positioning strategy to use. By default, it is absolute, which in the simplest cases does not require repositioning of the Dropdown.\n\nIf your reference element is in a fixed container, use the fixed strategy",
      control: "select",
      options: Object.values({ absolute: "absolute", fixed: "fixed" }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "absolute" },
      },
    },
    dropdownProps: {
      description: "To specify the classes to be passed to the Dropdown menu.",
      control: "object",
      table: { type: { summary: "object" }, defaultValue: { summary: "{}" } },
    },
    position: {
      description: "To specify the position of the Dropdown menu.",
      control: "select",
      options: Object.values({
        auto: "auto",
        autoStart: "auto-start",
        autoEnd: "auto-end",
        top: "top",
        topStart: "top-start",
        topEnd: "top-end",
        bottom: "bottom",
        bottomStart: "bottom-start",
        bottomEnd: "bottom-end",
        right: "right",
        rightStart: "right-start",
        rightEnd: "right-end",
        left: "left",
        leftStart: "left-start",
        leftEnd: "left-end",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "bottom-end" },
      },
    },
    children: {
      description: "To specify the content to be rendered inside the Dropdown.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    className: {
      description: "To provide external classnames to Dropdown target wrapper.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    buttonSize: {
      description:
        "To specify the size of the button to be rendered as the Dropdown target.",
      control: "select",
      options: Object.values({
        small: "small",
        medium: "medium",
        large: "large",
      }),
      table: {
        type: { summary: "string" },
        category: "New",
        defaultValue: { summary: "medium" },
      },
    },
    buttonStyle: {
      description:
        "To specify the style of the button to be rendered as the Dropdown target.",
      control: "select",
      options: Object.values({
        primary: "primary",
        secondary: "secondary",
        tertiary: "tertiary",
        danger: "danger",
        danger_text: "danger-text",
        text: "text",
        link: "link",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    buttonProps: {
      description:
        "To specify the props to be passed to the Dropdown target button.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    customTarget: {
      description:
        "To provide a custom target to be rendered instead of the default button target.",
      control: "object",
      table: { type: { summary: "node" } },
    },
    disabled: {
      description: "To specify whether the Dropdown is disabled or not.",
      control: "boolean",
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
    closeOnEsc: {
      description:
        "To specify whether the Dropdown should close on pressing esc key.",
      control: "boolean",
      table: { type: { summary: "boolean" }, defaultValue: { summary: true } },
    },
    closeOnSelect: {
      description:
        "To specify whether the Dropdown should close on selecting an option.",
      control: "boolean",
      table: { type: { summary: "boolean" }, defaultValue: { summary: true } },
    },
    closeOnOutsideClick: {
      description:
        "To specify whether the Dropdown should close on clicking outside the Dropdown content. (will not have any effect if the component is controlled.)",
      control: "boolean",
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
    dropdownModifiers: {
      description: "To provide custom modifiers to Dropdown component.",
      control: "array",
      table: { type: { summary: "array" } },
    },
    onClickOutside: {
      description:
        "To specify the action that should be triggered when clicking outside of the controlled dropdown component.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    ulProps: {
      description: "Use `dropdownProps` props instead.",
      control: "object",
      table: { type: { summary: "object" }, category: "Removed" },
    },
  },
};

const Default = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown label="Dropdown" {...args}>
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <MenuItem.Button isActive>Active</MenuItem.Button>
          <MenuItem.Button isDisabled>Disabled</MenuItem.Button>
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};

const TriggerStyles = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <div className="flex space-x-3">
        <Dropdown {...args} buttonStyle="primary" label="Primary Dropdown">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
        <Dropdown buttonStyle="secondary" label="Secondary Dropdown">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
        <Dropdown buttonStyle="text" label="Text Dropdown">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
};
TriggerStyles.storyName = "Styles";

const TriggerSizes = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <div className="flex items-center space-x-3">
        <Dropdown {...args} buttonSize="small" label="Small">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
        <Dropdown label="Medium">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
        <Dropdown buttonSize="large" label="Large">
          <Menu>
            {listItems.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
            <Divider />
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
};
TriggerSizes.storyName = "Sizes";

const TriggerWithCustomIcon = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown {...args} icon={Settings} label="Dropdown with custom icon">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};
TriggerWithCustomIcon.storyName = "Trigger with custom icon";

const WithPrefixAndSuffix = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown {...args} label="Prefix and suffix" position="bottom-end">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button
              key={idx}
              prefix={<Settings size={20} />}
              suffix={<Settings size={20} />}
            >
              {item}
            </MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button
            prefix={<Delete size={20} />}
            style="danger"
            suffix={<Settings size={20} />}
          >
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};
WithPrefixAndSuffix.storyName = "With prefix and suffix";

const MultiDropdownWithClickTrigger = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="flex h-80 items-start">
      <Dropdown {...args} label="Dropdown">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <Dropdown
            customTarget={<MenuItem.Button>Another Dropdown</MenuItem.Button>}
            position="right-start"
            onClick={e => e.stopPropagation()}
          >
            <Menu>
              {listItems.map((item, idx) => (
                <MenuItem.Button key={idx}>{item}</MenuItem.Button>
              ))}
              <Divider />
              <MenuItem.Button style="danger">Delete</MenuItem.Button>
            </Menu>
          </Dropdown>
        </Menu>
      </Dropdown>
    </div>
  );
};

MultiDropdownWithClickTrigger.storyName =
  "Multilevel Dropdown with click trigger";

MultiDropdownWithClickTrigger.parameters = {
  docs: {
    description: {
      story:
        "Multilevel `Dropdown` with click trigger displays multiple nested dropdown menus, triggered by a click event, allowing for hierarchical navigation through selectable options.",
    },
  },
};

const MultiDropdownWithHoverTrigger = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="flex h-80 items-start">
      <Dropdown {...args} label="Dropdown">
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <Dropdown
            customTarget={<MenuItem.Button>Another Dropdown</MenuItem.Button>}
            position="right-start"
            trigger="hover"
          >
            <Menu>
              {listItems.map((item, idx) => (
                <MenuItem.Button key={idx}>{item}</MenuItem.Button>
              ))}
              <Divider />
              <MenuItem.Button style="danger">Delete</MenuItem.Button>
            </Menu>
          </Dropdown>
        </Menu>
      </Dropdown>
    </div>
  );
};

MultiDropdownWithHoverTrigger.storyName =
  "Multilevel Dropdown with hover trigger";

MultiDropdownWithHoverTrigger.parameters = {
  docs: {
    description: {
      story:
        "Multilevel `Dropdown` with hover trigger displays multiple nested dropdown menus when a user hovers over a trigger element, enabling hierarchical navigation through selectable options.",
    },
  },
};

const ControlledDropdown = args => {
  const [isOpen, setIsOpen] = useState(false);

  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="flex h-60 flex-col items-start space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          label="Open Dropdown"
          style="secondary"
          onClick={() => setIsOpen(true)}
        />
        <Button
          label="Close Dropdown"
          style="secondary"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <Dropdown
        {...{ ...args, isOpen }}
        label="Controlled Dropdown"
        onClickOutside={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      >
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};

ControlledDropdown.parameters = {
  docs: {
    description: {
      story:
        "When you're using the `Dropdown` as a controlled component, you have the option to use the `onClickOutside` prop. This prop allows you to reset the `isOpen` state when clicked outside the component, which will effectively close the dropdown",
    },
  },
};
ControlledDropdown.storyName = "Controlled Dropdown";

const CustomTarget = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown
        {...args}
        customTarget={<Tag label="Click me" style="success" />}
      >
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};
CustomTarget.storyName = "Custom target";

const CustomDropdown = args => {
  const { Menu, MenuItem } = Dropdown;
  const members = ["Oliver Smith", "Jack Smith"];

  return (
    <div className="h-56">
      <Dropdown {...args} closeOnSelect={false} label="Custom Dropdown">
        <div className="neeto-ui-rounded-md flex flex-col gap-y-1 p-2">
          <Input placeholder="Search members" prefix={<Search />} />
          <Typography style="body3">Results</Typography>
          <Menu className="flex flex-col gap-y-1">
            {members.map((item, idx) => (
              <MenuItem.Button key={idx}>{item}</MenuItem.Button>
            ))}
          </Menu>
        </div>
      </Dropdown>
    </div>
  );
};

CustomDropdown.storyName = "Custom Dropdown";
CustomDropdown.parameters = {
  docs: {
    description: {
      story:
        "Custom `Dropdown` provides flexibility for displaying various components, such as input fields and text, within its selectable options, allowing for diverse content and interactions in the dropdown menu.",
    },
  },
};

const EventBubblingAndCapturing = args => {
  const { Menu, MenuItem } = Dropdown;

  return (
    <div
      className="neeto-ui-rounded neeto-ui-shadow-md h-40 w-1/2 cursor-pointer border-2 border-solid p-5"
      onClick={() => alert("Clicked on the card")}
    >
      <div className="w-10" onClick={event => event.stopPropagation()}>
        <Dropdown label="Dropdown" {...args}>
          <Menu>
            <MenuItem.Button isActive>Active</MenuItem.Button>
            <MenuItem.Button>Disabled</MenuItem.Button>
            <MenuItem.Button style="danger">Delete</MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
};

EventBubblingAndCapturing.storyName = "Event bubbling and capturing";
EventBubblingAndCapturing.parameters = {
  docs: {
    source: { code: EVENT_BUBBLING_CAPTURING },
    description: {
      story:
        "To stop event bubbling in the `Dropdown` component, you can wrap the `Dropdown` component inside a `div` or another suitable container and add an `onClick` handler to stop the event propagation.",
    },
  },
};

const DropdownWithTooltipForMenuItem = args => {
  const { Menu, MenuItem } = Dropdown;

  return (
    <div className="h-40">
      <Dropdown label="Dropdown" {...args}>
        <Menu>
          <MenuItem.Button
            tooltipProps={{ content: "Enabled button's tooltip" }}
          >
            Enabled
          </MenuItem.Button>
          <MenuItem.Button
            isDisabled
            tooltipProps={{ content: "Disabled button's tooltip" }}
          >
            Disabled
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};

DropdownWithTooltipForMenuItem.storyName = "Dropdown with tooltip for MenuItem";

const DropdownCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Dropdown\`
component.

\`\`\`css
--neeto-ui-dropdown-margin-x: 0px;
--neeto-ui-dropdown-margin-y: 6px;
--neeto-ui-dropdown-padding-x: 0px;
--neeto-ui-dropdown-padding-y: 0px;
--neeto-ui-dropdown-border-width: 1px;
--neeto-ui-dropdown-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-dropdown-border-radius: var(--neeto-ui-rounded);
--neeto-ui-dropdown-box-shadow: var(--neeto-ui-shadow-lg);

// Popup
--neeto-ui-dropdown-popup-width: auto;
--neeto-ui-dropdown-popup-min-width: 168px;
--neeto-ui-dropdown-popup-max-height: 480px;
--neeto-ui-dropdown-popup-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-dropdown-popup-border-radius: var(--neeto-ui-rounded);
--neeto-ui-dropdown-popup-z-index: 99999;

// Popup Menu
--neeto-ui-dropdown-popup-menu-padding-x: 0px;
--neeto-ui-dropdown-popup-menu-padding-y: 4px;

// Item
--neeto-ui-dropdown-item-padding-y: 6px;
--neeto-ui-dropdown-item-padding-x: 12px;
--neeto-ui-dropdown-item-font-size: var(--neeto-ui-text-sm);
--neeto-ui-dropdown-item-font-weight: var(--neeto-ui-font-normal);
--neeto-ui-dropdown-item-line-height: 1.143;
--neeto-ui-dropdown-item-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-dropdown-item-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-dropdown-item-white-space: nowrap;
--neeto-ui-dropdown-item-min-height: 32px;
--neeto-ui-dropdown-item-gap: 8px;
--neeto-ui-dropdown-item-border-radius: 0px;

// Item - Active
--neeto-ui-dropdown-item-active-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-dropdown-item-active-color: rgb(var(--neeto-ui-white));

// Item - Disabled
--neeto-ui-dropdown-item-disabled-opacity: 0.5;

// Item - Hover
--neeto-ui-dropdown-item-hover-bg-color: rgb(var(--neeto-ui-gray-200));

// Item - Focus
--neeto-ui-dropdown-item-focus-bg-color: rgb(var(--neeto-ui-gray-200));

// Divider
--neeto-ui-dropdown-divider-height: 1px;
--neeto-ui-dropdown-divider-bg-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-dropdown-divider-margin: 4px;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-dropdown {
  --neeto-ui-dropdown-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-dropdown-item-active-bg-color: rgb(var(--neeto-ui-gray-800));
}
\`\`\`

#### Output
`;

const CSSCustomization = args => {
  const { Menu, MenuItem, Divider } = Dropdown;
  const listItems = ["Action", "Another action", "Something else here"];

  return (
    <div className="h-40">
      <Dropdown
        buttonProps={{ className: "neetix-button--primary" }}
        className="neetix-dropdown"
        label="Custom Dropdown"
        {...args}
      >
        <Menu>
          {listItems.map((item, idx) => (
            <MenuItem.Button key={idx}>{item}</MenuItem.Button>
          ))}
          <MenuItem.Button isActive>Active</MenuItem.Button>
          <MenuItem.Button isDisabled>Disabled</MenuItem.Button>
          <Divider />
          <MenuItem.Button style="danger">Delete</MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
  );
};

CSSCustomization.storyName = "Dropdown CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: DropdownCSSCustomization } },
};

export {
  Default,
  TriggerStyles,
  TriggerSizes,
  TriggerWithCustomIcon,
  WithPrefixAndSuffix,
  MultiDropdownWithClickTrigger,
  MultiDropdownWithHoverTrigger,
  ControlledDropdown,
  CustomTarget,
  CustomDropdown,
  EventBubblingAndCapturing,
  DropdownWithTooltipForMenuItem,
  CSSCustomization,
};

export default metadata;
