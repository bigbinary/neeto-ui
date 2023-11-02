import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Stepper = ({ steps, activeIndex, setActiveIndex }) => (
  <div className="neeto-ui-stepper__wrapper">
    {steps.map(({ id, label }, index) => (
      <div className="neeto-ui-stepper-item__wrapper" key={id}>
        <button
          className={classnames("neeto-ui-stepper-item", {
            "neeto-ui-stepper-item--active": index === activeIndex,
            "neeto-ui-stepper-item--done": index < activeIndex,
          })}
          onClick={() => setActiveIndex(index)}
        >
          <span className="neeto-ui-stepper-item__stage">
            <span>{id}</span>
          </span>
          <span className="neeto-ui-stepper-item__label" data-text={label}>
            {label}
          </span>
        </button>
      </div>
    ))}
  </div>
);

Stepper.propTypes = {
  /**
   * To provide the array of steps
   */
  steps: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, label: PropTypes.string })
  ),
  /**
   * To specify the active step
   */
  activeIndex: PropTypes.number,
  /**
   * To specify the function to set the active step
   */
  setActiveIndex: PropTypes.func,
};

export default Stepper;
