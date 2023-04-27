import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

import { AppSwitcher, Sidebar } from "components/layouts";

import { STORYBOOK_NAV_LINKS } from "../stories/constants";

const AppSwitcherTest = ({ children }) => (
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
      onAppSwitcherToggle={() => {}}
    />
    {children}
  </Router>
);

const neetoApps = [
  { name: "KB", description: "Knowledge Base to find answers" },
  { name: "Desk", description: "Customer support & ticketing" },
  { name: "Planner", description: "Manage projects and todos" },
];

describe("AppSwitcher", () => {
  it("should render without error", () => {
    const { getByText } = render(
      <AppSwitcherTest>
        <AppSwitcher isOpen activeApp="KB" neetoApps={neetoApps} />
      </AppSwitcherTest>
    );

    for (const app of neetoApps) {
      expect(getByText(app.name)).toBeInTheDocument();
    }
  });

  it("should display appropriate message when no apps are found", () => {
    render(
      <AppSwitcherTest>
        <AppSwitcher isOpen activeApp="KB" neetoApps={[]} />
      </AppSwitcherTest>
    );
    expect(screen.getByText(/No apps found/i)).toBeInTheDocument();
  });

  it("should throw an error when the app name is invalid", () => {
    const WithInvalidAppName = () => (
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          activeApp="KB"
          neetoApps={[{ name: "Neeto Cal", description: "Schedule meetings" }]}
        />
      </AppSwitcherTest>
    );

    const consoleError = global.console.error;
    const customConsoleError = (...args) => {
      global.console.error = consoleError;
      consoleError(...args);

      const errorMessage = /Validation failed/i;
      const errors = args.some(arg => errorMessage.test(arg));
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
        <AppSwitcher isOpen activeApp="KB" neetoApps={null} />
      </AppSwitcherTest>
    );

    expect(() => render(<WithoutNeetoApps />)).toThrow();
  });

  it("should throw error if activeApp is invalid", () => {
    const WithoutActiveApp = () => (
      <AppSwitcherTest>
        <AppSwitcher isOpen neetoApps={neetoApps} />
      </AppSwitcherTest>
    );
    expect(() => render(<WithoutActiveApp />)).toThrow();

    const WithInvalidActiveApp = () => (
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          activeApp="Invalid app name with whitespace"
          neetoApps={neetoApps}
        />
      </AppSwitcherTest>
    );
    expect(() => render(<WithInvalidActiveApp />)).toThrow();
  });

  it("should not render when isOpen is false", () => {
    const { queryByText } = render(
      <AppSwitcherTest>
        <AppSwitcher activeApp="KB" isOpen={false} neetoApps={neetoApps} />
      </AppSwitcherTest>
    );

    for (const app of neetoApps) {
      expect(queryByText(app.name)).not.toBeInTheDocument();
    }
  });

  it("should render active app correctly", () => {
    render(
      <AppSwitcherTest>
        <AppSwitcher isOpen activeApp="Planner" neetoApps={neetoApps} />
      </AppSwitcherTest>
    );
    const neetoUIClassPrefix = "neeto-ui-app-switcher-link--";
    const activeLink = screen.getByText(/Planner/i);
    expect(activeLink.parentElement.parentElement).toHaveClass(
      `${neetoUIClassPrefix}active`
    );
  });

  it("should render className correctly", () => {
    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          activeApp="Planner"
          className="test-class"
          data-testid="neeto-app-switcher"
          neetoApps={neetoApps}
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
          activeApp="Planner"
          neetoApps={neetoApps}
          onClose={onClose}
        />
      </AppSwitcherTest>
    );

    const backButton = screen.getByTestId("app-switcher-back-button");
    userEvent.click(backButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("should close on pressing escape key", () => {
    const onClose = jest.fn();
    render(
      <AppSwitcherTest>
        <AppSwitcher
          closeOnEsc
          isOpen
          activeApp="Planner"
          neetoApps={neetoApps}
          onClose={onClose}
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
          closeOnOutsideClick
          isOpen
          activeApp="Planner"
          neetoApps={neetoApps}
          onClose={onClose}
        />
      </AppSwitcherTest>
    );

    const appSwitcherBackdrop = screen.getByTestId("neeto-backdrop");
    userEvent.click(appSwitcherBackdrop);
    expect(onClose).toHaveBeenCalled();
  });

  it("should display recent apps correctly", () => {
    const recentApps = ["KB", "Desk"];

    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          activeApp="Planner"
          neetoApps={neetoApps}
          recentApps={recentApps}
        />
      </AppSwitcherTest>
    );

    for (const app of recentApps) {
      expect(screen.getAllByText(app)[0]).toBeInTheDocument();
      expect(screen.getAllByText(app)[1]).toBeInTheDocument();
    }
  });

  it("should have a functioning search input", () => {
    const recentApps = ["KB", "Desk"];

    render(
      <AppSwitcherTest>
        <AppSwitcher
          isOpen
          activeApp="Planner"
          neetoApps={neetoApps}
          recentApps={recentApps}
        />
      </AppSwitcherTest>
    );

    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();

    userEvent.type(searchInput, neetoApps[0].name);
    expect(screen.getByText(neetoApps[0].name)).toBeInTheDocument();
    expect(screen.queryByText(neetoApps[1].name)).not.toBeInTheDocument();
    expect(screen.queryByText(neetoApps[2].name)).not.toBeInTheDocument();
  });
});
