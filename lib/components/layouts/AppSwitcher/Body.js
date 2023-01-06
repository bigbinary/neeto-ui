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

  const hasRecentApps = recent.length > 0;
  const isSearchTermPresent = searchTerm.length > 0;

  return (
    <>
      <Button
        className="neeto-ui-app-switcher__close-btn"
        icon={Close}
        size="small"
        style="text"
        iconPosition="left"
        onClick={onClose}
        data-cy="app-switcher-back-button"
        data-testid="app-switcher-back-button"
      />
      <div
        className="neeto-ui-app-switcher__header"
        data-cy="app-switcher-body-wrapper"
      >
        <Typography style="h2">Choose your neeto product</Typography>
        <div className="neeto-ui-app-switcher__search-wrapper">
          <Input
            placeholder="Search products"
            type="search"
            suffix={<Search />}
            onChange={handleSearch}
            value={searchTerm}
            data-cy="app-switcher-search-input"
          />
        </div>
      </div>
      {!isSearchTermPresent && hasRecentApps && (
        <div className="neeto-ui-app-switcher__body">
          <Typography
            style="h5"
            weight="bold"
            textTransform="uppercase"
            className="neeto-ui-text-gray-500"
          >
            Recent
          </Typography>
          <div className="neeto-ui-app-switcher__grid">
            {recent.map(({ name, description, url, icon }) => (
              <AppLink
                key={name}
                name={name}
                description={description}
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
        {!isSearchTermPresent && hasRecentApps &&
          <Typography
            style="h5"
            weight="bold"
            textTransform="uppercase"
            className="neeto-ui-text-gray-500"
          >
            All
          </Typography>
        }

        {filteredApps.length ? (
          <div className="neeto-ui-app-switcher__grid">
            {filteredApps.map(({ name, description, url, icon }) => (
              <AppLink
                key={name}
                name={name}
                description={description}
                url={url}
                icon={icon}
                environment={environment}
                activeApp={activeApp}
              />
            ))}
          </div>) : (
          <Typography
            style="body1"
            className="neeto-ui-text-center"
          >
            No apps found
          </Typography>
        )}
      </div>
    </>
  );
};

export default Body;
