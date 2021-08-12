import React from "react";
import { Tag } from "../../../lib/v2";
import Header from "../Header";
import { Favorite } from "@bigbinary/neeto-icons";

const Tabs = () => {

  const Icon = () => <Favorite size={15} />;

  const onClose = () => alert("onClose celled!");

  return (
    <>
      <Header title="Tags" />
      <div className="p-6">
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <div className="flex flex-col space-y-4 p-2">
            <div className="flex space-x-4">
              <h3>Default: </h3>
              <Tag label="Small" />
              <Tag type="outline" size="large" label="Label" />
              <Tag type="solid" label="Label" />
              <Tag type="solid" size="large" label="Label" />
            </div>
            <div className="flex space-x-4">
              <h3>Icons: </h3>
              <Tag icon={Icon} label="Label" />
              <Tag icon={Icon} size="large" label="Label" />
              <Tag icon={Icon} type="solid" label="Label" />
              <Tag icon={Icon} size="large" type="solid" label="Label" />
            </div>
            <div className="flex space-x-4">
              <h3>Clear button: </h3>
              <Tag icon={Icon} onClose={onClose} label="Label" />
              <Tag icon={Icon} onClose={onClose} size="large" label="Label" />
              <Tag icon={Icon} onClose={onClose} type="solid" label="Label" />
              <Tag icon={Icon} onClose={onClose} size="large" type="solid" label="Label"
                showClearOption />
            </div>
            <div className="flex space-x-4">
              <h3>Color: </h3>
              <Tag label="Label" type="color" indicatorColor="bg-green-500" />
              <Tag label="Label" type="color" indicatorColor="bg-yellow-500" />
              <Tag label="Label" type="color" indicatorColor="bg-blue-500" />
              <Tag label="Label" type="color" indicatorColor="bg-red-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;