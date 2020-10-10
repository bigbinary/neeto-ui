import React from "react";
const Toastr = ({ type, message }) => {
  let icon;
  switch (type) {
    case "success":
      icon = "ri-checkbox-circle-fill";
      break;
    case "error":
      icon = "ri-alert-fill";
      break;
    case "info":
      icon = "ri-information-fill";
      break;
    default:
      icon = "ri-information-fill";
      break;
  }

  return (
    <div className="flex flex-row items-start justify-start">
      <i className={icon}></i>
      <p className="mx-4 font-medium leading-5 text-white">{message}</p>
    </div>
  );
};

export default Toastr;