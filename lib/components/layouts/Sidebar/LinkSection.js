import React from "react";

<<<<<<<< HEAD:lib/components/layouts/Sidebar/ProfileSection/LinkSection.jsx
import Typography from "components/Typography";
========
import Typography from "../../Typography";
>>>>>>>> 233ec56 (Added help section):lib/components/layouts/Sidebar/LinkSection.js

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
            {icon && <span className="neeto-ui-profile-sublist__item-btn-icon"><IconSVG /></span>}
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
