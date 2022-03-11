import React from "react";
import { PageLoader } from "../lib/components";
import { render } from "@testing-library/react";

describe("PageLoader", () => {
  it("should render without error", () => {
    const { getByTestId } = render(<PageLoader/>);
    expect(getByTestId("pageloader")).toBeInTheDocument();
  });

  it("should render text without error", () => {
    const { getByText } = render(<PageLoader text="Loading"/>);
    expect(getByText("Loading")).toBeInTheDocument();
  });
});
