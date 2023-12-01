import React, { useState } from "react";

import { Clock, Close } from "neetoicons";
import PropTypes from "prop-types";

const HoverIcon = ({ time = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseLeave={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
    >
      {hovered && time ? <Close size={16} /> : <Clock size={16} />}
    </div>
  );
};

/**
 * time prop is required to find the feild is filled or not
 */
HoverIcon.propTypes = { time: PropTypes.string.isRequired };

export default HoverIcon;
