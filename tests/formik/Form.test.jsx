import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, Input, Form, Textarea } from "formik";
import * as yup from "yup";

const FormikForm = ({
  onSubmit,
  validateOnBlur,
  validateOnChange,
  scrollToErrorField,
}) => {
  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <Form
      {...{ scrollToErrorField }}
      className="nui-form-wrapper"
      formikProps={{
        initialValues: { name: "Oliver Smith" },
        validationSchema: yup.object().shape({
          name: yup.string().required("Name is required"),
        }),
        onSubmit: handleSubmit,
        validateOnBlur,
        validateOnChange,
      }}
    >
      <Input label="First Name" name="name" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const EmptyMultiLineForm = ({ onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <Form
      className="nui-form-wrapper"
      formikProps={{
        initialValues: { address: "add" },
        validationSchema: yup.object().shape({
          address: yup.string().trim().required("Address is required"),
        }),
        onSubmit: handleSubmit,
      }}
    >
      <Textarea id="address" label="Address" name="address" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

describe("formik/Form", () => {
  it("should render form elements", () => {
    render(<FormikForm />);
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
  });

  it("should render form elements with initial values", () => {
    render(<FormikForm />);
    expect(screen.getByLabelText("First Name")).toHaveValue("Oliver Smith");
  });

  it("should submit form", async () => {
    const onSubmit = jest.fn();
    render(<FormikForm {...{ onSubmit }} />);
    const input = screen.getByLabelText("First Name");
    const button = screen.getByRole("button");
    await userEvent.clear(input);
    await userEvent.type(input, "Oliver");
    await waitFor(() => expect(button).not.toBeDisabled());
    await userEvent.click(button);
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({ name: "Oliver" })
    );
  });

  it("should render form with custom classname", () => {
    render(<FormikForm />);
    expect(screen.getByTestId("neeto-ui-form-wrapper")).toHaveClass(
      "nui-form-wrapper"
    );
  });

  it("should not submit form if validation fails", async () => {
    const onSubmit = jest.fn();
    const scrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    render(<FormikForm {...{ onSubmit }} />);
    const input = screen.getByLabelText("First Name");
    const button = screen.getByRole("button");
    await userEvent.clear(input);
    await waitFor(() => expect(button).not.toBeDisabled());
    await userEvent.click(button);
    await waitFor(() => {
      expect(scrollIntoView).not.toHaveBeenCalled();
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  it("should call scrollIntoView function if form is invalid but hasScrollToErrorField prop is true", async () => {
    const onSubmit = jest.fn();
    const scrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    render(<FormikForm {...{ onSubmit }} scrollToErrorField />);
    const input = screen.getByLabelText("First Name");
    const button = screen.getByRole("button");
    await userEvent.clear(input);
    await waitFor(() => expect(button).not.toBeDisabled());
    await userEvent.click(button);
    await waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
        block: "center",
      });
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  it("should not validate the form until form is dirty", async () => {
    const onSubmit = jest.fn();
    render(<EmptyMultiLineForm {...{ onSubmit }} />);

    const addressInput = screen.getByLabelText("Address");

    // Form is not dirty and hence it's not validated or submitted for the enter press.
    await userEvent.type(addressInput, "{meta>}{enter}");
    expect(screen.queryByText("Address is required")).not.toBeInTheDocument();
    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());

    // Form is dirty and hence it's validated for the second enter press
    // and submit is called since there is no error.
    await userEvent.type(addressInput, "Address Line 1 {meta>}{enter}");
    expect(screen.queryByText("Address is required")).not.toBeInTheDocument();
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());

    // Form is cleared and the second enter should trigger validation
    // and since there's no value, the error message should be rendered.
    await userEvent.clear(addressInput);
    await userEvent.type(addressInput, "{meta>}{enter}");
    expect(await screen.findByText("Address is required")).toBeInTheDocument();
  });

  it("should not call submit on hitting enter with EmptyMultiLineForm", async () => {
    const onSubmit = jest.fn();
    render(<EmptyMultiLineForm {...{ onSubmit }} />);

    const addressInput = screen.getByLabelText("Address");

    await userEvent.type(addressInput, "{enter}");
    expect(screen.queryByText("Address is required")).not.toBeInTheDocument();
    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
  });
});
