import React from "react";
import { render, screen } from "@testing-library/react";

import { SubHeader } from "components/layouts";

describe("SubHeader", () => {
  it("should render without error", () => {
    render(<SubHeader />);
    expect(screen.getByTestId("subheader")).toBeInTheDocument();
  });

  it("should display left action block when provided", () => {
    render(<SubHeader leftActionBlock="left action block" />);
    expect(screen.getByText("left action block")).toBeInTheDocument();
  });

  it("should display right action block when provided", () => {
    render(<SubHeader rightActionBlock="right action block" />);
    expect(screen.getByText("right action block")).toBeInTheDocument();
  });

  it("should display both action blocks when provided", () => {
    render(
      <SubHeader
        leftActionBlock="left action block"
        rightActionBlock="right action block"
      />
    );
    expect(screen.getByText("left action block")).toBeInTheDocument();
    expect(screen.getByText("right action block")).toBeInTheDocument();
  });
});
