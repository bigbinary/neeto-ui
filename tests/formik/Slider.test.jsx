import React from "react";

import { render } from "@testing-library/react";
import { Formik, Form } from "formik";

import { Slider } from "components/formik";

describe("Slider", () => {
  it("renders without errors", () => {
    const onSubmit = jest.fn();
    const { container } = render(
      <Formik initialValues={{ slider: 0 }} onSubmit={onSubmit}>
        <Form>
          <Slider name="slider" />
        </Form>
      </Formik>
    );
    expect(container).toBeInTheDocument();
  });
});
