import React from "react";

import { Modal, Typography, Pane } from "components";
import Button from "components/Button";
import TimePicker from "components/TimePicker";
import { dayjs } from "utils";

import { disabledDateTime } from "./constants";

const description = `
\`import { TimePicker } from "@bigbinary/neetoui";\`

\`TimePicker\` is a user interface component that enables users to select a
specific time.

We use Ant Design's \`TimePicker\` component under the hood. For extra
customization, refer
[AntD TimePicker](https://ant.design/components/time-picker/#API).
`;

const metadata = {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
  },
  argTypes: {
    className: {
      description: "To provide external classnames to TimePicker component.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    popupClassName: {
      description:
        "To provide external classnames to TimePicker popup component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    label: {
      description: "To set the text to be displayed above the TimePicker.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    labelProps: {
      description:
        "To specify the label props to be passed to the Label component.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    size: {
      description: "To set the size of the TimePicker.",
      control: "radio",
      options: Object.values({
        small: "small",
        medium: "medium",
        large: "large",
      }),
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    nakedInput: {
      description: "To set the TimePicker as naked Input field.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    error: {
      description:
        "To specify the error message to be shown in the TimePicker.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    format: {
      description: "To specify the time format.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "HH:mm:ss" },
      },
    },
    timezone: {
      description: "To specify the timezone.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    placeholder: {
      description:
        "To set the placeholder text for the TimePicker, if not provided, the format will be used as placeholder.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    interval: {
      description: "To specify the time interval.",
      control: "object",
      table: {
        type: { summary: "object" },
        defaultValue: {
          summary: "{ hourStep: 1, minuteStep: 1, secondStep: 1 }",
        },
      },
    },
    onChange: {
      description:
        "For `TimeInput`,(time, timeString) => {} \nFor `TimeRange`, (time, [startTime, endTime]) => {}",
      control: "function",
      table: { type: { summary: "func" } },
    },
    type: {
      description: "To specify the type of the TimePicker.",
      control: "radio",
      options: ["time", "range"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "time" },
      },
    },
    disabled: {
      description: "To set TimePicker as disabled.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    value: {
      description:
        "To specify the values to be displayed inside the TimePicker.",
      control: "object",
      table: { type: { summary: "oneOfType([array, object])" } },
    },
    dropdownClassName: {
      description:
        "To specify custom classnames to be applied to the TimePicker dropdown.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    defaultValue: {
      description:
        "To specify the default values to be displayed inside the TimePicker.",
      control: "object",
      table: { type: { summary: "oneOfType([array, object])" } },
    },
    required: {
      description: "To specify whether the Time picker is required or not.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
};

const TimeInput = args => (
  <TimePicker disabledTime={disabledDateTime} {...args} />
);

TimeInput.storyName = "TimePicker";
TimeInput.args = { type: "time" };

const TimePickerInModal = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button label="Open modal" onClick={() => setIsOpen(true)} />
      <Modal {...{ isOpen }} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Typography style="h2">Modal</Typography>
        </Modal.Header>
        <Modal.Body className="space-y-6">
          <div>
            <Typography>Time</Typography>
            <TimePicker
              {...args}
              getPopupContainer={triggerNode => triggerNode.parentNode}
            />
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
};
TimePickerInModal.storyName = "TimePicker in modal";

const TimePickerInPane = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button label="Open pane" onClick={() => setIsOpen(true)} />
      <Pane {...{ isOpen }} onClose={() => setIsOpen(false)}>
        <Pane.Header>
          <Typography style="h3">Pane</Typography>
        </Pane.Header>
        <Pane.Body className="flex flex-col space-y-6">
          <div className="w-full">
            <Typography>Time</Typography>
            <TimePicker
              {...args}
              getPopupContainer={triggerNode => triggerNode.parentNode}
            />
          </div>
        </Pane.Body>
      </Pane>
    </>
  );
};
TimePickerInPane.storyName = "TimePicker in pane";

const TimePickerWithRef = args => {
  const ref = React.useRef();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-3">
      <Button label="Focus" onClick={() => ref.current.focus()} />
      <TimePicker
        {...{ ...args, open, ref }}
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onOk={() => setOpen(false)}
      />
    </div>
  );
};
TimePickerWithRef.storyName = "TimePicker with ref";

const TimePickerWithDefaultValue = args => (
  <div className="space-y-3">
    <TimePicker defaultValue={dayjs()} {...args} />
  </div>
);
TimePickerWithDefaultValue.storyName = "TimePicker with default value";
TimePickerWithDefaultValue.parameters = {
  docs: {
    description: {
      story:
        "`defaultValue` prop is used to set the default value of the input. It accepts a [dayjs](https://www.npmjs.com/package/dayjs) object.",
    },
  },
};

const RequiredTimePicker = args => <TimePicker {...args} />;

RequiredTimePicker.storyName = "Required TimePicker";

RequiredTimePicker.args = {
  type: "time",
  required: true,
  label: "Required Picker",
};

const CSSCustomization = args => <TimePicker {...args} />;

CSSCustomization.storyName = "TimePicker CSS Customization";

CSSCustomization.args = {
  type: "time",
  className: "neetix-timepicker",
};

const TimePickerCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`DateInput\`
component.

\`\`\`css
// Time Panel
--neeto-ui-time-panel-header-padding-top: 16px;
--neeto-ui-time-panel-header-padding-bottom: 8px;
--neeto-ui-time-panel-header-padding-x: 16px;
--neeto-ui-time-panel-header-column-font-size: var(--neeto-ui-text-xs);
--neeto-ui-time-panel-header-column-line-height: 16px;
--neeto-ui-time-panel-header-column-color: rgb(var(--neeto-ui-gray-600));
--neeto-ui-time-panel-header-column-gap: 12px;
--neeto-ui-time-panel-body-gap: 12px;
--neeto-ui-time-panel-body-padding-x: 16px;
--neeto-ui-time-panel-column-width: 62px;
--neeto-ui-time-panel-column-border-left-color: rgb(var(--neeto-ui-gray-200));
--neeto-ui-time-panel-cell-padding-x: 0px;
--neeto-ui-time-panel-cell-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-time-panel-now-btn-margin-bottom: 22px;

// Time Input
--neeto-ui-time-input-font-size: var(--neeto-ui-text-sm);
--neeto-ui-time-input-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-time-input-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-time-input-border-width: 1px;
--neeto-ui-time-input-border-color: rgb(var(--neeto-ui-gray-400));
--neeto-ui-time-input-border-radius: var(--neeto-ui-rounded);
--neeto-ui-time-input-line-height: 1.2;
--neeto-ui-time-input-padding-x: 0px;
--neeto-ui-time-input-padding-y: 0px;
--neeto-ui-time-input-box-shadow: 0px;

// Hover
--neeto-ui-time-input-hover-border-color: rgb(var(--neeto-ui-gray-800));

// Focus
--neeto-ui-time-input-focus-outline-color: transparent;
--neeto-ui-time-input-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-primary-500), 15%);
--neeto-ui-time-input-focus-border-color: rgb(var(--neeto-ui-primary-500));

// Prefix & Suffix
--neeto-ui-time-input-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-time-input-prefix-suffix-size: 16px;
--neeto-ui-time-input-focus-prefix-suffix-color: rgb(var(--neeto-ui-gray-700));
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-timepicker {
  --neeto-ui-time-input-border-radius: var(--neeto-ui-rounded-none);
  --neeto-ui-time-input-focus-box-shadow: 0 0 0 3px rgba(var(--neeto-ui-success-500), 15%);
  --neeto-ui-time-input-focus-border-color: rgb(var(--neeto-ui-success-500));
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: TimePickerCSSCustomization } },
};

export {
  TimeInput,
  TimePickerInModal,
  TimePickerInPane,
  TimePickerWithRef,
  TimePickerWithDefaultValue,
  RequiredTimePicker,
  CSSCustomization,
};

export default metadata;
