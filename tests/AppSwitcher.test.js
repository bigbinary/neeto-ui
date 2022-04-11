import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { getByText, render } from "@testing-library/react";

import { AppSwitcher, Sidebar } from "../lib/components/layouts";
import { STORYBOOK_NAV_LINKS } from "../example/src/constants";

const AppSwitcherTest = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <Router>
      <Sidebar
        navLinks={STORYBOOK_NAV_LINKS.slice(3)}
        onAppSwitcherToggle={() => {}}
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
      {children}
    </Router>
  );
};

const neetoApps = ["KB", "Desk", "Planner"];

describe("AppSwitcher", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          neetoApps={neetoApps}
          activeApp="KB"
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    for (const app of neetoApps) {
      expect(getByText(app)).toBeInTheDocument();
    }
  });

  it("should not render when isOpen is false", () => {
    const { queryByText } = render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen={false}
          neetoApps={neetoApps}
          activeApp="KB"
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    for (const app of neetoApps) {
      expect(queryByText(app)).not.toBeInTheDocument();
    }
  });

  it("should render active app correctly", () => {
    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          neetoApps={neetoApps}
          activeApp="Planner"
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );
    const neetoUIClassPrefix = "neeto-ui-app-switcher-link--";
    const activeLink = document.querySelector(`.${neetoUIClassPrefix}active`);
    expect(activeLink).toBeInTheDocument();
    expect(getByText(activeLink, "Planner")).toBeInTheDocument();
  });

  it("should render different sizes correctly", () => {
    const size = "lg";
    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          neetoApps={neetoApps}
          activeApp="Planner"
          size={size}
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    const neetoUIClassPrefix = "neeto-ui-app-switcher__wrapper-size--";
    expect(
      document.querySelector(`.${neetoUIClassPrefix}${size}`)
    ).toBeInTheDocument();
  });

  it("should render className correctly", () => {
    const size = "lg";
    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          neetoApps={neetoApps}
          activeApp="Planner"
          className="test-class"
          size={size}
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    expect(document.querySelector(".test-class")).toBeInTheDocument();
  });

  it("should close when the back button is pressed", () => {
    const onClose = jest.fn();
    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          neetoApps={neetoApps}
          activeApp="Planner"
          onClose={onClose}
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    const backButton = document.querySelector(
      "button[data-cy='app-switcher-back-button']"
    );
    userEvent.click(backButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("should close on pressing escape key", () => {
    const onClose = jest.fn();
    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          closeOnEsc
          neetoApps={neetoApps}
          activeApp="Planner"
          onClose={onClose}
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalled();
  });

  it("should close on clicking outside", () => {
    const onClose = jest.fn();
    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          closeOnOutsideClick
          neetoApps={neetoApps}
          activeApp="Planner"
          onClose={onClose}
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    const appSwitcherBackdrop = document.querySelector(
      ".neeto-ui-app-switcher__backdrop"
    );
    userEvent.click(appSwitcherBackdrop);
    expect(onClose).toHaveBeenCalled();
  });

  it("should link subdomains based on environment and subdomain props", () => {
    const environment = "production";
    const appName = "neetodesk";
    const subdomain = "example";
    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          subdomain={subdomain}
          neetoApps={neetoApps}
          activeApp="Planner"
          environment={environment}
        />
      </AppSwitcherTest>
    );

    const productionLink = `https://${subdomain}.${appName}.com`;
    expect(
      document.querySelector(`a[href='${productionLink}']`)
    ).toBeInTheDocument();
  });

  it("should display recent apps correctly", () => {
    const recentApps = ["Quiz", "Runner"];

    const { getByText } = render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          neetoApps={neetoApps}
          recentApps={recentApps}
          activeApp="Planner"
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    for (const app of recentApps) {
      expect(getByText(app)).toBeInTheDocument();
    }
  });
});
