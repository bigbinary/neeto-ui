import React, { useEffect } from "react";

import Typography from "./Typography";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const PageLoader = ({ text = null, ...otherProps }) => {

  const pathControls = useAnimation();
  const rotateControls = useAnimation();

  const pathVariants = {
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      pathLength: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const rotateVariants = {
    initial: {
      rotate: 0,
      transition: {
        duration: 0,
      },
    },
    rotate: {
      rotate: 180,
      transition: {
        duration: 1,
      },
    },
  };

  const sequence = async () => {
    await pathControls.start("visible");
    await rotateControls.start("rotate");
    await pathControls.start("hidden");
    await rotateControls.start("initial");
    return await sequence();
  };

  useEffect(() => {
    sequence();
  }, []);
  return (
    <div className="neeto-ui-pageloader__wrapper" {...otherProps}>
      <div className="neeto-ui-pageloader">
        <div className="neeto-ui-page-loader__content relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md p-2 mb-4">
          <motion.div
            variants={rotateVariants}
            animate={rotateControls}
            initial="initial"
            className="neeto-ui-bg-gray-800 absolute left-0 top-0 h-14 w-14 rounded-md"
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
              variants={pathVariants}
              animate={pathControls}
              initial="hidden"
            ></motion.path>
          </motion.svg>
        </div>
        {
          text && (
            <Typography
              style="h5"
              weight="semibold"
              className="neeto-ui-text-gray-500"
            >
              {text}
            </Typography>
          )
        }
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
