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
              <Button style="secondary" label="Follow Cursor" />
            </Tooltip>

            <Tooltip
              placement={"top"}
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
              <Button style="secondary" label="Interactive" />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Placement</h2>
            <div className="flex items-center justify-start gap-8">
              <Tooltip
                placement={"top"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="top" />
              </Tooltip>
              <Tooltip
                placement={"top-start"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="top-start" />
              </Tooltip>
              <Tooltip
                placement={"top-end"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="top-end" />
              </Tooltip>
            </div>
            <div className="flex items-center justify-start gap-8">
              <Tooltip
                placement={"right"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="right" />
              </Tooltip>
              <Tooltip
                placement={"right-start"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="right-start" />
              </Tooltip>
              <Tooltip
                placement={"right-end"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="right-end" />
              </Tooltip>
            </div>
            <div className="flex items-center justify-start gap-8">
              <Tooltip
                placement={"bottom"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="bottom" />
              </Tooltip>
              <Tooltip
                placement={"bottom-start"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="bottom-start" />
              </Tooltip>
              <Tooltip
                placement={"bottom-end"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="bottom-end" />
              </Tooltip>
            </div>
            <div className="flex items-center justify-start gap-8">
              <Tooltip
                placement={"left"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="left" />
              </Tooltip>
              <Tooltip
                placement={"left-start"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="left-start" />
              </Tooltip>
              <Tooltip
                placement={"left-end"}
                content={"Tooltip"}
              >
                <Button style="secondary" label="left-end" />
              </Tooltip>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Theme</h2>
            <div className="flex flex-row flex-wrap items-center justify-start gap-8">
              <Tooltip
                placement={"top"}
                content={"Tooltip"}
                theme={"dark"}
              >
                <Button style="secondary" label="dark" />
              </Tooltip>
              <Tooltip
                placement={"top"}
                content={"Tooltip"}
                theme={"light"}
              >
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
