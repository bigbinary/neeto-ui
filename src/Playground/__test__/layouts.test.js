import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../Layouts";

test("test layouts in playground", () => {
  render(<App />);

  expect(screen.getByText("Layouts")).toBeInTheDocument();

  //Testing search input
  const searchInput = screen.getByTestId("search-input");
  expect(searchInput.value).toBe("");
  fireEvent.change(searchInput, { target: { value: "search" } });
  expect(searchInput.value).toBe("search");
});
