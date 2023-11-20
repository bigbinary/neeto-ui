import React, { useState } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Stepper } from "components";

const STEPS = [
  { id: 1, label: "Connect your calendar" },
  { id: 2, label: "Connect conferencing app" },
  { id: 3, label: "Set availability" },
];

const ControlledStepper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Stepper
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      steps={STEPS}
    />
  );
};

const testActiveClass = id => {
  expect(screen.getByTestId(`stepper-item-${id}`)).toHaveClass(
    "neeto-ui-stepper-item__wrapper--active"
  );
};

const testDoneClass = id => {
  expect(screen.getByTestId(`stepper-item-${id}`)).toHaveClass(
    "neeto-ui-stepper-item__wrapper--done"
  );
};

const testActiveClassOnClick = step => {
  const { id, label } = step;
  userEvent.click(screen.getByText(label));
  testActiveClass(id);
};

describe("Stepper", () => {
  it("should render without error", () => {
    render(<ControlledStepper />);
    STEPS.forEach(({ id, label }) => {
      expect(screen.getByText(id)).toBeInTheDocument();
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("should have the first element active by default", () => {
    render(<ControlledStepper />);
    testActiveClass(STEPS[0].id);
  });

  it("should have the second element active on clicking the second element", () => {
    render(<ControlledStepper />);
    testActiveClassOnClick(STEPS[1]);
    testDoneClass(STEPS[0].id);
  });

  it("should have the third element active on clicking the third element and then to second element", () => {
    render(<ControlledStepper />);
    testActiveClassOnClick(STEPS[2]);
    testActiveClassOnClick(STEPS[1]);
    testDoneClass(STEPS[0].id);
  });
});
