import React, { useState } from "react";
import { Close, Search } from "@bigbinary/neeto-icons";

import AppLink from "./AppLink";
import Button from "../../Button";
import Input from "../../Input";
import Typography from "../../Typography";
import { getClientApp } from "../../../constants/clientApps";

const Body = ({
  environment,
  activeApp,
  subdomain,
  neetoApps = [],
  recentApps,
  onClose,
}) => {
  let clientAppsList = getClientApp(subdomain);
  let clientApps = [],
    recent = [];

  if (neetoApps instanceof Array && neetoApps.length > 0) {
    clientApps = clientAppsList.filter((app) => neetoApps.includes(app.name));
  }

  if (recentApps instanceof Array && recentApps.length > 0) {
    recent = clientAppsList.filter((app) => recentApps.includes(app.name));
  }
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredApps = clientApps.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.replace(/ /g, "").toLowerCase())
  );

  return (
    <>
      <div
        className="neeto-ui-app-switcher__header"
        data-cy="app-switcher-body-wrapper"
      >
        <Typography style="h2">Choose App</Typography>
        <Button
          className="neeto-ui-app-switcher__close-btn"
          icon={Close}
          style="text"
          iconPosition="left"
          onClick={onClose}
          data-cy="app-switcher-back-button"
        />
      </div>
      <div className="neeto-ui-app-switcher__search-wrapper">
        <Input
          placeholder="Search Products"
          type="search"
          suffix={<Search />}
          onChange={handleSearch}
          value={searchTerm}
          data-cy="app-switcher-search-input"
        />
      </div>
      {searchTerm.length === 0 && recent.length > 0 && (
        <div className="neeto-ui-app-switcher__body">
          <Typography
            style="h6"
            weight="bold"
            textTransform="uppercase"
            className="neeto-ui-text-gray-500"
          >
            Recently
          </Typography>
          <div className="neeto-ui-app-switcher__grid">
            {recent.map(({ name, url, icon }) => (
              <AppLink
                key={name}
                name={name}
                url={url}
                icon={icon}
                environment={environment}
                activeApp={activeApp}
              />
            ))}
          </div>
        </div>
      )}
      <div className="neeto-ui-app-switcher__body">
        <Typography
          style="h6"
          weight="bold"
          textTransform="uppercase"
          className="neeto-ui-text-gray-500"
        >
          {searchTerm.length === 0 ? "All" : "Apps"}
        </Typography>
        <div className="neeto-ui-app-switcher__grid">
          {filteredApps.length ? (
            filteredApps.map(({ name, url, icon }) => (
              <AppLink
                key={name}
                name={name}
                url={url}
                icon={icon}
                environment={environment}
                activeApp={activeApp}
              />
            ))
          ) : (
            <Typography
              style="h4"
              className="neeto-ui-text-center neeto-ui-text-gray-400"
            >
              No apps found
            </Typography>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
