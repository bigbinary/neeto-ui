import React from "react";
import {
  Button,
  Toastr,
} from "../../../lib/v2";
import Header from "../Header";

const Toastrs = () => {
  return (
    <div className="w-full">
      <Header title="Toastr" />
      <div className="p-6 space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
          <Button
            label="Show toastr success"
            onClick={() => Toastr.success("Hey there")}
          />
          <Button
            label="Show toastr error"
            onClick={() =>
              Toastr.error(
                Error(
                  "Some error occured! Please visit https://github.com/bigbinary/neeto-ui"
                )
              )
            }
          />
          <Button
            label="Show toastr info"
            onClick={() => Toastr.info("Toaster info")}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Toastrs;
