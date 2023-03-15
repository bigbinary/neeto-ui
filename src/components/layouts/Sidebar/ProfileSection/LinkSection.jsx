import React from "react";

import Typography from "components/Typography";

const LinkSection = ({ links }) => (
  <ul className="neeto-ui-profile-sublist">
    {links?.map(({ onClick, label, icon = null, ...otherProps }, idx) => {
      const IconSVG = icon;
      return (
        <li key={idx} className="neeto-ui-profile-sublist__item">
          <button
            onClick={onClick}
            {...otherProps}
            className="neeto-ui-profile-sublist__item-btn"
          >
            {icon && (
              <span className="neeto-ui-profile-sublist__item-btn-icon">
                <IconSVG />
              </span>
            )}
            <Typography
              style="body2"
              weight="normal"
              component="span"
              className="neeto-ui-profile-sublist__item-btn-label"
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
