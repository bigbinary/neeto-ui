/* eslint-disable no-undef */
import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Header } from "components/layouts";

describe("Header", () => {
  it("should render without error", () => {
    render(<Header title="Header" />);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("should render with a search input", () => {
    render(<Header searchProps={{ placeholder: "Search" }} title="Header" />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("should call onChange when user types into search input", () => {
    const onChange = jest.fn();
    render(
      <Header
        searchProps={{ placeholder: "Search", onChange }}
        title="Header"
      />
    );
    userEvent.type(screen.getByPlaceholderText("Search"), "test");
    expect(onChange).toHaveBeenCalled();
  });

  it("should render with a breadcrumb", () => {
    render(
      <BrowserRouter>
        <Header
          title="Header"
          breadcrumbs={[
            { text: "Home", link: "/" },
            { text: "About", link: "/about" },
          ]}
        />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about"
    );
  });

  it("should render with an action block", () => {
    render(
      <BrowserRouter>
        <Header actionBlock={<p>Action Block Text</p>} title="Header" />
      </BrowserRouter>
    );
    expect(screen.getByText("Action Block Text")).toBeInTheDocument();
  });

  it("should render with a menu bar toggle", () => {
    render(
      <BrowserRouter>
        <Header menuBarToggle={() => {}} title="Header" />
      </BrowserRouter>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call menuBarToggle when menu bar toggle is clicked", () => {
    const menuBarToggle = jest.fn();
    render(
      <BrowserRouter>
        <Header menuBarToggle={menuBarToggle} title="Header" />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole("button"));
    expect(menuBarToggle).toHaveBeenCalled();
  });
});
