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
});
