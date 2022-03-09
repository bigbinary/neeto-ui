import React, { useState } from "react";
import { LeftArrow, Search } from "@bigbinary/neeto-icons";

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
  let clientApps = getClientApp(subdomain);
  let recent = [];
  if (neetoApps.length > 0) {
    recent = clientApps.filter((app) => recentApps.includes(app.name));
    clientApps = clientApps.filter((app) => neetoApps.includes(app.name));
  }
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredApps = clientApps.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.replace(/ /g, "").toLowerCase())
  );

  return (
    <>
      <div className="neeto-ui-app-switcher__header">
        <Button
          icon={LeftArrow}
          style="text"
          iconPosition="left"
          label="Back"
          onClick={onClose}
        />
      </div>
      <div className="neeto-ui-app-switcher__search-wrapper">
        <Input
          placeholder="Search Products"
          type="search"
          suffix={<Search />}
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      {searchTerm.length === 0 && recent.length > 0 && (
        <div className="neeto-ui-app-switcher__body">
          <Typography
            style="h5"
            weight="bold"
            textTransform="uppercase"
            className="neeto-ui-text-gray-300"
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
          style="h5"
          weight="bold"
          textTransform="uppercase"
          className="neeto-ui-text-gray-300"
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
              className="text-center neeto-ui-text-gray-300"
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
