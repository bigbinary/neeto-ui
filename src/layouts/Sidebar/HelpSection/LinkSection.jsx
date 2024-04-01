import React from "react";

import Typography from "src/Typography";
import { noop } from "utils";

const HelpLinkSection = ({ links }) => (
  <ul>
    {links?.map(
      ({ onClick = noop, label = "", icon = null, ...otherProps }, idx) => {
        const IconSVG = icon;

        return (
          <li className="neeto-ui-help-sublist__item" key={idx}>
            <button
              {...{ onClick }}
              className="neeto-ui-help-sublist__item-btn"
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
