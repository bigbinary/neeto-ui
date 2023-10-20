import React, { useState } from "react";

import * as iconset from "neetoicons";
import { Search } from "neetoicons";
import { ToastContainer } from "react-toastify";

import { Typography, Input, Toastr } from "components";

const Iconography = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const copyIconName = iconName => {
    navigator.clipboard.writeText(iconName);
    Toastr.success("Icon name copied to clipboard");
  };

  const filteredIconList = Object.keys(iconset).filter(name =>
    name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <>
      <ToastContainer />
      <div className="mb-4">
        <Input
          placeholder="Search icons"
          prefix={<Search />}
          size="large"
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-3 lg:grid-cols-8">
        {filteredIconList.map(icon => {
          const Component = iconset[icon];

          return (
            <div
              className="neeto-ui-bg-gray-100 flex cursor-pointer flex-col items-center justify-center rounded-lg p-5 transition-colors"
              key={icon}
              onClick={() => copyIconName(icon)}
            >
              <Component />
              <div className="mt-2 text-xs">{icon}</div>
            </div>
          );
        })}
      </div>
      {filteredIconList.length === 0 && (
        <Typography className="py-6 text-center" style="h6">
          No icons found for "{searchTerm}"
        </Typography>
      )}
    </>
  );
};

export default Iconography;
