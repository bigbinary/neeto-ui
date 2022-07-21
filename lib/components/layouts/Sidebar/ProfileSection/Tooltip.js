import React from "react";
import classnames from "classnames";
import { Rating, Help } from "@bigbinary/neeto-icons";

import Avatar from "../../../Avatar";
import Typography from "../../../Typography";

import LinkSection from "./LinkSection";
import { truncate } from "./utils";

const ProfileSectionTooltip = ({ profileInfo }) => {
  const {
    name,
    email,
    topLinks,
    bottomLinks,
    customContent,
    changelogProps,
    helpProps,
  } = profileInfo;

  let intermediateLinks = [];
  if (changelogProps)
    intermediateLinks.push({
      icon: Rating,
      label: "What's New",
      "data-cy": "profile-section-whats-new-button",
      ...changelogProps,
    });
  if (helpProps) {
    intermediateLinks.push({
      icon: Help,
      label: "Help",
      "data-cy": "profile-section-help-button",
      ...helpProps,
    });
  }

  return (
    <div className="neeto-ui-flex neeto-ui-flex-col neeto-ui-profile-popup">
      <div
        className={classnames("neeto-ui-relative neeto-ui-flex neeto-ui-items-center neeto-ui-p-3")}
      >
        <div className="top-0 left-0">
          <Avatar user={profileInfo} size="large" />
        </div>
        <div className="neeto-ui-flex neeto-ui-flex-col neeto-ui-flex-grow neeto-ui-min-w-0 neeto-ui-pl-3">
          <Typography
            component="h2"
            style="h5"
            weight="semibold"
            lineHeight="tight"
            className="neeto-ui-m-0"
            title={name}
          >
            {truncate(name, 18)}
          </Typography>
          {email && (
            <Typography
              style="body3"
              className="neeto-ui-w-full neeto-ui-truncate neeto-ui-text-gray-600"
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
      {topLinks && <LinkSection links={topLinks} />}
      {!!intermediateLinks.length && <LinkSection links={intermediateLinks} />}
      {bottomLinks && <LinkSection links={bottomLinks} />}
    </div>
  );
};

export default ProfileSectionTooltip;
