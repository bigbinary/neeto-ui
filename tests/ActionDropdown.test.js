import React from "react";
import { ActionDropdown } from "../lib/components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ActionDropdown", () => {
  it("should render without error", () => {
    render(
      <ActionDropdown label="ActionDropdown">
        <li>Option 1</li>
        <li>Option 2</li>
      </ActionDropdown>
    );
    expect(screen.getByText("ActionDropdown")).toBeInTheDocument();
  });

  it("should call onClick on button click", () => {
    const onClick = jest.fn();
    render(
      <ActionDropdown label="ActionDropdown" onClick={onClick}>
        <li>Option 1</li>
        <li>Option 2</li>
      </ActionDropdown>
    );
    const button = screen.getByTestId("action-dropdown-btn");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick on button click when disabled", () => {
    const onClick = jest.fn();
    render(
      <ActionDropdown label="ActionDropdown" disabled>
        <li>Option 1</li>
        <li>Option 2</li>
      </ActionDropdown>
    );
    userEvent.click(screen.getByText("ActionDropdown"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should show options on clicking dropdown", async () => {
    render(
      <ActionDropdown
        dropdownProps={{
          buttonProps: {
            "data-testid": "action-dropdown-dropdown",
          },
        }}
        label="ActionDropdown"
      >
        <li>Option 1</li>
        <li>Option 2</li>
      </ActionDropdown>
    );
    const dropdown = screen.getByTestId("action-dropdown-dropdown");
    userEvent.click(dropdown);
    expect(await screen.findByText("Option 1")).toBeInTheDocument();
    expect(await screen.findByText("Option 2")).toBeInTheDocument();
  });
});
