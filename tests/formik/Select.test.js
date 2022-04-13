import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { Formik, Form } from "formik";
import { Select as FormikSelect } from "../../lib/components/formik";
import userEvent from "@testing-library/user-event";

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
const SelectTest = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ formikSelect: "" }}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form>
        <FormikSelect
          name="formikSelect"
          label="Formik Select"
          options={SELECT_OPTIONS}
          className="mb-8"
          data-testid="formik-select"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

describe("formik/Select", () => {
  it("should render without error", () => {
    const { getByLabelText } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <FormikSelect
            name="formikSelect"
            label="Formik Select"
            options={SELECT_OPTIONS}
          />
        </Form>
      </Formik>
    );

    expect(getByLabelText("Formik Select")).toBeInTheDocument();
  });

  it("should show available options when clicked", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <FormikSelect
            name="formikSelect"
            label="Formik Select"
            options={SELECT_OPTIONS}
          />
        </Form>
      </Formik>
    );

    const selectInput = screen.getByLabelText("Formik Select").closest("input");
    userEvent.click(selectInput);
    for (const { label } of SELECT_OPTIONS) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("should should show no options if the input deosn't match any options", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <FormikSelect
            name="formikSelect"
            label="Formik Select"
            options={SELECT_OPTIONS}
          />
        </Form>
      </Formik>
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
});
