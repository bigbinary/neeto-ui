import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Collapse = ({
  open = false,
  children,
  className = "",
  ...otherProps
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, height: 0, overflow: "hidden" }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          {...otherProps}
        >
          <div className={className}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Collapse;
