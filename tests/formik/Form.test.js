import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, Input, Form } from "../../lib/components/formik";
import * as yup from "yup";

const FormikForm = ({ onSubmit }) => {
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
      }}
      className="nui-form-wrapper"
    >
      <Input name="name" label="First Name" />
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
});
