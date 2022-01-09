import React from "react";
import { Check } from "@bigbinary/neeto-icons";
import classnames from "classnames";

import Typography from "../../Typography";

const AppLink = ({ name, url, icon, environment, activeApp }) => {
  const SVG = icon;

  return (
    <a
      href={url[environment]}
      target="_blank"
      className={classnames("neeto-ui-app-switcher-link", {
        "neeto-ui-app-switcher-link--active": activeApp === name,
      })}
      rel="noreferrer"
      data-test-id={`neetoapp-link-${name}`}
    >
      <div className="neeto-ui-app-switcher-link__row">
        <div
          className={classnames("neeto-ui-app-switcher-link__icon-holder", {
            [`gradient--${name.toLowerCase()}`]: name,
          })}
        >
          {SVG && (
            <SVG color="white" className="neeto-ui-app-switcher-link__icon" />
          )}
        </div>
        <Typography
          style="h4"
          weight="semibold"
          component="span"
          className="neeto-ui-text-gray-600 neeto-ui-app-switcher-link__title"
        >
          {name}
        </Typography>
        {activeApp === name && (
          <span className="neeto-ui-app-switcher-link__check-icon neeto-ui-text-gray-800">
            <Check size="22" />
          </span>
        )}
      </div>
    </a>
  );
};

export default AppLink;
