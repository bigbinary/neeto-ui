import React from "react";

import { render, screen } from "@testing-library/react";

import Slider from "components/Slider";

describe("Slider", () => {
  it("renders with default props", () => {
    render(<Slider label="slider" />);

    expect(screen.getByText("slider")).toBeInTheDocument();
  });

  it("should render with error text", () => {
    render(<Slider error="Error" label="slider" />);

    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});
