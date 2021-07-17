import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../Components";

test("test buttons in playground", () => {
  render(<App />);

  expect(screen.getByText("Components")).toBeInTheDocument();
  expect(screen.getByText("Icon Picker")).toBeInTheDocument();
  expect(screen.getByText("Card with Static Children")).toBeInTheDocument();
  expect(screen.getByText("Card with Dynamic Children")).toBeInTheDocument();
  expect(screen.getByText("Callout")).toBeInTheDocument();
  expect(screen.getByText("Pagination")).toBeInTheDocument();
});
