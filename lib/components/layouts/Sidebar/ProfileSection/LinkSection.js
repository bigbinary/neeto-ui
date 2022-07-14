import React from "react";

import Typography from "../../../Typography";

const LinkSection = ({ links }) => (
  <ul className="neeto-ui-flex neeto-ui-flex-col neeto-ui-gap-2 neeto-ui-py-2 neeto-ui-m-0 neeto-ui-list-none neeto-ui-border-t neeto-ui-no-outline neeto-ui-border-gray-300">
    {links?.map(({ onClick, label, icon = null, ...otherProps }, idx) => {
      const IconSVG = icon;
      return (
        <li key={idx} className="neeto-ui-w-full">
          <button
            onClick={onClick}
            {...otherProps}
            className="neeto-ui-flex neeto-ui-w-full neeto-ui-p-2 neeto-ui-text-left neeto-ui-transition-colors neeto-ui-rounded neeto-ui-cursor-pointer neeto-ui-select-none hover:neeto-ui-bg-gray-100 focus:neeto-ui-bg-gray-100 neeto-ui-no-outline neeto-ui-text-gray-600 hover:neeto-ui-text-gray-800"
          >
            <Typography
              style="h5"
              weight="semibold"
              component="span"
              className="neeto-ui-flex neeto-ui-items-center neeto-ui-gap-2"
            >
              {icon && <IconSVG />}
              {label}
            </Typography>
          </button>
        </li>
      );
    })}
  </ul>
);

export default LinkSection;
