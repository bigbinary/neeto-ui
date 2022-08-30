import React from "react";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Sidebar } from "../lib/components/layouts";
import { STORYBOOK_NAV_LINKS } from "../example/src/constants";
import { Settings, Help, LeftArrow } from "@bigbinary/neeto-icons";
import userEvent from "@testing-library/user-event";

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
    topLinks: [
      {
        label: "Profile",
        onClick: () => {},
        icon: Settings,
      },
      {
        label: "Help",
        onClick: () => {},
        icon: Help,
      },
    ],
    bottomLinks: [
      {
        label: "Logout",
        onClick: () => {},
        icon: LeftArrow,
      },
    ],
  },
  appName: "neetoUI",
};

const {
  organizationInfo: { name: orgName, subdomain },
  profileInfo: { email, imageUrl, name: userName, bottomLinks },
  navLinks,
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

  it("should render a working AppSwitcher button", () => {
    const onAppSwitcherToggle = jest.fn();
    const { container } = render(
      <Router>
        <Sidebar
          {...sidebarProps}
          showAppSwitcher
          onAppSwitcherToggle={onAppSwitcherToggle}
        />
      </Router>
    );

    const appSwitcherButton = container.querySelector(
      "button[data-cy='app-switcher-button']"
    );
    expect(appSwitcherButton).toBeInTheDocument();

    userEvent.click(appSwitcherButton);
    expect(onAppSwitcherToggle).toHaveBeenCalled();
  });
});
