import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as yup from "yup";

import Form from "formikcomponents/Form";
import Input from "formikcomponents/Input";

const TestForm = ({ onSubmit }) => {
  const handleSubmit = (values, { setStatus }) => {
    onSubmit(values, setStatus);
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
    await waitFor(() => {
      const [submittedData] = onSubmit.mock.calls[0];
      expect(submittedData).toStrictEqual({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@email.com",
      });
    });
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

  it("should display inline error when the status is set", async () => {
    const serverErrorMessage = "Email already taken";
    const onSubmit = (_, setStatus) => {
      setStatus({ email: serverErrorMessage });
    };
    render(<TestForm {...{ onSubmit }} />);
    await userEvent.type(screen.getByLabelText("First Name"), "John");
    await userEvent.type(screen.getByLabelText("Last Name"), "Doe");
    const emailInput = screen.getByLabelText("Email");
    await userEvent.type(emailInput, "sam.doe@email.com");
    await userEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText(serverErrorMessage)).toBeVisible();

    await userEvent.type(emailInput, "john.doe@email.com");
    expect(screen.queryByText(serverErrorMessage)).not.toBeInTheDocument();
  });
});
