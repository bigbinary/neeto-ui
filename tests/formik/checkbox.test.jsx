import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox, Form } from "formik";
import * as yup from "yup";

const TestCheckboxForm = ({ onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <Form
      initialValues={{ formikCheckbox: false }}
      formikProps={{
        initialValues: { formikCheckbox: false },
        validationSchema: yup.object().shape({
          formikCheckbox: yup
            .boolean()
            .oneOf([true], "Checking the formik checkbox is checked.")
            .required("Checking the formik checkbox is required."),
        }),
        onSubmit: handleSubmit,
      }}
    >
      <Checkbox label="Formik Checkbox" name="formikCheckbox" />
      <button type="submit">Submit</button>
    </Form>
  );
};

describe("formik/Checkbox", () => {
  it("should render without error", () => {
    render(
      <Form formikProps={{ initialValues: {}, onSubmit: () => {} }}>
        <Checkbox label="Checkbox" name="checkbox" />
      </Form>
    );
    expect(screen.getByLabelText("Checkbox")).toBeInTheDocument();
  });

  it("should return checked when used inside a formik form", async () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(<TestCheckboxForm {...{ onSubmit }} />);
    const checkbox = getByRole("checkbox");
    await userEvent.click(checkbox);
    await userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({ formikCheckbox: true })
    );
  });

  it("should display error when checkbox is not checked", async () => {
    const onSubmit = jest.fn();
    render(<TestCheckboxForm {...{ onSubmit }} />);
    await userEvent.click(screen.getByText("Submit"));
    expect(
      await screen.findByText("Checking the formik checkbox is checked.")
    ).toBeVisible();
  });
});
