import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as yup from "yup";

import Form from "formikcomponents/Form";
import Textarea from "formikcomponents/Textarea";

const TestTextarea = ({ onSubmit }) => {
  const handleSubmit = (values, { setStatus }) => {
    onSubmit(values, setStatus);
  };

  return (
    <Form
      formikProps={{
        initialValues: { textarea: "" },
        validationSchema: yup.object().shape({
          textarea: yup
            .string()
            .min(10, "Must be atleast 10 characters long")
            .required("This field is required"),
        }),
        onSubmit: handleSubmit,
      }}
    >
      <Textarea label="Textarea label" name="textarea" />
      <button type="submit">Submit</button>
    </Form>
  );
};

describe("formik/Textarea", () => {
  it("should render without error", () => {
    render(<TestTextarea />);
    expect(screen.getByText(/Textarea label/i)).toBeInTheDocument();
  });

  it("should submit with the correct values", async () => {
    const onSubmit = jest.fn();
    render(<TestTextarea {...{ onSubmit }} />);
    await userEvent.type(screen.getByRole("textbox"), "Test input");
    await userEvent.click(screen.getByText("Submit"));
    await waitFor(() => {
      const [submittedData] = onSubmit.mock.calls[0];
      expect(submittedData).toStrictEqual({ textarea: "Test input" });
    });
  });

  it("should display validation error when invalid input is provided", async () => {
    render(<TestTextarea onSubmit={() => {}} />);
    await userEvent.click(screen.getByText("Submit"));
    expect(
      await screen.findByText("This field is required")
    ).toBeInTheDocument();

    await userEvent.type(screen.getByRole("textbox"), "Test");
    expect(
      await screen.findByText("Must be atleast 10 characters long")
    ).toBeInTheDocument();
  });

  it("should display inline error when the status is set", async () => {
    const serverErrorMessage = "Reason not valid";
    const onSubmit = (_, setStatus) => {
      setStatus({ textarea: serverErrorMessage });
    };
    render(<TestTextarea {...{ onSubmit }} />);
    await userEvent.type(screen.getByRole("textbox"), "Weather is not good!");
    await userEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText(serverErrorMessage)).toBeVisible();

    await userEvent.type(screen.getByRole("textbox"), "Okay");
    expect(screen.queryByText(serverErrorMessage)).not.toBeInTheDocument();
  });
});
