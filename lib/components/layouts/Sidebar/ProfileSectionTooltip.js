import React from "react";
import classnames from "classnames";

import Avatar from "../../Avatar";
import Typography from "../../Typography";

const ProfileSectionTooltip = ({ profileInfo }) => {
  const { name, email, topLinks, bottomLinks, customContent } = profileInfo;

  const truncate = (str, length) => {
    return str && str.length > length
      ? str.substring(0, length - 3) + "..."
      : str;
  };

  return (
    <div className="flex flex-col p-6">
      <div
        className={classnames("relative flex items-center ", {
          "mb-5": topLinks || bottomLinks || customContent,
        })}
      >
        <div className="top-0 left-0">
          <Avatar user={profileInfo} size="large" />
        </div>
        <div className="flex flex-col flex-grow pl-3">
          <Typography
            component="h2"
            style="h5"
            weight="semibold"
            lineHeight="tight"
            className="m-0"
            title={name}
          >
            {truncate(name, 18)}
          </Typography>
          {email && (
            <Typography
              style="body2"
              className="w-full truncate neeto-ui-text-gray-600"
              lineHeight="tight"
            >
              {email}
            </Typography>
          )}
        </div>
      </div>
      <div className="neeto-ui-sidebar__profile-wrapper-custom-content">
        {customContent}
      </div>
      {topLinks && (
        <ul className="flex flex-col gap-2 py-2 list-none border-t neeto-ui-border-gray-300">
          {topLinks?.map(
            ({ onClick, label, icon = null, ...otherProps }, idx) => {
              const IconSVG = icon;
              return (
                <li
                  key={idx}
                  onClick={onClick}
                  {...otherProps}
                  className="p-2 transition-colors rounded-sm cursor-pointer hover:neeto-ui-bg-gray-200"
                >
                  <Typography
                    style="h5"
                    weight="semibold"
                    className="flex items-center gap-2 neeto-ui-text-gray-800"
                  >
                    {icon && <IconSVG />}
                    {label}
                  </Typography>
                </li>
              );
            }
          )}
        </ul>
      )}
      {bottomLinks && (
        <ul className="flex flex-col gap-2 pt-2 list-none border-t neeto-ui-border-gray-300">
          {bottomLinks?.map(({ onClick, label, icon, ...otherProps }, idx) => {
            const IconSVG = icon;
            return (
              <li
                key={idx}
                onClick={onClick}
                {...otherProps}
                className="p-2 transition-colors rounded-sm cursor-pointer hover:neeto-ui-bg-gray-200"
              >
                <Typography
                  style="h5"
                  weight="semibold"
                  className="flex items-center gap-2 neeto-ui-text-gray-800"
                >
                  {icon && <IconSVG />}
                  {label}
                </Typography>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ProfileSectionTooltip;
