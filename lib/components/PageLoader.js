import React from "react";

import Typography from "./Typography";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { PATH_VARIANTS, ROTATE_VARIANTS } from "../constants/pageLoader";

const PageLoader = ({ text = "", ...otherProps }) => {
  return (
    <div className="neeto-ui-pageloader__wrapper" {...otherProps}>
      <div className="neeto-ui-pageloader neeto-ui-flex neeto-ui-flex-col neeto-ui-items-center neeto-ui-justify-center">
        <div className="neeto-ui-pageloader__content neeto-ui-flex neeto-ui-flex-shrink-0 neeto-ui-items-center neeto-ui-justify-center">
          <motion.div
            variants={ROTATE_VARIANTS}
            animate="rotate"
            initial="initial"
            className="neeto-ui-bg-gray-800 neeto-ui-pageloader__rotating-canvas"
            data-chromatic="ignore"
          />
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="none"
            viewBox="0 0 34 34"
            className="relative"
          >
            <path
              className="neeto-ui-page-loader__svg-placeholder-path"
              stroke="#1b1f23"
              strokeLinecap="round"
              strokeWidth="4.2"
              d="M15.6 28.9l-.65.65C10.54 33.96 3 30.837 3 24.6V13.84c0-3.742 4.524-5.616 7.17-2.97l13.66 13.66c2.646 2.646 7.17.772 7.17-2.97V10.1c0-6.237-7.54-9.36-11.95-4.95L17.7 6.5"
            ></path>
            <motion.path
              className="neeto-ui-page-loader__svg"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="4.2"
              d="M15.6 28.9l-.65.65C10.54 33.96 3 30.837 3 24.6V13.84c0-3.742 4.524-5.616 7.17-2.97l13.66 13.66c2.646 2.646 7.17.772 7.17-2.97V10.1c0-6.237-7.54-9.36-11.95-4.95L17.7 6.5"
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
