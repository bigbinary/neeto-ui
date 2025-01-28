import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import tinycolor from "tinycolor2";

import { DEFAULT_PALETTE_COLORS } from "./constants";

const Palette = ({ color, colorList = DEFAULT_PALETTE_COLORS, onChange }) => (
  <div className="neeto-ui-flex neeto-ui-flex-row neeto-ui-flex-wrap neeto-ui-items-start neeto-ui-justify-start neeto-ui-color-palette neeto-ui-gap-1">
    {colorList.map(item => {
      const { hex, rgb } = item;
      const colorObject = tinycolor(hex ?? rgb);
      const isTransparent = colorObject.getAlpha() === 0;
      const isActive = Boolean(
        // hex is case insensitive.
        color?.toLocaleLowerCase() === hex?.toLocaleLowerCase() || color === rgb
      );

      return (
        <div
          data-testid="color-palette-item"
          key={hex ?? rgb}
          className={classnames(
            "neeto-ui-color-palette__item neeto-ui-border",
            { active: isActive }
          )}
          onClick={() => onChange(hex ?? rgb)}
        >
          <div
            style={{ backgroundColor: hex ?? rgb }}
            className={classnames({
              "transparent-bg-pattern": isTransparent,
            })}
          />
        </div>
      );
    })}
  </div>
);

Palette.propTypes = {
  color: PropTypes.string,
  colorList: PropTypes.arrayOf(
    PropTypes.shape({
      hex: PropTypes.string,
      rgb: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          r: PropTypes.number,
          g: PropTypes.number,
          b: PropTypes.number,
        }),
      ]),
    })
  ),
  onChange: PropTypes.func,
};

export default Palette;
