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

  it("should render a with style 'success'", () => {
    const { container } = render(<Tag label="Tag" style="success" />);
    expect(
      container.querySelector(".neeto-ui-tag--style-success")
    ).toBeInTheDocument();
  });

  it("should render with a 'large' size", () => {
    const { container } = render(<Tag label="Tag" size="large" />);
    expect(
      container.querySelector(".neeto-ui-tag--size-large")
    ).toBeInTheDocument();
  });

  it("should render a 'outline' type", () => {
    const { container } = render(<Tag label="Tag" type="outline" />);
    expect(
      container.querySelector(".neeto-ui-tag--type-outline")
    ).toBeInTheDocument();
  });

  it("should render with a different color", () => {
    const { container } = render(<Tag color="#ff0000" label="Tag" />);
    expect(
      container.querySelector(".neeto-ui-tag--color-ff0000")
    ).toBeInTheDocument();
  });

  it("should show close button if onClose function is provided", () => {
    const { getByTestId } = render(<Tag onClose={() => {}} />);
    expect(getByTestId("tag-close-button")).toBeInTheDocument();
  });

  it("should call onClose on button click", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Tag {...{ onClose }} />);
    await userEvent.click(getByTestId("tag-close-button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not call onClose function if tag is disabled", async () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Tag {...{ onClose }} disabled />);
    await userEvent.click(getByTestId("tag-close-button"));
    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
