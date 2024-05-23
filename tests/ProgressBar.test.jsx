import React from "react";

import { render, screen } from "@testing-library/react";

import ProgressBar from "components/ProgressBar";

describe("ProgressBar", () => {
  it("renders with correct value", () => {
    render(<ProgressBar progressPercentage={50} progressValue="50%" />);

    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("should show the percentage% as progressValue when progressValue is not given", () => {
    render(<ProgressBar progressPercentage={50} />);

    expect(screen.getByText("50%")).toBeInTheDocument();
  });
});
