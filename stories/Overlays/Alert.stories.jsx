import React, { useState } from "react";

import Alert from "../../lib/components/Alert";
import Button from "../../lib/components/Button";

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
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=1061%3A3055",
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
        title="Leave page with unsaved changes?"
        message="Leaving this page will delete all unsaved changes."
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
            size="small"
            isOpen={showAlertSmall}
            title="Leave page with unsaved changes?"
            message="Leaving this page will delete all unsaved changes."
            onClose={() => setShowAlertSmall(false)}
            onSubmit={() => setShowAlertSmall(false)}
          />
          <Alert
            size="medium"
            isOpen={showAlertMedium}
            title="Leave page with unsaved changes?"
            message="Leaving this page will delete all unsaved changes."
            onClose={() => setShowAlertMedium(false)}
            onSubmit={() => setShowAlertMedium(false)}
          />
          <Alert
            size="large"
            isOpen={showAlertLarge}
            title="Leave page with unsaved changes?"
            message="Leaving this page will delete all unsaved changes."
            onClose={() => setShowAlertLarge(false)}
            onSubmit={() => setShowAlertLarge(false)}
          />
        </div>
      </div>
    </div>
  );
};
