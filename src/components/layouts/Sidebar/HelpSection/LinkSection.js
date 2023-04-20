/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { noop } from "utils";

import Typography from "../../../Typography";

const HelpLinkSection = ({ links }) => (
  <ul>
    {links?.map(
      ({ onClick = noop, label = "", icon = null, ...otherProps }, idx) => {
        const IconSVG = icon;

        return (
          <li className="neeto-ui-help-sublist__item" key={idx}>
            <button
              className="neeto-ui-help-sublist__item-btn"
              onClick={onClick}
              {...otherProps}
            >
              {icon && (
                <span className="neeto-ui-help-sublist__item-btn-icon">
                  <IconSVG />
                </span>
              )}
              <Typography
                className="neeto-ui-help-sublist__item-btn-label"
                component="span"
                style="body2"
                weight="normal"
              >
                {label}
              </Typography>
            </button>
          </li>
        );
      }
    )}
  </ul>
);
export default HelpLinkSection;
