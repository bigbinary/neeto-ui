import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../FormElements";

test("test form elements in playground", () => {
  render(<App />);

  //Input
  const requiredInput = screen.getByTestId("required-input");
  expect(requiredInput).toHaveValue("");
  fireEvent.change(requiredInput, { target: { value: "required" } });
  expect(requiredInput).toHaveValue("required");

  //TextArea
  const textarea = screen.getByTestId("textarea");
  expect(textarea).toHaveValue("");
  fireEvent.change(textarea, { target: { value: "text area" } });
  expect(textarea).toHaveValue("text area");

  //Switch
  const switchInput = screen.getByTestId("switch");
  expect(switchInput).not.toBeChecked();
  fireEvent.click(switchInput);
  expect(switchInput).toBeChecked();
  expect(switchInput).toHaveAttribute("type", "checkbox");
});
