import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../Buttons";

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
