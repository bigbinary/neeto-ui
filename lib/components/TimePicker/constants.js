import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";
import generatePicker from "antd/lib/date-picker/generatePicker";

export const TIME_PICKER_INTERVAL = {
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
};

const AntTimePicker = generatePicker(dayjsGenerateConfig);
const { RangePicker } = AntTimePicker;

export const TIME_PICKER_TYPES = {
  range: RangePicker,
  time: AntTimePicker,
};
