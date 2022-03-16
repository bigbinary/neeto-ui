import React from "react";
import { Switch } from "../lib/components";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  it("should be checked on clicking the checkbox", () => {
    const { getByRole } = render(<Switch />);
    const switchButton = getByRole("checkbox");
    userEvent.click(switchButton);
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
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should be disabled if disabled is true", () => {
    const { getByRole } = render(<Switch disabled />);
    expect(getByRole("checkbox")).toBeDisabled();
  });
});

