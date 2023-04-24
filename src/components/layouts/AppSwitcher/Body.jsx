import React, { useState } from "react";

import { Close, Search } from "neetoicons";

import Button from "components/Button";
import Input from "components/Input";
import Typography from "components/Typography";

import AppLink from "./AppLink";

const Body = ({ activeApp, neetoApps, recentApps, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const recent =
    neetoApps?.filter(({ name }) => recentApps?.includes(name)) || {};

  const filteredApps =
    neetoApps?.filter(({ name }) =>
      name?.toLowerCase().includes(searchTerm.replace(/ /g, "").toLowerCase())
    ) || {};

  const hasRecentApps = recent.length > 0;
  const isSearchTermPresent = searchTerm.length > 0;

  const handleSearch = e => setSearchTerm(e.target.value);

  return (
    <>
      <Button
        className="neeto-ui-app-switcher__close-btn"
        data-cy="app-switcher-back-button"
        data-testid="app-switcher-back-button"
        icon={Close}
        iconPosition="left"
        size="small"
        style="text"
        onClick={onClose}
      />
      <div
        className="neeto-ui-app-switcher__header"
        data-cy="app-switcher-body-wrapper"
      >
        <Typography style="h2">Choose your neeto product</Typography>
        <div className="neeto-ui-app-switcher__search-wrapper">
          <Input
            data-cy="app-switcher-search-input"
            placeholder="Search products"
            prefix={<Search />}
            type="search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      {!isSearchTermPresent && hasRecentApps && (
        <div className="neeto-ui-app-switcher__body">
          <Typography
            className="neeto-ui-text-gray-500"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Recent
          </Typography>
          <div className="neeto-ui-app-switcher__grid">
            {recent.map(({ name, description, url }) => (
              <AppLink
                activeApp={activeApp}
                description={description}
                key={name}
                name={name}
                url={url}
              />
            ))}
          </div>
        </div>
      )}
      <div className="neeto-ui-app-switcher__body">
        {!isSearchTermPresent && hasRecentApps && (
          <Typography
            className="neeto-ui-text-gray-500"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            All
          </Typography>
        )}
        {filteredApps.length ? (
          <div className="neeto-ui-app-switcher__grid">
            {filteredApps.map(({ name, description, url }) => (
              <AppLink
                activeApp={activeApp}
                description={description}
                key={name}
                name={name}
                url={url}
              />
            ))}
          </div>
        ) : (
          <Typography className="neeto-ui-text-center" style="body1">
            No apps found
          </Typography>
        )}
      </div>
    </>
  );
};

export default Body;
