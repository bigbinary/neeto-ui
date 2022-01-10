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
  neetoApps,
  recentApps,
  onClose,
}) => {
  let clientApps = getClientApp(subdomain);
  let recent;
  if (neetoApps.length > 0) {
    recent = clientApps.filter((app) => recentApps.includes(app.name));
    clientApps = clientApps.filter((app) => neetoApps.includes(app.name));
  }
  const [search, setSearch] = useState("");

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredApps = clientApps.filter((app) =>
    app.name.toLowerCase().includes(search.replace(/ /g, "").toLowerCase())
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
          suffix={<Search />}
          onChange={handleSearch}
        />
      </div>
      {search.length === 0 && recent && (
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
            {recent
              .filter((item) => item.isActive)
              .map(({ name, url, icon }) => (
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
          {search.length === 0 ? "All" : "Apps"}
        </Typography>
        <div className="neeto-ui-app-switcher__grid">
          {filteredApps
            .filter((item) => item.isActive)
            .map(({ name, url, icon }) => (
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
    </>
  );
};

export default Body;
