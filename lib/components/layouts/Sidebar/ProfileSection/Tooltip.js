import React from "react";
import classnames from "classnames";
import { Rating, Help } from "@bigbinary/neeto-icons";

import Avatar from "../../../Avatar";
import Typography from "../../../Typography";

import LinkSection from "./LinkSection";
import { truncate } from "./constants";

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
    <div className="flex flex-col p-6">
      <div
        className={classnames("relative flex items-center ", {
          "mb-5": topLinks || bottomLinks || customContent,
        })}
      >
        <div className="top-0 left-0">
          <Avatar user={profileInfo} size="large" />
        </div>
        <div className="flex flex-col flex-grow min-w-0 pl-3">
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
      {topLinks && <LinkSection links={topLinks} />}
      {!!intermediateLinks.length && <LinkSection links={intermediateLinks} />}
      {bottomLinks && <LinkSection links={bottomLinks} />}
    </div>
  );
};

export default ProfileSectionTooltip;
