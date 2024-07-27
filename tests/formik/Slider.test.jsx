import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import * as yup from "yup";

import Slider from "formikcomponents/Slider";

describe("Slider", () => {
  it("should display validation error", async () => {
    const onSubmit = jest.fn();
    render(
      <Formik
        {...{ onSubmit }}
        initialValues={{ slider: 0 }}
        validationSchema={yup.object().shape({
          slider: yup.number().min(1, "Min 1"),
        })}
      >
        <Form>
          <Slider name="slider" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
    await userEvent.click(screen.getByRole("slider"));
    await userEvent.click(screen.getByText("Submit"));
    await waitFor(() => expect(screen.getByText("Min 1")).toBeInTheDocument());
  });

  it("should display inline error when the status is set", async () => {
    const serverErrorMessage = "Invalid option";
    const onSubmit = setStatus => {
      setStatus({ slider: serverErrorMessage });
    };

    render(
      <Formik
        initialValues={{ slider: 10 }}
        onSubmit={(_, { setStatus }) => onSubmit(setStatus)}
      >
        <Form>
          <Slider name="slider" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
    const slider = screen.getByRole("slider");
    await userEvent.click(slider);
    await userEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText(serverErrorMessage)).toBeVisible();

    const { left, top } = slider.getBoundingClientRect();
    const targetPosition = left + 1;

    const pointerType = "mouse",
      keys = "[MouseLeft>]",
      target = slider;

    await userEvent.pointer([
      { target, coords: { x: left, y: top }, pointerType, keys },
      { coords: { x: targetPosition, y: top }, pointerType, keys },
    ]);
    expect(screen.queryByText(serverErrorMessage)).not.toBeInTheDocument();
  });
});
