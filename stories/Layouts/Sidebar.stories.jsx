import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch as SwitchComponent,
} from "react-router-dom";
import {
  Settings,
  LeftArrow,
  Keyboard,
  Book,
  Gift,
  ChatEmpty
} from "@bigbinary/neeto-icons";

import Label from "../../lib/components/Label";
import Switch from "../../lib/components/Switch";
import Sidebar from "../../lib/components/layouts/Sidebar";
import AppSwitcher from "../../lib/components/layouts/AppSwitcher";

import { STORYBOOK_NAV_LINKS } from "../constants";

const DEPRECATED_PROPS = {
  footerLinks: {
    control: false,
    table: { type: { summary: null } },
  },
  isCollapsed: {
    table: { type: { summary: null } },
    control: false,
  },
};

export default {
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

const SidebarContent = ({ label }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {label}
    </div>
  );
};

const Template = (args) => {
  return (
    <Router>
      <div className="flex flex-row items-start justify-start">
        <Sidebar {...args} />
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          <SwitchComponent>
            {STORYBOOK_NAV_LINKS &&
              STORYBOOK_NAV_LINKS.map(({ label, to }, index) => {
                return (
                  <Route
                    key={index}
                    path={to}
                    component={() => <SidebarContent label={label} />}
                  />
                );
              })}
          </SwitchComponent>
        </div>
      </div>
    </Router>
  );
};

export const Default = Template.bind({});
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
      <div className="flex items-center justify-center gap-6 py-4 border-t neeto-ui-border-gray-300">
        <Label>Away</Label>
        <Switch checked />
        <Label>Active</Label>
      </div>
    ),
    topLinks: [
      {
        label: "Profile",
        onClick: () => {},
        icon: Settings,
      },
    ],
    bottomLinks: [
      {
        label: "Logout",
        onClick: () => {},
        icon: LeftArrow,
      },
    ],
  },
  appName: "neetoUI",
};

export const SidebarWithAppSwitcher = (args) => {
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(false);

  return (
    <Router>
      <Sidebar
        {...args}
        onAppSwitcherToggle={() => setIsAppSwitcherOpen((isOpen) => !isOpen)}
      />
      <AppSwitcher
        neetoApps={[]}
        activeApp="Chat"
        isOpen={isAppSwitcherOpen}
        onClose={() => setIsAppSwitcherOpen(false)}
      />
    </Router>
  );
};
SidebarWithAppSwitcher.storyName = "Sidebar with AppSwitcher";
SidebarWithAppSwitcher.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.onrender.com",
  },
  navLinks: STORYBOOK_NAV_LINKS,
  profileInfo: {
    name: "Kieran Miller",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    bottomLinks: [
      {
        label: "Edit",
        onClick: () => {},
        icon: Settings,
      },
      {
        label: "Logout",
        onClick: () => {},
        icon: LeftArrow,
      },
    ],
  },
  showAppSwitcher: true,
  appName: "neetoUI",
};

export const HelpSectionWithChangelog = ({ ...args }) => (
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
    topLinks: [
      {
        label: "Profile",
        onClick: () => {},
        icon: Settings,
      },
    ],
    bottomLinks: [
      {
        label: "Logout",
        onClick: () => {},
        icon: LeftArrow,
      },
    ],
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
    liveChatProps: {
      label: "Chat with us",
      onClick: () => {},
      icon: ChatEmpty,
    },
    changelogProps: { label: "What's new?", onClick: () => {}, icon: Gift },
  },
};

export const ProfileSectionWithCustomContent = Template.bind({});
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
      <div className="flex items-center justify-center gap-6 py-4 border-t neeto-ui-border-gray-300">
        <Label>Away</Label>
        <Switch checked />
        <Label>Active</Label>
      </div>
    ),
    topLinks: [
      {
        label: "Profile",
        onClick: () => {},
        icon: Settings,
      },
    ],
    bottomLinks: [
      {
        label: "Logout",
        onClick: () => {},
        icon: LeftArrow,
      },
    ],
  },
  appName: "neetoUI",
};
