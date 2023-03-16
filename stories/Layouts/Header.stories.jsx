import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "components/layouts/Header";
import Button from "components/Button";

export default {
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

const Template = (args) => (
  <Router>
    <Header {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  title: "Layouts",
  actionBlock: <Button label="Primary action" />,
};

export const WithSearchInput = Template.bind({});
WithSearchInput.storyName = "With search input";
WithSearchInput.args = {
  title: "Layouts",
  searchProps: {
    value: "",
    onChange: () => {},
  },
  actionBlock: <Button label="Primary action" />,
};

export const WithMenuBarToggle = Template.bind({});
WithMenuBarToggle.storyName = "With MenuBar toggle";
WithMenuBarToggle.args = {
  title: "Layouts",
  menuBarToggle: () => alert("clicked"),
  actionBlock: <Button label="Primary action" />,
};

export const WithBreadcrumbs = Template.bind({});
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
