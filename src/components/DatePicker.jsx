import React, { forwardRef, useState } from "react";

import { DatePicker as AntDatePicker, ConfigProvider } from "antd";
import classnames from "classnames";
import { Left, Right, Calendar, Close } from "neetoicons";
import PropTypes from "prop-types";

import { useSyncedRef, useId } from "hooks";
import {
  convertToDayjsObjects,
  noop,
  hyphenize,
  ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES,
} from "utils";

import Label from "./Label";

const INPUT_SIZES = { small: "small", medium: "medium", large: "large" };

const { RangePicker } = AntDatePicker;

const datePickerTypes = { range: RangePicker, date: AntDatePicker };

const IconOverride = ({ icon: Icon }) => (
  <span className="neeto-ui-btn neeto-ui-btn--style-text neeto-ui-btn--size-medium neeto-ui-btn--icon-only">
    <Icon className="neeto-ui-btn__icon" size={20} />
  </span>
);

const Today = ({ onClick }) => (
  <div className="text-center">
    <button
      {...{ onClick }}
      className="neeto-ui-rounded-md hover:neeto-ui-bg-gray-200 px-2 py-1 text-xs font-medium transition duration-300 ease-in-out"
      data-cy="year-month-mode-today"
    >
      Today
    </button>
  </div>
);

const DatePicker = forwardRef(
  (
    {
      className = "",
      label = "",
      size = INPUT_SIZES.medium,
      dropdownClassName = "",
      popupClassName = "",
      dateFormat = "DD/MM/YYYY",
      timeFormat = "HH:mm:ss",
      onChange = noop,
      onOk = noop,
      picker = "date",
      mode: inputMode = "date",
      showTime = false,
      type = "date",
      nakedInput = false,
      error = "",
      defaultValue,
      value,
      labelProps,
      required = false,
      allowClear = true,
      ...otherProps
    },
    ref
  ) => {
    const [mode, setMode] = useState(inputMode);
    const [pickerValue, setPickerValue] = useState();
    const id = useId(otherProps.id);
    const datePickerRef = useSyncedRef(ref);

    const Component = datePickerTypes[type?.toLowerCase()];
    const format = showTime ? `${dateFormat} ${timeFormat}` : dateFormat;

    const errorId = `error_${id}`;

    const handleOnChange = (date, dateString) => {
      type === "range" && !date
        ? onChange([], dateString)
        : onChange(date, dateString);
    };

    const renderExtraFooter = () => {
      if (type === "range" || mode === "date") return null;

      return (
        <Today
          onClick={() => {
            setMode("date");
            setTimeout(() => {
              document.querySelector(".ant-picker-now-btn").click();
            });
          }}
        />
      );
    };

    return (
      <ConfigProvider
        theme={{
          token: { ...ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES },
          components: {
            DatePicker: {
              activeBg: "rgb(var(--neeto-ui-white))",
              activeBorderColor: "rgb(var(--neeto-ui-primary-500))",
              addonBg: "rgb(var(--neeto-ui-gray-100))",
              cellActiveWithRangeBg: "rgb(var(--neeto-ui-primary-100))",
              cellBgDisabled: "rgb(var(--neeto-ui-gray-100))",
              cellHoverBg: "rgb(var(--neeto-ui-gray-200))",
              cellHoverWithRangeBg: "rgb(var(--neeto-ui-primary-100))",
              cellRangeBorderColor: "rgb(var(--neeto-ui-primary-100))",
              hoverBg: "rgb(var(--neeto-ui-white))",
              hoverBorderColor: "rgb(var(--neeto-ui-primary-500))",

              // Global overrides
              colorBgContainer: "rgb(var(--neeto-ui-white))",
              colorBgElevated: "rgb(var(--neeto-ui-white))",
              colorPrimary: "rgb(var(--neeto-ui-primary-500))",
              colorPrimaryBorder: "rgb(var(--neeto-ui-primary-100))",
              colorPrimaryHover: "rgb(var(--neeto-ui-primary-600))",
              colorBorder: "rgb(var(--neeto-ui-gray-300))",
              colorError: "rgb(var(--neeto-ui-error-500))",
              colorErrorHover: "rgb(var(--neeto-ui-error-600))",
              colorErrorOutline: "rgb(var(--neeto-ui-error-100))",
              colorFillAlter: "rgb(var(--neeto-ui-gray-100))",
              colorIcon: "rgb(var(--neeto-ui-gray-700))",
              colorIconHover: "rgb(var(--neeto-ui-gray-800))",
              colorLink: "rgb(var(--neeto-ui-primary-500))",
              colorLinkHover: "rgb(var(--neeto-ui-primary-600))",
              colorLinkActive: "rgb(var(--neeto-ui-primary-800))",
              colorSplit: "rgb(var(--neeto-ui-gray-200))",
              colorText: "rgb(var(--neeto-ui-gray-800))",
              colorTextDescription: "rgb(var(--neeto-ui-gray-700))",
              colorTextDisabled: "rgb(var(--neeto-ui-gray-500))",
              colorTextHeading: "rgb(var(--neeto-ui-black))",
              colorTextLightSolid: "rgb(var(--neeto-ui-white))",
              colorTextPlaceholder: "rgb(var(--neeto-ui-gray-400))",
              colorTextQuaternary: "rgb(var(--neeto-ui-gray-400))",
              colorWarning: "rgb(var(--neeto-ui-warning-500))",
              colorWarningHover: "rgb(var(--neeto-ui-warning-600))",
              colorWarningOutline: "rgb(var(--neeto-ui-warning-100))",
              controlItemBgActive: "rgb(var(--neeto-ui-pastel-purple))",
              controlItemBgHover: "rgb(var(--neeto-ui-gray-100))",
              controlOutline: "rgb(var(--neeto-ui-gray-300))",

              // Sizes
              cellHeight: 32,
              padding: 22,
            },
          },
        }}
      >
        <div className="neeto-ui-input__wrapper">
          {label && <Label {...{ required, ...labelProps }}>{label}</Label>}
          <Component
            data-cy={label ? `${hyphenize(label)}-input` : "picker-input"}
            defaultValue={convertToDayjsObjects(defaultValue)}
            ref={datePickerRef}
            showTime={showTime && { format: timeFormat }}
            value={convertToDayjsObjects(value)}
            className={classnames("neeto-ui-date-input", [className], {
              "neeto-ui-date-input--small": size === "small",
              "neeto-ui-date-input--medium": size === "medium",
              "neeto-ui-date-input--large": size === "large",
              "neeto-ui-date-input--disabled": otherProps.disabled,
              "neeto-ui-date-input--naked": nakedInput,
              "neeto-ui-date-input--error": !!error,
            })}
            popupClassName={classnames("neeto-ui-date-time-dropdown", [
              dropdownClassName, // Will be removed in the next major version
              popupClassName,
            ])}
            onChange={handleOnChange}
            {...{
              format,
              onOk,
              picker,
              ...otherProps,
              ...(type === "date" && {
                mode,
                pickerValue,
                renderExtraFooter,
                onPanelChange: (pickerValue, mode) => {
                  setPickerValue(pickerValue);
                  setMode(mode);
                },
              }),
            }}
            nextIcon={<IconOverride icon={Right} />}
            prevIcon={<IconOverride icon={Left} />}
            suffixIcon={<Calendar size={16} />}
            superNextIcon={<IconOverride icon={Right} />}
            superPrevIcon={<IconOverride icon={Left} />}
            allowClear={
              allowClear && {
                clearIcon: <Close data-cy="date-time-clear-icon" size={16} />,
              }
            }
          />
          {!!error && typeof error === "string" && (
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

DatePicker.displayName = "DatePicker";

DatePicker.propTypes = {
  /**
   * To provide external classnames to DatePicker component.
   */
  className: PropTypes.string,
  /**
   * To set the text to be displayed above the DatePicker.
   */
  label: PropTypes.string,
  /**
   * To specify the label props to be passed to the Label component.
   */
  labelProps: PropTypes.object,
  /**
   * To set the size of the DatePicker.
   */
  size: PropTypes.oneOf(Object.values(INPUT_SIZES)),
  /**
   * To set the DatePicker as naked Input field.
   */
  nakedInput: PropTypes.bool,
  /**
   * To specify the error message to be shown in the DatePicker.
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * To set DatePicker as disabled.
   */
  disabled: PropTypes.bool,
  /**
   * To specify custom classnames to be applied to the DatePicker dropdown.
   */
  dropdownClassName: PropTypes.string,
  /**
   * To specify the date format.
   */
  dateFormat: PropTypes.string,
  /**
   * To specify the time format.
   */
  timeFormat: PropTypes.string,
  /**
   * For `DateInput`,(date, dateString) => {} <br />
   * For `DateRange`, (date, [startDate, endDate]) => {}
   */
  onChange: PropTypes.func,
  /**
   * Callback function which will be invoked when ok button is clicked in DateInput
   */
  onOk: PropTypes.func,
  /**
   * To specify the type of the picker.
   */
  picker: PropTypes.oneOf(["date", "week", "month", "quarter", "year"]),
  /**
   * To show time picker
   */
  showTime: PropTypes.bool,
  /**
   * To specify the type of the DatePicker.
   */
  type: PropTypes.oneOf(Object.keys(datePickerTypes)),
  /**
   * To specify the values to be displayed inside the DatePicker.
   */
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * To specify the default values to be displayed inside the DatePicker.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * To specify whether the Date picker is required or not.
   */
  required: PropTypes.bool,
  /**
   * To specify whether the Date picker value can be cleared or not.
   */
  allowClear: PropTypes.bool,
};

export default DatePicker;
