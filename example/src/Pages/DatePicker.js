import React from "react";
import Header from "../Header";
import { DatePicker } from "../../../lib/components";

const Date = () => {
  return (
    <>
      <Header title="Tags" />
      <div className="p-6">
        <div className="p-4 border border-indigo-500 border-dashed">
          <div className="w-2/6 space-y-8">
            <DatePicker type="date" />
            <DatePicker type="range" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Date;
