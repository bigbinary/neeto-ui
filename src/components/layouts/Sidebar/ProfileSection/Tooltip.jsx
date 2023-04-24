import React from "react";

import classnames from "classnames";

import Avatar from "components/Avatar";
import Typography from "components/Typography";

import LinkSection from "./LinkSection";
import { truncate } from "./utils";

const ProfileSectionTooltip = ({ profileInfo }) => {
  const { name, email, topLinks, bottomLinks, customContent } = profileInfo;

  return (
    <div className="neeto-ui-flex neeto-ui-flex-col neeto-ui-profile-popup">
      <div
        className={classnames(
          "neeto-ui-relative neeto-ui-flex neeto-ui-items-center neeto-ui-p-3"
        )}
      >
        <div className="top-0 left-0">
          <Avatar size="large" user={profileInfo} />
        </div>
        <div className="neeto-ui-flex neeto-ui-flex-col neeto-ui-flex-grow neeto-ui-min-w-0 neeto-ui-pl-3">
          <Typography
            className="neeto-ui-m-0"
            component="h2"
            lineHeight="tight"
            style="h5"
            title={name}
            weight="semibold"
          >
            {truncate(name, 18)}
          </Typography>
          {email && (
            <Typography
              className="neeto-ui-w-full neeto-ui-truncate neeto-ui-text-gray-600"
              lineHeight="tight"
              style="body3"
            >
              {email}
            </Typography>
          )}
        </div>
      </div>
      <div className="neeto-ui-sidebar__profile-wrapper-custom-content">
        {customContent}
      </div>
      {topLinks && <LinkSection links={topLinks} />}
      {bottomLinks && <LinkSection links={bottomLinks} />}
    </div>
  );
};

export default ProfileSectionTooltip;
