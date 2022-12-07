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
      <div className="neeto-ui-app-switcher-link__row">
        <div
          className={classnames("neeto-ui-app-switcher-link__icon-holder", {
            "neeto-ui-bg-primary-500": !icon
          })}
        >
          {icon ?
            <img src={icon}/> :
            <NeetoIcon color="white" size={20}/>
          }
        </div>
        <div className="neeto-ui-app-switcher-link__content">
          <Typography
            style="h5"
            weight="normal"
            component="span"
            className="neeto-ui-text-gray-800"
          >
            {name}
          </Typography>
          <Typography
            style="body2"
            weight="normal"
            component="span"
            className="neeto-ui-text-gray-700"
          >
            {description}
          </Typography>

        </div>
        {activeApp === name && (
          <span className="neeto-ui-app-switcher-link__check-icon neeto-ui-text-white">
            <Check size="22" />
          </span>
        )}
      </div>
    </a>
  );
};

export default AppLink;
