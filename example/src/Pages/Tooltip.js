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
              position={"top"}
              followCursor={"horizontal"}
              content={"Content is string"}
            >
              <Button style="secondary" label="Follow Cursor" />
            </Tooltip>

            <Tooltip
              position={"top"}
              trigger={"click"}
              content={
                <span>
                  Content is a <b>JSX</b> <u>Element</u>
                </span>
              }
            >
              <Button style="secondary" label="On Click" />
            </Tooltip>

            <Tooltip
              position="right-start"
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
              <Button style="secondary" label="Interactive" />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">position</h2>
            <div className="flex items-center justify-start gap-8">
              <Tooltip position="top" content={"Tooltip"}>
                <Button style="secondary" label="top" />
              </Tooltip>
              <Tooltip position="top-start" content={"Tooltip"}>
                <Button style="secondary" label="top-start" />
              </Tooltip>
              <Tooltip position="top-end" content={"Tooltip"}>
                <Button style="secondary" label="top-end" />
              </Tooltip>
            </div>
            <div className="flex items-center justify-start gap-8">
              <Tooltip position="right" content={"Tooltip"}>
                <Button style="secondary" label="right" />
              </Tooltip>
              <Tooltip position="right-start" content={"Tooltip"}>
                <Button style="secondary" label="right-start" />
              </Tooltip>
              <Tooltip position="right-end" content={"Tooltip"}>
                <Button style="secondary" label="right-end" />
              </Tooltip>
            </div>
            <div className="flex items-center justify-start gap-8">
              <Tooltip position="bottom" content={"Tooltip"}>
                <Button style="secondary" label="bottom" />
              </Tooltip>
              <Tooltip position="bottom-start" content={"Tooltip"}>
                <Button style="secondary" label="bottom-start" />
              </Tooltip>
              <Tooltip position="bottom-end" content={"Tooltip"}>
                <Button style="secondary" label="bottom-end" />
              </Tooltip>
            </div>
            <div className="flex items-center justify-start gap-8">
              <Tooltip position="left" content={"Tooltip"}>
                <Button style="secondary" label="left" />
              </Tooltip>
              <Tooltip position="left-start" content={"Tooltip"}>
                <Button style="secondary" label="left-start" />
              </Tooltip>
              <Tooltip position="left-end" content={"Tooltip"}>
                <Button style="secondary" label="left-end" />
              </Tooltip>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Theme</h2>
            <div className="flex flex-row flex-wrap items-center justify-start gap-8">
              <Tooltip position="top" content={"Tooltip"} theme={"dark"}>
                <Button style="secondary" label="dark" />
              </Tooltip>
              <Tooltip position="top" content={"Tooltip"} theme={"light"}>
                <Button style="secondary" label="light" />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltips;
