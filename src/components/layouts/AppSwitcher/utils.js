export const validateAppName = (value) =>
  typeof value === "string" && /^[A-Z]\S*$/.test(value);

export const validateNeetoAppsProp = neetoApps => {
  if (!Array.isArray(neetoApps)) {
    throw new Error(
      `Value of neetoApps prop of AppSwitcher component is ${neetoApps}, it should be an array instead`
    );
  }
};

export const validateActiveAppProp = activeApp => {
  if (!activeApp || !validateAppName(activeApp)) {
    throw new Error(
      `Value of activeApp prop of AppSwitcher component is ${activeApp}, it is not matching the expected format. Please refer docs for more info`
    );
  }
};

export const displayErrorMessage = (value, propFullName, componentName) => {
  return (
    "Invalid prop `" +
    propFullName +
    " -> " +
    value +
    "` supplied to" +
    " `" +
    componentName +
    "`. Validation failed."
  );
};
