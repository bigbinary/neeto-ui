import { Toaster } from "@blueprintjs/core";

const toastr = Toaster.create({
  className: "nui-toastr",
  position: "bottom"
});

const parse = props => (typeof props === "string" ? { message: props } : props);

export default {
  show: props =>
    toastr.show({
      className: "nui-toastr-dark",
      intent: "info",
      icon: "endorsed",
      ...parse(props)
    }),
  success: props =>
    toastr.show({
      className: "nui-toastr-success",
      intent: "success",
      icon: "endorsed",
      ...parse(props)
    }),
  info: props =>
    toastr.show({
      className: "nui-toastr-info",
      intent: "primary",
      ...parse(props)
    }),
  error: props =>
    toastr.show({
      className: "nui-toastr-error",
      icon: "asterisk",
      intent: "danger",
      ...parse(props)
    })
};
