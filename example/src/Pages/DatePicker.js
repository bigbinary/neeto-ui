import React from "react";
import Header from "../Header";
import { DatePicker, Typography } from "../../../lib/components";

const Date = () => {
  return (
    <>
      <Header title="Date Picker" />
      <div className="p-6">
        <div className="p-4 border border-indigo-500 border-dashed">
          <div className="w-2/6">
            <Typography type="h4" className="mb-2">
              Date Picker
            </Typography>
            <DatePicker
              type="date"
              showTime
              className="mb-6"
              onChange={(date, dateString) =>
                alert(`Selected date is: ${dateString}`)
              }
            />
            <Typography type="h4" className="mb-2">
              Date Range Picker
            </Typography>
            <DatePicker
              type="range"
              className="mb-6"
              onChange={(date, dateString) =>
                alert(`Selected date is: ${dateString}`)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Date;
