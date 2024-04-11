import React from "react";

import Typography from "components/Typography";

const LinkSection = ({ links }) => (
  <ul className="neeto-ui-profile-sublist">
    {links?.map(({ onClick, label, icon = null, ...otherProps }, idx) => {
      const IconSVG = icon;

      return (
        <li className="neeto-ui-profile-sublist__item" key={idx}>
          <button
            {...{ onClick, ...otherProps }}
            className="neeto-ui-profile-sublist__item-btn"
          >
            {icon && (
              <span className="neeto-ui-profile-sublist__item-btn-icon">
                <IconSVG />
              </span>
            )}
            <Typography
              className="neeto-ui-profile-sublist__item-btn-label"
              component="span"
              style="body2"
              weight="normal"
            >
              {label}
            </Typography>
          </button>
        </li>
      );
    })}
  </ul>
);

export default LinkSection;
