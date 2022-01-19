import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  BLUR_INITIAL,
  BLUR_FINAL,
  BACKGROUND_INITIAL,
  BACKGROUND_FINAL,
  TRANSITION,
} from "../constants/overlay";

const variants = {
  invisible: {
    backgroundColor: BACKGROUND_INITIAL,
    backdropFilter: BLUR_INITIAL,
  },
  visible: {
    backgroundColor: BACKGROUND_FINAL,
    backdropFilter: BLUR_FINAL,
  }
};

const Portal = ({ children, ...otherProps }, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="invisible"
      animate="visible"
      exit="invisible"
      transition={{
        bounce: false,
        duration: TRANSITION,
      }}
      {...otherProps}
    >
      {children}
    </motion.div>
  );
};

export default forwardRef(Portal);
