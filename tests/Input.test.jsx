import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "components";

describe("Input", () => {
  it("should render without error", () => {
    const { getByLabelText } = render(<Input id="input" label="Input Label" />);
    expect(getByLabelText("Input Label")).toBeInTheDocument();
  });

  it("should be able to type when uncontrolled", async () => {
    const { getByLabelText } = render(<Input id="input" label="Input Label" />);
    const inputField = getByLabelText("Input Label");
    await userEvent.type(inputField, "sample content");
    expect(inputField).toHaveValue("sample content");
  });

  it("should call onChange when input value changes", async () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Input {...{ onChange }} id="input" label="Input Label" />
    );
    await userEvent.type(getByLabelText("Input Label"), "Test");
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("should not show matched regex value", async () => {
    const { getByLabelText } = render(
      <Input id="input" label="Input Label" rejectCharsRegex={/[0-9]+/} />
    );
    const inputField = getByLabelText("Input Label");
    await userEvent.type(inputField, "12345");
    expect(inputField).not.toHaveValue("12345");

    await userEvent.type(inputField, "abc123");
    expect(inputField).toHaveValue("abc");
    expect(inputField).not.toHaveValue("123");
  });

  it("should display error message", () => {
    const { getByText } = render(<Input error="Error message" label="input" />);
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should display helpText", () => {
    const { getByText } = render(<Input helpText="Help text" label="Input" />);
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

  it("should properly handle maxLength", async () => {
    const { getByLabelText, getByText } = render(
      <Input id="input" label="Input label" maxLength={5} />
    );
    await userEvent.type(getByLabelText("Input label"), "Testing maxLength");
    expect(getByText(/5(.*)\/(.*)5/)).toBeInTheDocument();
    expect(getByLabelText("Input label")).toHaveValue("Testi");
  });

  it("should properly handle maxLength with unlimitedChars", async () => {
    const { getByLabelText, getByText } = render(
      <Input unlimitedChars id="input" label="Input label" maxLength={5} />
    );
    await userEvent.type(getByLabelText("Input label"), "Testing maxLength");
    expect(getByText(/17(.*)\/(.*)5/)).toBeInTheDocument();
    expect(getByLabelText("Input label")).toHaveValue("Testing maxLength");
  });

  it("should display character count when the input text length reaches 90% of maxlength", async () => {
    const { getByLabelText, queryByText, getByText } = render(
      <Input id="input" label="Input label" maxLength={10} />
    );
    expect(queryByText(/0(.*)\/(.*)10/)).not.toBeInTheDocument();
    await userEvent.type(getByLabelText("Input label"), "Testing ");
    expect(queryByText(/8(.*)\/(.*)10/)).not.toBeInTheDocument();
    await userEvent.type(getByLabelText("Input label"), "m");
    expect(getByText(/9(.*)\/(.*)10/)).toBeInTheDocument();
  });

  it("should trim leading and trailing white spaces onBlur", async () => {
    const { getByLabelText } = render(<Input label="label" />);
    await userEvent.type(getByLabelText("label"), "   Test   ");
    await userEvent.tab(); // go out of focus
    expect(getByLabelText("label")).toHaveValue("Test");
  });

  it("should properly handle disableTrimOnBlur", async () => {
    const { getByLabelText } = render(
      <Input disableTrimOnBlur label="label" />
    );
    await userEvent.type(getByLabelText("label"), "   Test   ");
    await userEvent.tab();
    expect(getByLabelText("label")).toHaveValue("   Test   ");
  });

  it("should display value when onChange handler is passed but value prop is not passed", async () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Input {...{ onChange }} label="label" />
    );
    await userEvent.type(getByLabelText("label"), "Test");
    expect(getByLabelText("label")).toHaveValue("Test");
  });
});
