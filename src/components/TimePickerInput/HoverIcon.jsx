import React, { useState } from "react";

import { Clock, Close } from "neetoicons";

const HoverIcon = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseLeave={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
    >
      {hovered ? <Close size={16} /> : <Clock size={16} />}
    </div>
  );
};

export default HoverIcon;
