import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Switch } from "components";

describe("Switch", () => {
  it("should render without error", () => {
    const { getByRole } = render(<Switch />);
    const switchButton = getByRole("checkbox");
    expect(switchButton).toBeInTheDocument();
  });

  it("should be unchecked by default", () => {
    const { getByRole } = render(<Switch />);
    const switchButton = getByRole("checkbox");
    expect(switchButton).not.toBeChecked();
  });

  it("should be checked on clicking the checkbox", async () => {
    const { getByRole } = render(<Switch />);
    const switchButton = getByRole("checkbox");
    await userEvent.click(switchButton);
    expect(switchButton).toBeChecked();
  });

  it("should render label", () => {
    const { getByText } = render(<Switch label="Switch" />);
    const label = getByText("Switch");
    expect(label).toBeInTheDocument();
  });

  it("should render asterisk when required is set to true", () => {
    const { getByText } = render(<Switch required label="Switch" />);
    const asterisk = getByText("*");
    expect(asterisk).toBeInTheDocument();
  });

  it("should display error message", () => {
    const { getByText } = render(<Switch error="Error message" />);
    const errorMessage = getByText("Error message");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should be disabled if disabled is true", () => {
    const { getByRole } = render(<Switch disabled />);
    const switchButton = getByRole("checkbox");
    expect(switchButton).toBeDisabled();
  });

  it("should render check icon icon when checked is true", () => {
    const { getByTestId } = render(<Switch checked />);
    const checkIcon = getByTestId("check-icon");
    expect(checkIcon).toBeInTheDocument();
  });

  it("should render close icon icon when checked is false", () => {
    const { getByTestId } = render(<Switch checked={false} />);
    const closeIcon = getByTestId("close-icon");
    expect(closeIcon).toBeInTheDocument();
  });
});
