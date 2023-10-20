import React from "react";

import { render } from "@testing-library/react";

import { Slider } from "components";

describe("Slider", () => {
  it("renders with default props", () => {
    const { container } = render(<Slider />);
    const slider = container.querySelector(".ant-slider");
    expect(slider).toBeInTheDocument();
  });
});
