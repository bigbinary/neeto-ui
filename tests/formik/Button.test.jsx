import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, Input, Form } from "formik";
import * as yup from "yup";

const TestButtonForm = ({ onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <Form
      formikProps={{
        initialValues: { name: "Oliver" },
        validationSchema: yup.object().shape({
          name: yup.string().required("Name is required"),
        }),
        onSubmit: handleSubmit,
      }}
    >
      <Input label="Name" name="name" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const renderTestComponent = () => {
  const onSubmit = jest.fn();
  render(<TestButtonForm {...{ onSubmit }} />);
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");

  return { input, button, onSubmit };
};

describe("formik/Button", () => {
  it("Should render without error", () => {
    render(
      <Form
        formikProps={{
          initialValues: {},
          onSubmit: () => Promise.resolve(),
        }}
      >
        <Button label="Submit" type="submit" />
      </Form>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should be enabled if formik value differs from initial value", async () => {
    const { input, button, onSubmit } = renderTestComponent();
    await userEvent.type(input, " Smith");
    await waitFor(() => expect(button).not.toBeDisabled());
    await userEvent.click(button);
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({ name: "Oliver Smith" })
    );
  });

  it("Should be disabled if formik value is same as initial value", async () => {
    const { input, button, onSubmit } = renderTestComponent();
    await userEvent.clear(input); // clear everything
    await userEvent.type(input, "Oliver"); // retype initial value
    // button disabled: no change in form values
    await waitFor(() => expect(button).toBeDisabled());
    await userEvent.click(button);
    await waitFor(() => expect(onSubmit).not.toBeCalled());
  });

  it("Should not be disabled if form contains errors but should not submit form", async () => {
    const { input, button, onSubmit } = renderTestComponent();
    await userEvent.clear(input); // clear everything
    // error: name is required;
    await waitFor(() => expect(button).not.toBeDisabled());
    await userEvent.click(button);
    await waitFor(() => expect(onSubmit).not.toBeCalled());
  });

  it("Should be disabled during submission", async () => {
    render(<TestButtonForm onSubmit={() => new Promise(() => {})} />); // will be submitting forever
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    await userEvent.type(input, " Smith");
    await waitFor(() => expect(button).not.toBeDisabled());
    await userEvent.click(button);
    await waitFor(() => expect(button).toBeDisabled());
  });
});
