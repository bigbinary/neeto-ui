import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input, Form } from "formik";
import * as yup from "yup";

const TestForm = ({ onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <Form
        formikProps={{
          initialValues: { firstName: "", lastName: "", email: "" },
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
        <Input
          label="First Name"
          name="firstName"
          rejectCharsRegex={/[0-9]+/}
        />
        <Input label="Last Name" name="lastName" />
        <Input label="Email" name="email" type="email" />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

describe("formik/Input", () => {
  it("should render without error", () => {
    render(
      <Form formikProps={{ initialValues: {}, onSubmit: () => {} }}>
        <Input label="Input label" name="test" />
      </Form>
    );
    expect(screen.getByLabelText("Input label")).toBeInTheDocument();
  });

  it("should return entered values when used inside a formik form", async () => {
    const onSubmit = jest.fn();
    render(<TestForm {...{ onSubmit }} />);
    await userEvent.type(screen.getByLabelText("First Name"), "John");
    await userEvent.type(screen.getByLabelText("Last Name"), "Doe");
    await userEvent.type(screen.getByLabelText("Email"), "john.doe@email.com");
    await userEvent.click(screen.getByText("Submit"));
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
    render(<TestForm {...{ onSubmit }} />);
    await userEvent.type(screen.getByLabelText("Email"), "john.doemail.com");
    await userEvent.click(screen.getByText("Submit"));
    expect(
      await screen.findByText("First name is required")
    ).toBeInTheDocument();
  });

  it("should display validation error when string having only rejected characters is provided", async () => {
    const onSubmit = jest.fn();
    render(<TestForm {...{ onSubmit }} />);
    await userEvent.type(screen.getByLabelText("First Name"), "123");
    await userEvent.click(screen.getByText("Submit"));

    expect(
      await screen.findByText("First name is required")
    ).toBeInTheDocument();
  });
});
