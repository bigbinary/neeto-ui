import React from "react";
import { Button, Tooltip } from "../../../lib/components";
import Header from "../Header";

const Tooltips = () => {
  return (
    <div className="w-full">
      <Header title="Tooltip" />
      <div className="p-6 space-y-6">
        <div className="w-full space-y-8">
          <div className="flex flex-row items-center justify-start space-x-20">
            <Tooltip
              placement={"top"}
              followCursor={"horizontal"}
              content={"Content is string"}
            >
              <Button label="Follow Cursor" />
            </Tooltip>

            <Tooltip
              placement={"bottom"}
              trigger={"click"}
              content={
                <span>
                  Content is a <b>JSX</b> <u>Element</u>
                </span>
              }
            >
              <Button label="On Click" />
            </Tooltip>

            <Tooltip
              placement={"right-start"}
              interactive={true}
              content={
                <span>
                  Go to{" "}
                  <a
                    href="https://www.bigbinary.com/"
                    style={{ color: "white" }}
                  >
                    bigbinary.com
                  </a>
                </span>
              }
            >
              <Button label="Interactive" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltips;
