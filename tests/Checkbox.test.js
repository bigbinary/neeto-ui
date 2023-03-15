import React from "react";
import { Checkbox } from "components";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Checkbox", () => {
  it("should render without error", () => {
    const { getByRole } = render(<Checkbox label="Checkbox" />);
    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  it("should call onChange when checkbox value is changed", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <Checkbox label="Checkbox" onChange={onChange} />
    );
    userEvent.click(getByRole("checkbox"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should display error message", () => {
    const { getByText } = render(
      <Checkbox label="Checkbox" error="Error message" />
    );
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should be unchecked by default", () => {
    const { getByRole } = render(<Checkbox label="Checkbox" />);
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  it("should be checked on clicking the checkbox", () => {
    const { getByRole } = render(<Checkbox label="Checkbox" />);
    const checkbox = getByRole("checkbox");
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
