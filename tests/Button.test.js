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

  it("should not call onClick when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button label="Button" onClick={onClick} disabled />
    );
    fireEvent.click(getByText("Button"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
