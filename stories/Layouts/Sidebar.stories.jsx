import React from "react";

import { Settings, LeftArrow, Keyboard, Book, Gift } from "neetoicons";
import {
  BrowserRouter as Router,
  Route,
  Switch as SwitchComponent,
} from "react-router-dom";

import Label from "components/Label";
import Sidebar from "components/layouts/Sidebar";
import Switch from "components/Switch";

import { STORYBOOK_NAV_LINKS } from "../constants";

const DEPRECATED_PROPS = {
  footerLinks: { control: false, table: { type: { summary: null } } },
  isCollapsed: { table: { type: { summary: null } }, control: false },
};

const metadata = {
  title: "Layouts/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: '`import { Sidebar } from "@bigbinary/neetoui/layouts";`',
      },
      inlineStories: false,
      iframeHeight: "100vh",
    },
  },
  argTypes: {
    onAppSwitcherToggle: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "() => void" },
      },
    },
    ...DEPRECATED_PROPS,
  },
};

const SidebarContent = ({ label }) => (
  <div className="flex h-full w-full items-center justify-center">{label}</div>
);

const Template = args => (
  <Router>
    <div className="flex flex-row items-start justify-start">
      <Sidebar {...args} />
      <div className="relative flex h-screen flex-grow flex-col overflow-auto">
        <SwitchComponent>
          {STORYBOOK_NAV_LINKS &&
            STORYBOOK_NAV_LINKS.map(({ label, to }, index) => (
              <Route
                component={() => <SidebarContent label={label} />}
                key={index}
                path={to}
              />
            ))}
        </SwitchComponent>
      </div>
    </div>
  </Router>
);

const Default = Template.bind({});
Default.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.onrender.com",
  },
  navLinks: STORYBOOK_NAV_LINKS,
  profileInfo: {
    name: "Kieran Miller",
    email: "kieran.miller@email.com",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    customContent: (
      <div className="neeto-ui-border-gray-300 flex items-center justify-center gap-6 border-t py-4">
        <Label>Away</Label>
        <Switch checked />
        <Label>Active</Label>
      </div>
    ),
    topLinks: [{ label: "Profile", onClick: () => {}, icon: Settings }],
    bottomLinks: [{ label: "Logout", onClick: () => {}, icon: LeftArrow }],
  },
  appName: "neetoUI",
};

const HelpSectionWithChangelog = ({ ...args }) => (
  <Router>
    <Sidebar {...args} />
  </Router>
);
HelpSectionWithChangelog.storyName = "Help section with changelog";
HelpSectionWithChangelog.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.onrender.com",
  },
  navLinks: STORYBOOK_NAV_LINKS,
  profileInfo: {
    name: "Kieran Miller",
    email: "kieran.miller@email.com",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    topLinks: [{ label: "Profile", onClick: () => {}, icon: Settings }],
    bottomLinks: [{ label: "Logout", onClick: () => {}, icon: LeftArrow }],
  },
  helpLinks: {
    documentationProps: {
      label: "Documentation",
      onClick: () => {},
      icon: Book,
    },
    keyboardShortcutProps: {
      label: "Keyboard shortcuts",
      onClick: () => {},
      icon: Keyboard,
    },
    changelogProps: { label: "What's new?", onClick: () => {}, icon: Gift },
  },
};

const ProfileSectionWithCustomContent = Template.bind({});
ProfileSectionWithCustomContent.storyName =
  "Profile section with custom content";

ProfileSectionWithCustomContent.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.onrender.com",
  },
  navLinks: STORYBOOK_NAV_LINKS,
  profileInfo: {
    name: "Kieran Miller",
    email: "kieran.miller@email.com",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    customContent: (
      <div className="neeto-ui-border-gray-300 flex items-center justify-center gap-6 border-t py-4">
        <Label>Away</Label>
        <Switch checked />
        <Label>Active</Label>
      </div>
    ),
    topLinks: [{ label: "Profile", onClick: () => {}, icon: Settings }],
    bottomLinks: [{ label: "Logout", onClick: () => {}, icon: LeftArrow }],
  },
  appName: "neetoUI",
};

export { Default, HelpSectionWithChangelog, ProfileSectionWithCustomContent };

export default metadata;
