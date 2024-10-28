import React from "react";

import { Modal, Typography, Pane, DatePicker } from "components";
import Button from "components/Button";
import { dayjs } from "utils";

import { disabledDateTime } from "./constants";

import { DATE_PICKER_CODE, DATE_RANGE_PICKER_CODE } from "../constants";

import DateInputCSSCustomization from "!raw-loader!./DateInputStoriesDocs/DateInputCSSCustomization.mdx";
import DateInputDocs from "!raw-loader!./DateInputStoriesDocs/DateInputDocs.mdx";

const metadata = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "padded",
    docs: { description: { component: DateInputDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A7",
    },
  },
  argTypes: {
    className: {
      description: "To provide external classnames to DatePicker component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    popupClassName: {
      description: "To provide external classnames to DatePicker popup.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    label: {
      description: "To set the text to be displayed above the DatePicker.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "{}" },
      },
    },
    labelProps: {
      description:
        "To specify the label props to be passed to the Label component.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    size: {
      description: "To set the size of the DatePicker.",
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
      description: "To set the DatePicker as naked Input field.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    error: {
      description:
        "To specify the error message to be shown in the DatePicker.",
      control: "text",
      table: { type: { summary: "oneOfType([string, bool])" } },
    },
    disabled: {
      description: "To set DatePicker as disabled.",
      control: "boolean",
      table: { type: { summary: "boolean" } },
    },
    dropdownClassName: {
      description:
        "To specify custom classnames to be applied to the DatePicker dropdown.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    dateFormat: {
      description: "To specify the date format.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "DD/MM/YYYY" },
      },
    },
    timeFormat: {
      description: "To specify the time format.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "HH:mm:ss" },
      },
    },
    placeholder: {
      description:
        "To specify the placeholder text for the DatePicker, if not provided, the format will be used as placeholder.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    timePickerProps: {
      description: "To specify props to be passed to the time picker.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    timezone: {
      description: "To specify the timezone.",
      control: "text",
      table: { type: { summary: "string" } },
    },
    onChange: {
      description:
        "For `DateInput`,(date, dateString) => {} \nFor `DateRange`, (date, [startDate, endDate]) => {}",
      control: "function",
      table: { type: { summary: "func" } },
    },
    onOk: {
      description:
        "Callback function which will be invoked when ok button is clicked in DateInput",
      control: "function",
      table: { type: { summary: "func" } },
    },
    picker: {
      description: "To specify the type of the picker.",
      control: "radio",
      options: ["date", "week", "month", "quarter", "year"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "date" },
      },
    },
    showTime: {
      description: "To show time picker",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    type: {
      description: "To specify the type of the DatePicker.",
      control: "radio",
      options: ["range", "date"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "date" },
      },
    },
    value: {
      description:
        "To specify the values to be displayed inside the DatePicker.",
      control: "object",
      table: { type: { summary: "oneOfType([array, object])" } },
    },
    defaultValue: {
      description:
        "To specify the default values to be displayed inside the DatePicker.",
      control: "object",
      table: { type: { summary: "oneOfType([array, object])" } },
    },
    required: {
      description: "To specify whether the Date picker is required or not.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    allowClear: {
      description:
        "To specify whether the Date picker value can be cleared or not.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    minDate: {
      description: "To specify the minimum date of the DatePicker.",
      control: "object",
      table: { type: { summary: "object" } },
    },
    maxDate: {
      description: "To specify the maximum date of the DatePicker.",
      control: "object",
      table: { type: { summary: "object" } },
    },
  },
};

const Default = args => <DatePicker {...args} />;

Default.storyName = "DatePicker";
Default.args = {
  label: "Date",
  type: "date",
  picker: "date",
  showTime: false,
};

const RequiredDatePicker = args => <DatePicker {...args} />;
RequiredDatePicker.args = {
  label: "Required Date",
  type: "date",
  picker: "date",
  showTime: false,
  required: true,
};
RequiredDatePicker.storyName = "Required Date";

const DatePickerWithRef = args => {
  const ref = React.useRef();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-3">
      <Button label="Focus" onClick={() => ref.current.focus()} />
      <DatePicker
        {...{ ...args, open, ref }}
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(true)}
      />
    </div>
  );
};
DatePickerWithRef.storyName = "DatePicker with ref";

const DatePickerInModal = args => {
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
            <Typography>Date</Typography>
            <DatePicker
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
DatePickerInModal.storyName = "DatePicker in modal";

const DatePickerInPane = args => {
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
            <Typography>Date</Typography>
            <DatePicker
              {...args}
              getPopupContainer={triggerNode => triggerNode.parentNode}
            />
          </div>
        </Pane.Body>
      </Pane>
    </>
  );
};
DatePickerInPane.storyName = "DatePicker in pane";

const DatePickerWithDefaultValue = args => (
  <div className="space-y-3">
    <DatePicker defaultValue={dayjs()} {...args} />
  </div>
);

DatePickerWithDefaultValue.storyName = "DatePicker with default value";
DatePickerWithDefaultValue.parameters = {
  docs: {
    description: {
      story:
        "`defaultValue` prop is used to set the default value of the input. It accepts a `dayjs` object.",
    },
  },
};

const DateRangePicker = args => (
  <div className="space-y-3">
    <DatePicker
      {...args}
      defaultValue={[dayjs(), dayjs().add(7, "day")]}
      label="Date range"
      type="range"
    />
  </div>
);

DateRangePicker.storyName = "DateRangePicker";

DateRangePicker.parameters = {
  docs: { source: { code: DATE_PICKER_CODE } },
};

const DateRangePickerWithPresetRanges = args => (
  <div className="space-y-3">
    <DatePicker
      {...args}
      defaultValue={[dayjs(), dayjs().add(7, "day")]}
      label="Date range"
      type="range"
      ranges={{
        Today: [dayjs(), dayjs()],
        Yesterday: [dayjs().subtract(1, "d"), dayjs()],
        "Last Week": [dayjs().subtract(7, "d"), dayjs()],
        "This Month": [dayjs().startOf("month"), dayjs().endOf("month")],
        "Last Month": [
          dayjs().subtract(1, "month").startOf("month"),
          dayjs().subtract(1, "month").endOf("month"),
        ],
        "This Year": [dayjs().startOf("year"), dayjs().endOf("year")],
      }}
    />
  </div>
);

DateRangePickerWithPresetRanges.storyName =
  "DateRangePicker with preset ranges";

DateRangePickerWithPresetRanges.parameters = {
  docs: { source: { code: DATE_RANGE_PICKER_CODE } },
};

const ShowTime = args => (
  <DatePicker
    {...args}
    showTime
    disabledTime={disabledDateTime}
    label="Date"
    picker="date"
    type="date"
  />
);
ShowTime.storyName = "Show time";

const MinAndMaxDate = ({ minDate, maxDate, defaultValue, ...args }) => (
  <DatePicker
    {...args}
    defaultValue={dayjs(defaultValue)}
    maxDate={dayjs(maxDate)}
    minDate={dayjs(minDate)}
  />
);

MinAndMaxDate.args = {
  defaultValue: "2024-03-14",
  minDate: "2024-03-13",
  maxDate: "2024-03-16",
};

const CSSCustomization = args => <DatePicker {...args} />;

CSSCustomization.storyName = "DatePicker CSS Customization";

CSSCustomization.args = {
  label: "Custom DatePicker",
  type: "date",
  picker: "date",
  showTime: false,
  className: "neetix-datepicker",
};

CSSCustomization.parameters = {
  docs: { description: { story: DateInputCSSCustomization } },
};

const PortalCustomClassName = args => <DatePicker {...args} />;

PortalCustomClassName.storyName =
  "DatePicker with custom class name for the popup menu";

PortalCustomClassName.args = {
  label: "DatePicker with custom class for the popup",
  type: "date",
  picker: "date",
  popupClassName: "neeto-ui__date-picker-popup-wrapper",
};

export {
  Default,
  RequiredDatePicker,
  DatePickerWithRef,
  DatePickerInModal,
  DatePickerInPane,
  DatePickerWithDefaultValue,
  DateRangePicker,
  DateRangePickerWithPresetRanges,
  ShowTime,
  MinAndMaxDate,
  CSSCustomization,
  PortalCustomClassName,
};

export default metadata;
