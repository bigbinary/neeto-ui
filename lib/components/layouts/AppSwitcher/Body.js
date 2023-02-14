import React, { useMemo, useState } from "react";
import { Close, Search } from "@bigbinary/neeto-icons";

import AppLink from "./AppLink";
import Button from "../../Button";
import Input from "../../Input";
import Typography from "../../Typography";

const Body = ({ activeApp, neetoApps, recentApps, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const recent = useMemo(
    () => neetoApps?.filter(({ name }) => recentApps?.includes(name)) || {},
    [neetoApps, recentApps]
  );

  const filteredApps =
    neetoApps?.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.replace(/ /g, "").toLowerCase())
    ) || {};

  const hasRecentApps = recent.length > 0;
  const isSearchTermPresent = searchTerm.length > 0;

  const handleSearch = (e) => setSearchTerm(e.target.value);

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
            {recent.map(({ name, description, url }) => (
              <AppLink
                key={name}
                name={name}
                description={description}
                url={url}
                activeApp={activeApp}
              />
            ))}
          </div>
        </div>
      )}
      <div className="neeto-ui-app-switcher__body">
        {!isSearchTermPresent && hasRecentApps && (
          <Typography
            style="h5"
            weight="bold"
            textTransform="uppercase"
            className="neeto-ui-text-gray-500"
          >
            All
          </Typography>
        )}

        {filteredApps.length ? (
          <div className="neeto-ui-app-switcher__grid">
            {filteredApps.map(({ name, description, url }) => (
              <AppLink
                key={name}
                name={name}
                description={description}
                url={url}
                activeApp={activeApp}
              />
            ))}
          </div>
        ) : (
          <Typography style="body1" className="neeto-ui-text-center">
            No apps found
          </Typography>
        )}
      </div>
    </>
  );
};

export default Body;
