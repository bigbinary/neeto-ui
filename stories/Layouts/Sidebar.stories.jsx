import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch as SwitchComponent,
} from "react-router-dom";
import { Settings, Help, LeftArrow } from "@bigbinary/neeto-icons";

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
  let ROUTER_LINKS = [];
  NAV_LINKS.map((navLink) => {
    if (navLink.items) {
      navLink.items.map((item) => {
        ROUTER_LINKS.push(item);
      });
    } else {
      ROUTER_LINKS.push(navLink);
    }
  });
  return (
    <Router>
      <div className="flex flex-row items-start justify-start">
        <Sidebar {...args} />
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          <SwitchComponent>
            {ROUTER_LINKS &&
              ROUTER_LINKS.map(({ label, to }, index) => {
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
  navLinks: NAV_LINKS,
  profileInfo: {
    name: "Kieran Miller",
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

export const SidebarWithChangelogToggle = ({ onCollapse, ...args }) => (
  <Router>
    <Sidebar {...args} />
  </Router>
);

SidebarWithChangelogToggle.storyName = "Sidebar with Changelog toggle";
SidebarWithChangelogToggle.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  navLinks: NAV_LINKS,
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
  showChangelog: true,
};

export const SidebarWithAppSwitcher = (args) => {
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    setIsSidebarCollapsed(args.isCollapsed);
  }, [args.isCollapsed]);

  return (
    <Router>
      <Sidebar
        {...args}
        onAppSwitcherToggle={() => setIsAppSwitcherOpen((isOpen) => !isOpen)}
        isCollapsed={isSidebarCollapsed}
        onCollapse={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
      />
      <AppSwitcher
        isOpen={isAppSwitcherOpen}
        isSidebarOpen={!isSidebarCollapsed}
        onClose={() => setIsAppSwitcherOpen(false)}
        v2
      />
    </Router>
  );
};

SidebarWithAppSwitcher.storyName = "Controlled Sidebar with AppSwitcher";
SidebarWithAppSwitcher.args = {
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

export const SidebarWithFooterLinks = ({ onCollapse, ...args }) => (
  <Router>
    <Sidebar {...args} />
  </Router>
);
SidebarWithFooterLinks.storyName = "Sidebar with Footer links";
SidebarWithFooterLinks.args = {
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
  showChangelog: true,
  showAppSwitcher: true,
  appName: "neetoUI",
};

export const CollapsibleSidebar = ({ onCollapse, ...args }) => (
  <Router>
    <Sidebar {...args} />
  </Router>
);
CollapsibleSidebar.storyName = "Collapsible Sidebar";
CollapsibleSidebar.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  collapsible: true,
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
