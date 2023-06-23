import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as yup from "yup";

import { Button, Input, Form, Textarea } from "components/formik";

const FormikForm = ({
  onSubmit,
  validateOnBlur,
  validateOnChange,
  hasScrollToErrorField,
}) => {
  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <Form
      className="nui-form-wrapper"
      hasScrollToErrorField={hasScrollToErrorField}
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
        initialValues: { address: "" },
        validationSchema: yup.object().shape({
          address: yup.string().trim("").required("Address is required"),
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
    const scrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    render(<FormikForm onSubmit={onSubmit} />);
    const input = screen.getByLabelText("First Name");
    const button = screen.getByRole("button");
    userEvent.type(input, "{selectall}{backspace}");
    await waitFor(() => expect(button).not.toBeDisabled());
    userEvent.click(button);
    await waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
        block: "center",
      });
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  it("should not call scrollIntoView function if form is invalid but hasScrollToErrorField prop is false", async () => {
    const onSubmit = jest.fn();
    const scrollIntoView = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    render(<FormikForm hasScrollToErrorField={false} onSubmit={onSubmit} />);
    const input = screen.getByLabelText("First Name");
    const button = screen.getByRole("button");
    userEvent.type(input, "{selectall}{backspace}");
    await waitFor(() => expect(button).not.toBeDisabled());
    userEvent.click(button);
    await waitFor(() => {
      expect(scrollIntoView).not.toHaveBeenCalled();
      expect(onSubmit).not.toHaveBeenCalled();
    });
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
    userEvent.type(addressInput, "Address Line 1 {meta}{enter}");
    expect(screen.queryByText("Address is required")).not.toBeInTheDocument();
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());

    // Form is cleared and the second enter should trigger validation
    // and since there's no value, the error message should be rendered.
    userEvent.type(addressInput, "{selectall}{backspace} {meta}{enter}");
    expect(await screen.findByText("Address is required")).toBeInTheDocument();
  });

  it("should not call submit on hitting enter with EmptyMultiLineForm", async () => {
    const onSubmit = jest.fn();
    render(<EmptyMultiLineForm onSubmit={onSubmit} />);

    const addressInput = screen.getByLabelText("Address");

    userEvent.type(addressInput, "{enter}");
    expect(screen.queryByText("Address is required")).not.toBeInTheDocument();
    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
  });
});
