import React from "react";

import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select as FormikSelect, Form } from "formik";

const SELECT_OPTIONS = [
  { label: "Option 1", value: "fselect-opt1" },
  { label: "Option 2", value: "fselect-opt2" },
];

const validate = values => {
  const errors = {};
  const isOptionValid = SELECT_OPTIONS.some(
    ({ label }) => values.formikSelect.label === label
  );
  if (!isOptionValid) {
    errors.formikSelect = "Invalid option selected";
  }

  return errors;
};

const SelectTest = ({ onSubmit }) => (
  <Form
    formikProps={{
      initialValues: { formikSelect: {} },
      validate,
      onSubmit: values => onSubmit(values),
    }}
  >
    <FormikSelect
      className="mb-8"
      data-testid="formik-select"
      label="Formik Select"
      name="formikSelect"
      options={SELECT_OPTIONS}
    />
    <button type="submit">Submit</button>
  </Form>
);

describe("formik/Select", () => {
  it("should render without error", () => {
    const { getByLabelText } = render(
      <Form formikProps={{ initialValues: {}, onSubmit: () => {} }}>
        <FormikSelect
          label="Formik Select"
          name="formikSelect"
          options={SELECT_OPTIONS}
        />
      </Form>
    );

    expect(getByLabelText("Formik Select")).toBeInTheDocument();
  });

  it("should show available options when clicked", async () => {
    render(
      <Form formikProps={{ initialValues: {}, onSubmit: () => {} }}>
        <FormikSelect
          label="Formik Select"
          name="formikSelect"
          options={SELECT_OPTIONS}
        />
      </Form>
    );

    const selectInput = screen.getByLabelText("Formik Select").closest("input");
    await userEvent.click(selectInput);
    for (const { label } of SELECT_OPTIONS) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("should should show no options if the input deosn't match any options", async () => {
    render(
      <Form formikProps={{ initialValues: {}, onSubmit: () => {} }}>
        <FormikSelect
          label="Formik Select"
          name="formikSelect"
          options={SELECT_OPTIONS}
        />
      </Form>
    );

    const selectInput = screen.getByLabelText("Formik Select").closest("input");
    await userEvent.type(selectInput, "Invalid Option");
    expect(screen.getByText(/No options/i)).toBeInTheDocument();
  });

  it("should submit with the chosen option", async () => {
    const onSubmit = jest.fn();
    render(<SelectTest {...{ onSubmit }} />);

    const selectInput = screen.getByLabelText("Formik Select").closest("input");
    await userEvent.click(selectInput);
    await userEvent.click(screen.getByText(SELECT_OPTIONS[0].label));
    await userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        formikSelect: SELECT_OPTIONS[0],
      })
    );
  });

  it("should display validation error when invalid input is provided", async () => {
    render(<SelectTest onSubmit={() => {}} />);
    await userEvent.click(screen.getByText("Submit"));
    expect(
      await screen.findByText(/Invalid option selected/i)
    ).toBeInTheDocument();
  });
});
