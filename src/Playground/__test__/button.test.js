import * as React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../index";

test("test buttons in playground", () => {
  render(<App />);

  //Buttons
  const primaryButton = screen.getByText("Primary Button");
  const secondaryButton = screen.getByText("Secondary Button");
  const warningButton = screen.getByText("Warning Button");
  const dangerButton = screen.getByText("Danger Button");
  const textButton = screen.getByText("Text Button");
  const linkButton = screen.getByText("Link Button");

  expect(primaryButton).toBeInTheDocument();
  expect(secondaryButton).toBeInTheDocument();
  expect(warningButton).toBeInTheDocument();
  expect(dangerButton).toBeInTheDocument();
  expect(textButton).toBeInTheDocument();
  expect(linkButton).toBeInTheDocument();

  //Dropdown
  const dropdown1 = screen.getByText("Dropdown with Action Button");
  const dropdown2 = screen.getByText("Action Dropdown");

  expect(dropdown1).toBeInTheDocument();
  expect(dropdown2).toBeInTheDocument();
});

// test("create a entry for cash-in", async () => {
//   render(<App />);

//   fireEvent.click(screen.getByTestId("cashin-btn"));

//   fireEvent.change(screen.getByTestId(/amount/i), {
//     target: { value: parseFloat(50.0) },
//   });

//   fireEvent.change(screen.getByTestId(/note/i), {
//     target: { value: "foobar" },
//   });

//   const createbtn = screen.getByTestId("create-entry-btn");

//   expect(createbtn.disabled).toBe(false);

//   fireEvent.click(screen.getByTestId("create-entry-btn"));
// });

// test("create a entry for cash-out", async () => {
//   render(<App />);

//   expect(screen.getByText(/No Entry Found!/i)).toBeInTheDocument();

//   fireEvent.click(screen.getByTestId("cashout-btn"));

//   fireEvent.change(screen.getByTestId(/amount/i), {
//     target: { value: parseFloat(50.0) },
//   });

//   fireEvent.change(screen.getByTestId(/note/i), {
//     target: { value: "foo" },
//   });

//   const createbtn = screen.getByTestId("create-entry-btn");

//   expect(createbtn.disabled).toBe(false);

//   fireEvent.click(screen.getByTestId("create-entry-btn"));
// });

// test("test to validate the zero balance", async () => {
//   render(<App />);

//   await waitFor(() =>
//     expect(screen.getByTestId("balance")).toHaveTextContent(/0 ₹/i)
//   );
// });
