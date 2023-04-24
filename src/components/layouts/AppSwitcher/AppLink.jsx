import React from "react";

import classnames from "classnames";
import { NeetoIcon } from "neetoicons";
import * as AppIcons from "neetoicons/app-icons";

import Typography from "components/Typography";

const AppLink = ({ name, description, url, activeApp }) => {
  const appName = `Neeto${name.charAt(0)}${name.slice(1).toLowerCase()}`;
  const AppIcon = AppIcons[appName];

  return (
    <a
      data-cy={`${name}-app-link`}
      data-test-id={`neetoapp-link-${name}`}
      href={url}
      rel="noreferrer"
      target="_blank"
      className={classnames("neeto-ui-app-switcher-link", {
        "neeto-ui-app-switcher-link--active": activeApp === name,
      })}
    >
      <div
        className={classnames("neeto-ui-app-switcher-link__icon-holder", {
          "neeto-ui-bg-primary-500": !AppIcon,
        })}
      >
        {AppIcon ? (
          <AppIcon size={42} />
        ) : (
          <NeetoIcon color="white" size={42} />
        )}
      </div>
      <div className="neeto-ui-app-switcher-link__content">
        <Typography
          component="span"
          lineHeight="relaxed"
          style="h4"
          weight="medium"
        >
          {name}
        </Typography>
        <Typography component="span" style="body3" weight="normal">
          {description}
        </Typography>
      </div>
    </a>
  );
};

export default AppLink;
