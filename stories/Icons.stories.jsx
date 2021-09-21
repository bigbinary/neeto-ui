import React, { useState } from "react";
import * as iconset from "@bigbinary/neeto-icons";

export default {
  title: "Foundation/Icons",
};

export const Icons = () => {
  return (
    <>
      <p className="mb-4">
        <a href="https://github.com/bigbinary/neeto-icons#usage" target="_blank" className="text-indigo-600 underline">Documentation</a>
      </p>
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
        {iconset.iconList.map((icon) => {
          const Component = iconset[icon];
          return (
            <div key={icon} className="flex items-center justify-center p-5 bg-gray-50 hover:bg-gray-100 rounded-lg flex-col cursor-pointer transition-colors">
              <Component />
              <div className="mt-2 text-xs">{icon}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
