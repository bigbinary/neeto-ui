import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Tag } from "components";

describe("Tag", () => {
  it("should render without error", () => {
    const { getByText } = render(<Tag label="Tag" />);
    expect(getByText("Tag")).toBeInTheDocument();
  });

  it("should show icon when icon string is provided", () => {
    const { getByTestId } = render(<Tag icon="check" />);
    expect(getByTestId("class-icon")).toBeInTheDocument();
  });

  it("should show indicator when indicatorStatus is provided", () => {
    const { getByTestId } = render(<Tag indicatorStyle="success" />);
    expect(getByTestId("tag-indicator")).toBeInTheDocument();
  });

  it("should show close button if onClose function is provided", () => {
    const { getByTestId } = render(<Tag onClose={() => {}} />);
    expect(getByTestId("tag-close-button")).toBeInTheDocument();
  });

  it("should call onClose on button click", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Tag onClose={onClose} />);
    await userEvent.click(getByTestId("tag-close-button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not call onClose function if tag is disabled", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Tag disabled onClose={onClose} />);
    await userEvent.click(getByTestId("tag-close-button"));
    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
