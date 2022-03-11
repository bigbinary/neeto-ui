import React from "react";
import { Select } from "../lib/components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const options = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
];

describe("Select", () => {
  it("should render without error", () => {
    render(<Select label="Select" options={options} />);
    const select = screen.getAllByRole("combobox");
    expect(select.length).toBe(1);
    screen;
    expect(screen.getByText("Select")).toBeInTheDocument();
  });

  it("should show option list on clicking", () => {
    render(<Select label="Select" options={options} />);
    const select = screen.getByRole("combobox");
    userEvent.click(select);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("should call onChange on select option", () => {
    const onChange = jest.fn();
    render(<Select label="Select" options={options} onChange={onChange} />);
    const select = screen.getByRole("combobox");
    userEvent.click(select);
    userEvent.click(screen.getByText("Option 2"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should change selected option value when an option is selected", async () => {
    render(<Select label="Select" options={options} />);
    const select = screen.getByRole("combobox");
    userEvent.click(select);
    userEvent.click(screen.getByText("Option 2"));
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  // it("should be disabled if isDisabled is true", () => {
  //   const { getByRole } = render(
  //     <Select label="Select" options={options} isDisabled />
  //   );
  //   const select = getByRole("combobox");
  //   expect(select).toBeDisabled();
  // });

  it("should not render label if label is not provided", () => {
    render(<Select options={options} />);
    expect(screen.queryByTestId("select-label")).not.toBeInTheDocument();
  });

  it("should show error message if provided", () => {
    render(<Select label="Select" options={options} error="Error message" />);
    expect(screen.getByTestId("select-error")).toBeInTheDocument();
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("should show help text if provided", () => {
    render(<Select label="Select" options={options} helpText="Help text" />);
    expect(screen.getByTestId("select-help-text")).toBeInTheDocument();
    expect(screen.getByText("Help text")).toBeInTheDocument();
  });

  test("creatable Select should create new element", () => {
    render(<Select isCreateable />);
    const select = screen.getAllByRole("combobox");
    expect(select.length).toBe(1);
    const selectBox = screen.getByTestId("select");
    userEvent.click(select[0]);
    expect(selectBox).toHaveTextContent("No options", { exact: false });
    userEvent.type(select[0], "hello");
    userEvent.type(select[0], "{enter}");
    expect(selectBox).toHaveTextContent("hello", { exact: false });
  });
});
