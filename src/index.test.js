import * as React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./Playground/index";

test("test buttons in playground", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Primary Button/i);
  expect(buttonElement).toBeInTheDocument();
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
