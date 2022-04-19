import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

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

  it("should display appropriate message when no apps are found", () => {
    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          neetoApps={[]}
          activeApp="KB"
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );
    expect(screen.getByText(/No apps found/i)).toBeInTheDocument();
  });

  it("should throw an error when the app name is invalid", () => {
    const WithInvalidAppName = () => (
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          neetoApps={["Neeto Planner", "KB", "Desk"]}
          activeApp="KB"
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    const consoleError = global.console.error;
    const customConsoleError = (...args) => {
      consoleError(...args);
      global.console.error = consoleError;

      const errorMessage = /Validation failed/i;
      const errors = args.some((arg) => errorMessage.test(arg));
      if (errors) {
        throw new Error(args[0]);
      }
    };
    global.console.error = customConsoleError;
    expect(() => render(<WithInvalidAppName />)).toThrow();
  });

  it("should throw error if neetoApps isn't an array", () => {
    const WithoutNeetoApps = () => (
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          neetoApps={null}
          activeApp="KB"
          environment="development"
        />
      </AppSwitcherTest>
    );

    expect(() => render(<WithoutNeetoApps />)).toThrow();
  });

  it("should throw error if activeApp is invalid", () => {
    const WithoutActiveApp = () => (
      <AppSwitcherTest>
        <AppSwitcher isOpen neetoApps={neetoApps} environment="development" />
      </AppSwitcherTest>
    );
    expect(() => render(<WithoutActiveApp />)).toThrow();

    const WithInvalidActiveApp = () => (
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          activeApp="Invalid app name with whitespace"
          neetoApps={neetoApps}
          environment="development"
        />
      </AppSwitcherTest>
    );
    expect(() => render(<WithInvalidActiveApp />)).toThrow();
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
    const activeLink = screen.getByText(/Planner/i);
    expect(activeLink.parentElement.parentElement).toHaveClass(
      `${neetoUIClassPrefix}active`
    );
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
          data-testid="neeto-app-switcher"
          size={size}
          environment={process.env.NODE_ENV}
        />
      </AppSwitcherTest>
    );

    expect(screen.getByTestId("neeto-app-switcher")).toHaveClass("test-class");
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

    const backButton = screen.getByRole("button", { name: /Back/i });
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

    const appSwitcherBackdrop = screen.getByTestId("neeto-backdrop");
    userEvent.click(appSwitcherBackdrop);
    expect(onClose).toHaveBeenCalled();
  });

  it("should link subdomains based on environment and subdomain props", () => {
    const environment = "production";
    const appName = "Desk";
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

    expect(screen.getByRole("link", { name: appName })).toBeInTheDocument();
  });

  it("should display recent apps correctly", () => {
    const recentApps = ["Quiz", "Runner"];

    render(
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
      expect(screen.getByText(app)).toBeInTheDocument();
    }
  });

  it("should have a functioning search input", () => {
    const recentApps = ["Quiz", "Runner"];

    render(
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

    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();

    userEvent.type(searchInput, neetoApps[0]);
    expect(screen.getByText("Apps")).toBeInTheDocument();
    expect(screen.getByText(neetoApps[0])).toBeInTheDocument();
    expect(screen.queryByText(neetoApps[1])).not.toBeInTheDocument();
    expect(screen.queryByText(neetoApps[2])).not.toBeInTheDocument();
  });
});
