import React from "react";
import { Check, NeetoIcon } from "@bigbinary/neeto-icons";
import classnames from "classnames";
import * as AppIcons from "@bigbinary/neeto-icons/app-icons";
import Typography from "../../Typography";

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
          <AppIcon size={32} />
        ) : (
          <NeetoIcon color="white" size={32} />
        )}
      </div>
      <div className="neeto-ui-app-switcher-link__content">
        <Typography
          style="h4"
          weight="normal"
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
      {activeApp === name && (
        <span className="neeto-ui-text-white">
          <Check size={24} />
        </span>
      )}
    </a>
  );
};

export default AppLink;
