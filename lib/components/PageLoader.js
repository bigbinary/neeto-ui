import React from "react";

import Typography from "./Typography";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { PATH_VARIANTS, ROTATE_VARIANTS } from "../constants/pageLoader";

const PageLoader = ({ text = "", ...otherProps }) => {
  return (
    <div className="neeto-ui-pageloader__wrapper" {...otherProps}>
      <div className="neeto-ui-pageloader">
        <div className="relative flex items-center justify-center flex-shrink-0 p-2 mb-4 rounded-md neeto-ui-page-loader__content h-14 w-14">
          <motion.div
            variants={ROTATE_VARIANTS}
            animate="rotate"
            initial="initial"
            className="absolute top-0 left-0 rounded-md neeto-ui-bg-gray-800 h-14 w-14"
            data-chromatic="ignore"
          />
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 20 25"
            className="relative"
          >
            <path
              className="neeto-ui-page-loader__svg-placeholder-path"
              stroke="#1b1f23"
              strokeLinecap="round"
              strokeWidth="2.5"
              d="M10.44 18.069l-4.1 4.381c-1 1-4.2 1.393-4.3-2-.09-3.104 0-8.372 0-10.636 0-3.13 2.46-2.715 3.8-1.414 2 1.94 6.617 6.554 8.95 8.818 1.063 1.031 3.65 1.345 3.65-1.76V4.785c0-2.171-2.14-3.542-3.8-2.335-2.117 1.541-3.766 3.951-4.6 4.76"
            ></path>
            <motion.path
              className="neeto-ui-page-loader__svg"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2.5"
              d="M10.44 18.069l-4.1 4.381c-1 1-4.2 1.393-4.3-2-.09-3.104 0-8.372 0-10.636 0-3.13 2.46-2.715 3.8-1.414 2 1.94 6.617 6.554 8.95 8.818 1.063 1.031 3.65 1.345 3.65-1.76V4.785c0-2.171-2.14-3.542-3.8-2.335-2.117 1.541-3.766 3.951-4.6 4.76"
              variants={PATH_VARIANTS}
              initial="hidden"
              animate="visible"
            ></motion.path>
          </motion.svg>
        </div>
        {text && (
          <Typography
            style="h5"
            weight="semibold"
            className="neeto-ui-text-gray-500"
          >
            {text}
          </Typography>
        )}
      </div>
    </div>
  );
};

PageLoader.propTypes = {
  /**
   * Text to indicate loading status (optional).
   */
  text: PropTypes.string,
};

export default PageLoader;
