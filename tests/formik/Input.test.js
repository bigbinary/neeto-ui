import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input, Form } from "../../lib/components/formik";
import * as yup from "yup";

const TestForm = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <>
      <h1>Sign Up</h1>
      <Form
        formikProps={{
          initialValues: {
            firstName: "",
            lastName: "",
            email: "",
          },
          validationSchema: yup.object().shape({
            firstName: yup.string().required("First name is required"),
            lastName: yup.string().required("Last name is required"),
            email: yup
              .string()
              .email("Invalid email address")
              .required("Email address is required"),
          }),
          onSubmit: handleSubmit,
        }}
      >
        <Input name="firstName" label="First Name" />
        <Input name="lastName" label="Last Name" />
        <Input name="email" label="Email" type="email" />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

describe("formik/Input", () => {
  it("should render without error", () => {
    render(
      <Form
        formikProps={{
          initialValues: {},
          onSubmit: () => {},
        }}
      >
        <Input label="Input label" name="test" />
      </Form>
    );
    expect(screen.getByLabelText("Input label")).toBeInTheDocument();
  });

  it("should return entered values when used inside a formik form", async () => {
    const onSubmit = jest.fn();
    render(<TestForm onSubmit={onSubmit} />);
    userEvent.type(screen.getByLabelText("First Name"), "John");
    userEvent.type(screen.getByLabelText("Last Name"), "Doe");
    userEvent.type(screen.getByLabelText("Email"), "john.doe@email.com");
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@email.com",
      })
    );
  });

  it("should display validation error when invalid input is provided", async () => {
    const onSubmit = jest.fn();
    render(<TestForm onSubmit={onSubmit} />);
    userEvent.type(screen.getByLabelText("Email"), "john.doemail.com");
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(screen.getByText("Invalid email address")).toBeInTheDocument()
    );
  });
});
