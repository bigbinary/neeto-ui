import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Sidebar } from "../../lib/v2/layouts";
import { NAV_LINKS, COMPONENT_MAPPING } from "./constants";
import "./index.scss";

const Playground = () => {
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
        <Sidebar
          organizationInfo={{
            name: "neetoUI",
            subdomain: "neetoui.netlify.app",
          }}
          navLinks={NAV_LINKS}
          profileInfo={{
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
          }}
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
    </Router>
  );
};

export default Playground;
