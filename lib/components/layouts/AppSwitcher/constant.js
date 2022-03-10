import {
  SWITCHER_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
} from "../../../constants/overlay";

export { TRANSITION } from "../../../constants/overlay";

export const ANIMATION_VARIANTS = {
  open: {
    x: 0,
    filter: BLUR_INITIAL,
  },
  closed: {
    x: -SWITCHER_SIZE,
    filter: BLUR_FINAL,
  },
};

export const SIZES = { lg: "lg", sm: "sm" };

export const ENVS = {
  development: "development",
  staging: "staging",
  production: "production",
};

export const getSubdomain = () => {
  let host = window.location.host;
  let parts = host.split(".");
  let subdomain = "";
  if (parts.length >= 3) {
    subdomain = parts[0];
  }
  return subdomain;
};
