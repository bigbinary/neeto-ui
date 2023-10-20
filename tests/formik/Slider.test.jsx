import React from "react";

import { render } from "@testing-library/react";

import { Slider } from "components";

describe("Slider", () => {
  it("renders without errors", () => {
    const { container } = render(<Slider name="slider" />);
    expect(container).toBeInTheDocument();
  });
});
