import React from "react";
import { render } from "@testing-library/react";
import { Input } from "components";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  it("should render without error", () => {
    const { getByLabelText } = render(<Input id="input" label="Input Label" />);
    expect(getByLabelText("Input Label")).toBeInTheDocument();
  });

  it("should be able to type when uncontrolled", () => {
    const { getByLabelText } = render(<Input id="input" label="Input Label" />);
    const inputField = getByLabelText("Input Label");
    userEvent.type(inputField, "sample content");
    expect(inputField).toHaveValue("sample content");
  });

  it("should call onChange when input value changes", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Input id="input" label="Input Label" onChange={onChange} />
    );
    userEvent.type(getByLabelText("Input Label"), "Test");
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
    const { getByLabelText } = render(
      <Input disabled id="input" label="Input Label" />
    );
    expect(getByLabelText("Input Label")).toBeDisabled();
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

  it("should properly handle maxLength", () => {
    const { getByLabelText, getByText } = render(
      <Input id="input" label="Input label" maxLength={5} />
    );
    userEvent.type(getByLabelText("Input label"), "Testing maxLength");
    expect(getByText(/5(.*)\/(.*)5/)).toBeInTheDocument();
    expect(getByLabelText("Input label")).toHaveValue("Testi");
  });

  it("should properly handle maxLength with unlimitedChars", () => {
    const { getByLabelText, getByText } = render(
      <Input id="input" label="Input label" maxLength={5} unlimitedChars />
    );
    userEvent.type(getByLabelText("Input label"), "Testing maxLength");
    expect(getByText(/17(.*)\/(.*)5/)).toBeInTheDocument();
    expect(getByLabelText("Input label")).toHaveValue("Testing maxLength");
  });

  it("should display character count when the input text length reaches 90% of maxlength", () => {
    const { getByLabelText, queryByText, getByText } = render(
      <Input id="input" label="Input label" maxLength={10} />
    );
    expect(queryByText(/0(.*)\/(.*)10/)).not.toBeInTheDocument();
    userEvent.type(getByLabelText("Input label"), "Testing ");
    expect(queryByText(/8(.*)\/(.*)10/)).not.toBeInTheDocument();
    userEvent.type(getByLabelText("Input label"), "m");
    expect(getByText(/9(.*)\/(.*)10/)).toBeInTheDocument();
  });
});
