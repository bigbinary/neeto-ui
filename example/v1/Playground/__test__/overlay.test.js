import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../Overlays";

test("test overlays in playground", () => {
  render(<App />);

  //Trigger pane
  const pane = screen.getByTestId("trigger-pane");
  fireEvent.click(pane);
  expect(screen.getByText("Example Pane")).toBeInTheDocument();

  //Trigger alert
  const alert = screen.getByTestId("trigger-alert");
  fireEvent.click(alert);
  expect(screen.getByText("Alert Title")).toBeInTheDocument();

  //Trigger modal
  const modal = screen.getByTestId("trigger-modal");
  fireEvent.click(modal);
  expect(screen.getByText("Modal Title")).toBeInTheDocument();
});
