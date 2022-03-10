import React from "react";
import { Typography } from "../lib/components";
import { render } from "@testing-library/react";

describe("Typography", () => {
  it("should render without error", () => {
    const { getByText } = render(<Typography style="body1">Typography</Typography>);
    expect(getByText("Typography")).toBeInTheDocument();
  });
});
