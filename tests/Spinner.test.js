import React from "react";
import { Spinner } from "components";
import { render } from "@testing-library/react";

describe("Spinner", () => {
  it("should render without error", () => {
    const { getByTestId } = render(<Spinner />);
    expect(getByTestId("spinner")).toBeInTheDocument();
  });
});
