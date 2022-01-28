import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch as SwitchComponent,
} from "react-router-dom";
import {
  Settings,
  Notification,
  Help,
  LeftArrow,
} from "@bigbinary/neeto-icons";

import Label from "../../lib/components/Label";
import Switch from "../../lib/components/Switch";
import Sidebar from "../../lib/components/layouts/Sidebar";
import AppSwitcher from "../../lib/components/layouts/AppSwitcher";
import {
  NAV_LINKS,
  COMPONENT_MAPPING,
  FOOTER_LINKS,
} from "../../example/src/constants";

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: '`import { Sidebar } from "@bigbinary/neetoui/layouts";`',
      },
    },
  },
};

const Template = (args) => {
  return (
    <Router>
      <div className="flex flex-row items-start justify-start">
        <Sidebar {...args} />
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          <SwitchComponent>
            {NAV_LINKS &&
              NAV_LINKS.map(({ label, to }, index) => {
                return (
                  <Route
                    key={index}
                    path={to}
                    component={COMPONENT_MAPPING[label]}
                  />
                );
              })}
          </SwitchComponent>
        </div>
      </div>
    </Router>
  );
};

export const SidebarCollapsed = Template.bind({});
SidebarCollapsed.storyName = "Collapsed Sidebar";
SidebarCollapsed.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  navLinks: NAV_LINKS,
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
      {
        label: "Help",
        onClick: () => {},
        icon: Help,
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
  showAppSwitcher: true,
  isCollapsed: true,
  appName: "neetoUI",
};

export const SidebarExpanded = Template.bind({});
SidebarExpanded.storyName = "Expanded Sidebar";
SidebarExpanded.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  isCollapsed: false,
  navLinks: NAV_LINKS,
  profileInfo: {
    name: "Kieran Miller",
    email: "kieran.miller@email.com",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    topLinks: [
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

export const SidebarWithAppSwitcher = (args) => {
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(false);

  return (
    <Router>
      <Sidebar
        {...args}
        onAppSwitcherToggle={() => setIsAppSwitcherOpen((isOpen) => !isOpen)}
        isCollapsed={true}
      />
      <AppSwitcher
        isOpen={isAppSwitcherOpen}
        isSidebarOpen={!true}
        onClose={() => setIsAppSwitcherOpen(false)}
      />
    </Router>
  );
};

SidebarWithAppSwitcher.storyName = "Sidebar with AppSwitcher";
SidebarWithAppSwitcher.args = {
  isCollapsed: true,
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  navLinks: NAV_LINKS,
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

export const SidebarWithFooterLinks = ({ ...args }) => (
  <Router>
    <Sidebar {...args} />
  </Router>
);
SidebarWithFooterLinks.storyName = "Sidebar with Footer links";
SidebarWithFooterLinks.args = {
  isCollapsed: true,
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  navLinks: NAV_LINKS.slice(0, 3),
  profileInfo: {
    name: "Kieran Miller",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    topLinks: [
      {
        label: "Profile",
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
  footerLinks: FOOTER_LINKS,
  showAppSwitcher: true,
  appName: "neetoUI",
};

export const ProfileSectionWithChangelogAndHelp = ({ ...args }) => (
  <Router>
    <Sidebar {...args} />
  </Router>
);

ProfileSectionWithChangelogAndHelp.storyName =
  "Profile Section with Changelog and Help";
ProfileSectionWithChangelogAndHelp.args = {
  isCollapsed: true,
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  navLinks: NAV_LINKS,
  profileInfo: {
    name: "Kieran Miller",
    email: "kieran.miller@email.com",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    changelogProps: {
      icon: Notification,
      id: "neetochangelog-trigger",
      label: "What's New",
      onClick: () => alert("Clicked on What's new"),
    },
    helpProps: {
      onClick: () => alert("Clicked on Help"),
    },
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
};

export const ProfileSectionWithCustomContent = Template.bind({});
ProfileSectionWithCustomContent.storyName =
  "Profile Section With Custom Content";
ProfileSectionWithCustomContent.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  navLinks: NAV_LINKS,
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
      {
        label: "Help",
        onClick: () => {},
        icon: Help,
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
  showAppSwitcher: true,
  isCollapsed: true,
  appName: "neetoUI",
};
