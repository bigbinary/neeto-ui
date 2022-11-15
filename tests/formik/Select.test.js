import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Select as FormikSelect, Form } from "../../lib/components/formik";

const SELECT_OPTIONS = [
  {
    label: "Option 1",
    value: "fselect-opt1",
  },
  {
    label: "Option 2",
    value: "fselect-opt2",
  },
];

const validate = (values) => {
  let errors = {};
  const isOptionValid = SELECT_OPTIONS.some(({ label }) =>
    values.formikSelect.label === label ? true : false
  );
  if (!isOptionValid) {
    errors.formikSelect = "Invalid option selected";
  }
  return errors;
};

const SelectTest = ({ onSubmit }) => {
  return (
    <Form
      formikProps={{
        initialValues: { formikSelect: {} },
        validate,
        onSubmit: (values) => onSubmit(values),
      }}
    >
      <FormikSelect
        name="formikSelect"
        label="Formik Select"
        options={SELECT_OPTIONS}
        className="mb-8"
        data-testid="formik-select"
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

describe("formik/Select", () => {
  it("should render without error", () => {
    const { getByLabelText } = render(
      <Form
        formikProps={{
          initialValues: {},
          onSubmit: () => {},
        }}
      >
        <FormikSelect
          name="formikSelect"
          label="Formik Select"
          options={SELECT_OPTIONS}
        />
      </Form>
    );

    expect(getByLabelText("Formik Select")).toBeInTheDocument();
  });

  it("should show available options when clicked", () => {
    render(
      <Form
        formProps={{
          initialValues: {},
          onSubmit: () => {},
        }}
      >
        <FormikSelect
          name="formikSelect"
          label="Formik Select"
          options={SELECT_OPTIONS}
        />
      </Form>
    );

    const selectInput = screen.getByLabelText("Formik Select").closest("input");
    userEvent.click(selectInput);
    for (const { label } of SELECT_OPTIONS) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("should should show no options if the input deosn't match any options", () => {
    render(
      <Form
        formProps={{
          initialValues: {},
          onSubmit: () => {},
        }}
      >
        <FormikSelect
          name="formikSelect"
          label="Formik Select"
          options={SELECT_OPTIONS}
        />
      </Form>
    );

    const selectInput = screen.getByLabelText("Formik Select").closest("input");
    userEvent.type(selectInput, "Invalid Option");
    expect(screen.getByText(/No options/i)).toBeInTheDocument();
  });

  it("should submit with the chosen option", async () => {
    const onSubmit = jest.fn();
    render(<SelectTest onSubmit={onSubmit} />);

    const selectInput = screen.getByLabelText("Formik Select").closest("input");
    userEvent.click(selectInput);
    userEvent.click(screen.getByText(SELECT_OPTIONS[0].label));
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        formikSelect: SELECT_OPTIONS[0],
      })
    );
  });

  it("should display validation error when invalid input is provided", async () => {
    render(<SelectTest onSubmit={() => {}} />);
    userEvent.click(screen.getByText("Submit"));
    expect(
      await screen.findByText(/Invalid option selected/i)
    ).toBeInTheDocument();
  });
});
