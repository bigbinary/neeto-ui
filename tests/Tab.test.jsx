import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Tab } from "components";

describe("Tab", () => {
  it("should render without error", () => {
    render(
      <Tab>
        <Tab.Item>Tab 1</Tab.Item>
        <Tab.Item>Tab 2</Tab.Item>
      </Tab>
    );
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("should render a link when activeClassName is provided", () => {
    render(
      <BrowserRouter>
        <Tab>
          <Tab.Item activeClassName="active" to="/route">
            Tab 1
          </Tab.Item>
          <Tab.Item>Tab 2</Tab.Item>
        </Tab>
      </BrowserRouter>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/route");
  });

  it("should render icon when provided", () => {
    render(
      <Tab>
        <Tab.Item icon={() => <svg data-testid="svg-icon" />}>Tab 1</Tab.Item>
      </Tab>
    );
    expect(screen.getByTestId("svg-icon")).toBeInTheDocument();
  });

  it("should render icon when icon className is provided", () => {
    render(
      <Tab>
        <Tab.Item icon="icon">Tab 1</Tab.Item>
      </Tab>
    );
    expect(screen.getByTestId("tab-icon")).toBeInTheDocument();
  });

  it("should call onClick when clicked on Tab", async () => {
    const onClick = jest.fn();
    render(
      <Tab>
        <Tab.Item icon="icon" onClick={onClick}>
          Tab 1
        </Tab.Item>
      </Tab>
    );
    await userEvent.click(screen.getByText("Tab 1"));
    expect(onClick).toHaveBeenCalled();
  });

  it("should make the tab active when active prop is true", () => {
    render(
      <Tab>
        <Tab.Item active>Tab 1</Tab.Item>
        <Tab.Item>Tab 2</Tab.Item>
      </Tab>
    );
    expect(screen.getByText("Tab 1")).toHaveClass("active");
  });
});
