import React, { useEffect, useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import AppSwitcher from "components/layouts/AppSwitcher";
import Sidebar from "components/layouts/Sidebar";

import { STORYBOOK_NAV_LINKS } from "../constants";

const neetoApps = [
  { name: "KB", description: "Knowledge Base to find answers" },
  { name: "Desk", description: "Customer support & ticketing" },
  { name: "Planner", description: "Manage projects and todos" },
  { name: "Testify", description: "Manage manual & automated test cases" },
  { name: "Chat", description: "Live chat & instant messaging" },
  { name: "Form", description: "Build forms and collect data effortlessly" },
  { name: "Changelog", description: "Inform customers of new updates" },
  {
    name: "Invisible",
    description: "Watch how users interact with your products",
  },
  { name: "Quiz", description: "Build quizzes" },
  { name: "Replay", description: "Watch customer activities" },
  { name: "Wireframe", description: "Build wireframes" },
  { name: "Site", description: "Build websites" },
];

const metadata = {
  title: "Layouts/AppSwitcher",
  component: AppSwitcher,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          '`import { AppSwitcher } from "@bigbinary/neetoui/layouts";`',
      },
      // Opt-out of inline rendering
      inlineStories: false,
      iframeHeight: "100vh",
    },
  },
  argTypes: {
    onClose: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
  },
};

const Default = ({ isOpen, ...args }) => {
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(isOpen);

  useEffect(() => {
    setIsAppSwitcherOpen(isOpen);
  }, [isOpen]);

  return (
    <Router>
      <Sidebar
        showAppSwitcher
        appName="neetoUI"
        navLinks={STORYBOOK_NAV_LINKS.slice(3)}
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
        onAppSwitcherToggle={() => setIsAppSwitcherOpen(open => !open)}
      />
      <AppSwitcher
        {...args}
        isOpen={isAppSwitcherOpen}
        onClose={() => setIsAppSwitcherOpen(false)}
      />
    </Router>
  );
};

Default.args = {
  isOpen: true,
  neetoApps,
  activeApp: "Chat",
};

const AppSwitcherWithRecentApps = ({ isOpen, ...args }) => {
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(isOpen);

  useEffect(() => {
    setIsAppSwitcherOpen(isOpen);
  }, [isOpen]);

  return (
    <Router>
      <Sidebar
        showAppSwitcher
        appName="neetoUI"
        navLinks={STORYBOOK_NAV_LINKS.slice(3)}
        profileInfo={{
          name: "John Doe",
          email: "john@doe.com",
          topLinks: [{ label: "Logout" }, { label: "Settings" }],
        }}
        onAppSwitcherToggle={() => setIsAppSwitcherOpen(isOpen => !isOpen)}
      />
      <AppSwitcher
        {...args}
        isOpen={isAppSwitcherOpen}
        onClose={() => setIsAppSwitcherOpen(false)}
      />
    </Router>
  );
};
AppSwitcherWithRecentApps.storyName = "AppSwitcher with recent apps";
AppSwitcherWithRecentApps.args = {
  isOpen: true,
  recentApps: ["Quiz", "Form"],
  activeApp: "Chat",
  neetoApps,
};

export { Default, AppSwitcherWithRecentApps };

export default metadata;
