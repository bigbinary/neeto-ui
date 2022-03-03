import React from "react";
import { Button } from "../lib/components";
import { render, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("should render without error", () => {
    const { getByText } = render(<Button label="Button" />);
    expect(getByText("Button")).toBeInTheDocument();
  });

  it("should call onClick on button click", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button label="Button" onClick={onClick} />);
    fireEvent.click(getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick on button click when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button label="Button" onClick={onClick} disabled />
    );
    fireEvent.click(getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should not call onClick on button click when loading", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button label="Button" onClick={onClick} loading />
    );
    fireEvent.click(getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should show tooltip when button is hovered", () => {
    const { getByText } = render(
      <Button label="Button" tooltipProps={{ content: "Tooltip" }} />
    );
    fireEvent.mouseEnter(getByText("Button"), { bubbles: true });
    expect(getByText("Tooltip")).toBeInTheDocument();
  });

  it("should show icon when icon string is provided", () => {
    const { getByTestId } = render(<Button icon="check" />);
    expect(getByTestId("class-icon")).toBeInTheDocument();
  });

  it("should show icon when icon component is provided", () => {
    const { getByTestId } = render(<Button icon={() => <svg data-testid="svg-icon" />} />);
    expect(getByTestId("svg-icon")).toBeInTheDocument();
  });
});
