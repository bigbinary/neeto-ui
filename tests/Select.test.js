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
    const { getByText } = render(<Select label="Select" options={options} />);
    expect(getByText("Select")).toBeInTheDocument();
  });

  it("should show option list on clicking", () => {
    const { getByRole, getByText } = render(
      <Select label="Select" options={options} />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should call onChange on select option", () => {
    const onChange = jest.fn();
    const { getByRole, getByText } = render(
      <Select label="Select" options={options} onChange={onChange} />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    userEvent.click(getByText("Option 2"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should change selected option value when an option is selected", async () => {
    const { getByRole, getByText } = render(
      <Select label="Select" options={options} />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    userEvent.click(getByText("Option 2"));
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should not render label if label is not provided", () => {
    const { queryByTestId } = render(<Select options={options} />);
    expect(queryByTestId("select-label")).not.toBeInTheDocument();
  });

  it("should show error message if provided", () => {
    const { getByText, getByTestId } = render(
      <Select label="Select" options={options} error="Error message" />
    );
    expect(getByTestId("select-error")).toBeInTheDocument();
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should show help text if provided", () => {
    const { getByText, getByTestId } = render(
      <Select label="Select" options={options} helpText="Help text" />
    );
    expect(getByTestId("select-help-text")).toBeInTheDocument();
    expect(getByText("Help text")).toBeInTheDocument();
  });

  test("creatable Select should create new element", () => {
    const { getByRole, getByTestId } = render(<Select isCreateable />);
    const select = getByRole("combobox");
    const selectBox = getByTestId("select");
    userEvent.click(select);
    expect(selectBox).toHaveTextContent("No options", { exact: false });
    userEvent.type(select, "hello");
    userEvent.type(select, "{enter}");
    expect(selectBox).toHaveTextContent("hello", { exact: false });
  });

  test("should be searchable with isCreatable", () => {
    const { getByRole } = render(
      <Select label="Select" options={options} isCreateable isSearchable />
    );
    const select = getByRole("combobox");
    userEvent.click(select);
    userEvent.type(select, "option 2");
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });
});
