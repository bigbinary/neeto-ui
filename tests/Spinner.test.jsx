import React from "react";

import { render } from "@testing-library/react";

import { Spinner } from "components";

describe("Spinner", () => {
  it("should render without error", () => {
    const { getByTestId } = render(<Spinner />);
    expect(getByTestId("spinner")).toBeInTheDocument();
  });
});
