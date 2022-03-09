import React from "react";

import Typography from "../../../Typography";

const LinkSection = ({ links }) => (
  <ul className="flex flex-col gap-2 py-2 m-0 list-none border-t neeto-ui-no-outline neeto-ui-border-gray-300">
    {links?.map(({ onClick, label, icon = null, ...otherProps }, idx) => {
      const IconSVG = icon;
      return (
        <li key={idx} className="w-full">
          <button
            onClick={onClick}
            {...otherProps}
            className="flex w-full p-2 text-left transition-colors rounded-sm cursor-pointer select-none hover:neeto-ui-bg-gray-200 focus:neeto-ui-bg-gray-200 neeto-ui-no-outline"
          >
            <Typography
              style="h5"
              weight="semibold"
              component="span"
              className="flex items-center gap-2 neeto-ui-text-gray-800"
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
