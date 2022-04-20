import React from "react";
import { EmailInput } from "../lib/components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("EmailInput", () => {
  it("should render without error", () => {
    render(<EmailInput />);
    expect(screen.getByText("Email(s)")).toBeInTheDocument();
  });

  it("should display helpText", () => {
    render(<EmailInput helpText="Help text" />);
    expect(screen.getByText("Help text")).toBeInTheDocument();
  });

  it("should display error message", () => {
    render(<EmailInput error="Error message" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("should render correct number of emails", () => {
    render(
      <EmailInput
        value={[
          { label: "test@example.com", value: "test@example.com", valid: true },
        ]}
        counter={{ label: "email" }}
      />
    );
    expect(screen.getByText("1 email")).toBeInTheDocument();
  });

  it("should render default counter text when no label is provided", () => {
    const { rerender } = render(
      <EmailInput
        value={[
          { label: "test@example.com", value: "test@example.com", valid: true },
        ]}
        counter={{}}
      />
    );
    expect(screen.getByText("1 email")).toBeInTheDocument();
    rerender(
      <EmailInput
        value={[
          { label: "test@example.com", value: "test@example.com", valid: true },
          {
            label: "test2@example.com",
            value: "test2@example.com",
            valid: true,
          },
        ]}
        counter={{}}
      />
    );
    expect(screen.getByText("2 emails")).toBeInTheDocument();
  });

  it("should call onBlur when focus from the input field changes", () => {
    const onBlur = jest.fn();
    render(<EmailInput onBlur={onBlur} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.click(emailInput);
    userEvent.click(document.body);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("should call onChange when input loses focus after entering email", () => {
    const onChange = jest.fn();
    render(<EmailInput onChange={onChange} />);
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
    render(<EmailInput onInputChange={onInputChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.type(emailInput, "test");
    expect(onInputChange).toHaveBeenCalledTimes(4);
  });

  it("should call onChange when Enter key is pressed", () => {
    const onChange = jest.fn();
    render(<EmailInput onChange={onChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.type(emailInput, "email@domain.com{enter}");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should call onChange when Space key is pressed", () => {
    const onChange = jest.fn();
    render(<EmailInput onChange={onChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.type(emailInput, "email@domain.com{space}");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should call onChange when Tab key is pressed", () => {
    const onChange = jest.fn();
    render(<EmailInput onChange={onChange} />);
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
    render(<EmailInput onChange={onChange} />);
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
      <EmailInput
        onChange={onChange}
        value={[
          { label: "test@example.com", value: "test@example.com", valid: true },
          { label: "invalidEmail", value: "invalidEmail" },
        ]}
        filterInvalidEmails={{
          label: "Filter invalid emails",
        }}
        error="Invalid email"
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
      <EmailInput
        onChange={onChange}
        value={[
          { label: "test@example.com", value: "test@example.com", valid: true },
          { label: "invalidEmail", value: "invalidEmail" },
        ]}
        filterInvalidEmails={{}}
        error="Invalid email"
      />
    );
    expect(
      screen.getByText("Click here to remove invalid emails.")
    ).toBeInTheDocument();
  });

  it("should accept a generic string containing an email and should pluck out that email", () => {
    const onChange = jest.fn();
    render(<EmailInput onChange={onChange} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.paste(emailInput, "John Doe <john@example.com>");
    userEvent.tab();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "john@example.com", valid: true, value: "john@example.com" },
    ]);
  });
});
