import React from "react";
import { ActionDropdown } from "../lib/components";
import { render, fireEvent } from "@testing-library/react";

describe("ActionDropdown", () => {
  it("should render without error", () => {
    const { getByText } = render(<ActionDropdown label="ActionDropdown" />);
    expect(getByText("ActionDropdown")).toBeInTheDocument();
  });

  it("should call onClick on button click", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ActionDropdown label="ActionDropdown" onClick={onClick} />
    );
    fireEvent.click(getByText("ActionDropdown"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick on button click when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ActionDropdown label="ActionDropdown" onClick={onClick} disabled />
    );
    fireEvent.click(getByText("ActionDropdown"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
