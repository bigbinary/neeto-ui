import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as yup from "yup";

import Form from "formikcomponents/Form";
import MultiEmailInput from "formikcomponents/MultiEmailInput";

const TestMultiEmailInputForm = ({ onSubmit }) => {
  const handleSubmit = (values, { setStatus }) => {
    onSubmit(values, setStatus);
  };

  return (
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
              emails => emails.every(({ valid }) => valid)
            )
            .nullable(),
        }),
        onSubmit: handleSubmit,
      }}
    >
      <MultiEmailInput label="Email(s)" name="emails" />
      <button type="submit">Submit</button>
    </Form>
  );
};

describe("formik/EmailInput", () => {
  it("should render without error", () => {
    render(
      <Form formikProps={{ initialValues: {}, onSubmit: () => {} }}>
        <MultiEmailInput name="emails" />
      </Form>
    );
    expect(screen.getByText("Email(s)")).toBeInTheDocument();
  });

  it("should return entered values when used inside a formik form", async () => {
    const onSubmit = jest.fn();
    render(<TestMultiEmailInputForm {...{ onSubmit }} />);

    const emailInput = screen.getByRole("combobox");
    await userEvent.type(
      emailInput,
      "john.doe@email.com  sam.doe@email.com oliver.doe@email.com"
    );
    await userEvent.click(document.body);
    await userEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      const [submittedData] = onSubmit.mock.calls[0];
      expect(submittedData.emails).toStrictEqual([
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
      ]);
    });
  });

  it("should display validation error when invalid email is provided", async () => {
    const onSubmit = jest.fn();
    render(<TestMultiEmailInputForm {...{ onSubmit }} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "sam.doeemail.com");
    await userEvent.click(document.body);
    await userEvent.click(
      await screen.findByRole("button", { name: "Submit" })
    );

    expect(
      await screen.findByText("All emails should be valid.")
    ).toBeInTheDocument();
  });

  it("should display error when no email is provided", async () => {
    const onSubmit = jest.fn();
    render(<TestMultiEmailInputForm {...{ onSubmit }} />);
    await userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(
        screen.getByText("Atleast one email is required.")
      ).toBeInTheDocument()
    );
  });

  it("should display inline error the status is set", async () => {
    const serverErrorMessage = "Email(s) already used";
    const onSubmit = (_, setStatus) => {
      setStatus({ emails: serverErrorMessage });
    };
    render(<TestMultiEmailInputForm {...{ onSubmit }} />);
    const emailInput = screen.getByRole("combobox");
    await userEvent.type(emailInput, "sam.doe@email.com");
    await userEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText(serverErrorMessage)).toBeVisible();

    await userEvent.type(emailInput, "john.doe@email.com");
    await userEvent.click(document.body);
    expect(screen.queryByText(serverErrorMessage)).not.toBeInTheDocument();
  });
});
