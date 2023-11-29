import React, { useState } from "react";

import { Clock, Close } from "neetoicons";
import PropTypes from "prop-types";

const HoverIcon = ({ time }) => {
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

HoverIcon.propTypes = {
  /**
   * To specify the time value.
   */
  time: PropTypes.string,
};

export default HoverIcon;
