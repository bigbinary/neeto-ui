import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Notification } from "@bigbinary/neeto-icons";
import { Sidebar, AppSwitcher } from "../../lib/components/layouts";
import { NAV_LINKS, COMPONENT_MAPPING, FOOTER_LINKS } from "./constants";
import "./index.scss";

const Playground = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
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
  const [appSwitcher, toggleAppSwitcher] = useState(false);
  return (
    <Router>
      <div className="flex flex-row items-start justify-start">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onCollapse={() =>
            setIsSidebarCollapsed((isCollapsed) => !isCollapsed)
          }
          organizationInfo={{
            name: "neetoUI",
            subdomain: "neetoui.netlify.app",
          }}
          navLinks={NAV_LINKS}
          profileInfo={{
            name: "Kieran Miller",
            imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
            dropdownProps: [
              {
                label: "App Switcher",
                onClick: () => toggleAppSwitcher(!appSwitcher),
              },
              {
                label: "Logout",
                onClick: () => {},
              },
            ],
          }}
          toggleAppSwitcher={appSwitcher}
          showAppSwitcher
          onAppSwitcherToggle={() => toggleAppSwitcher((open) => !open)}
          appName="neetoUI"
          showChangelog
          changelogProps={{
            icon: Notification,
            onClick: () => alert("onChangelogToggle"),
          }}
          footerLinks={FOOTER_LINKS}
        />
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
      <AppSwitcher
        isOpen={appSwitcher}
        isSidebarOpen={!isSidebarCollapsed}
        onClose={() => toggleAppSwitcher(false)}
        v2
      />
    </Router>
  );
};

export default Playground;
