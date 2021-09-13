import React from "react";
import { Typography } from "../../../lib/components";
import Header from "../Header";

const Text = () => {
  return (
    <div className="w-full">
      <Header title="Typography" />

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Sizes</h2>
            <div className="flex flex-col gap-5">
              <Typography style="h1">Typography</Typography>
              <Typography style="h2">Typography</Typography>
              <Typography style="h3">Typography</Typography>
              <Typography style="h4">Typography</Typography>
              <Typography style="h5">Typography</Typography>
              <Typography style="h6">Typography</Typography>
              <Typography style="body1">Typography</Typography>
              <Typography style="body2">Typography</Typography>
              <Typography style="body3">Typography</Typography>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Weights</h2>
            <div className="flex flex-col gap-5">
              <Typography style="h1" weight="black">Typography - 900</Typography>
              <Typography style="h1" weight="extrabold">Typography - 800</Typography>
              <Typography style="h1" weight="bold">Typography - 700</Typography>
              <Typography style="h1" weight="semibold">Typography - 600</Typography>
              <Typography style="h1" weight="medium">Typography - 500</Typography>
              <Typography style="h1" weight="regular">Typography - 400</Typography>
              <Typography style="h1" weight="light">Typography - 300</Typography>
              <Typography style="h1" weight="extralight">Typography - 200</Typography>
              <Typography style="h1" weight="thin">Typography - 100</Typography>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Semantics</h2>
            <div className="flex flex-col gap-5">
              <Typography component="h1" style="h1">Typography</Typography>
              <Typography component="h2" style="h1">Typography</Typography>
              <Typography component="h3" style="h1">Typography</Typography>
              <Typography component="h4" style="h1">Typography</Typography>
              <Typography component="h5" style="h1">Typography</Typography>
              <Typography component="h6" style="h1">Typography</Typography>
              <Typography component="p" style="h1">Typography</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Text;
