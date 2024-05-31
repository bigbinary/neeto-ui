import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Label from "components/Label";

describe("Label", () => {
  it("should render without error", () => {
    const { getByText } = render(<Label>Content</Label>);
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("should show * when required prop is provided", () => {
    const { getByText } = render(
      <Label required>
        <p>Content</p>
      </Label>
    );
    expect(getByText("Content")).toBeInTheDocument();
    expect(getByText("*")).toBeInTheDocument();
  });

  it("should show info icon by default when helpIconProps is provided", () => {
    const { getByTestId } = render(
      <Label helpIconProps={{ "data-testid": "icon" }}>
        <p>Content</p>
      </Label>
    );
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  it("should show tooltip when provided in helpIconProps", async () => {
    const { getByText, getByTestId } = render(
      <Label
        helpIconProps={{
          tooltipProps: { content: "Tooltip" },
          "data-testid": "icon",
        }}
      >
        <p>Content</p>
      </Label>
    );
    await userEvent.hover(getByTestId("icon"));
    expect(getByText("Tooltip")).toBeInTheDocument();
  });

  it("should show popover when provided in helpIconProps", async () => {
    const { getByText, getByTestId } = render(
      <Label
        helpIconProps={{
          popoverProps: { description: "Popover" },
          "data-testid": "icon",
        }}
      >
        <p>Content</p>
      </Label>
    );
    await userEvent.hover(getByTestId("icon"));
    expect(getByText("Popover")).toBeInTheDocument();
  });

  it("should trigger onClick when provided in helpIconProps", async () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Label helpIconProps={{ onClick, "data-testid": "icon" }}>
        <p>Content</p>
      </Label>
    );
    await userEvent.click(getByTestId("icon"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
