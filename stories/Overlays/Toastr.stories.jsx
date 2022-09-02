import React from "react";
import { useCallback } from "react";
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
        component: '`import { Toastr } from "@bigbinary/neetoui";`',
      },
    },
  },
  subcomponents: { Button },
};

export const Toastrs = () => {
  const showAlert = useCallback(() => alert("Customer blocked successfully!"));
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
                showAlert
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

export const ErrorToastr = () => {
  const onStringError = () => {
    Toastr.error("This is a plain text error toastr!");
  };

  const onAxiosStringError = () => {
    try {
      // Dummy axios error object
      const axiosError = {
        isAxiosError: true,
        config: {
          url: "https://api.github.com/users/org",
        },
        response: {
          data: {
            error: "Not Found",
          },
          status: 404,
        },
      };
      throw axiosError;
    } catch (e) {
      Toastr.error(e);
    }
  };

  const onAxiosArrayError = () => {
    try {
      // Dummy axios error object
      const axiosError = {
        isAxiosError: true,
        config: {
          url: "https://api.github.com/users/org",
        },
        response: {
          data: {
            errors: ["A is required", "B is required"],
          },
        },
      };
      throw axiosError;
    } catch (e) {
      Toastr.error(e);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="space-x-6">
        <Button label="String Error" onClick={onStringError} />
        <Button label="Throw an axios error" onClick={onAxiosStringError} />
        <Button
          label="Throw an axios error with array of error messages"
          onClick={onAxiosArrayError}
        />
      </div>
    </>
  );
};
