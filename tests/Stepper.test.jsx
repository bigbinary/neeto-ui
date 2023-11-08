import React, { useState } from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Stepper } from "components";

const STEPS = [
  { id: "1", label: "Connect your calendar" },
  { id: "2", label: "Connect conferencing app" },
  { id: "3", label: "Set availability" },
];

const getActiveClass = () =>
  document.querySelector(".neeto-ui-stepper-item__wrapper--active");

const getDoneClass = () =>
  document.querySelector(".neeto-ui-stepper-item__wrapper--done");

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

describe("Stepper", () => {
  it("should render without error", () => {
    const { getByText } = render(<ControlledStepper />);
    STEPS.forEach(({ id, label }) => {
      expect(getByText(id)).toBeInTheDocument();
      expect(getByText(label)).toBeInTheDocument();
    });
  });

  it("should have the first element active by default", () => {
    render(<ControlledStepper />);
    expect(getActiveClass()).toHaveTextContent(STEPS[0].label);
  });

  it("should have the second element active on clicking the second element", () => {
    const { getByText } = render(<ControlledStepper />);
    userEvent.click(getByText(STEPS[1].id));
    expect(getActiveClass()).toHaveTextContent(STEPS[1].label);
    expect(getDoneClass()).toHaveTextContent(STEPS[0].label);
  });

  it("should have the third element active on clicking the third element and then to second element", () => {
    const { getByText } = render(<ControlledStepper />);
    userEvent.click(getByText(STEPS[2].id));
    expect(getActiveClass()).toHaveTextContent(STEPS[2].label);
    userEvent.click(getByText(STEPS[1].id));
    expect(getActiveClass()).toHaveTextContent(STEPS[1].label);
    expect(getDoneClass()).toHaveTextContent(STEPS[0].label);
  });
});
