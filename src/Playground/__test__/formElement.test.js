import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../Buttons";

test("test form elements in playground", () => {
  render(<App />);

  //Inputs
  // const requiredInput = screen.getByTestId("required-input");
  // expect(requiredInput.value).toBe("");
  // fireEvent.change(requiredInput, { target: { value: "required" } });
  // expect(requiredInput.value).toBe("required");
});
