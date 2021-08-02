import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Spinner = ({ color, className, size }) => (
  <motion.div
    initial={{ opacity: 0 }}
    className={className}
    animate={{ opacity: 1, transition: { bounce: 0 } }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      animate={{
        rotate: [0, 360],
        transition: { repeat: Infinity },
      }}
      exit={{ opacity: 0 }}
    >
      <motion.svg
        style={{ color, height: size, width: size }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
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
  color: "currentColor",
  className: null,
  size: 14,
};

export default Spinner;
