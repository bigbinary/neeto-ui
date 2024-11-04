import React, { useState } from "react";

import Alert from "components/Alert";
import Button from "components/Button";

const description = `
\`import { Alert } from "@bigbinary/neetoui";\`

\`Alert\` is a specific type of modal dialog that is used to display important
alerts, messages, or notifications to users, typically to convey critical
information or warnings that require their immediate attention or
acknowledgment.
`;

const metadata = {
  title: "Overlays/Alert",
  component: Alert,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=1061%3A3055",
    },
  },
  argTypes: {
    onClose: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "() => void" },
      },
    },
    onSubmit: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "() => void" },
      },
    },
    onClick: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
    isOpen: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: false },
      },
    },
  },
};

const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <Button
        label="Show Alert"
        style="primary"
        onClick={() => setOpen(true)}
      />
      <Alert
        isOpen={open}
        message="All of your unsaved changes will be lost. This can't be undone."
        submitButtonLabel="Discard changes"
        title="You have unsaved changes"
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      />
    </div>
  );
};

const Sizes = () => {
  const [showAlertSmall, setShowAlertSmall] = useState(false);
  const [showAlertMedium, setShowAlertMedium] = useState(false);
  const [showAlertLarge, setShowAlertLarge] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="space-y-8">
          <div className="flex flex-row flex-wrap items-center justify-start gap-6">
            <Button label="Small" onClick={() => setShowAlertSmall(true)} />
            <Button label="Medium" onClick={() => setShowAlertMedium(true)} />
            <Button label="Large" onClick={() => setShowAlertLarge(true)} />
          </div>
          <Alert
            isOpen={showAlertSmall}
            message="All of your unsaved changes will be lost. This can't be undone."
            size="small"
            submitButtonLabel="Discard changes"
            title="You have unsaved changes"
            onClose={() => setShowAlertSmall(false)}
            onSubmit={() => setShowAlertSmall(false)}
          />
          <Alert
            isOpen={showAlertMedium}
            message="All of your unsaved changes will be lost. This can't be undone."
            size="medium"
            submitButtonLabel="Discard changes"
            title="You have unsaved changes"
            onClose={() => setShowAlertMedium(false)}
            onSubmit={() => setShowAlertMedium(false)}
          />
          <Alert
            isOpen={showAlertLarge}
            message="All of your unsaved changes will be lost. This can't be undone."
            size="large"
            submitButtonLabel="Discard changes"
            title="You have unsaved changes"
            onClose={() => setShowAlertLarge(false)}
            onSubmit={() => setShowAlertLarge(false)}
          />
        </div>
      </div>
    </div>
  );
};

const CSSCustomization = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <Button
        label="Show Alert"
        style="primary"
        onClick={() => setOpen(true)}
      />
      <Alert
        className="neetix-alert"
        isOpen={open}
        message="All of your unsaved changes will be lost. This can't be undone."
        submitButtonLabel="Discard changes"
        title="You have unsaved changes"
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      />
    </div>
  );
};

CSSCustomization.storyName = "Alert CSS Customization";

const AlertCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Alert\`
component.

\`\`\`css
--neeto-ui-modal-spacing: 24px;

// Backdrop
--neeto-ui-modal-backdrop-z-index: var(--neeto-ui-modal-z-index);
--neeto-ui-modal-backdrop-bg-color: #1b1f23dd;
--neeto-ui-modal-backdrop-backdrop-filter: blur(2px);

// Wrapper
--neeto-ui-modal-wrapper-width: 50%;
--neeto-ui-modal-wrapper-max-width: 100%;
--neeto-ui-modal-wrapper-height: auto;
--neeto-ui-modal-wrapper-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-modal-wrapper-border-radius: var(--neeto-ui-rounded-xl);
--neeto-ui-modal-wrapper-backdrop-filter: blur(2px);

// Close Button
--neeto-ui-modal-close-btn-top: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-close-btn-right: var(--neeto-ui-modal-spacing);

// Header
--neeto-ui-modal-header-padding-top: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-header-padding-right: 64px;
--neeto-ui-modal-header-padding-bottom: 16px;
--neeto-ui-modal-header-padding-left: var(--neeto-ui-modal-spacing);

// Header Description
--neeto-ui-modal-header-description-margin-top: 8px;
--neeto-ui-modal-header-description-color: rgb(var(--neeto-ui-gray-700));

// Body
--neeto-ui-modal-body-padding-top: 0;
--neeto-ui-modal-body-padding-bottom: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-body-padding-x: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-body-font-size: --neeto-ui-text-sm;
--neeto-ui-modal-body-line-height: 1.5;

// Footer
--neeto-ui-modal-footer-padding-top: 0;
--neeto-ui-modal-footer-padding-bottom: var(--neeto-ui-modal-spacing);
--neeto-ui-modal-footer-padding-x: var(--neeto-ui-modal-spacing);
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-alert {
  --neeto-ui-modal-close-btn-top: 32px;
  --neeto-ui-modal-close-btn-right: 32px;
  --neeto-ui-modal-header-padding-top: 32px;
  --neeto-ui-modal-header-padding-left: 32px;
  --neeto-ui-modal-body-padding-bottom: 32px;
  --neeto-ui-modal-body-padding-x: 32px;
  --neeto-ui-modal-footer-padding-bottom: 32px;
  --neeto-ui-modal-footer-padding-x: 32px;
  --neeto-ui-modal-wrapper-border-radius: var(--neeto-ui-rounded-none);
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: AlertCSSCustomization } },
};

export { Default, Sizes, CSSCustomization };

export default metadata;
