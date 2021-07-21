import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../Buttons";

test("test buttons in playground", () => {
  render(<App />);

  //Buttons
  const primaryButton = screen.getByTestId("primary-button");
  expect(primaryButton).toHaveTextContent("Primary Button");
  expect(primaryButton).toHaveClass("nui-btn", "nui-btn--primary");

  const secondaryButton = screen.getByTestId("secondary-button");
  expect(secondaryButton).toHaveTextContent("Secondary Button");
  expect(secondaryButton).toHaveClass("nui-btn", "nui-btn--secondary");

  const warningButton = screen.getByTestId("warning-button");
  expect(warningButton).toHaveTextContent("Warning Button");
  expect(warningButton).toHaveClass("nui-btn", "nui-btn--warning");

  const dangerButton = screen.getByTestId("danger-button");
  expect(dangerButton).toHaveTextContent("Danger Button");
  expect(dangerButton).toHaveClass("nui-btn", "nui-btn--danger");

  const textButton = screen.getByTestId("text-button");
  expect(textButton).toHaveTextContent("Text Button");
  expect(textButton).toHaveClass("nui-btn", "nui-btn--text");

  const linkButton = screen.getByTestId("link-button");
  expect(linkButton).toHaveTextContent("Link Button");
  expect(linkButton).toHaveClass("nui-btn", "nui-btn--link");

  //Dropdown
  const dropdown1 = screen.getByText("Dropdown with Action Button");
  const dropdown2 = screen.getByText("Action Dropdown");

  expect(dropdown1).toBeInTheDocument();
  expect(dropdown2).toBeInTheDocument();
});
