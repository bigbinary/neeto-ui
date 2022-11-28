import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, Input, Form, Textarea } from "../../lib/components/formik";
import * as yup from "yup";

const FormikForm = ({ onSubmit, validateOnBlur, validateOnChange }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <Form
      formikProps={{
        initialValues: { name: "Oliver Smith" },
        validationSchema: yup.object().shape({
          name: yup.string().required("Name is required"),
        }),
        onSubmit: handleSubmit,
        validateOnBlur,
        validateOnChange,
      }}
      className="nui-form-wrapper"
    >
      <Input name="name" label="First Name" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const EmptyMultiLineForm = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <Form
      formikProps={{
        initialValues: {address: ""},
        validationSchema: yup.object().shape({
          address: yup.string().trim("").required("Address is required"),
        }),
        onSubmit: handleSubmit,
      }}
      className="nui-form-wrapper"
    >
      <Textarea id="address" name="address" label="Address" />
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
    render(<FormikForm onSubmit={onSubmit} />);
    const input = screen.getByLabelText("First Name");
    const button = screen.getByRole("button");
    userEvent.type(input, "{selectall}{backspace}");
    userEvent.type(input, "Oliver");
    await waitFor(() => expect(button).not.toBeDisabled());
    userEvent.click(button);
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
    render(<FormikForm onSubmit={onSubmit} />);
    const input = screen.getByLabelText("First Name");
    const button = screen.getByRole("button");
    userEvent.type(input, "{selectall}{backspace}");
    await waitFor(() => expect(button).toBeDisabled());
    userEvent.click(button);
    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
  });

  it("should not validate form on value change or field blur until form is submitted once", async () => {
    const onSubmit = jest.fn();
    render(<FormikForm validateOnBlur={true} validateOnChange={true} onSubmit={onSubmit} />);

    const formWrapper = screen.getByTestId("neeto-ui-form-wrapper");
    const input = screen.getByLabelText("First Name");
    const button = screen.getByRole("button");

    // clear initial values and blur field.
    userEvent.type(input, "{selectall}{backspace}");
    userEvent.click(formWrapper);
    expect(screen.queryByText("Name is required")).not.toBeInTheDocument();

    userEvent.click(button); // Try submitting form with empty value.
    await waitFor(() => expect(screen.getByText("Name is required")).toBeInTheDocument());
    // Check error is removed when user types in value.
    userEvent.type(input, "Oliver Smith");
    await waitFor(() => expect(screen.queryByText("Name is required")).not.toBeInTheDocument());
    // Clear values and make sure error is shown for the onChange event.
    userEvent.type(input, "{selectall}{backspace}");
    await waitFor(() => expect(screen.getByText("Name is required")).toBeInTheDocument());

    userEvent.type(input, "Oliver");
    await waitFor(() => expect(button).not.toBeDisabled());
    userEvent.click(button);
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });

  it("should not validate the form until form is dirty", async () => {
    const onSubmit = jest.fn();
    render(<EmptyMultiLineForm onSubmit={onSubmit} />);

    const addressInput = screen.getByLabelText("Address");

    // Form is not dirty and hence it's not validated for the enter press.
    userEvent.type(addressInput, "{enter}");
    expect(screen.queryByText("Address is required")).not.toBeInTheDocument();

    // Form is dirty and hence it's validated for the second enter press
    // and submit is called since there is no error.
    userEvent.type(addressInput, "Address Line 1{enter}{enter}");
    expect(screen.queryByText("Address is required")).not.toBeInTheDocument();
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());

    // Form is cleared and the second enter should trigger validation
    // and since there's no value, the error message should be rendered.
    userEvent.type(addressInput, "{selectall}{backspace} {enter}{enter}");
    expect(await screen.findByText("Address is required")).toBeInTheDocument();
  });
});
