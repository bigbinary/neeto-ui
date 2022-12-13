import React from "react";
import { Check, NeetoIcon } from "@bigbinary/neeto-icons";
import classnames from "classnames";

import Typography from "../../Typography";

const AppLink = ({ name, description, url, icon, environment, activeApp }) => {
  return (
    <a
      href={url[environment]}
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
          "neeto-ui-bg-primary-500": !icon
        })}
      >
        {icon ?
          <img src={icon} title={name}/> :
          <NeetoIcon color="white" size={32}/>
        }
      </div>
      <div className="neeto-ui-app-switcher-link__content">
        <Typography
          style="h4"
          weight="normal"
          component="span"
          className="neeto-ui-text-gray-800"
          lineHeight="relaxed"
        >
          {name}
        </Typography>
        <Typography
          style="body3"
          weight="normal"
          component="span"
          className="neeto-ui-text-gray-700"
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
