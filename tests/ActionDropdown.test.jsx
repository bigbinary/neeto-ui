import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ActionDropdown } from "components";

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

  it("should call onClick on button click", async () => {
    const onClick = jest.fn();
    render(
      <ActionDropdown label="ActionDropdown" onClick={onClick}>
        <li>Option 1</li>
        <li>Option 2</li>
      </ActionDropdown>
    );
    const button = screen.getByTestId("action-dropdown-btn");
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick on button click when disabled", async () => {
    const onClick = jest.fn();
    render(
      <ActionDropdown disabled label="ActionDropdown">
        <li>Option 1</li>
        <li>Option 2</li>
      </ActionDropdown>
    );
    await userEvent.click(screen.getByText("ActionDropdown"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should show options on clicking dropdown", async () => {
    render(
      <ActionDropdown
        label="ActionDropdown"
        dropdownProps={{
          buttonProps: {
            "data-testid": "action-dropdown-dropdown",
          },
        }}
      >
        <li>Option 1</li>
        <li>Option 2</li>
      </ActionDropdown>
    );
    const dropdown = screen.getByTestId("action-dropdown-dropdown");
    await userEvent.click(dropdown);
    expect(await screen.findByText("Option 1")).toBeInTheDocument();
    expect(await screen.findByText("Option 2")).toBeInTheDocument();
  });
});
