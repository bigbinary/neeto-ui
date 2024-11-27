import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Palette = ({ color, colorList = [], onChange }) => (
  <div className="neeto-ui-flex neeto-ui-flex-row neeto-ui-flex-wrap neeto-ui-items-start neeto-ui-justify-start neeto-ui-color-palette neeto-ui-gap-1">
    {colorList.map((item, index) => (
      <div
        data-testid="color-palette-item"
        key={index}
        className={classnames("neeto-ui-color-palette__item neeto-ui-border", {
          active: color && color.from === item.from && color.to === item.to,
        })}
        onClick={() => onChange(item.from, item.to)}
      >
        <div className={`bg-gradient-to-r from-${item.from} to-${item.to}`} />
      </div>
    ))}
  </div>
);

Palette.propTypes = {
  color: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string,
  }),
  colorList: PropTypes.arrayOf(
    PropTypes.shape({ from: PropTypes.string, to: PropTypes.string })
  ),
  onChange: PropTypes.func,
};

export default Palette;
