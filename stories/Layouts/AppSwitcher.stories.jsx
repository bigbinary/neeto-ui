import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "../../lib/components/layouts/Sidebar";
import AppSwitcher from "../../lib/components/layouts/AppSwitcher";
import { NAV_LINKS } from "../../example/src/constants";

export default {
  title: "Layouts/AppSwitcher",
  component: AppSwitcher,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          '`import { AppSwitcher } from "@bigbinary/neetoui/layouts";`',
      },
    },
  },
};

export const AppSwitcherStory = ({ isOpen, ...args }) => {
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(isOpen);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  useEffect(() => {
    setIsAppSwitcherOpen(isOpen);
  }, [isOpen]);

  return (
    <Router>
      <Sidebar
        navLinks={NAV_LINKS.slice(3)}
        onAppSwitcherToggle={() => setIsAppSwitcherOpen((open) => !open)}
        isCollapsed={isSidebarCollapsed}
        onCollapse={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
        showAppSwitcher
        appName="neetoUI"
        profileInfo={{
          name: "John Doe",
          email: "john@doe.com",
          topLinks: [
            {
              label: "Logout",
            },
            {
              label: "Settings",
            },
          ],
        }}
      />
      <AppSwitcher
        {...args}
        isOpen={isAppSwitcherOpen}
        isSidebarOpen={!isSidebarCollapsed}
        onClose={() => setIsAppSwitcherOpen(false)}
        environment={process.env.NODE_ENV}
      />
    </Router>
  );
};

AppSwitcherStory.storyName = "AppSwitcher";
AppSwitcherStory.args = {
  isOpen: true,
};

export const AppSwitcherWithRecentApps = ({ isOpen, ...args }) => {
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(isOpen);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  useEffect(() => {
    setIsAppSwitcherOpen(isOpen);
  }, [isOpen]);

  return (
    <Router>
      <Sidebar
        navLinks={NAV_LINKS.slice(3)}
        onAppSwitcherToggle={() => setIsAppSwitcherOpen((isOpen) => !isOpen)}
        isCollapsed={isSidebarCollapsed}
        onCollapse={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
        showAppSwitcher
        appName="neetoUI"
        profileInfo={{
          name: "John Doe",
          email: "john@doe.com",
          topLinks: [
            {
              label: "Logout",
            },
            {
              label: "Settings",
            },
          ],
        }}
      />
      <AppSwitcher
        {...args}
        isOpen={isAppSwitcherOpen}
        isSidebarOpen={!isSidebarCollapsed}
        onClose={() => setIsAppSwitcherOpen(false)}
        environment={process.env.NODE_ENV}
      />
    </Router>
  );
};

AppSwitcherWithRecentApps.args = {
  isOpen: true,
  recentApps: ["Quiz", "Codify"],
  neetoApps: ["Desk", "KB", "Quiz", "Codify"],
};
