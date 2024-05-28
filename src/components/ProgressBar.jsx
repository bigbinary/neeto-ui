import React from "react";

import classNames from "classnames";
import { motion } from "framer-motion";
import propTypes from "prop-types";

const ProgressBar = ({ progressPercentage, progressValue, className = "" }) => (
  <div
    className={classNames([
      "neeto-ui-progress-bar__wrapper neeto-ui-rounded-full",
      className,
    ])}
  >
    <motion.div
      animate={{ width: `${progressPercentage}%` }}
      className="neeto-ui-progress-bar neeto-ui-rounded-full"
      initial={{ width: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {progressValue ?? `${progressPercentage}%`}
    </motion.div>
  </div>
);

ProgressBar.propTypes = {
  /**
   * To specify the value to be used as the width of the progress bar.
   */
  progressPercentage: propTypes.number,
  /**
   * To specify the progress value to be displayed on the progress bar as text.
   */
  progressValue: propTypes.string,
  /**
   * To specify external classnames as overrides to the ProgressBar component.
   */
  className: propTypes.string,
};

export default ProgressBar;
