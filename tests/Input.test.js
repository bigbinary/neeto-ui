import React from "react";
import { render } from "@testing-library/react";
import { Input } from "../lib/components";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  it("should render without error", () => {
    const { getByLabelText, getByTestId } = render(
      <Input label="Input Label" />
    );
    expect(getByLabelText("Input Label")).toBeInTheDocument();
    expect(getByTestId("input-field")).toBeInTheDocument();
  });

  it("should be able to type when uncontrolled", () => {
    const { getByTestId } = render(<Input label="input" />);
    const inputField = getByTestId("input-field");
    userEvent.type(inputField, "sample content");
    expect(inputField).toHaveValue("sample content");
  });

  it("should call onChange when textarea value changes", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input label="input" onChange={onChange} />);
    userEvent.type(getByTestId("input-field"), "Test");
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("should display error message", () => {
    const { getByText } = render(
      <Input label="input" error={"Error message"} />
    );
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should display helpText", () => {
    const { getByText } = render(<Input label="Input" helpText="Help text" />);
    expect(getByText("Help text")).toBeInTheDocument();
  });

  it("should be disabled if disabled is true", () => {
    const { getByTestId } = render(<Input label="input" disabled />);
    expect(getByTestId("input-field")).toBeDisabled();
  });

  it("should show suffix", () => {
    const { getByText } = render(<Input label="input" suffix="suffix" />);
    expect(getByText("suffix")).toBeInTheDocument();
  });

  it("should show prefix", () => {
    const { getByText } = render(<Input label="input" prefix="prefix" />);
    expect(getByText("prefix")).toBeInTheDocument();
  });

  it("should render asterisk when required is set to true", () => {
    const { getByText } = render(<Input required label="Input" />);
    const asterisk = getByText("*");
    expect(asterisk).toBeInTheDocument();
  });
});
