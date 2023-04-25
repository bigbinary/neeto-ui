import React, { useState } from "react";

import Alert from "components/Alert";
import Button from "components/Button";

export default {
  title: "Overlays/Alert",
  component: Alert,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Alert } from "@bigbinary/neetoui";`',
      },
    },
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

export const Default = () => {
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
        message="Leaving this page will delete all unsaved changes."
        title="Leave page with unsaved changes?"
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      />
    </div>
  );
};

export const Sizes = () => {
  const [showAlertSmall, setShowAlertSmall] = useState(false);
  const [showAlertMedium, setShowAlertMedium] = useState(false);
  const [showAlertLarge, setShowAlertLarge] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button label="Small" onClick={() => setShowAlertSmall(true)} />
            <Button label="Medium" onClick={() => setShowAlertMedium(true)} />
            <Button label="Large" onClick={() => setShowAlertLarge(true)} />
          </div>
          <Alert
            isOpen={showAlertSmall}
            message="Leaving this page will delete all unsaved changes."
            size="small"
            title="Leave page with unsaved changes?"
            onClose={() => setShowAlertSmall(false)}
            onSubmit={() => setShowAlertSmall(false)}
          />
          <Alert
            isOpen={showAlertMedium}
            message="Leaving this page will delete all unsaved changes."
            size="medium"
            title="Leave page with unsaved changes?"
            onClose={() => setShowAlertMedium(false)}
            onSubmit={() => setShowAlertMedium(false)}
          />
          <Alert
            isOpen={showAlertLarge}
            message="Leaving this page will delete all unsaved changes."
            size="large"
            title="Leave page with unsaved changes?"
            onClose={() => setShowAlertLarge(false)}
            onSubmit={() => setShowAlertLarge(false)}
          />
        </div>
      </div>
    </div>
  );
};
