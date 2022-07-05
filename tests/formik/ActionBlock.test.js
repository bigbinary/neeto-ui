import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";

import { ActionBlock, Input } from "../../lib/components/formik";
import { repeat } from "ramda";

const TestActionBlock = ({
  input = "",
  onSubmit = () => {},
  submitButtonProps = {},
  cancelButtonProps = {},
}) => {
  const handleSubmit = (value) => {
    onSubmit(value);
  };
  return (
    <Formik initialValues={{ input }} onSubmit={handleSubmit}>
      <Form>
        <Input label="Input label" name="input" />
        <ActionBlock
          submitButtonProps={submitButtonProps}
          cancelButtonProps={cancelButtonProps}
        />
      </Form>
    </Formik>
  );
};

describe("formik/ActionBlock", () => {
  it("should render without any errors", () => {
    render(<TestActionBlock />);

    expect(screen.getByText(/Save changes/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
  });

  it("should apply the classNames correctly", () => {
    const { container } = render(
      <Formik>
        <Form>
          <ActionBlock className="test-class" />
        </Form>
      </Formik>
    );

    expect(container.querySelector(".test-class")).toBeInTheDocument();
  });

  it("should apply the button props correctly", () => {
    render(
      <TestActionBlock
        cancelButtonProps={{ label: "cancel" }}
        submitButtonProps={{ label: "submit" }}
      />
    );

    expect(screen.getByRole("button", { name: "cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "submit" })).toBeInTheDocument();
  });

  it("should render the submit button disabled if the form is empty", () => {
    render(<TestActionBlock />);

    const submitButton = screen.getByRole("button", { name: /Save changes/i });
    expect(submitButton).toBeDisabled();
  });

  it("should render the submit button enabled if the form is not empty", async () => {
    render(<TestActionBlock />);

    const submitButton = screen.getByRole("button", { name: /Save changes/i });
    const input = screen.getByRole("textbox");
    userEvent.type(input, "test");
    await waitFor(() => expect(submitButton).not.toBeDisabled());
  });

  it("should submit with correct values", async () => {
    const onSubmit = jest.fn();
    render(<TestActionBlock onSubmit={onSubmit} />);

    const submitButton = screen.getByRole("button", { name: /Save changes/i });
    const input = screen.getByRole("textbox");
    userEvent.type(input, "test");
    userEvent.click(submitButton);
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        input: "test",
      })
    );
  });

  it("should reset the form fields when cancel button is clicked", async () => {
    render(<TestActionBlock />);

    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    const input = screen.getByRole("textbox");
    userEvent.type(input, "test");
    userEvent.click(cancelButton);
    await waitFor(() => expect(input).toHaveValue(""));
  });

  it("Cancel button should be disabled if form value is same", async () => {
    const onSubmit = jest.fn();
    render(<TestActionBlock input="Oliver" onSubmit={onSubmit} />);

    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    expect(cancelButton).toBeDisabled();
    const input = screen.getByRole("textbox");
    userEvent.type(input, "test");
    await waitFor(() => expect(cancelButton).not.toBeDisabled());
    userEvent.type(input, repeat("{backspace}", "test".length).join(""));
    await waitFor(() => expect(cancelButton).toBeDisabled());
    userEvent.click(cancelButton);
    await waitFor(() => expect(onSubmit).not.toBeCalled());
  });

  it("Cancel button should be disabled when submitting", async () => {
    const onSubmit = jest.fn();
    render(<TestActionBlock input="Oliver" onSubmit={new Promise(() => {})} />);

    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    const submitButton = screen.getByRole("button", { name: /Save changes/i });
    expect(cancelButton).toBeDisabled();
    const input = screen.getByRole("textbox");
    userEvent.type(input, "test");
    await waitFor(() => expect(cancelButton).not.toBeDisabled());
    userEvent.click(submitButton);
    await waitFor(() => expect(cancelButton).toBeDisabled());
    userEvent.click(cancelButton);
    await waitFor(() => expect(onSubmit).not.toBeCalled());
  });
});
