import React from "react";
import { render } from "@testing-library/react";
import { Formik, Form } from "formik";
import { Select as FormikSelect } from "../../lib/components/formik";

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
});
