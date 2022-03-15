import React from "react";
import { EmailInput } from "../lib/components";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("EmailInput", () => {
  it("should render without error", () => {
    const { getByText } = render(<EmailInput/>);
    expect(getByText("Email(s)")).toBeInTheDocument();
  });

  it("should display helpText", () => {
    const { getByText } = render(<EmailInput helpText="Help text" />);
    expect(getByText("Help text")).toBeInTheDocument();
  });

  it("should display error message", () => {
    const { getByText } = render(
      <EmailInput error="Error message" />
    );
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should render correct number of emails", () => {
    const { getByText } = render(
      <EmailInput
        value={[{label: "test@example.com", value: "test@example.com", valid: true}]}
        counter={{label: "email"}}/>
    );
    expect(getByText("1 email")).toBeInTheDocument();
  });

  it("should call onBlur when focus from the input field changes", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(
      <EmailInput onBlur={onBlur}/>
    );
    const emailInput = getByRole("combobox")
    userEvent.click(emailInput)
    userEvent.click(document.body)
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("should call onInputChange when email input value changes", () => {
    const onInputChange = jest.fn();
    const { getByRole } = render(
      <EmailInput onInputChange={onInputChange}/>
    );
    const emailInput = getByRole("combobox")
    userEvent.type(emailInput, "test")
    expect(onInputChange).toHaveBeenCalledTimes(4);
  });
});
