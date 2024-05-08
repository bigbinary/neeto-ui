import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Textarea } from "components";

describe("Textarea", () => {
  it("should render without error", () => {
    const { getByLabelText } = render(<Textarea id="text" label="Textarea" />);
    expect(getByLabelText("Textarea")).toBeInTheDocument();
  });

  it("should update value on input when uncontrolled", async () => {
    const { getByLabelText } = render(<Textarea id="text" label="Textarea" />);
    const textarea = getByLabelText("Textarea");
    await userEvent.type(textarea, "Test");
    expect(textarea).toHaveValue("Test");
  });

  it("should call onChange when textarea value changes", async () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Textarea {...{ onChange }} id="text" label="Textarea" />
    );
    await userEvent.type(getByLabelText("Textarea"), "Test");
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("should display helpText", () => {
    const { getByText } = render(
      <Textarea helpText="Help text" id="text" label="Textarea" />
    );
    expect(getByText("Help text")).toBeInTheDocument();
  });

  it("should display error message", () => {
    const { getByText } = render(
      <Textarea error="Error message" id="text" label="Textarea" />
    );
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should properly handle maxLength", async () => {
    const { getByLabelText, getByText } = render(
      <Textarea id="text" label="Textarea" maxLength={5} />
    );
    await userEvent.type(getByLabelText("Textarea"), "Testing maxLength");
    expect(getByText(/5(.*)\/(.*)5/)).toBeInTheDocument();
    expect(getByLabelText("Textarea")).toHaveValue("Testi");
  });

  it("should properly handle maxLength", async () => {
    const { getByLabelText, getByText } = render(
      <Textarea unlimitedChars id="text" label="Textarea" maxLength={5} />
    );
    await userEvent.type(getByLabelText("Textarea"), "Testing maxLength");
    expect(getByText(/17(.*)\/(.*)5/)).toBeInTheDocument();
    expect(getByLabelText("Textarea")).toHaveValue("Testing maxLength");
  });
});
