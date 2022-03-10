import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Palette = ({ color, colorList = [], onChange }) => (
  <div className="flex flex-row flex-wrap items-start justify-start">
    {colorList.map((item, index) => (
      <div
        key={index}
        className={classnames("neeto-ui-color-palette__item", {
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
    PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
};

export default Palette;
