import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { Slider } from "components/formik";

describe("Slider", () => {
  it("should display validation error", async () => {
    const onSubmit = jest.fn();
    render(
      <Formik
        initialValues={{ slider: 0 }}
        validationSchema={yup.object().shape({
          slider: yup.number().min(1, "Min 1"),
        })}
        onSubmit={onSubmit}
      >
        <Form>
          <Slider name="slider" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
    userEvent.click(screen.getByRole("slider"));
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() => expect(screen.getByText("Min 1")).toBeInTheDocument());
  });
});
