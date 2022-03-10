import React from "react";
import { Tag } from "../lib/components";
import { render, fireEvent } from "@testing-library/react";

describe("Tag", () => {
  it("should render without error", () => {
    const { getByText } = render(<Tag label="Tag" />);
    expect(getByText("Tag")).toBeInTheDocument();
  });

  it("should show icon when icon string is provided", () => {
    const { getByTestId } = render(<Tag icon="check" />);
    expect(getByTestId("class-icon")).toBeInTheDocument();
  });

  it("should not break component if icon is passed but nil", () => {
    const { container } = render(<Tag icon={null} />);
    expect(container).toMatchSnapshot();
  });

  it("should show indicator when indicatorColor is provided", () => {
    const { getByTestId } = render(<Tag indicatorColor="green" />);
    expect(getByTestId("tag-indicator")).toBeInTheDocument();
  });

  it("should show close button if onClose function is provided", () => {
    const { getByTestId } = render(<Tag onClose={() => {}} />);
    expect(getByTestId("tag-close-button")).toBeInTheDocument();
  });

  it("should call onClose on button click", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Tag onClose={onClose} />);
    fireEvent.click(getByTestId("tag-close-button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not call onClose function if tag is disabled", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Tag onClose={onClose} disabled />);
    fireEvent.click(getByTestId("tag-close-button"));
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it("should contain neeto-ui-tag--size-large class if size is large", () => {
    const { getByTestId } = render(<Tag size="large" />);
    expect(getByTestId("tag-container")).toHaveClass(
      "neeto-ui-tag--size-large"
    );
  });

  it("should contain neeto-ui-tag--size-small class if size is small", () => {
    const { getByTestId } = render(<Tag size="small" />);
    expect(getByTestId("tag-container")).toHaveClass(
      "neeto-ui-tag--size-small"
    );
  });

  it("should contain neeto-ui-tag--style-outline class if style is outline", () => {
    const { getByTestId } = render(<Tag style="outline" />);
    expect(getByTestId("tag-container")).toHaveClass(
      "neeto-ui-tag--style-outline"
    );
  });

  it("should contain neeto-ui-tag--style-solid class if style is solid", () => {
    const { getByTestId } = render(<Tag style="solid" />);
    expect(getByTestId("tag-container")).toHaveClass(
      "neeto-ui-tag--style-solid"
    );
  });
});
