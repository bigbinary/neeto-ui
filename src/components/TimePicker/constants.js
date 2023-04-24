import generatePicker from "antd/lib/date-picker/generatePicker";
import dayjsGenerateConfig from "rc-picker/es/generate/dayjs";

const AntTimePicker = generatePicker(dayjsGenerateConfig);
const { RangePicker } = AntTimePicker;

export const TIME_PICKER_TYPES = {
  range: RangePicker,
  time: AntTimePicker,
};
