import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../Formik";

test("test formik inputs in playground", () => {
  render(<App />);

  //Formik input
  const formikInput = screen.getByTestId("formik-input");
  expect(formikInput.value).toBe("");
  expect(formikInput.placeholder).toBe("Type Something");
  fireEvent.change(formikInput, { target: { value: "foo" } });
  expect(formikInput.value).toBe("foo");

  //Formik radio
  const formikRadio = screen.getByText("Formik Radio");
  expect(formikRadio).toBeInTheDocument();

  //Formik checkbox
  const formikSelect = screen.getByText("Formik Select");
  expect(formikSelect).toBeInTheDocument();
});
