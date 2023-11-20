import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as yup from "yup";

import { Checkbox, Form } from "components/formik";

const TestCheckboxForm = ({ onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <Form
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
      initialValues={{
        formikCheckbox: false,
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
      <Form
        formikProps={{
          initialValues: {},
          onSubmit: () => {},
        }}
      >
        <Checkbox label="Checkbox" name="checkbox" />
      </Form>
    );
    expect(screen.getByLabelText("Checkbox")).toBeInTheDocument();
  });

  it("should return checked when used inside a formik form", async () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(<TestCheckboxForm onSubmit={onSubmit} />);
    const checkbox = getByRole("checkbox");
    await userEvent.click(checkbox);
    await userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({ formikCheckbox: true })
    );
  });

  it("should display error when checkbox is not checked", async () => {
    const onSubmit = jest.fn();
    render(<TestCheckboxForm onSubmit={onSubmit} />);
    await userEvent.click(screen.getByText("Submit"));
    expect(
      await screen.findByText("Checking the formik checkbox is checked.")
    ).toBeVisible();
  });
});
