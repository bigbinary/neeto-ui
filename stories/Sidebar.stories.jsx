import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../lib/components/layouts/Sidebar";
import { NAV_LINKS, COMPONENT_MAPPING } from "../example/src/constants";

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "padded",
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

export const Sidenav = Template.bind({});
Sidenav.args = {
  organizationInfo: {
    name: "neetoUI",
    subdomain: "neetoui.netlify.app",
  },
  navLinks: NAV_LINKS,
  profileInfo: {
    name: "Kieran Miller",
    email: "kieranmiller@gmail.com",
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
};
