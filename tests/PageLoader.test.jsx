import React from "react";

import { render } from "@testing-library/react";

import { PageLoader } from "components";

describe("PageLoader", () => {
  it("should render without error", () => {
    const { getByTestId } = render(<PageLoader data-testid="pageloader" />);
    expect(getByTestId("pageloader")).toBeInTheDocument();
  });

  it("should render text without error", () => {
    const { getByText } = render(<PageLoader text="Loading" />);
    expect(getByText("Loading")).toBeInTheDocument();
  });
});
