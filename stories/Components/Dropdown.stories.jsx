import React, { useState } from "react";

import { Settings, Delete, Search } from "neetoicons";

import { Button, Dropdown, Tag, Input, Typography } from "components";

import { EVENT_BUBBLING_CAPTURING } from "./constants";

import { icons } from "../constants";

import DropdownCSSCustomization from "!raw-loader!./DropdownStoriesDocs/DropdownCSSCustomization.mdx";
import DropdownDocs from "!raw-loader!./DropdownStoriesDocs/DropdownDocs.mdx";

const DEPRECATED_PROPS = {
  ulProps: { control: false, table: { type: { summary: null } } },
};

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
    docs: { description: { component: DropdownDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A6",
    },
  },
  argTypes: {
    icon: { options: Object.keys(icons), mapping: icons },
    onClose: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
    ...DEPRECATED_PROPS,
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
      <Dropdown {...args} isMultiLevel label="Dropdown">
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
      <Dropdown {...args} isMultiLevel label="Dropdown">
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
