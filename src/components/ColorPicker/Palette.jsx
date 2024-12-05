import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import { TRANSPARENT } from "./constants";

const Palette = ({ color, colorList = [], onChange }) => (
  <div className="neeto-ui-flex neeto-ui-flex-row neeto-ui-flex-wrap neeto-ui-items-start neeto-ui-justify-start neeto-ui-color-palette neeto-ui-gap-1">
    {colorList.map(item => {
      const { hex, colorClassName } = item;
      const isTransparent = hex === TRANSPARENT;

      const isActive = Boolean(
        (color?.hex && color.hex === hex) ||
          (color?.colorClassName && color.colorClassName === colorClassName)
      );

      return (
        <div
          data-testid="color-palette-item"
          key={hex ?? colorClassName}
          className={classnames(
            "neeto-ui-color-palette__item neeto-ui-border",
            { active: isActive }
          )}
          onClick={() => onChange(item)}
        >
          <div
            style={{ backgroundColor: hex }}
            className={classnames({
              "transparent-bg-pattern": isTransparent,
              colorClassName: !isTransparent,
            })}
          />
        </div>
      );
    })}
  </div>
);

Palette.propTypes = {
  color: PropTypes.shape({
    hex: PropTypes.string,
    colorClassName: PropTypes.string,
  }),
  colorList: PropTypes.arrayOf(
    PropTypes.shape({
      hex: PropTypes.string,
      colorClassName: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
};

export default Palette;
