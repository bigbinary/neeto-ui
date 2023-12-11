import React, { useState } from "react";

import Alert from "components/Alert";
import Button from "components/Button";

import AlertCSSCustomization from "!raw-loader!./AlertStoriesDocs/AlertCSSCustomization.mdx";
import AlertDocs from "!raw-loader!./AlertStoriesDocs/AlertDocs.mdx";

const metadata = {
  title: "Overlays/Alert",
  component: Alert,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
    docs: { description: { component: AlertDocs } },
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

CSSCustomization.parameters = {
  docs: { description: { story: AlertCSSCustomization } },
};

export { Default, Sizes, CSSCustomization };

export default metadata;
