import React, { useCallback } from "react";

import { ToastContainer } from "react-toastify";

import Button from "components/Button";
import Toastr from "components/Toastr";

import ToastrCSSCustomization from "!raw-loader!./ToastrStoriesDocs/ToastrCSSCustomization.mdx";
import ToastrDocs from "!raw-loader!./ToastrStoriesDocs/ToastrDocs.mdx";

const metadata = {
  title: "Overlays/Toastr",
  component: Toastr,
  parameters: {
    layout: "padded",
    docs: { description: { component: ToastrDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A21",
    },
  },
  subcomponents: { Button },
};

// eslint-disable-next-line no-empty-pattern
const Toastrs = ({}) => {
  const showAlert = useCallback(() => alert("Customer blocked successfully!"));

  return (
    <>
      <ToastContainer />
      <div className="space-y-6">
        <div className="flex flex-row flex-wrap items-center justify-start gap-2">
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
                ),
                { showIcon: true }
              )
            }
          />
          <Button
            label="👍"
            onClick={() =>
              Toastr.success("", { icon: "👍", className: "w-20" })
            }
          />
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line no-empty-pattern
const ErrorToastr = ({}) => {
  const onStringError = () => {
    Toastr.error("This is a plain text error Toastr!");
  };

  const onAxiosStringError = () => {
    try {
      // Dummy axios error object
      throw {
        isAxiosError: true,
        config: { url: "https://api.github.com/users/org" },
        response: { data: { error: "Not found" }, status: 404 },
      };
    } catch (e) {
      Toastr.error(e);
    }
  };

  const onAxiosArrayError = () => {
    try {
      // Dummy axios error object
      throw {
        isAxiosError: true,
        config: { url: "https://api.github.com/users/org" },
        response: {
          data: { errors: ["A is required", "B is required"] },
        },
      };
    } catch (e) {
      Toastr.error(e);
    }
  };

  return (
    <div className="space-x-6">
      <Button label="String error" onClick={onStringError} />
      <Button label="Throw an axios error" onClick={onAxiosStringError} />
      <Button
        label="Throw an axios error with array of error messages"
        onClick={onAxiosArrayError}
      />
    </div>
  );
};

// eslint-disable-next-line no-empty-pattern
const CustomConfigToastr = ({}) => (
  <div className="space-x-6">
    <Button
      label="Custom config 1"
      onClick={() =>
        Toastr.info(
          "This toastr has a custom configuration along with buttonLabel and onClick callback as separate arguments",
          "Okay",
          () => {},
          { hideProgressBar: false, autoClose: 5000 }
        )
      }
    />
    <Button
      label="Custom config 2"
      onClick={() =>
        Toastr.show(
          "This toastr has a custom configuration passed which includes buttonLabel and onClick in the same config object",
          { buttonLabel: "Okay", onClick: () => {}, autoClose: 3000 }
        )
      }
    />
  </div>
);

CustomConfigToastr.storyName = "Custom config toastr";

const CSSCustomization = () => {
  const showAlert = useCallback(() => alert("Customer blocked successfully!"));

  return (
    <>
      <div className="neetix-toastr">
        <ToastContainer />
      </div>
      <div className="space-y-6">
        <div className="flex flex-row flex-wrap items-center justify-start gap-2">
          <Button
            label="Custom Info Toastr"
            onClick={() => Toastr.info("This is an info Toastr.")}
          />
          <Button
            label="Custom Warning Toastr"
            onClick={() => Toastr.warning("This is a warning Toastr.")}
          />
          <Button
            label="Custom Success Toastr"
            onClick={() => Toastr.success("Form has been successfully saved.")}
          />
          <Button
            label="Custom Toastr with CTA"
            onClick={() =>
              Toastr.error(
                Error("Ticket marked as spam."),
                "Block customer",
                showAlert
              )
            }
          />
          <Button
            label="Custom Error Toastr"
            onClick={() =>
              Toastr.error(
                Error(
                  "Some error occured! Please visit https://github.com/bigbinary/neeto-ui."
                )
              )
            }
          />
          <Button
            label="Custom 👍"
            onClick={() =>
              Toastr.success("", { icon: "👍", className: "w-20" })
            }
          />
        </div>
      </div>
    </>
  );
};

CSSCustomization.storyName = "Toastr CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: ToastrCSSCustomization } },
};

export { Toastrs, ErrorToastr, CustomConfigToastr, CSSCustomization };

export default metadata;
