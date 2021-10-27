import React from "react";
import Header from "../Header";
import { TimePicker, Typography } from "../../../lib/components";

const Time = () => {
  return (
    <>
      <Header title="Date Picker" />
      <div className="p-6">
        <div className="p-4 border border-indigo-500 border-dashed">
          <div className="w-2/6">
            <Typography type="h4" className="mb-2">
              Time Picker
            </Typography>
            <TimePicker onChange={(time) => alert(time)} className="mb-6" />
            <Typography type="h4" className="mb-2">
              Time Range Picker
            </Typography>
            <TimePicker
              type="range"
              onChange={(time, timeString) => alert(timeString)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Time;
