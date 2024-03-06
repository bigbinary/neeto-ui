import { useState, useEffect } from "react";

import { isNotPresent } from "neetocist";

import { getDateTime, getDateTimeRange, getDayJsObj } from "./utils";

const useDateTime = ({ value, defaultValue, onChange, type }) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [changedField, setChangedField] = useState();

  useEffect(() => {
    const inputValue = value || defaultValue;
    if (isNotPresent(inputValue)) return;

    if (type === "range" && !Array.isArray(inputValue)) return;
    const dateTime =
      type === "range" ? inputValue.map(getDayJsObj) : getDayJsObj(inputValue);
    setDate(dateTime);
    setTime(dateTime);
  }, [value, defaultValue]);

  useEffect(() => {
    if (isNotPresent(changedField)) return;
    onChange(
      (type === "date" ? getDateTime : getDateTimeRange)(date, time),
      changedField
    );
    setChangedField(); // reset to avoid unnecessary trigger on rerender
  }, [date, time, changedField]);

  const onDateChange = newDate => {
    setDate(newDate);
    if (!time) setTime(newDate);
    setChangedField("date");
  };

  const onTimeChange = newTime => {
    const value = newTime.isValid() ? newTime : null;
    if (type === "date") {
      setTime(value);
    } else {
      const timeArr = Array.isArray(time) ? [time[0], value] : [value, null];
      setTime(timeArr);
    }
    setChangedField("time");
  };

  const onStartTimeChange = newTime => {
    const value = newTime.isValid() ? newTime : null;
    const timeArr = Array.isArray(time) ? [value, time[1]] : [null, value];
    setTime(timeArr);
    setChangedField("time");
  };

  return { date, time, onDateChange, onTimeChange, onStartTimeChange };
};

export default useDateTime;
