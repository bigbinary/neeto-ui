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
