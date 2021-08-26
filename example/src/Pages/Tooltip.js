import React from "react";
import { Button, Tooltip } from "../../../lib/components";
import Header from "../Header";

const Tooltips = () => {
  return (
    <div className="w-full">
      <Header title="Tooltip" />
      <div className="p-6 space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Tooltip content={"Tooltip"}>
              <Button label="Auto Placement" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltips;
