import React from "react";
import { Select } from "../lib/components";
import { render } from "@testing-library/react";
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
    const { container, getByText } = render(
      <Select label="Select" options={options} />
    );
    userEvent.click(container.querySelector("input"));
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
  });

  it("should call onChange on select option", () => {
    const onChange = jest.fn();
    const { container, getByText } = render(
      <Select label="Select" options={options} onChange={onChange} />
    );
    userEvent.click(container.querySelector("input"));
    userEvent.click(getByText("Option 2"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should change selected option value when an option is selected", async () => {
    const { container, getByText } = render(
      <Select label="Select" options={options} />
    );
    userEvent.click(container.querySelector("input"));
    userEvent.click(getByText("Option 2"));
    expect(getByText("Option 2")).toBeInTheDocument;
  });

  it("should be disabled if isDisabled is true", () => {
    const { container } = render(
      <Select label="Select" options={options} isDisabled />
    );
    expect(container.querySelector("input")).toBeDisabled();
  });

  it("should not render label if label is not provided", () => {
    const { queryByTestId } = render(<Select options={options} />);
    expect(queryByTestId("select-label")).not.toBeInTheDocument();
  });

  it("should show error message if provided", () => {
    const { getByTestId, getByText } = render(
      <Select label="Select" options={options} error="Error message" />
    );
    expect(getByTestId("select-error")).toBeInTheDocument();
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should show help text if provided", () => {
    const { getByTestId, getByText } = render(
      <Select label="Select" options={options} helpText="Help text" />
    );
    expect(getByTestId("select-help-text")).toBeInTheDocument();
    expect(getByText("Help text")).toBeInTheDocument();
  });
});
