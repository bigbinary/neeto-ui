import React from "react";

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MultiEmailInput } from "components";

const SAMPLE_EMAILS = [
  {
    label: "Test person 1 (test@example.com)",
    value: "test@example.com",
    userId: 1,
    valid: true,
  },
  {
    label: "Test person 2 (test2@example.com)",
    value: "test2@example.com",
    userId: 2,
    valid: true,
  },
  {
    label: "Test person 3 (test3@example.com)",
    value: "test3@example.com",
    userId: 3,
    valid: true,
  },
  {
    label: "Test person 4 (test4@example.com)",
    value: "test4@example.com",
    userId: 4,
    valid: true,
  },
  {
    label: "Test person 5 (test5@example.com)",
    value: "test5@example.com",
    userId: 5,
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

  it("should render asterisk when required is set to true", () => {
    const { getByText } = render(<MultiEmailInput required />);
    const asterisk = getByText("*");
    expect(asterisk).toBeInTheDocument();
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

  it("should call onBlur when focus from the input field changes", async () => {
    const onBlur = jest.fn();
    render(<MultiEmailInput {...{ onBlur }} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.click(emailInput);
    await userEvent.click(document.body);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("should call onChange when input loses focus after entering email", async () => {
    const onChange = jest.fn();
    render(<MultiEmailInput {...{ onChange }} />);
    const emailInput = screen.getByRole("combobox");
    act(() => {
      emailInput.focus();
    });
    await userEvent.type(emailInput, "test@email.com");
    await userEvent.click(document.body);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "test@email.com", valid: true, value: "test@email.com" },
    ]);
  });

  it("should call onInputChange when email input value changes", async () => {
    const onInputChange = jest.fn();
    render(<MultiEmailInput {...{ onInputChange }} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "test");
    expect(onInputChange).toHaveBeenCalledTimes(4);
  });

  it("should show create option when isCreateable is true", async () => {
    render(<MultiEmailInput options={SAMPLE_EMAILS} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "test");
    expect(screen.getByText('Create "test"')).toBeInTheDocument();
  });

  it("shouldn't show create option when isCreateable is false", async () => {
    render(<MultiEmailInput isCreateable={false} options={SAMPLE_EMAILS} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "test");
    expect(screen.queryByText('Create "test"')).not.toBeInTheDocument();
  });

  it("should call onChange when Enter key is pressed", async () => {
    const onChange = jest.fn();
    render(<MultiEmailInput {...{ onChange }} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "email@domain.com{enter}");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should call onChange when Space key is pressed", async () => {
    const onChange = jest.fn();
    render(<MultiEmailInput {...{ onChange }} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "email@domain.com ");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should call onChange when Tab key is pressed", async () => {
    const onChange = jest.fn();
    render(<MultiEmailInput {...{ onChange }} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "email@domain.com{tab}");
    // await userEvent.tab();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should call onChange when comma key is pressed", async () => {
    const onChange = jest.fn();
    render(<MultiEmailInput {...{ onChange }} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "email@domain.com,");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should remove all invalid emails on clicking filterInvalidEmails label", async () => {
    const onChange = jest.fn();
    render(
      <MultiEmailInput
        {...{ onChange }}
        error="Invalid email"
        filterInvalidEmails={{ label: "Filter invalid emails" }}
        value={[
          { label: "test@example.com", value: "test@example.com", valid: true },
          { label: "invalidEmail", value: "invalidEmail" },
        ]}
      />
    );
    await userEvent.click(screen.getByText("Filter invalid emails"));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      { label: "test@example.com", value: "test@example.com", valid: true },
    ]);
  });

  it("should display filterInvalidEmails label if no label is provided", () => {
    const onChange = jest.fn();
    render(
      <MultiEmailInput
        {...{ onChange }}
        error="Invalid email"
        filterInvalidEmails={{}}
        value={[
          { label: "test@example.com", value: "test@example.com", valid: true },
          { label: "invalidEmail", value: "invalidEmail" },
        ]}
      />
    );

    expect(
      screen.getByText("Click here to remove invalid emails.")
    ).toBeInTheDocument();
  });

  it("should accept a generic string containing an email and should pluck out that email", async () => {
    const onChange = jest.fn();
    const user = userEvent.setup({ document });
    render(<MultiEmailInput {...{ onChange }} />);
    const emailInput = screen.getByRole("combobox");
    act(() => {
      emailInput.focus();
    });
    await user.type(emailInput, "John Doe <john@example.com>");
    await user.tab();
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenCalledWith([
      { label: "john@example.com", valid: true, value: "john@example.com" },
    ]);
  });

  it("Should display within the specified visible count", () => {
    const VISIBLE_ELEMENT_COUNT = 3;

    render(
      <MultiEmailInput
        counter
        value={SAMPLE_EMAILS}
        visibleEmailsCount={VISIBLE_ELEMENT_COUNT}
      />
    );
    // Check that the total visible email count matches the specified visibleEmailsCount
    const visibleEmailElements = screen.queryAllByText(/@example\.com/);
    expect(visibleEmailElements.length).toBe(VISIBLE_ELEMENT_COUNT);

    // Check if the "more" counter is displayed if there are hidden emails
    if (SAMPLE_EMAILS.length > VISIBLE_ELEMENT_COUNT) {
      const hiddenEmailsCount = SAMPLE_EMAILS.length - VISIBLE_ELEMENT_COUNT;
      expect(screen.getByText(`${hiddenEmailsCount} more`)).toBeInTheDocument();
    }
  });

  it("Should display all emails when input is in focus", async () => {
    render(<MultiEmailInput counter value={SAMPLE_EMAILS} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.click(emailInput);

    SAMPLE_EMAILS.forEach(email => {
      expect(screen.getByText(email.label)).toBeInTheDocument();
    });
  });

  it("should provide feedback when duplicate emails are pruned", async () => {
    render(<MultiEmailInput counter value={SAMPLE_EMAILS} />);
    const emailInput = screen.getByRole("combobox");

    await userEvent.type(emailInput, "test@Example.com{enter}");

    expect(
      screen.getByText(
        "Removed 1 duplicate email from the list: test@Example.com"
      )
    ).toBeInTheDocument();
  });

  it("should call onChange when Enter key is pressed and retain all the properties in the selected emails", async () => {
    const onChange = jest.fn();
    const selectedEmails = SAMPLE_EMAILS.slice(0, 2);
    render(<MultiEmailInput {...{ onChange }} value={selectedEmails} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "email@domain.com{enter}");
    expect(onChange).toHaveBeenCalledWith([
      ...selectedEmails,
      { label: "email@domain.com", valid: true, value: "email@domain.com" },
    ]);
  });

  it("should not render the menu when clicked on the input field", async () => {
    const onChange = jest.fn();
    const selectedEmails = SAMPLE_EMAILS.slice(0, 2);
    const { container } = render(
      <MultiEmailInput
        {...{ onChange }}
        options={SAMPLE_EMAILS}
        value={selectedEmails}
      />
    );
    const emailInput = screen.getByRole("combobox");
    await userEvent.click(emailInput);
    expect(
      container.querySelector(".neeto-ui-react-select__menu")
    ).not.toBeInTheDocument();

    await userEvent.type(emailInput, "test");
    await expect(
      container.querySelector(".neeto-ui-react-select__menu")
    ).toBeInTheDocument();
  });
});
