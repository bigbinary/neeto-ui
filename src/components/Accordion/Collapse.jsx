import React from "react";

import { AnimatePresence, motion } from "framer-motion";

const Collapse = ({
  open = false,
  children,
  className = "",
  ...otherProps
}) => (
  <AnimatePresence>
    {open && (
      <motion.div
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        initial={{ opacity: 0, height: 0, overflow: "hidden" }}
        transition={{ duration: 0.3 }}
        {...otherProps}
      >
        <div className={className}>{children}</div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Collapse;
