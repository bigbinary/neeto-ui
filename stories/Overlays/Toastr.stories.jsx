import React, { useCallback } from "react";

import { ToastContainer } from "react-toastify";

import Button from "components/Button";
import Toastr from "components/Toastr";

const description = `
\`import { Toastr } from "@bigbinary/neetoui";\`

\`Toastr\` is a user interface component that displays transient messages near the
edge of the screen and then fades away after a short duration, providing a
non-intrusive way to communicate updates, alerts, or information to the user.

We use React-Toastify under the hood. For extra customization, refer
[React-Toastify](https://fkhadra.github.io/react-toastify) documentation.

| Following props are not supported as of now |
| ------------------------------------------- |
| style                                       |
| onClick                                     |
| render                                      |
| isLoading                                   |
| data                                        |
`;

const metadata = {
  title: "Overlays/Toastr",
  component: Toastr,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
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
                )
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

const ToastrCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Toastr\`
component.

\`\`\`css
// Container
--neeto-ui-toastr-min-width: 320px;
--neeto-ui-toastr-max-width: 640px;
--neeto-ui-toastr-z-index: 100000;

// Styles
--neeto-ui-info-toastr-bg-color: rgb(var(--neeto-ui-info-800));
--neeto-ui-error-toastr-bg-color: rgb(var(--neeto-ui-error-800));
--neeto-ui-success-toastr-bg-color: rgb(var(--neeto-ui-success-800));
--neeto-ui-warning-toastr-bg-color: rgb(var(--neeto-ui-warning-800));

// Toastr
--neeto-ui-toastr-min-height: 48px;
--neeto-ui-toastr-padding-x: 1rem;
--neeto-ui-toastr-padding-y: 0.75rem;
--neeto-ui-toastr-margin-x: 0;
--neeto-ui-toastr-margin-y: 1rem;
--neeto-ui-toastr-box-shadow: none;
--neeto-ui-toastr-border-radius: var(--neeto-ui-rounded-md);
--neeto-ui-toastr-icon-size: 24px;
--neeto-ui-toastr-gap: 12px;
--neeto-ui-toastr-color: rgb(var(--neeto-ui-white));
--neeto-ui-toastr-font-size: var(--neeto-ui-text-sm);
--neeto-ui-toastr-font-weight: var(--neeto-ui-font-normal);

// Close Button
--neeto-ui-toastr-close-btn-color: rgb(var(--neeto-ui-white));
--neeto-ui-toastr-close-btn-margin-y: auto;
--neeto-ui-toastr-close-btn-margin-right: 0px;
--neeto-ui-toastr-close-btn-margin-left: 8px;
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-toastr {
  --neeto-ui-info-toastr-bg-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-error-toastr-bg-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-success-toastr-bg-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-warning-toastr-bg-color: rgb(var(--neeto-ui-gray-800));
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: ToastrCSSCustomization } },
};

export { Toastrs, ErrorToastr, CustomConfigToastr, CSSCustomization };

export default metadata;
