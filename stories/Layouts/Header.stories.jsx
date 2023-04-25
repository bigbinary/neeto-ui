import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Button from "components/Button";
import Header from "components/layouts/Header";

const metadata = {
  title: "Layouts/Header",
  component: Header,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Header } from "@bigbinary/neetoui/layouts";`',
      },
    },
  },
};

const Template = args => (
  <Router>
    <Header {...args} />
  </Router>
);

const Default = Template.bind({});
Default.args = {
  title: "Layouts",
  actionBlock: <Button label="Primary action" />,
};

const WithSearchInput = Template.bind({});
WithSearchInput.storyName = "With search input";
WithSearchInput.args = {
  title: "Layouts",
  searchProps: {
    value: "",
    onChange: () => {},
  },
  actionBlock: <Button label="Primary action" />,
};

const WithMenuBarToggle = Template.bind({});
WithMenuBarToggle.storyName = "With MenuBar toggle";
WithMenuBarToggle.args = {
  title: "Layouts",
  menuBarToggle: () => alert("clicked"),
  actionBlock: <Button label="Primary action" />,
};

const WithBreadcrumbs = Template.bind({});
WithBreadcrumbs.args = {
  title: "Layouts",
  menuBarToggle: () => alert("clicked"),
  actionBlock: <Button label="Primary action" />,
  breadcrumbs: [
    { text: "Home", link: "/" },
    { text: "Settings", link: "/" },
  ],
};
WithBreadcrumbs.storyName = "With breadcrumbs";

export { Default, WithSearchInput, WithMenuBarToggle, WithBreadcrumbs };

export default metadata;
