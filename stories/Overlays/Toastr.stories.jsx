import React from "react";
import { ToastContainer } from "react-toastify";

import Button from "../../lib/components/Button";
import Toastr from "../../lib/components/Toastr";

export default {
  title: "Overlays/Toastr",
  component: Toastr,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Toastr } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
  subcomponents: { Button },
};

export const Toastrs = () => {
  return (
    <>
      <ToastContainer />
      <div className="space-y-6">
        <div className="flex flex-row items-center justify-start space-x-6">
          <Button
            label="Info Toastr"
            onClick={() => Toastr.info("This is an info toastr.")}
          />
          <Button
            label="Warning Toastr"
            onClick={() => Toastr.warning("This is a warning toastr.")}
          />
          <Button
            label="Success Toastr"
            onClick={() => Toastr.success("Form has been successfully saved.")}
          />
          <Button
            label="Toastr with CTA"
            onClick={() =>
              Toastr.error(
                Error("Ticket marked as spam."),
                "Block Customer",
                () => alert("Customer blocked successfully!")
              )
            }
          />
          <Button
            label="Error Toastr"
            onClick={() =>
              Toastr.error(
                Error(
                  "Some error occured! Please visit https://github.com/bigbinary/neeto-ui."
                )
              )
            }
          />
        </div>
      </div>
    </>
  );
};
