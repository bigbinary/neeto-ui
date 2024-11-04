import React from "react";

const DarkMode = () => (
  <div className="h-screen">
    <iframe
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      src="https://codesandbox.io/embed/dark-theme-2dhsl0?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fstyles.scss&theme=dark&view=preview"
      title="dark-theme"
      style={{
        width: "100%",
        height: "100vh",
        border: "0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    />
  </div>
);

export default DarkMode;
