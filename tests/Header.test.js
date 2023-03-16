import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header } from "components/layouts";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("should render without error", () => {
    render(<Header title="Header" />);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("should render with a search input", () => {
    render(<Header title="Header" searchProps={{ placeholder: "Search" }} />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("should call onChange when user types into search input", () => {
    const onChange = jest.fn();
    render(
      <Header
        title="Header"
        searchProps={{ placeholder: "Search", onChange }}
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
        <Header title="Header" actionBlock={<p>Action Block Text</p>} />
      </BrowserRouter>
    );
    expect(screen.getByText("Action Block Text")).toBeInTheDocument();
  });

  it("should render with a menu bar toggle", () => {
    render(
      <BrowserRouter>
        <Header title="Header" menuBarToggle={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call menuBarToggle when menu bar toggle is clicked", () => {
    const menuBarToggle = jest.fn();
    render(
      <BrowserRouter>
        <Header title="Header" menuBarToggle={menuBarToggle} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole("button"));
    expect(menuBarToggle).toHaveBeenCalled();
  });
});
