import { useState, useEffect } from "react";

const useAmPmChange = (value, onChange) => {
  const [amChange, setAmChanged] = useState(false);

  useEffect(() => {
    const amPmChange = () => setTimeout(() => setAmChanged(true));
    const selectElement = document.querySelector("[name='amPm']");
    selectElement?.addEventListener("change", amPmChange);

    return () => {
      selectElement?.removeEventListener("change", amPmChange);
    };
  }, [value]);

  useEffect(() => {
    if (!amChange) return;
    onChange();
    setAmChanged(false);
  }, [amChange]);
};

export default useAmPmChange;
