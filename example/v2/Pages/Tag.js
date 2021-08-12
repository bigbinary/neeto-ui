import React from "react";
import { Tag } from "../../../lib/v2";
import Header from "../Header";
import { Favorite } from "@bigbinary/neeto-icons";

const Tabs = () => {

  const Icon = () => <Favorite size={15} />;

  const onClick = () => {
    alert("onClick event!");
  };

  return (
    <>
      <Header title="Tags" />
      <div className="p-6">
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <div className="flex flex-col space-y-4 p-2">
            <div className="flex space-x-4">
              <h3>Default: </h3>
              <Tag label="Small" />
              <Tag type="outline" size="large" label="Large" />
              <Tag type="solid" label="Small Solid" />
              <Tag type="solid" size="large" label="Large Solid" />
            </div>
            <div className="flex space-x-4">
              <h3>Icons: </h3>
              <Tag icon={Icon} label="Small" />
              <Tag icon={Icon} size="large" label="Large" />
              <Tag icon={Icon} type="solid" label="Small Solid" />
              <Tag icon={Icon} size="large" type="solid" label="Large Solid" />
            </div>
            <div className="flex space-x-4">
              <h3>Clear button: </h3>
              <Tag icon={Icon} onClick={onClick} label="Small" showClearOption />
              <Tag icon={Icon} onClick={onClick} size="large" label="Large" showClearOption />
              <Tag icon={Icon} onClick={onClick} type="solid" label="Small Solid" showClearOption />
              <Tag icon={Icon} onClick={onClick} size="large" type="solid" label="Large Solid"
                showClearOption />
            </div>
            <div className="flex space-x-4">
              <h3>Color: </h3>
              <Tag label="Green" type="color" indicatorColor="bg-green-500" />
              <Tag label="Yellow" type="color" indicatorColor="bg-yellow-500" />
              <Tag label="Blue" type="color" indicatorColor="bg-blue-500" />
              <Tag label="Red" type="color" indicatorColor="bg-red-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;