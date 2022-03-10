import React from "react";
import { render } from "@testing-library/react";
import { Textarea } from "../lib/components";
import userEvent from "@testing-library/user-event";

describe("Textarea", () => {
  it("should render without error", () => {
    const { getByLabelText } = render(<Textarea id="text" label="Textarea" />);
    expect(getByLabelText("Textarea")).toBeInTheDocument();
  });

  it("should update value on input when uncontrolled", () => {
    const { getByLabelText } = render(<Textarea id="text" label="Textarea" />);
    const textarea = getByLabelText("Textarea");
    userEvent.type(textarea, "Test");
    expect(textarea).toHaveValue("Test");
  });

  it("should call onChange when textarea value changes", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Textarea id="text" label="Textarea" onChange={onChange} />
    );
    userEvent.type(getByLabelText("Textarea"), "Test");
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("should display helpText", () => {
    const { getByText } = render(<Textarea id="text" label="Textarea" helpText="Help text" />);
    expect(getByText("Help text")).toBeInTheDocument();
  });

  it("should display error message", () => {
    const { getByText } = render(
      <Textarea id="text" label="Textarea" error="Error message" />
    );
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should properly handle maxLength", () => {
    const { getByLabelText, getByText } = render(
      <Textarea id="text" label="Textarea" maxLength={5} />
    );
    expect(getByText("0 / 5")).toBeInTheDocument();
    expect(getByLabelText("Textarea")).toHaveAttribute("maxLength", "5");
  });
});