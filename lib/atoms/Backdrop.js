import React from "react";
import { motion } from "framer-motion";
import {
  BLUR_INITIAL,
  BLUR_FINAL,
  BACKGROUND_INITIAL,
  BACKGROUND_FINAL,
  TRANSITION,
} from "../constants/overlay";

const Portal = ({ children, ...otherProps }) => {
  return (
    <motion.div
      initial={{
        backgroundColor: BACKGROUND_INITIAL,
        backdropFilter: BLUR_INITIAL,
      }}
      animate={{
        backgroundColor: BACKGROUND_FINAL,
        backdropFilter: BLUR_FINAL,
      }}
      exit={{
        backgroundColor: BACKGROUND_INITIAL,
        backdropFilter: BLUR_INITIAL,
      }}
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

export default Portal;
