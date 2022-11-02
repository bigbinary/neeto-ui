import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
<<<<<<< HEAD
import { Formik, Form } from "formik";
import { MultiEmailInput } from "../../lib/components/formik";
=======
import { EmailInput, Form } from "../../lib/components/formik";
>>>>>>> 282786b (Updated tests to use Form component and fixed flaky tests)
import * as yup from "yup";

const TestMultiEmailInputForm = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <>
      <Form
        formikProps={{
          initialValues: { emails: [] },
          validationSchema: yup.object().shape({
            emails: yup
              .array()
              .min(1, "Atleast one email is required.")
              .test(
                "are-all-emails-valid",
                "All emails should be valid.",
                (emails) => emails.every(({ valid }) => valid)
              )
              .nullable(),
          }),
          onSubmit: handleSubmit,
        }}
      >
<<<<<<< HEAD
        <Form>
          <MultiEmailInput label="Email(s)" name="emails" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
=======
        <EmailInput label="Email(s)" name="emails" />
        <button type="submit">Submit</button>
      </Form>
>>>>>>> 282786b (Updated tests to use Form component and fixed flaky tests)
    </>
  );
};

describe("formik/Input", () => {
  it("should render without error", () => {
    render(
<<<<<<< HEAD
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <MultiEmailInput name="emails" />
        </Form>
      </Formik>
=======
      <Form
        formikProps={{
          initialValues: {},
          onSubmit: () => {},
        }}
      >
        <EmailInput name="emails" />
      </Form>
>>>>>>> 282786b (Updated tests to use Form component and fixed flaky tests)
    );
    expect(screen.getByText("Email(s)")).toBeInTheDocument();
  });

  it("should return entered values when used inside a formik form", async () => {
    const onSubmit = jest.fn();
    render(<TestMultiEmailInputForm onSubmit={onSubmit} />);

    const emailInput = screen.getByRole("combobox");
    userEvent.paste(
      emailInput,
      "john.doe@email.com  sam.doe@email.com oliver.doe@email.com"
    );
    userEvent.click(document.body);
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        emails: [
          {
            label: "john.doe@email.com",
            valid: true,
            value: "john.doe@email.com",
          },
          {
            label: "sam.doe@email.com",
            valid: true,
            value: "sam.doe@email.com",
          },
          {
            label: "oliver.doe@email.com",
            valid: true,
            value: "oliver.doe@email.com",
          },
        ],
      })
    );
  });

  it("should display validation error when invalid email is provided", async () => {
    const onSubmit = jest.fn();
    render(<TestMultiEmailInputForm onSubmit={onSubmit} />);
    const emailInput = screen.getByRole("combobox");
    userEvent.paste(emailInput, "sam.doeemail.com");
    userEvent.click(document.body);
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(
        screen.getByText("All emails should be valid.")
      ).toBeInTheDocument()
    );
  });

  it("should display error when no email is provided", async () => {
    const onSubmit = jest.fn();
    render(<TestMultiEmailInputForm onSubmit={onSubmit} />);
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(
        screen.getByText("Atleast one email is required.")
      ).toBeInTheDocument()
    );
  });
});
