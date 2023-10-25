import React from "react";

import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Spinner = ({ color, className, size }) => (
  <motion.div
    animate={{ opacity: 1, transition: { bounce: 0 } }}
    className={className}
    data-chromatic="ignore"
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
  >
    <motion.div
      exit={{ opacity: 0 }}
      animate={{
        rotate: [0, 360],
        transition: { repeat: Infinity, duration: 0.7 },
      }}
    >
      <motion.svg
        fill="none"
        style={{ color, height: size, width: size }}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          style={{ opacity: 0.5 }}
        />
        <path
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
          style={{ opacity: 1 }}
        />
      </motion.svg>
    </motion.div>
  </motion.div>
);

Spinner.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Spinner.defaultProps = {
  color: "#ffffff",
  className: null,
  size: 14,
};

export default Spinner;
