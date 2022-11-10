import React from "react";
import { useCallback } from "react";
import { ToastContainer } from "react-toastify";

import Button from "../../lib/components/Button";
import Toastr from "../../lib/components/Toastr";
import ToastrStory from "!raw-loader!./Toastr.stories.mdx";

export default {
  title: "Overlays/Toastr",
  component: Toastr,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: ToastrStory,
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A21",
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
            onClick={() => Toastr.info("This is an info Toastr.")}
          />
          <Button
            label="Warning Toastr"
            onClick={() => Toastr.warning("This is a warning Toastr.")}
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
                "Block customer",
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
    Toastr.error("This is a plain text error Toastr!");
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
            error: "Not found",
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
        <Button label="String error" onClick={onStringError} />
        <Button label="Throw an axios error" onClick={onAxiosStringError} />
        <Button
          label="Throw an axios error with array of error messages"
          onClick={onAxiosArrayError}
        />
      </div>
    </>
  );
};

export const CustomConfigToastr = () =>
  <>
    <ToastContainer />
    <div className="space-x-6">
      <Button
        label="Custom config 1"
        onClick={() =>
          Toastr.info(
            "This toastr has a custom configuration along with buttonLabel and onClick callback as separate arguments",
            "Okay",
            () => {},
            {
              hideProgressBar: false,
              autoClose: 5000,
            }
          )
        }
      />
      <Button
        label="Custom config 2"
        onClick={() =>
          Toastr.show(
            "This toastr has a custom configuration passed which includes buttonLabel and onClick in the same config object",
            {
              buttonLabel: "Okay",
              onClick: () => {},
              autoClose: 3000,
            }
          )
        }
      />
    </div>
  </>;

CustomConfigToastr.storyName = "Custom config toastr";
