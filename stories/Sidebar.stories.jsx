import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Notification } from "@bigbinary/neeto-icons";

import Sidebar from "../lib/components/layouts/Sidebar";
import AppSwitcher from "../lib/components/layouts/AppSwitcher";
import {
  NAV_LINKS,
  COMPONENT_MAPPING,
  FOOTER_LINKS,
} from "../example/src/constants";

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: '`import { Sidebar } from "@bigbinary/neetoui/v2/layouts";`',
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
          <Switch>
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
          </Switch>
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
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    dropdownProps: [
      {
        label: "Edit",
        onClick: () => {},
      },
      {
        label: "Logout",
        onClick: () => {},
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
    dropdownProps: [
      {
        label: "Edit",
        onClick: () => {},
      },
      {
        label: "Logout",
        onClick: () => {},
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
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    dropdownProps: [
      {
        label: "Edit",
        onClick: () => {},
      },
      {
        label: "Logout",
        onClick: () => {},
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
    dropdownProps: [
      {
        label: "Edit",
        onClick: () => {},
      },
      {
        label: "Logout",
        onClick: () => {},
      },
    ],
  },
  showAppSwitcher: true,
  appName: "neetoUI",
};

export const UncontrolledSidebar = ({ onCollapse, ...args }) => (
  <Router>
    <Sidebar {...args} />
  </Router>
);

UncontrolledSidebar.storyName = "Uncontrolled Sidebar";
UncontrolledSidebar.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  navLinks: NAV_LINKS,
  profileInfo: {
    name: "Kieran Miller",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    dropdownProps: [
      {
        label: "Edit",
        onClick: () => {},
      },
      {
        label: "Logout",
        onClick: () => {},
      },
    ],
  },
  showChangelog: true,
  changelogProps: {
    icon: Notification,
    onClick: () => alert("Clicked on what's new"),
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
    dropdownProps: [
      {
        label: "Edit",
        onClick: () => {},
      },
      {
        label: "Logout",
        onClick: () => {},
      },
    ],
  },
  footerLinks: FOOTER_LINKS,
  showChangelog: true,
  showAppSwitcher: true,
  appName: "neetoUI",
};
