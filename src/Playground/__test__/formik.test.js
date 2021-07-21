import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../Formik";

test("test formik components in playground", () => {
  render(<App />);

  //Formik input
  const formikInput = screen.getByTestId("formik-input");
  expect(formikInput).toHaveValue("");
  expect(formikInput.placeholder).toBe("Type Something");
  fireEvent.change(formikInput, { target: { value: "foo" } });
  expect(formikInput).toHaveValue("foo");

  //Formik radio
  const formikRadio = screen.getByText("Formik Radio");
  expect(formikRadio).toBeInTheDocument();

  //Formik select
  const formikSelect = screen.getByText("Formik Select");
  expect(formikSelect).toBeInTheDocument();
});
