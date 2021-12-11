import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../../lib/components/layouts/Header";
import Button from "../../lib/components/Button";

export default {
  title: "Layouts/Header",
  component: Header,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Header } from "@bigbinary/neetoui/v2/layouts";`',
      },
    },
  },
};

const Template = (args) => (
  <Router>
    <Header {...args} />
  </Router>
);

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  title: "Layouts",
  actionBlock: <Button size="large" label="Primary Action" />,
};

export const WithSearchInput = Template.bind({});
WithSearchInput.args = {
  title: "Layouts",
  searchProps: {
    value: "",
    onChange: () => {},
  },
  actionBlock: <Button size="large" label="Primary Action" />,
};

export const WithMenuBarToggle = Template.bind({});
WithMenuBarToggle.args = {
  title: "Layouts",
  menuBarToggle: () => alert("clicked"),
  actionBlock: <Button label="Primary Action" />,
};

export const WithBreadcrumbs = Template.bind({});
WithBreadcrumbs.args = {
  title: "Layouts",
  menuBarToggle: () => alert("clicked"),
  actionBlock: <Button label="Primary Action" />,
  breadcrumbs: [{ text: "Home", link: "/" }],
};
