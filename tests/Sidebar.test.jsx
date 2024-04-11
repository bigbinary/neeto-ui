import React from "react";

import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Settings,
  LeftArrow,
  Book,
  Gift,
  ChatEmpty,
  Keyboard,
} from "neetoicons";
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "layouts/Sidebar";

import { STORYBOOK_NAV_LINKS } from "../stories/constants";

const sidebarProps = {
  organizationInfo: {
    name: "BigBinary",
    subdomain: "neetoui.onrender.com",
  },
  navLinks: STORYBOOK_NAV_LINKS.slice(0, 3),
  profileInfo: {
    name: "Kieran Miller",
    email: "kieran.miller@email.com",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    topLinks: [{ label: "Profile", onClick: () => {}, icon: Settings }],
    bottomLinks: [{ label: "Logout", onClick: () => {}, icon: LeftArrow }],
  },
  helpLinks: {
    documentationProps: {
      label: "Documentation",
      onClick: () => {},
      icon: Book,
    },
    keyboardShortcutProps: {
      label: "Keyboard shortcuts",
      onClick: () => {},
      icon: Keyboard,
    },
    liveChatProps: {
      label: "Chat with us",
      onClick: () => {},
      icon: ChatEmpty,
    },
    changelogProps: {
      label: "What's new?",
      onClick: () => {},
      icon: Gift,
    },
  },
  appName: "neetoUI",
};

const {
  profileInfo: { email, imageUrl, name: userName, bottomLinks },
  navLinks,
  helpLinks: {
    documentationProps,
    keyboardShortcutProps,
    liveChatProps,
    changelogProps,
  },
} = sidebarProps;

describe("Sidebar", () => {
  it("should render without error", () => {
    const { getByTestId } = render(
      <Router>
        <Sidebar {...sidebarProps} />
      </Router>
    );
    expect(getByTestId("sidebar")).toBeInTheDocument();
  });

  it("should display all navlink elements correctly", () => {
    const { getByTestId } = render(
      <Router>
        <Sidebar {...sidebarProps} />
      </Router>
    );

    navLinks.forEach(({ label, to }) => {
      const sideNavItem = getByTestId(label);
      const sideNavLink = sideNavItem.parentElement;
      expect(sideNavItem).toBeInTheDocument();
      expect(sideNavLink["href"].endsWith(to)).toBe(true);
    });
  });

  it("should display profile information correctly", async () => {
    const { getByText, container, queryByText, findByText } = render(
      <Router>
        <Sidebar {...sidebarProps} />
      </Router>
    );

    const profileImage = container.querySelector(`img[src="${imageUrl}"]`);
    expect(profileImage).toBeInTheDocument();

    expect(queryByText(email)).not.toBeInTheDocument();

    userEvent.hover(profileImage);
    await findByText(email);
    expect(getByText(userName)).toBeInTheDocument();
    expect(getByText(bottomLinks[0].label)).toBeInTheDocument();
  });

  it("should apply featured toolTipStyle correctly", async () => {
    const { container, findByText } = render(
      <Router>
        <Sidebar {...sidebarProps} tooltipStyle="featured" />
      </Router>
    );
    const { to, label, description } = navLinks[0];
    const navLink = container.querySelector(`a[href="${to}"]`);
    expect(navLink).toBeInTheDocument();

    userEvent.hover(navLink);
    expect(await findByText(label)).toBeInTheDocument();
    expect(await findByText(description)).toBeInTheDocument();
  });

  it("should apply default toolTipStyle correctly", async () => {
    const { queryByText, findByText, container } = render(
      <Router>
        <Sidebar {...sidebarProps} tooltipStyle="default" />
      </Router>
    );

    for (const link of navLinks) {
      const { to, label, description } = link;
      const navLink = container.querySelector(`a[href="${to}"]`);
      expect(navLink).toBeInTheDocument();

      userEvent.hover(navLink);
      expect(await findByText(label)).toBeInTheDocument();
      expect(
        await waitFor(() => queryByText(description))
      ).not.toBeInTheDocument();
    }
  });

  it("should render a working AppSwitcher button", async () => {
    const onAppSwitcherToggle = jest.fn();
    const { container } = render(
      <Router>
        <Sidebar
          {...{ ...sidebarProps, onAppSwitcherToggle }}
          showAppSwitcher
        />
      </Router>
    );

    const appSwitcherButton = container.querySelector(
      "button[data-cy='app-switcher-button']"
    );
    expect(appSwitcherButton).toBeInTheDocument();

    await userEvent.click(appSwitcherButton);
    expect(onAppSwitcherToggle).toHaveBeenCalled();
  });

  it("should display help links correctly", async () => {
    const { container, queryByText, findByText } = render(
      <Router>
        <Sidebar {...sidebarProps} />
      </Router>
    );

    const helpButton = container.querySelector("button[data-cy='help-button']");
    expect(helpButton).toBeInTheDocument();

    expect(queryByText(changelogProps.label)).not.toBeInTheDocument();

    userEvent.hover(helpButton);
    expect(await findByText(documentationProps.label)).toBeInTheDocument();
    expect(await findByText(keyboardShortcutProps.label)).toBeInTheDocument();
    expect(await findByText(liveChatProps.label)).toBeInTheDocument();
    expect(await findByText(changelogProps.label)).toBeInTheDocument();
  });
});
