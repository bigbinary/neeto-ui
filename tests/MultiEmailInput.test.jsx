import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MultiEmailInput } from "components";

const SAMPLE_EMAILS = [
  { label: "test@example.com", value: "test@example.com", valid: true },
  {
    label: "test2@example.com",
    value: "test2@example.com",
    valid: true,
  },
  {
    label: "test3@example.com",
    value: "test3@example.com",
    valid: true,
  },
  {
    label: "test4@example.com",
    value: "test4@example.com",
    valid: true,
  },
  {
    label: "test5@example.com",
    value: "test5@example.com",
    valid: true,
  },
];

describe("MultiEmailInput", () => {
  it("should render without error", () => {
    render(<MultiEmailInput />);
    expect(screen.getByText("Email(s)")).toBeInTheDocument();
  });

  it("should display helpText", () => {
    render(<MultiEmailInput helpText="Help text" />);
    expect(screen.getByText("Help text")).toBeInTheDocument();
  });

  it("should display error message", () => {
    render(<MultiEmailInput error="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("should not render email counter when the email count start from 3 and count is 2", () => {
    render(
      <MultiEmailInput
        counter={{ startsFrom: 3 }}
        value={SAMPLE_EMAILS.slice(3)}
      />
    );
    expect(screen.queryByText("2 emails")).not.toBeInTheDocument();
  });

  it("should render email counter when the email count start from 3 and count is 3", () => {
    render(
      <MultiEmailInput
        counter={{ startsFrom: 3 }}
        value={SAMPLE_EMAILS.slice(2)}
      />
    );
    expect(screen.getByText("3 emails")).toBeInTheDocument();
  });

  it("should render default counter text when no label is provided", () => {
    const { rerender } = render(
      <MultiEmailInput counter value={SAMPLE_EMAILS.slice(1)} />
    );
    expect(screen.getByText("4 emails")).toBeInTheDocument();
    rerender(<MultiEmailInput counter value={SAMPLE_EMAILS} />);
    expect(screen.getByText("5 emails")).toBeInTheDocument();
  });

  it("should call onBlur when focus from the input field changes", () => {
    const onBlur = jest.fn();
    render(<MultiEmailInput onBlur={onBlur} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.click(emailInput);
    userEvent.click(document.body);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("should call onChange when input loses focus after entering email", () => {
    const onChange = jest.fn();
    render(<MultiEmailInput onChange={onChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.paste(emailInput, "test@email.com test2@email.com");
    userEvent.click(document.body);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "test@email.com", valid: true, value: "test@email.com" },
      { label: "test2@email.com", valid: true, value: "test2@email.com" },
    ]);
  });

  it("should call onInputChange when email input value changes", () => {
    const onInputChange = jest.fn();
    render(<MultiEmailInput onInputChange={onInputChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.type(emailInput, "test");
    expect(onInputChange).toHaveBeenCalledTimes(4);
  });

  it("should call onChange when Enter key is pressed", () => {
    const onChange = jest.fn();
    render(<MultiEmailInput onChange={onChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.type(emailInput, "email@domain.com{enter}");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should call onChange when Space key is pressed", () => {
    const onChange = jest.fn();
    render(<MultiEmailInput onChange={onChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.type(emailInput, "email@domain.com{space}");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should call onChange when Tab key is pressed", () => {
    const onChange = jest.fn();
    render(<MultiEmailInput onChange={onChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.type(emailInput, "email@domain.com");
    userEvent.tab();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should call onChange when comma key is pressed", () => {
    const onChange = jest.fn();
    render(<MultiEmailInput onChange={onChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.type(emailInput, "email@domain.com,");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should remove all invalid emails on clicking filterInvalidEmails label", () => {
    const onChange = jest.fn();
    render(
      <MultiEmailInput
        error="Invalid email"
        filterInvalidEmails={{
          label: "Filter invalid emails",
        }}
        value={[
          { label: "test@example.com", value: "test@example.com", valid: true },
          { label: "invalidEmail", value: "invalidEmail" },
        ]}
        onChange={onChange}
      />
    );
    userEvent.click(screen.getByText("Filter invalid emails"));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "test@example.com", value: "test@example.com", valid: true },
    ]);
  });

  it("should display filterInvalidEmails label if no label is provided", () => {
    const onChange = jest.fn();
    render(
      <MultiEmailInput
        error="Invalid email"
        filterInvalidEmails={{}}
        value={[
          { label: "test@example.com", value: "test@example.com", valid: true },
          { label: "invalidEmail", value: "invalidEmail" },
        ]}
        onChange={onChange}
      />
    );

    expect(
      screen.getByText("Click here to remove invalid emails.")
    ).toBeInTheDocument();
  });

  it("should accept a generic string containing an email and should pluck out that email", () => {
    const onChange = jest.fn();
    render(<MultiEmailInput onChange={onChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.paste(emailInput, "John Doe <john@example.com>");
    userEvent.tab();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "john@example.com", valid: true, value: "john@example.com" },
    ]);
  });
});
