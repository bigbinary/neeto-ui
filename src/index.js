import React from "react";
import ReactDOM from "react-dom";
import { Avatar, Button, Input, DateInput } from "../lib";
import moment from "moment";
import { Position } from "@blueprintjs/core";

const App = () => {
  return (
    <>
    <div className="grid grid-flow-row gap-8 p-6">
      <div>
      <Avatar size={32} />
        <Button label="Show toastr" onClick={() => {
          showToastr("I'm a happy toastr."); 
        }} />
      </div>
      <div className="w-1/5">
        <Input placeholder="Sample field" helpText="I'm a sample field!" label="Testing" />
        </div>
        <div className="w-1/5">
          <DateInput value={moment().toDate()} label="DateInput" popoverProps={{ position: Position.BOTTOM}}/>
      </div>
    </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
