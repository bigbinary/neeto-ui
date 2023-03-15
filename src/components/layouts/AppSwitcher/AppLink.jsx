import React from "react";
import { NeetoIcon } from "@bigbinary/neeto-icons";
import classnames from "classnames";
import * as AppIcons from "@bigbinary/neeto-icons/app-icons";

import Typography from "components/Typography";

const AppLink = ({ name, description, url, activeApp }) => {
  const appName = "Neeto" + name.charAt(0) + name.slice(1).toLowerCase();
  const AppIcon = AppIcons[appName];

  return (
    <a
      href={url}
      target="_blank"
      className={classnames("neeto-ui-app-switcher-link", {
        "neeto-ui-app-switcher-link--active": activeApp === name,
      })}
      rel="noreferrer"
      data-test-id={`neetoapp-link-${name}`}
      data-cy={`${name}-app-link`}
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
          style="h4"
          weight="medium"
          component="span"
          lineHeight="relaxed"
        >
          {name}
        </Typography>
        <Typography
          style="body3"
          weight="normal"
          component="span"
        >
          {description}
        </Typography>
      </div>
    </a>
  );
};

export default AppLink;
