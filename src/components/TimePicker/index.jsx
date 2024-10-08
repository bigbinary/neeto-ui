import React, { forwardRef } from "react";

import { ConfigProvider } from "antd";
import classnames from "classnames";
import { Clock } from "neetoicons";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Tag } from "components";
import { ANTD_LOCALE } from "components/constants";
import Label from "components/Label";
import { useSyncedRef, useId } from "hooks";
import {
  convertToDayjsObjects,
  noop,
  hyphenize,
  ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES,
  getLocale,
  getTimezoneAppliedDateTime,
} from "utils";

import { TIME_PICKER_TYPES } from "./constants";

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };

const TIME_PICKER_INTERVAL = {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
};

const TimePicker = forwardRef(
  (
    {
      className = "",
      label = "",
      size = INPUT_SIZES.medium,
      dropdownClassName = "",
      popupClassName = "",
      format = "HH:mm:ss",
      interval = TIME_PICKER_INTERVAL,
      onChange = noop,
      type = "time",
      nakedInput = false,
      disabled = false,
      error = "",
      defaultValue,
      value,
      labelProps,
      required = false,
      placeholder,
      timezone,
      ...otherProps
    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const id = useId(otherProps.id);
    const timePickerRef = useSyncedRef(ref);

    const Component = TIME_PICKER_TYPES[type.toLowerCase()];

    const errorId = `error_${id}`;

    const showTimeLabels = {};
    if (format.includes("s")) {
      showTimeLabels.second = true;
    }

    if (format.includes("m")) {
      showTimeLabels.minute = true;
    }

    if (format.includes("H") || format.includes("h")) {
      showTimeLabels.hour = true;
    }

    const handleOnChange = (time, timeString) => {
      type === "range" && !time
        ? onChange([], timeString)
        : onChange(getTimezoneAppliedDateTime(time), timeString);
    };

    const panelRender = originalPanel => (
      <div className="neeto-ui-date-input-custom-panel">
        <div className="neeto-ui-date-input-custom-panel__header">
          <ul className="neeto-ui-date-input-custom-panel__header-cols">
            {showTimeLabels.hour && (
              <li className="neeto-ui-date-input-custom-panel__header-col">
                {getLocale(i18n, t, "neetoui.timePicker.hours")}
              </li>
            )}
            {showTimeLabels.minute && (
              <li className="neeto-ui-date-input-custom-panel__header-col">
                {getLocale(i18n, t, "neetoui.timePicker.minutes")}
              </li>
            )}
            {showTimeLabels.second && (
              <li className="neeto-ui-date-input-custom-panel__header-col">
                {getLocale(i18n, t, "neetoui.timePicker.seconds")}
              </li>
            )}
          </ul>
        </div>
        <div className="neeto-ui-date-input-custom-panel__body">
          {originalPanel}
        </div>
      </div>
    );

    return (
      <ConfigProvider
        locale={ANTD_LOCALE[i18n.language || "en"]}
        theme={{
          token: { ...ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES },
          components: {
            DatePicker: {
              // Global overrides
              colorBgElevated: "rgb(var(--neeto-ui-white))",
              colorPrimary: "rgb(var(--neeto-ui-primary-500))",
              colorPrimaryHover: "rgb(var(--neeto-ui-primary-600))",
              colorBorder: "rgb(var(--neeto-ui-gray-300))",
              colorLink: "rgb(var(--neeto-ui-primary-500))",
              colorLinkHover: "rgb(var(--neeto-ui-primary-600))",
              colorText: "rgb(var(--neeto-ui-gray-800))",
              colorTextDisabled: "rgb(var(--neeto-ui-gray-500))",
              colorTextPlaceholder: "rgb(var(--neeto-ui-gray-400))",
              controlItemBgActive: "rgb(var(--neeto-ui-primary-800))",
              controlItemBgHover: "rgb(var(--neeto-ui-gray-100))",
              controlOutline: "rgb(var(--neeto-ui-gray-300))",
            },
          },
        }}
      >
        <div className="neeto-ui-input__wrapper">
          {label && <Label {...{ required, ...labelProps }}>{label}</Label>}
          <Component
            hourStep={interval.hourStep}
            minuteStep={interval.minuteStep}
            ref={timePickerRef}
            secondStep={interval.secondStep}
            className={classnames("neeto-ui-time-input", [className], {
              "neeto-ui-time-input--small": size === "small",
              "neeto-ui-time-input--medium": size === "medium",
              "neeto-ui-time-input--large": size === "large",
              "neeto-ui-time-input--disabled": disabled,
              "neeto-ui-time-input--naked": nakedInput,
              "neeto-ui-time-input--error": error,
            })}
            popupClassName={classnames("neeto-ui-date-time-dropdown", [
              dropdownClassName, // Will be removed in the next major version
              popupClassName,
            ])}
            onChange={handleOnChange}
            {...{ disabled, format, ...otherProps, panelRender }}
            defaultValue={convertToDayjsObjects(defaultValue)}
            mode={undefined}
            picker="time"
            placeholder={placeholder ?? format}
            value={convertToDayjsObjects(value)}
            suffixIcon={
              timezone ? <Tag label={timezone} /> : <Clock size={16} />
            }
          />
          {!!error && (
            <p
              className="neeto-ui-input__error"
              data-cy={`${hyphenize(label)}-input-error`}
              id={errorId}
            >
              {error}
            </p>
          )}
        </div>
      </ConfigProvider>
    );
  }
);

TimePicker.displayName = "TimePicker";

TimePicker.propTypes = {
  /**
   * To provide external classnames to TimePicker component.
   */
  className: PropTypes.string,
  /**
   * To provide external classnames to TimePicker popup component.
   */
  popupClassName: PropTypes.string,
  /**
   * To set the text to be displayed above the TimePicker.
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To set the size of the TimePicker.
   */
  size: PropTypes.oneOf(Object.values(INPUT_SIZES)),
  /**
   * To set the TimePicker as naked Input field.
   */
  nakedInput: PropTypes.bool,
  /**
   * To specify the error message to be shown in the TimePicker.
   */
  error: PropTypes.string,
  /**
   * To specify the time format.
   */
  format: PropTypes.string,
  /**
   * To specify the timezone.
   */
  timezone: PropTypes.string,
  /**
   * To set the placeholder text for the TimePicker, if not provided, the format will be used as placeholder.
   */
  placeholder: PropTypes.string,
  /**
   * To specify the time interval.
   */
  interval: PropTypes.object,
  /**
   * For `TimeInput`,(time, timeString) => {} <br />
   * For `TimeRange`, (time, [startTime, endTime]) => {}
   */
  onChange: PropTypes.func,
  /**
   * To specify the type of the TimePicker.
   */
  type: PropTypes.oneOf(["time", "range"]),
  /**
   * To set TimePicker as disabled.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the values to be displayed inside the TimePicker.
   */
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * To specify custom classnames to be applied to the TimePicker dropdown.
   */
  dropdownClassName: PropTypes.string,
  /**
   * To specify the default values to be displayed inside the TimePicker.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * To specify whether the Time picker is required or not.
   */
  required: PropTypes.bool,
};

export default TimePicker;
